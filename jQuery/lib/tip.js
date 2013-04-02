(function($){
    var $beforeAfter = function(dom) {
    if (document.querySelector || !dom && dom.nodeType !== 1) return;
        
    var content = dom.getAttribute("data-content") || '';     
    var before = document.createElement("before");
    var after = document.createElement("after");
          
    // 内部HTML
    before.innerHTML = content;
    after.innerHTML = content;
    // 前后分别插入节点
    dom.insertBefore(before, dom.firstChild);
    dom.appendChild(after);
    };

    $beforeAfter(document.getElementById("tip"));
});

