function trimSpace(str) {
    if (str === "") {
        return [];
    }
    var temp_words = str.toLowerCase().replace(/\s*,\s*/g, ",").split(",");
    var res_words = temp_words.map( w => w.trim());
    return res_words;
};

function strMatchSubstr(str, substrings) {
    let matches = 0;
    for (let i = 0; i < substrings.length; i++) {
        if (str.includes(substrings[i])) {
            console.log(`${str} contains ${substrings[i]}`);
            matches += 1;
        }
    }
    console.log(matches);
    console.log(matches > 0 ? true : false);
    return matches > 0 ? true : false;
};

function listStrMatchSubstr(strings, substrings) {
    let matches = 0;
    for (let i = 0; i < substrings.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (strings[j].toLowerCase().includes(substrings[i])) {
                console.log(`${strings[j]} contains ${substrings[i]}`);
                matches += 1;
            }
        }
    }
    console.log(matches);
    console.log(matches > 0 ? true : false);
    return matches > 0 ? true : false;
};

function getData() {
    return file;
};


export {trimSpace, strMatchSubstr, listStrMatchSubstr, getData};

const file = {
	"actors": [
		{
			"id": 1,
			"name": "First",
			"also_known_as": [
				"Kanaphan Puitrakul",
				"เฟิร์ส คณพันธ์ ปุ้ยตระกูล",
				"一仔"
			],
			"role": 1,
			"cp_name": "FirstKhaotung"
		},
		{
			"id": 2,
			"name": "Khaotung",
			"also_known_as": [
				"Thanawat Ratanakitpaisan",
				"ข้าวตัง ธนวัฒน์ รัตนกิจไพศาล",
				"烤糖"
			],
			"role": 0,
			"cp_name": "FirstKhaotung"
		},
		{
			"id": 3,
			"name": "Force",
			"also_known_as": [
				"Jiratchapong Srisang",
				"ฟอส จิรัชพงศ์ ศรีแสง",
				"佛寺"
			],
			"role": 1,
			"cp_name": "ForceBook"
		},
		{
			"id": 4,
			"name": "Book",
			"also_known_as": [
				"Kasidet Plookphol",
				"บุ๊ค กษิดิ์เดช ปลูกผล",
				"卡斯书"
			],
			"role": 0,
			"cp_name": "ForceBook"
		},
		{
			"id": 5,
			"name": "Neo",
			"also_known_as": [
				"Trai Nimtawat",
				"นีโอ ตรัย นิ่มทวัฒน์",
				"二哥"
			],
			"role": 0.5,
			"cp_name": null
		},
		{
			"id": 6,
			"name": "Mark_Pakin",
			"also_known_as": [
				"Pakin Kunaanuwit",
				"มาร์ค ภาคิน คุณาอนุวิทย์",
				"马马酱"
			],
			"role": 0.5,
			"cp_name": "MarkOhm"
		},
		{
			"id": 7,
			"name": "Mond",
			"also_known_as": [
				"Tanutchai Wijitvongtong",
				"ม่อน ธนัชชัย วิจิตรวงศ์ทอง",
				"金刚"
			],
			"role": 0.5,
			"cp_name": null
		},
		{
			"id": 8,
			"name": "Louis",
			"also_known_as": [
				"Thanawin Teeraphosukarn",
				"หลุยส์ ธณวิน ธีรโพสุการ",
				"二嫂",
				"小路"
			],
			"role": 0,
			"cp_name": null
		},
		{
			"id": 9,
			"name": "Ohm_Thipakorn",
			"also_known_as": [
				"Thiphakorn Thitathan",
				"โอม ฐิภากร ฐิตะฐาน",
				"小ohm"
			],
			"role": 0,
			"cp_name": "MarkOhm"
		},
		{
			"id": 10,
			"name": "Drake",
			"also_known_as": [
				"Sattabut Laedeke",
				"เดรก สัตบุตร แลดิกี",
				"小新"
			],
			"role": 0.5,
			"cp_name": null
		},
		{
			"id": 11,
			"name": "Papang",
			"also_known_as": [
				"Phromphiriya Thongputtaruk",
				"ปาแปง พรหมพิริยะ ทองพุทธรักษ์"
			],
			"role": 1,
			"cp_name": null
		},
		{
			"id": 12,
			"name": "Title",
			"also_known_as": [
				"Kirati Puangmalee",
				"ไตเติ้ล กีรติ พวงมาลี"
			],
			"role": 0.5,
			"cp_name": null
		},
		{
			"id": 13,
			"name": "Jimmy",
			"also_known_as": [
				"Jitaphon Potiwihok",
				"จิมมี่ จิตรพล โพธิวิหค",
				"吉米"
			],
			"role": 1,
			"cp_name": "JimmySea"
		},
		{
			"id": 14,
			"name": "Sea",
			"also_known_as": [
				"Tawinan Anukoolprasert",
				"ซี ทวินันท์ อนุกูลประเสริฐ",
				"小海"
			],
			"role": 0,
			"cp_name": "JimmySea"
		},
		{
			"id": 15,
			"name": "Namtan",
			"also_known_as": [
				"Tipnaree Weerawatnodom",
				"นํ้าตาล ทิพนารี วีรวัฒโนดม",
				"糖妹"
			],
			"role": 0.5,
			"cp_name": "NamtanFilm"
		},
		{
			"id": 16,
			"name": "Film",
			"also_known_as": [
				"Rachanun Mahawawan",
				"ฟิล์ม รชานันท์ มหาวรรณ์",
				"影妹"
			],
			"role": 0,
			"cp_name": "NamtanFilm"
		},
		{
			"id": 17,
			"name": "Joong",
			"also_known_as": [
				"Archen Aydin",
				"จุง อาเชน ไอย์ดึน",
				"囧",
				"钟阿晨"
			],
			"role": 1,
			"cp_name": "JoongDunk"
		},
		{
			"id": 18,
			"name": "Dunk",
			"also_known_as": [
				"Natachai Boonprasert",
				"ดัง ณัฎฐ์ฐชัย บุญประเศริฐ",
				"蛋壳"
			],
			"role": 0,
			"cp_name": "JoongDunk"
		},
		{
			"id": 19,
			"name": "Pepper",
			"also_known_as": [
				"Phanuroj",
				"เป๊ปเปอร์ ภานุโรจน์ เฉลิมกิจพรทวี"
			],
			"role": 1,
			"cp_name": null
		},
		{
			"id": 20,
			"name": "Lookjun",
			"also_known_as": [
				"Bhasidi Petchsutee",
				"ลูกจัน ภาสิดี เพชรสุธี"
			],
			"role": 0,
			"cp_name": null
		},
		{
			"id": 21,
			"name": "Pond",
			"also_known_as": [
				"Naravit Lertratkosum",
				"ปอนด์ ณราวิชญ์ เลิศรัตน์โกสุมภ์",
				"小面包",
				"面包"
			],
			"role": 1,
			"cp_name": "PondPhuwin"
		},
		{
			"id": 22,
			"name": "Phuwin",
			"also_known_as": [
				"Tangsakyuen",
				"ภูวินทร์ ตั้งศักดิ์ยืน",
				"陈普明",
				"普明"
			],
			"role": 0,
			"cp_name": "PondPhuwin"
		},
		{
			"id": 23,
			"name": "Perth",
			"also_known_as": [
				"Tanapon Sukhumpantanasan",
				"เพิร์ธ ธนพนธ์ สุขุมพันธนาสาร",
				"泡芙"
			],
			"role": 1,
			"cp_name": "PerthSanta"
		},
		{
			"id": 24,
			"name": "Chimon",
			"also_known_as": [
				"Wachirawit Ruangwiwat",
				"ชิม่อน วชิรวิชญ์ เรืองวิวรรธน์",
				"奇萌"
			],
			"role": 0,
			"cp_name": null
		},
		{
			"id": 25,
			"name": "Earth",
			"also_known_as": [
				"Pirapat Watthanasetsiri",
				"เอิร์ธ พิรพัฒน์ วัฒนเศรษสิริ",
				"大地球",
				"球哥"
			],
			"role": 1,
			"cp_name": "EarthMix"
		},
		{
			"id": 26,
			"name": "Mix",
			"also_known_as": [
				"Sahaphap Wongratch",
				"มิกซ์ สหภาพ วงศ์ราษฎร์",
				"汪始慧",
				"慧慧"
			],
			"role": 0,
			"cp_name": "EarthMix"
		},
		{
			"id": 27,
			"name": "Ohm_Pawat",
			"also_known_as": [
				"Pawat Chittsawangdee",
				"โอม ภวัต จิตต์สว่างดี",
				"陈炳林",
				"饼子"
			],
			"role": 1,
			"cp_name": "OhmLeng"
		},
		{
			"id": 28,
			"name": "Nanon",
			"also_known_as": [
				"Korapat Kirdpan",,
				"นนน กรภัทร์ เกิดพันธุ์",
				"南农"
			],
			"role": 0,
			"cp_name": "OhmNanon"
		},
		{
			"id": 29,
			"name": "Luke",
			"also_known_as": [
				"Voyage",
				"Luke Ishikawa Plowden"
			],
			"role": 1,
			"cp_name": null
		},
		{
			"id": 30,
			"name": "Jamie",
			"also_known_as": [
				"Juthapich Indrajundra",
				"เจมี่ จุฑาพิชญ์ อินทร์จันทร์"
			],
			"role": 0,
			"cp_name": null
		},
		{
			"id": 31,
			"name": "Fluke_Gawin",
			"also_known_as": [
				"Gawin Caskey",
				"ฟลุ๊ค กวิน แคสกี้"
			],
			"role": 0.5,
			"cp_name": null
		},
		{
			"id": 32,
			"name": "Santa",
			"also_known_as": [
				"Pongsapan Oudompoch",
				"แซนต้า พงศภัค อุดมโภชน์",
				"三塔"
			],
			"role": 0,
			"cp_name": "PerthSanta"
		},
		{
			"id": 33,
			"name": "Podd",
			"also_known_as": [
				"Suphakorn Sriphothong",
				"ป๊อด ศุภกร ศรีโพธิ์ทอง",
				"泡爹"
			],
			"role": 1,
			"cp_name": null
		},
		{
			"id": 34,
			"name": "Ford",
			"also_known_as": [
				"Arun Asawasuebsakul",
				"ฟอร์ด อรัญญ์ อัศวสืบสกุล",
				"福福"
			],
			"role": 1,
			"cp_name": null
		},
		{
			"id": 35,
			"name": "Gemini",
			"also_known_as": [
				"Norawit Titicharoenrak",
				"เจมีไนน์ นรวิชญ์ ฐิติเจริญรักษ์",
				"猪咪妮"
			],
			"role": 1,
			"cp_name": "GeminiFourth"
		},
		{
			"id": 36,
			"name": "Fourth",
			"also_known_as": [
				"Nattawat Jirochtikul",
				"โฟร์ท ณัฐวรรธน์ จิโรชน์ธิกุล",
				"丝丝"
			],
			"role": 0,
			"cp_name": "GeminiFourth"
		},
		{
			"id": 37,
			"name": "Pawin",
			"also_known_as": [
				"Wynn Pawin Kulkaranyawich",
				"ภวิน ธนิก กมลธรานนท์"
			],
			"role": 0.5,
			"cp_name": null
		},
		{
			"id": 38,
			"name": "Leng",
			"also_known_as": [
				"Thanaphon Usinsap",
				"เล้ง ธนพล อู่สินทรัพย์",
				"冷嫂"
			],
			"role": 0,
			"cp_name": "OhnLeng"
		},
		{
			"id": 39,
			"name": "Marc",
			"also_known_as": [
				"Pahun Jiyacharoen",
				"มาร์ค ณฐริศร์ วรกรเลิศสิทธิ์"
			],
			"role": 1,
			"cp_name": "MarcPoon"
		},
		{
			"id": 40,
			"name": "Poon",
			"also_known_as": [
				"Mitpakdee",
				"ปูน มิตรภักดี"
			],
			"role": 1,
			"cp_name": "MarcPoon"
		},
		{
			"id": 41,
			"name": "Krist",
			"also_known_as": [
				"Perawat Sangpotirat",
				"คริส พีรวัส แสงโพธิรัตน์",
				"王慧侦"
			],
			"role": 1,
			"cp_name": "KristSingto"
		},
		{
			"id": 42,
			"name": "Singto",
			"also_known_as": [
				"Prachaya Ruangroj",
				"สิงโต ปราชญา เรืองโรจน์",
				"狮子"
			],
			"role": 0,
			"cp_name": "KristSingto"
		},
		{
			"id": 43,
			"name": "Tay",
			"also_known_as": [
				"Tawan Vihokratana",
				"เต ตะวัน วิหครัตน์",
				"呆呆湾",
				"林阳"
			],
			"role": 1,
			"cp_name": "TayNew"
		},
		{
			"id": 44,
			"name": "New",
			"also_known_as": [
				"Thitipoom Techaapaikhun",
				"นิว ฐิติภูมิ เตชะอภัยคุณ",
				"郑明心"
			],
			"role": 0,
			"cp_name": "TayNew"
		},
		{
			"id": 45,
			"name": "Off",
			"also_known_as": [
				"Jumpol Adulkittiporn",
				"ออฟ จุมพล อดุลกิตติพร",
				"关钟鹏"
			],
			"role": 1,
			"cp_name": "OffGun"
		},
		{
			"id": 46,
			"name": "Gun",
			"also_known_as": [
				"Atthaphan Phunsawat",
				"กัน อรรถพันธ์ พูลสวัสดิ์",
				"滚宝"
			],
			"role": 0,
			"cp_name": "OffGun"
		},
		{
			"id": 47,
			"name": "Winny",
			"also_known_as": [
				"Thanawin Pholcharoenrat",
				"วินนี่ ธนวินท์ ผลเจริญรัตน์",
				"温妮"
			],
			"role": 1,
			"cp_name": "WinnySatang"
		},
		{
			"id": 48,
			"name": "Satang",
			"also_known_as": [
				"Kittiphop Sereevichayasawat",
				"สตางค์ กิตติภพ เสรีวิชยสวัสดิ์",
				"撒糖"
			],
			"role": 0,
			"cp_name": "WinnySatang"
		},
		{
			"id": 49,
			"name": "Prom",
			"also_known_as": [
				"Teepakron Kwanboon",
				"พร้อม ทีปกร ขวัญบุญ"
			],
			"role": 1,
			"cp_name": null
		},
		{
			"id": 50,
			"name": "Aun",
			"also_known_as": [
			],
			"role": 1,
			"cp_name": null
		},
		{
			"id": 51,
			"name": "Great",
			"also_known_as": [
			],
			"role": 1,
			"cp_name": null
		},
		{
			"id": 52,
			"name": "Inn",
			"also_known_as": [
			],
			"role": 0,
			"cp_name": null
		},
		{
			"id": 53,
			"name": "JJ",
			"also_known_as": [
			],
			"role": 1,
			"cp_name": null
		},
		{
			"id": 54,
			"name": "AJ",
			"also_known_as": [
			],
			"role": 1,
			"cp_name": null
		},
		

		
	],
	"kiss": [
		{
			"id": 1,
			"input": 1,
			"output": 2,
			"weight": 1,
			"introduced_at": [
				"The Eclipse",
				"Our Skyy 2",
				"Only Friends",
				"The Heart Killers"
			],
			"on_the_lips": true
		},
		{
			"id": 2,
			"input": 3,
			"output": 4,
			"weight": 1,
			"introduced_at": ["Enchante", "A Boss and A Babe", "Our Skyy 2", "Only Friends", "Peaceful Property", "Perfect 10 Liners"],
			"on_the_lips": true
		},
		{
			"id": 3,
			"input": 1,
			"output": 3,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 4,
			"input": 2,
			"output": 4,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 5,
			"input": 5,
			"output": 6,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 6,
			"input": 5,
			"output": 3,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 7,
			"input": 6,
			"output": 1,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 8,
			"input": 7,
			"output": 1,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 9,
			"input": 7,
			"output": 2,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 10,
			"input": 7,
			"output": 4,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 11,
			"input": 7,
			"output": 5,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 12,
			"input": 7,
			"output": 3,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true,
			"indirective": true
		},
		{
			"id": 13,
			"input": 5,
			"output": 8,
			"weight": 1,
			"introduced_at": [
				"Fish Upon the Sky", "The Eclipse"
			],
			"on_the_lips": true
		},
		{
			"id": 14,
			"input": 6,
			"output": 9,
			"weight": 1,
			"introduced_at": ["Sweet Tooth, Good Doctor"],
			"on_the_lips": true
		},
		{
			"id": 15,
			"input": 10,
			"output": 5,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 16,
			"input": 10,
			"output": 4,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": false
		},
		{
			"id": 17,
			"input": 11,
			"output": 6,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 18,
			"input": 12,
			"output": 5,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 19,
			"input": 13,
			"output": 14,
			"weight": 1,
			"introduced_at": [
				"Vice Versa", "Last Twilight"
			],
			"on_the_lips": true
		},
		{
			"id": 20,
			"input": 13,
			"output": 15,
			"weight": 1,
			"introduced_at": [
				"Last Twilight"
			],
			"on_the_lips": true,
			"indirective": true
		},
		{
			"id": 21,
			"input": 9,
			"output": 14,
			"weight": 1,
			"introduced_at": [
				"Last Twilight"
			],
			"on_the_lips": true
		},
		{
			"id": 22,
			"input": 15,
			"output": 16,
			"weight": 1,
			"introduced_at": [
				"Pluto"
			],
			"on_the_lips": true
		},
		{
			"id": 23,
			"input": 17,
			"output": 16,
			"weight": 1,
			"introduced_at": [
				"Ploy's Yearbook"
			],
			"on_the_lips": true
		},
		{
			"id": 24,
			"input": 17,
			"output": 18,
			"weight": 1,
			"introduced_at": [
				"Star and Sky: Star in My Mind", "Star and Sky: Sky in Your Heart", "Our Skyy 2", "Hidden Agenda", "The Heart Killers"
			],
			"on_the_lips": true
		},
		{
			"id": 25,
			"input": 19,
			"output": 18,
			"weight": 1,
			"introduced_at": [
				"Star and Sky: Star in My Mind"
			],
			"on_the_lips": true
		},
		{
			"id": 26,
			"input": 19,
			"output": 20,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": true,
			"indirective": true,
			"dating": true
		},
		{
			"id": 27,
			"input": 18,
			"output": 22,
			"weight": 1,
			"introduced_at": ["Summer Night"],
			"on_the_lips": true,
		},
		{
			"id": 28,
			"input": 18,
			"output": 21,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false,
		},
		{
			"id": 29,
			"input": 21,
			"output": 22,
			"weight": 1,
			"introduced_at": ["Fish Upon the Sky", "Never Let Me Go", "Our Skyy 2", "We Are"],
			"on_the_lips": true
		},
		{
			"id": 30,
			"input": 6,
			"output": 12,
			"weight": 1,
			"introduced_at": [
				"Only Friends"
			],
			"on_the_lips": true
		},
		{
			"id": 31,
			"input": 22,
			"output": 24,
			"weight": 1,
			"introduced_at": [
				"Never Let Me Go"
			],
			"on_the_lips": true
		},
		{
			"id": 32,
			"input": 23,
			"output": 24,
			"weight": 1,
			"introduced_at": [
				"Dangerous Romance"
			],
			"on_the_lips": true
		},
		{
			"id": 33,
			"input": 25,
			"output": 15,
			"weight": 1,
			"introduced_at": [
				"Ploy's Yearbook"
			],
			"on_the_lips": true
		},
		{
			"id": 34,
			"input": 25,
			"output": 26,
			"weight": 1,
			"introduced_at": [
				"A Tale of Thousand Stars", "Cupid's Last Wish", "Moonlight Chicken", "Our Skyy 2", "Ossan's Love"
			],
			"on_the_lips": true
		},
		{
			"id": 35,
			"input": 1,
			"output": 26,
			"weight": 1,
			"introduced_at": [
				"Moonlight Chicken"
			],
			"on_the_lips": true,
			"indirective": true
		},
		{
			"id": 36,
			"input": 6,
			"output": 15,
			"weight": 1,
			"introduced_at": [
				"Last Twilight"
			],
			"on_the_lips": true
		},
		{
			"id": 37,
			"input": 27,
			"output": 28,
			"weight": 1,
			"introduced_at": [
				"Vice Versa", "Bad Buddy", "Our Skyy 2"
			],
			"on_the_lips": true
		},
		{
			"id": 38,
			"input": 20,
			"output": 29,
			"weight": 1,
			"introduced_at": [
				"The Jungle"
			],
			"on_the_lips": true
		},
		{
			"id": 39,
			"input": 7,
			"output": 30,
			"weight": 1,
			"introduced_at": [
				"Ploy's Yearbook"
			],
			"on_the_lips": true
		},
		{
			"id": 40,
			"input": 1,
			"output": 27,
			"weight": 1,
			"introduced_at": [
				"The Shipper"
			],
			"on_the_lips": true
		},
		{
			"id": 41,
			"input": 1,
			"output": 31,
			"weight": 1,
			"introduced_at": [
				"Not Me"
			],
			"on_the_lips": true
		},
		{
			"id": 42,
			"input": 23,
			"output": 32,
			"weight": 1,
			"introduced_at": ["Perfect 10 Liners"],
			"on_the_lips": true
		},
		{
			"id": 43,
			"input": 31,
			"output": 33,
			"weight": 1,
			"introduced_at": ["Drak Blue Kiss"],
			"on_the_lips": true
		},
		{
			"id": 44,
			"input": 2,
			"output": 33,
			"weight": 1,
			"introduced_at": ["Ton Hon Chon Tee"],
			"on_the_lips": true
		},
		{
			"id": 45,
			"input": 6,
			"output": 34,
			"weight": 1,
			"introduced_at": [
				"My School President"
			],
			"on_the_lips": true
		},
		{
			"id": 46,
			"input": 36,
			"output": 35,
			"weight": 1,
			"introduced_at": ["Moonlight Chicken", "My School President", "Our Skyy 2"],
			"on_the_lips": true
		},
		{
			"id": 47,
			"input": 36,
			"output": 6,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": true
		},
		{
			"id": 48,
			"input": 17,
			"output": 37,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": true
		},
		{
			"id": 49,
			"input": 27,
			"output": 38,
			"weight": 1,
			"introduced_at": ["Kidnap"],
			"on_the_lips": true
		},
		{
			"id": 50,
			"input": 39,
			"output": 40,
			"weight": 1,
			"introduced_at": ["We Are"],
			"on_the_lips": true
		},
		{
			"id": 51,
			"input": 39,
			"output": 37,
			"weight": 1,
			"introduced_at": ["Our Skyy 2"],
			"on_the_lips": true
		},
		{
			"id": 52,
			"input": 2,
			"output": 37,
			"weight": 1,
			"introduced_at": ["Never Too Late"],
			"on_the_lips": true
		},
		{
			"id": 53,
			"input": 41,
			"output": 42,
			"weight": 1,
			"introduced_at": ["Sotus: The Series", "Sotus S : The Series", "Our Skyy : Arthit Kongpob"],
			"on_the_lips": true
		},
		{
			"id": 54,
			"input": 27,
			"output": 42,
			"weight": 1,
			"introduced_at": ["He's Coming to Me"],
			"on_the_lips": true
		},
		{
			"id": 55,
			"input": 41,
			"output": 44,
			"weight": 1,
			"introduced_at": ["Love Beyond Frontier"],
			"on_the_lips": true
		},
		{
			"id": 56,
			"input": 43,
			"output": 44,
			"weight": 1,
			"introduced_at": ["Dark Blue Kiss", "Cherry Magic Thailand"],
			"on_the_lips": true
		},
		{
			"id": 57,
			"input": 45,
			"output": 46,
			"weight": 1,
			"introduced_at": ["Not Me", "Cooking Crush"],
			"on_the_lips": true
		},
		{
			"id": 58,
			"input": 43,
			"output": 46,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": true
		},
		{
			"id": 59,
			"input": 44,
			"output": 25,
			"weight": 1,
			"introduced_at": ["Water Boyy: The Series"],
			"on_the_lips": true
		},
		{
			"id": 60,
			"input": 11,
			"output": 25,
			"weight": 1,
			"introduced_at": ["Moonlight Chicken"],
			"on_the_lips": false
		},
		{
			"id": 61,
			"input": 28,
			"output": 42,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 62,
			"input": 44,
			"output": 45,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 63,
			"input": 43,
			"output": 1,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 64,
			"input": 28,
			"output": 43,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 65,
			"input": 47,
			"output": 48,
			"weight": 1,
			"introduced_at": ["My School President", "We Are"],
			"on_the_lips": true
		},
		{
			"id": 66,
			"input": 48,
			"output": 6,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 67,
			"input": 43,
			"output": 26,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 68,
			"input": 42,
			"output": 44,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 69,
			"input": 44,
			"output": 42,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 70,
			"input": 1,
			"output": 43,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 71,
			"input": 1,
			"output": 45,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 72,
			"input": 36,
			"output": 18,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 73,
			"input": 36,
			"output": 47,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 74,
			"input": 49,
			"output": 47,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 75,
			"input": 36,
			"output": 48,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 76,
			"input": 49,
			"output": 48,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 77,
			"input": 49,
			"output": 6,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 78,
			"input": 28,
			"output": 13,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 79,
			"input": 27,
			"output": 13,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 80,
			"input": 28,
			"output": 23,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 81,
			"input": 23,
			"output": 28,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 82,
			"input": 44,
			"output": 52,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 83,
			"input": 36,
			"output": 22,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 84,
			"input": 22,
			"output": 36,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 85,
			"input": 43,
			"output": 28,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 86,
			"input": 44,
			"output": 3,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 87,
			"input": 2,
			"output": 53,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 88,
			"input": 17,
			"output": 36,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 89,
			"input": 46,
			"output": 36,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 90,
			"input": 48,
			"output": 36,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 91,
			"input": 22,
			"output": 47,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 92,
			"input": 46,
			"output": 44,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 93,
			"input": 27,
			"output": 23,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 94,
			"input": 27,
			"output": 36,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 95,
			"input": 23,
			"output": 27,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 96,
			"input": 6,
			"output": 35,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 97,
			"input": 44,
			"output": 3,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 98,
			"input": 47,
			"output": 17,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		},
		{
			"id": 99,
			"input": 19,
			"output": 17,
			"weight": 1,
			"introduced_at": [],
			"on_the_lips": false
		}
	],
	"tv_series": {
		"The Eclipse": {
			"title": "The Eclipse",
			"also_known_as": [
				"爱之全蚀"
			],
			"director": "",
			"publish_date": "",
			"genre": "BL"
		},
		"Only Friends": {
			"title": "Only Friends",
			"also_known_as": [
				"禁忌挚友",
				"只是朋友"
			],
			"director": "",
			"publish_date": "",
			"genre": "BL"
		}
	},
	"offical_cp": {
		"FirstKhaotung": {
			"color": "#fd8101"
		},
		"ForceBook": {
			"color": "#fd7d41"
		},
		"JoongDunk": {
			"color": "#f5ee6e"
		},
		"PondPhuwin": {
			"color": "#2bdcc1"
		},
		"JimmySea": {
			"color": "#fb637e"
		},
		"EarthMix": {
			"color": "#ceb78a"
		},
		"OhmNanon": {
			"color": "#D4262A"
		},
		"OffGun": {
			"color": "#BFDF8C"
		},
		"TayNew": {
			"color": "#8CC5E5"
		},
		"KristSingto": {
			"color": "#A21019"
		}
	}
}