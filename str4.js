const data = `<item>
<title>Cá mập bị móc câu xuyên thủng bụng cầu cứu thợ lặn</title>
<description>
<![CDATA[
<a href="http://vnexpress.net/tin-tuc/khoa-hoc/ca-map-bi-moc-cau-xuyen-thung-bung-cau-cuu-tho-lan-3560838.html"><img width=130 height=100 src="http://img.f31.vnecdn.net/2017/03/25/CaptureJPG-1490448658-4067-1490448768_180x108.jpg" ></a></br>Một thợ lặn Mỹ nhận được nhiều lời khen ngợi trên mạng xã hội sau khi giúp một con cá mập chanh liên tục bơi về phía anh để cầu cứu.
]]>
</description>
<pubDate>Sat, 25 Mar 2017 20:33:48 +0700</pubDate>
<link>
http://vnexpress.net/tin-tuc/khoa-hoc/ca-map-bi-moc-cau-xuyen-thung-bung-cau-cuu-tho-lan-3560838.html
</link>
<guid>
http://vnexpress.net/tin-tuc/khoa-hoc/ca-map-bi-moc-cau-xuyen-thung-bung-cau-cuu-tho-lan-3560838.html
</guid>
<slash:comments>0</slash:comments>
</item>`;

function getBody(str, pre, post){
    let start = str.indexOf(pre) + pre.length;
    let end = str.indexOf(post);
    return str.substring(start, end);
}

// console.log(getBody(data, '<title>', '</title>').trim());
// console.log(getBody(data, '<link>', '</link>').trim());
// console.log(getBody(data, 'src="', '></a>').trim().replace('\n', ''));
// console.log(getBody(data, '</a></br>', ']]>').trim().replace('\n', ''));

function getNewsFromItem(item){
    const title = getBody(data, '<title>', '</title>').trim();
    const link = getBody(data, '<link>', '</link>').trim();
    const image = getBody(data, 'src="', '></a>').trim().replace('\n', '');
    const desc = getBody(data, '</a></br>', ']]>').trim().replace('\n', '');
    console.log(title, link, image, desc);
}


getNewsFromItem();