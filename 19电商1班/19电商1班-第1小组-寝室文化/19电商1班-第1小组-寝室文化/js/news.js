$.getJSON("https://api.xiaohuwei.cn/news.php?type=toutiao",
    function (data) {
        // var result = data.data;
        data.forEach(ele => {
            console.log(ele)
            $(".list").append("<li><a href=" + ele.url + " target=_blank>" + ele.title + "</a></li>")
            $(".news_box").append("<div class='news_card'><a href="+ele.url+" target='_blank'><img src="+ele.imgsrc+"></a><div class='news_title'><h3>"+ele.title+"</h3></div><div class='news_conent'>"+ele.digest+"</div></div>")
        });
    });