package main

import (
	"bufio"
	"flag"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

var sourcehome = flag.String("src", ".", "set source home")
var sourcetype = flag.String("type", "html|js|css", "set source file type")
var passfile = flag.String("pass", "jquery.*\\.js", "this is not be calced")
var recordfile = flag.String("rf", "", "record calc result to file")

func main() {
	flag.Parse()
	fmt.Println("########### calccode start ###########")
	fmt.Println("set prop ...")
	fmt.Println("    src  :", *sourcehome)
	fmt.Println("    type :", *sourcetype)
	fmt.Println("    pass :", *passfile)

	// 记录结果
	result := make(map[string]int64)
	tps := strings.Split(*sourcetype, "|")
	for _, tp := range tps {
		result[tp] = 0
	}
	cfs := make([]string, 0, 0)

	// 遍历目录
	chkfile := "^.*\\.(" + *sourcetype + ")$"
	fmt.Println("scan files ...")
	filepath.Walk(*sourcehome, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}
		fmt.Println("    find file :", path)
		fnm := path
		// 提出文件名称
		if li := strings.LastIndex(path, "/"); li > 0 {
			fnm = path[li+1:]
		}
		// 过滤文件
		if isXXX(*passfile, fnm) {
			return nil
		}
		if isXXX(chkfile, fnm) {
			// 记录文件
			cfs = append(cfs, path)
		}
		return nil
	})

	// 开始计算
	fmt.Println("total", len(cfs), "files to calc ...")
	for _, fpath := range cfs {
		fmt.Println("    calc file :", fpath)
		// 拿到后缀名, 也就是map的key(小写)
		tpkey := extractType(fpath)
		tpline := result[tpkey]
		// 开始分析文件
		f, err := os.Open(fpath)
		if err != nil {
			fmt.Println("open file", fpath, "fail", err)
			continue
		}
		defer f.Close()
		rd := bufio.NewReader(f)
		for {
			_, isPrefix, err := rd.ReadLine()
			if err != nil {
				break
			}
			if !isPrefix {
				tpline++
			}
		}
		result[tpkey] = tpline
	}

	// 公布结果
	fmt.Println("show result ...")
	tl := int64(0)
	for tp, lines := range result {
		fmt.Println("    type :", tp)
		fmt.Println("    line :", lines)
		tl += lines
	}

	fmt.Println("total :", tl)

	// 记录到文件
	if *recordfile != "" {

	}

	fmt.Println("########### calccode stop ###########")
}

func extractType(fnm string) string {
	return strings.ToLower(fnm[strings.LastIndex(fnm, ".")+1:])
}

func isXXX(pattern, str string) bool {
	reg, err := regexp.Compile("(?i)" + pattern)
	if err != nil {
		fmt.Println("isXXX has err", err)
		return false
	}
	return reg.MatchString(str)
}
