/*
name              Cloudflare_nodes_location_identify
website         https://github.com/Rayzggz/Cloudflare_nodes_location_identify
version           1.4
description       利用JavaScript检测并且输出Cloudflare位置
author            Rayzggz
e-mail            rayzggz@ranfu.net
license           GPL-3.0
*/

/*
2024.08.28 修改了中文的显示样式，修改者为2740365712 
*/
var req = new XMLHttpRequest();
req.open('GET', "/cdn-cgi/trace", false);
req.send(null);
var headers = req.getResponseHeader('cf-ray').substring(17, 21);
var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
if(lang.indexOf('zh')>-1){
var nodes = [['TNR', '马达加斯加塔那那利佛'], ['CPT', '南非开普敦'], ['CMN', '摩洛哥卡萨布兰卡'], ['DKR', '塞内加尔达喀尔'], ['DAR', '坦桑尼亚达累斯萨拉姆'], ['JIB', '吉布提吉布提市'], ['DUR', '南非德班'], ['JNB', '南非约翰内斯堡'], ['KGL', '卢旺达基加利'], ['LOS', '尼日利亚拉各斯'], ['LAD', '安哥拉罗安达'], ['MPM', '莫桑比克马普托'], ['MBA', '肯尼亚蒙巴萨'], ['ROB', '利比里亚蒙罗维亚'], ['NBO', '肯尼亚内罗毕'], ['MRU', '毛里求斯路易港'], ['RUN', '法国留尼汪'], ['BLR', '印度班加罗尔'], ['BKK', '泰国曼谷'], ['BWN', '文莱斯里巴加湾市'], ['CEB', '菲律宾宿务'], ['CTU', '中国成都'], ['MAA', '印度金奈'], ['CGP', '孟加拉国吉大港'], ['CKG', '中国重庆'], ['CMB', '斯里兰卡科伦坡'], ['DAC', '孟加拉国达卡'], ['SZX', '中国东莞'], ['FUO', '中国佛山'], ['FOC', '中国福州'], ['CAN', '中国广州'], ['HGH', '中国杭州'], ['HAN', '越南河内'], ['HNY', '中国衡阳'], ['SGN', '越南胡志明市'], ['HKG', '中国香港'], ['HYD', '印度海得拉巴'], ['ISB', '巴基斯坦伊斯兰堡'], ['CGK', '印度尼西亚雅加达'], ['TNA', '中国济南'], ['JHB', '马来西亚柔佛巴鲁'], ['KHI', '巴基斯坦卡拉奇'], ['KTM', '尼泊尔加德满都'], ['CCU', '印度加尔各答'], ['KUL', '马来西亚吉隆坡'], ['LHE', '巴基斯坦拉合尔'], ['NAY', '中国廊坊'], ['LYA', '中国洛阳'], ['MFM', '中国澳门'], ['MLE', '马尔代夫马累'], ['MNL', '菲律宾马尼拉'], ['BOM', '印度孟买'], ['NAG', '印度那格浦尔'], ['NNG', '中国南宁'], ['DEL', '印度新德里'], ['NBG', '中国宁波'], ['KIX', '日本大阪'], ['PNH', '柬埔寨金边'], ['TAO', '中国青岛'], ['ICN', '韩国首尔'], ['SHA', '中国上海'], ['SHE', '中国沈阳'], ['SJW', '中国石家庄'], ['SIN', '新加坡新加坡'], ['SZV', '中国苏州'], ['TPE', '中国台北'], ['PBH', '不丹廷布'], ['TSN', '中国天津'], ['NRT', '日本东京'], ['ULN', '蒙古乌兰巴托'], ['VTE', '老挝万象'], ['WUH', '中国武汉'], ['WUX', '中国无锡'], ['XIY', '中国西安'], ['RGN', '缅甸仰光'], ['EVN', '亚美尼亚埃里温'], ['CGO', '中国郑州'], ['CSX', '中国株洲'], ['AMS', '荷兰阿姆斯特丹'], ['ATH', '希腊雅典'], ['BCN', '西班牙巴塞罗那'], ['BEG', '塞尔维亚贝尔格莱德'], ['TXL', '德国柏林'], ['BRU', '比利时布鲁塞尔'], ['OTP', '罗马尼亚布加勒斯特'], ['BUD', '匈牙利布达佩斯'], ['KIV', '摩尔多瓦基希讷乌'], ['CPH', '丹麦哥本哈根'], ['ORK', '爱尔兰科克'], ['DUB', '爱尔兰都柏林'], ['DUS', '德国杜塞尔多夫'], ['EDI', '英国爱丁堡'], ['FRA', '德国法兰克福'], ['GVA', '瑞士日内瓦'], ['GOT', '瑞典哥德堡'], ['HAM', '德国汉堡'], ['HEL', '芬兰赫尔辛基'], ['IST', '土耳其伊斯坦布尔'], ['KBP', '乌克兰基辅'], ['LIS', '葡萄牙里斯本'], ['LHR', '英国伦敦'], ['LUX', '卢森堡卢森堡市'], ['MAD', '西班牙马德里'], ['MAN', '英国曼彻斯特'], ['MRS', '法国马赛'], ['MXP', '意大利米兰'], ['DME', '俄罗斯莫斯科'], ['MUC', '德国慕尼黑'], ['LCA', '塞浦路斯尼科西亚'], ['OSL', '挪威奥斯陆'], ['CDG', '法国巴黎'], ['PRG', '捷克布拉格'], ['KEF', '冰岛雷克雅未克'], ['RIX', '拉脱维亚里加'], ['FCO', '意大利罗马'], ['LED', '俄罗斯圣彼得堡'], ['SOF', '保加利亚索菲亚'], ['ARN', '瑞典斯德哥尔摩'], ['TLL', '爱沙尼亚塔林'], ['TBS', '格鲁吉亚第比利斯'], ['SKG', '希腊塞萨洛尼基'], ['VIE', '奥地利维也纳'], ['VNO', '立陶宛维尔纽斯'], ['WAW', '波兰华沙'], ['ZAG', '克罗地亚萨格勒布'], ['ZRH', '瑞士苏黎世'], ['ARI', '智利阿里卡'], ['ASU', '巴拉圭亚松森'], ['BOG', '哥伦比亚波哥大'], ['EZE', '阿根廷布宜诺斯艾利斯'], ['CWB', '巴西库里蒂巴'], ['FOR', '巴西福塔莱萨'], ['GUA', '危地马拉危地马拉城'], ['LIM', '秘鲁利马'], ['MDE', '哥伦比亚麦德林'], ['PTY', '巴拿马城'], ['PBM', '苏里南帕拉马里博'], ['POA', '巴西阿雷格里港'], ['UIO', '厄瓜多尔基多'], ['GIG', '巴西里约热内卢'], ['SSA', '巴西萨尔瓦多'], ['SJO', '哥斯达黎加圣何塞'], ['SCL', '智利圣地亚哥'], ['GRU', '巴西圣保罗'], ['GND', '格林纳达圣乔治'], ['TGU', '洪都拉斯特古西加尔巴'], ['CUR', '库拉索威廉斯塔德'], ['AMM', '约旦安曼'], ['BGW', '伊拉克巴格达'], ['GYD', '阿塞拜疆巴库'], ['BEY', '黎巴嫩贝鲁特'], ['DOH', '卡塔尔多哈'], ['DXB', '阿联酋迪拜'], ['KWI', '科威特城'], ['BAH', '巴林麦纳麦'], ['MCT', '阿曼马斯喀特'], ['ZDM', '巴勒斯坦拉马拉'], ['RUH', '沙特阿拉伯利雅得'], ['TLV', '以色列特拉维夫'], ['IAD', '美国弗吉尼亚州阿什本'], ['ATL', '美国佐治亚州亚特兰大'], ['BOS', '美国马萨诸塞州波士顿'], ['BUF', '美国纽约州布法罗'], ['YYC', '加拿大艾伯塔省卡尔加里'], ['CLT', '美国北卡罗来纳州夏洛特'], ['ORD', '美国伊利诺伊州芝加哥'], ['CMH', '美国俄亥俄州哥伦布'], ['DFW', '美国得克萨斯州达拉斯'], ['DEN', '美国科罗拉多州丹佛'], ['DTW', '美国密歇根州底特律'], ['HNL', '美国夏威夷州檀香山'], ['IAH', '美国得克萨斯州休斯顿'], ['IND', '美国印第安纳州印第安纳波利斯'], ['JAX', '美国佛罗里达州杰克逊维尔'], ['MCI', '美国密苏里州堪萨斯城'], ['LAS', '美国内华达州拉斯维加斯'], ['LAX', '美国加利福尼亚州洛杉矶'], ['MFE', '美国得克萨斯州麦卡伦'], ['MEM', '美国田纳西州孟菲斯'], ['MEX', '墨西哥墨西哥城'], ['MIA', '美国佛罗里达州迈阿密'], ['MSP', '美国明尼苏达州明尼阿波利斯'], ['MGM', '美国阿拉巴马州蒙哥马利'], ['YUL', '加拿大魁北克省蒙特利尔'], ['BNA', '美国田纳西州纳什维尔'], ['EWR', '美国新泽西州纽瓦克'], ['ORF', '美国弗吉尼亚州诺福克'], ['OMA', '美国内布拉斯加州奥马哈'], ['PHL', '美国费城'], ['PHX', '美国亚利桑那州凤凰城'], ['PIT', '美国宾夕法尼亚州匹兹堡'], ['PAP', '海地太子港'], ['PDX', '美国俄勒冈州波特兰'], ['QRO', '墨西哥克雷塔罗'], ['RIC', '美国弗吉尼亚州里士满'], ['SMF', '美国加利福尼亚州萨克拉门托'], ['SLC', '美国犹他州盐湖城'], ['SAN', '美国加利福尼亚州圣迭戈'], ['SJC', '美国加利福尼亚州圣何塞'], ['YXE', '加拿大萨斯喀彻温省萨斯卡通'], ['SEA', '美国华盛顿州西雅图'], ['STL', '美国密苏里州圣路易斯'], ['TPA', '美国佛罗里达州坦帕'], ['YYZ', '加拿大安大略省多伦多'], ['YVR', '加拿大不列颠哥伦比亚省温哥华'], ['TLH', '美国佛罗里达州塔拉哈西'], ['YWG', '加拿大马尼托巴省温尼伯'], ['ADL', '澳大利亚南澳大利亚州阿德莱德'], ['AKL', '新西兰奥克兰'], ['BNE', '澳大利亚昆士兰州布里斯班'], ['MEL', '澳大利亚维多利亚州墨尔本'], ['NOU', '新喀里多尼亚努美阿'], ['PER', '澳大利亚西澳大利亚州珀斯'], ['SYD', '澳大利亚新南威尔士州悉尼']];}
else{
    var nodes = [['TNR', 'Antananarivo, Madagascar'], ['CPT', 'Cape Town, South Africa'], ['CMN', 'Casablanca, Morocco'], ['DKR', 'Dakar, Senegal'], ['DAR', 'Dar Es Salaam, Tanzania'], ['JIB', 'Djibouti City, Djibouti'], ['DUR', 'Durban, South Africa'], ['JNB', 'Johannesburg, South Africa'], ['KGL', 'Kigali, Rwanda'], ['LOS', 'Lagos, Nigeria'], ['LAD', 'Luanda, Angola'], ['MPM', 'Maputo, MZ'], ['MBA', 'Mombasa, Kenya'], ['ROB', 'Monrovia, Liberia'], ['NBO', 'Nairobi, Kenya'], ['MRU', 'Port Louis, Mauritius'], ['RUN', 'Réunion, France'], ['BLR', 'Bangalore, India'], ['BKK', 'Bangkok, Thailand'], ['BWN', 'Bandar Seri Begawan, Brunei'], ['CEB', 'Cebu, Philippines'], ['CTU', 'Chengdu, China'], ['MAA', 'Chennai, India'], ['CGP', 'Chittagong, Bangladesh'], ['CKG', 'Chongqing, China'], ['CMB', 'Colombo, Sri Lanka'], ['DAC', 'Dhaka, Bangladesh'], ['SZX', 'Dongguan, China'], ['FUO', 'Foshan, China'], ['FOC', 'Fuzhou, China'], ['CAN', 'Guangzhou, China'], ['HGH', 'Hangzhou, China'], ['HAN', 'Hanoi, Vietnam'], ['HNY', 'Hengyang, China'], ['SGN', 'Ho Chi Minh City, Vietnam'], ['HKG', 'Hong Kong, China'], ['HYD', 'Hyderabad, India'], ['ISB', 'Islamabad, Pakistan'], ['CGK', 'Jakarta, Indonesia'], ['TNA', 'Jinan, China'], ['JHB', 'Johor Bahru, Malaysia'], ['KHI', 'Karachi, Pakistan'], ['KTM', 'Kathmandu, Nepal'], ['CCU', 'Kolkata, India'], ['KUL', 'Kuala Lumpur, Malaysia'], ['LHE', 'Lahore, Pakistan'], ['NAY', 'Langfang, China'], ['LYA', 'Luoyang, China'], ['MFM', 'Macau, China'], ['MLE', 'Malé, Maldives'], ['MNL', 'Manila, Philippines'], ['BOM', 'Mumbai, India'], ['NAG', 'Nagpur, India'], ['NNG', 'Nanning, China'], ['DEL', 'New Delhi, India'], ['NBG', 'Ningbo, China'], ['KIX', 'Osaka, Japan'], ['PNH', 'Phnom Penh, Cambodia'], ['TAO', 'Qingdao, China'], ['ICN', 'Seoul, South Korea'], ['SHA', 'Shanghai, China'], ['SHE', 'Shenyang, China'], ['SJW', 'Shijiazhuang, China'], ['SIN', 'Singapore, Singapore'], ['SZV', 'Suzhou, China'], ['TPE', 'Taipei, China'], ['PBH', 'Thimphu, Bhutan'], ['TSN', 'Tianjin, China'], ['NRT', 'Tokyo, Japan'], ['ULN', 'Ulaanbaatar, Mongolia'], ['VTE', 'Vientiane, Laos'], ['WUH', 'Wuhan, China'], ['WUX', 'Wuxi, China'], ['XIY', 'Xi\'an, China'], ['RGN', 'Yangon, Myanmar'], ['EVN', 'Yerevan, Armenia'], ['CGO', 'Zhengzhou, China'], ['CSX', 'Zuzhou, China'], ['AMS', 'Amsterdam, Netherlands'], ['ATH', 'Athens, Greece'], ['BCN', 'Barcelona, Spain'], ['BEG', 'Belgrade, Serbia'], ['TXL', 'Berlin, Germany'], ['BRU', 'Brussels, Belgium'], ['OTP', 'Bucharest, Romania'], ['BUD', 'Budapest, Hungary'], ['KIV', 'Chișinău, Moldova'], ['CPH', 'Copenhagen, Denmark'], ['ORK', 'Cork, Ireland'], ['DUB', 'Dublin, Ireland'], ['DUS', 'Düsseldorf, Germany'], ['EDI', 'Edinburgh, United Kingdom'], ['FRA', 'Frankfurt, Germany'], ['GVA', 'Geneva, Switzerland'], ['GOT', 'Gothenburg, Sweden'], ['HAM', 'Hamburg, Germany'], ['HEL', 'Helsinki, Finland'], ['IST', 'Istanbul, Turkey'], ['KBP', 'Kyiv, Ukraine'], ['LIS', 'Lisbon, Portugal'], ['LHR', 'London, United Kingdom'], ['LUX', 'Luxembourg City, Luxembourg'], ['MAD', 'Madrid, Spain'], ['MAN', 'Manchester, United Kingdom'], ['MRS', 'Marseille, France'], ['MXP', 'Milan, Italy'], ['DME', 'Moscow, Russia'], ['MUC', 'Munich, Germany'], ['LCA', 'Nicosia, Cyprus'], ['OSL', 'Oslo, Norway'], ['CDG', 'Paris, France'], ['PRG', 'Prague, Czech Republic'], ['KEF', 'Reykjavík, Iceland'], ['RIX', 'Riga, Latvia'], ['FCO', 'Rome, Italy'], ['LED', 'Saint Petersburg, Russia'], ['SOF', 'Sofia, Bulgaria'], ['ARN', 'Stockholm, Sweden'], ['TLL', 'Tallinn, Estonia'], ['TBS', 'Tbilisi, Georgia'], ['SKG', 'Thessaloniki, Greece'], ['VIE', 'Vienna, Austria'], ['VNO', 'Vilnius, Lithuania'], ['WAW', 'Warsaw, Poland'], ['ZAG', 'Zagreb, Croatia'], ['ZRH', 'Zürich, Switzerland'], ['ARI', 'Arica, Chile'], ['ASU', 'Asunción, Paraguay'], ['BOG', 'Bogotá, Colombia'], ['EZE', 'Buenos Aires, Argentina'], ['CWB', 'Curitiba, Brazil'], ['FOR', 'Fortaleza, Brazil'], ['GUA', 'Guatemala City, Guatemala'], ['LIM', 'Lima, Peru'], ['MDE', 'Medellín, Colombia'], ['PTY', 'Panama City, Panama'], ['PBM', 'Paramaribo, Suriname'], ['POA', 'Porto Alegre, Brazil'], ['UIO', 'Quito, Ecuador'], ['GIG', 'Rio de Janeiro, Brazil'], ['SSA', 'Salvador, Brazil'], ['SJO', 'San José, Costa Rica'], ['SCL', 'Santiago, Chile'], ['GRU', 'São Paulo, Brazil'], ['GND', 'St. George\'s, Grenada'], ['TGU', 'Tegucigalpa, Honduras'], ['CUR', 'Willemstad, Curaçao'], ['AMM', 'Amman, Jordan'], ['BGW', 'Baghdad, Iraq'], ['GYD', 'Baku, Azerbaijan'], ['BEY', 'Beirut, Lebanon'], ['DOH', 'Doha, Qatar'], ['DXB', 'Dubai, United Arab Emirates'], ['KWI', 'Kuwait City, Kuwait'], ['BAH', 'Manama, Bahrain'], ['MCT', 'Muscat, Oman'], ['ZDM', 'Ramallah'], ['RUH', 'Riyadh, Saudi Arabia'], ['TLV', 'Tel Aviv, Israel'], ['IAD', 'Ashburn, VA, United States'], ['ATL', 'Atlanta, GA, United States'], ['BOS', 'Boston, MA, United States'], ['BUF', 'Buffalo, NY, United States'], ['YYC', 'Calgary, AB, Canada'], ['CLT', 'Charlotte, NC, United States'], ['ORD', 'Chicago, IL, United States'], ['CMH', 'Columbus, OH, United States'], ['DFW', 'Dallas, TX, United States'], ['DEN', 'Denver, CO, United States'], ['DTW', 'Detroit, MI, United States'], ['HNL', 'Honolulu, HI, United States'], ['IAH', 'Houston, TX, United States'], ['IND', 'Indianapolis, IN, United States'], ['JAX', 'Jacksonville, FL, United States'], ['MCI', 'Kansas City, MO, United States'], ['LAS', 'Las Vegas, NV, United States'], ['LAX', 'Los Angeles, CA, United States'], ['MFE', 'McAllen, TX, United States'], ['MEM', 'Memphis, TN, United States'], ['MEX', 'Mexico City, Mexico'], ['MIA', 'Miami, FL, United States'], ['MSP', 'Minneapolis, MN, United States'], ['MGM', 'Montgomery, AL, United States'], ['YUL', 'Montréal, QC, Canada'], ['BNA', 'Nashville, TN, United States'], ['EWR', 'Newark, NJ, United States'], ['ORF', 'Norfolk, VA, United States'], ['OMA', 'Omaha, NE, United States'], ['PHL', 'Philadelphia, United States'], ['PHX', 'Phoenix, AZ, United States'], ['PIT', 'Pittsburgh, PA, United States'], ['PAP', 'Port-Au-Prince, Haiti'], ['PDX', 'Portland, OR, United States'], ['QRO', 'Queretaro, MX, Mexico'], ['RIC', 'Richmond, Virginia'], ['SMF', 'Sacramento, CA, United States'], ['SLC', 'Salt Lake City, UT, United States'], ['SAN', 'San Diego, CA, United States'], ['SJC', 'San Jose, CA, United States'], ['YXE', 'Saskatoon, SK, Canada'], ['SEA', 'Seattle, WA, United States'], ['STL', 'St. Louis, MO, United States'], ['TPA', 'Tampa, FL, United States'], ['YYZ', 'Toronto, ON, Canada'], ['YVR', 'Vancouver, BC, Canada'], ['TLH', 'Tallahassee, FL, United States'], ['YWG', 'Winnipeg, MB, Canada'], ['ADL', 'Adelaide, SA, Australia'], ['AKL', 'Auckland, New Zealand'], ['BNE', 'Brisbane, QLD, Australia'], ['MEL', 'Melbourne, VIC, Australia'], ['NOU', 'Noumea, New caledonia'], ['PER', 'Perth, WA, Australia'], ['SYD', 'Sydney, NSW, Australia'],];
}
for (var i = 0; i < nodes.length; i++) {
	if (headers == nodes[i][0]) {
		document.write("[" + headers + "]" + nodes[i][1]);
		break;
	}
}
