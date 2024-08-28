# Cloudflare nodes location identify
利用JavaScript检测并且输出Cloudflare节点位置  
原作者为Rayzggz，原仓库链接 <https://github.com/Rayzggz/Cloudflare_nodes_location_identify>

Use JavaScript to detect and output Cloudflare node location.

The output method is document.write();  without HTML tags. So you should put this script in some text tage such as \<p\>\<\/p\>.  

The script can identify the language of user. If the user uses Chinese(zh), it will use simplified Chinese output.Other will use English output.


# Usages 使用方式

jsDelivr
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/2740365712/Cloudflare_nodes_location_identify@latest/cloudflare_nodes_identify.js"></script>
```
[![](https://data.jsdelivr.com/v1/package/gh/Rayzggz/Cloudflare_nodes_location_identify/badge)](https://www.jsdelivr.com/package/gh/2740365712/Cloudflare_nodes_location_identify)  

在需要的地方加入  
`<p>CDN节点：<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/2740365712/Cloudflare_nodes_location_identify@latest/cloudflare_nodes_identify.js"></script></p>`  
即可


