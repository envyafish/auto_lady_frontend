import CodeCard from "../components/CodeCard";
import {useState} from "react";

const codes = [
    {
        "duration": 170,
        "banner": "https://www.javbus.com/pics/cover/ajqy_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ajqy.jpg",
        "code": "DASS-395",
        "genres": "高畫質,DMM獨家,單體作品,姐妹,連褲襪,巨尻,中出",
        "producer": "ダスッ！",
        "series": "無防備に黒パンストを見せつける姉ちゃんのデカ尻を揉み倒して中出ししてしまった僕。",
        "status": "UN_SUBSCRIBE",
        "filter": null,
        "create_time": "2024-06-24 17:15:04",
        "title": "DASS-395 無防備に黒パンストを見せつける姉ちゃんのデカ尻を揉み倒して中出ししてしまった僕。 藤森里穂",
        "release_date": "2024-06-07",
        "casts": "藤森里穂",
        "publisher": "ダスッ！",
        "still_photo": "https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-1.jpg,https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-2.jpg,https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-3.jpg,https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-4.jpg,https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-5.jpg,https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-6.jpg,https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-7.jpg,https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-8.jpg,https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-9.jpg,https://pics.dmm.co.jp/digital/video/dass00395/dass00395jp-10.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": false
    },
    {
        "duration": 130,
        "banner": "https://www.javbus.com/pics/cover/ajo9_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ajo9.jpg",
        "code": "SONE-099",
        "genres": "高畫質,DMM獨家,單體作品,凌辱,OL,キス・接吻,苗條,花癡",
        "producer": "エスワン ナンバーワンスタイル",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:05",
        "title": "SONE-099 痴●に堕ちたスレンダーOL 巨漢男の羽交い締め揉みで身動き取れずに恥辱の大絶頂 つばさ舞",
        "release_date": "2024-06-07",
        "casts": "つばさ舞",
        "publisher": "S1 NO.1 STYLE",
        "still_photo": "https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-1.jpg,https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-2.jpg,https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-3.jpg,https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-4.jpg,https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-5.jpg,https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-6.jpg,https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-7.jpg,https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-8.jpg,https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-9.jpg,https://pics.dmm.co.jp/digital/video/sone00099/sone00099jp-10.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 150,
        "banner": "https://www.javbus.com/pics/cover/aj3j_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/aj3j.jpg",
        "code": "WAAA-386",
        "genres": "高畫質,DMM獨家,蕩婦,花癡,女教師,罵倒,單體作品,巨尻",
        "producer": "ワンズファクトリー",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:06",
        "title": "WAAA-386 超肉感教師が罵倒淫語密着杭打ち！圧迫ダイナマイト尻チ〇ポ丸呑み搾精11発射！！ 北野未奈",
        "release_date": "2024-05-31",
        "casts": "北野未奈",
        "publisher": "WANZ",
        "still_photo": "https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-1.jpg,https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-2.jpg,https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-3.jpg,https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-4.jpg,https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-5.jpg,https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-6.jpg,https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-7.jpg,https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-8.jpg,https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-9.jpg,https://pics.dmm.co.jp/digital/video/waaa00386/waaa00386jp-10.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 140,
        "banner": "https://www.javbus.com/pics/cover/ajpp_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ajpp.jpg",
        "code": "IPZZ-308",
        "genres": "高畫質,DMM獨家,出軌,戲劇,アクメ・オーガズム,苗條,單體作品",
        "producer": "アイデアポケット",
        "series": "婚前同窓会NTR",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:07",
        "title": "IPZZ-308 婚前同窓会NTR ボクの愛する婚約者が性格最悪セックス最高なクズ元カレの絶倫ピストンに朝までイカされ続けた浮気映像 楓カレン",
        "release_date": "2024-06-07",
        "casts": "楓カレン",
        "publisher": "ティッシュ",
        "still_photo": "https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-1.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-2.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-3.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-4.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-5.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-6.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-7.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-8.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-9.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-10.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-11.jpg,https://pics.dmm.co.jp/digital/video/ipzz00308/ipzz00308jp-12.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 150,
        "banner": "https://www.javbus.com/pics/cover/ak5j_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ak5j.jpg",
        "code": "GVH-661",
        "genres": "DMM獨家,連褲襪,角色扮演,M男,蕩婦,中出,單體作品",
        "producer": "グローリークエスト",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:08",
        "title": "GVH-661 パンスト特化 黒川すみれの完全着衣パンスト×コスプレFUCK",
        "release_date": "2024-06-15",
        "casts": "黒川すみれ",
        "publisher": "GLORY QUEST",
        "still_photo": "",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 120,
        "banner": "https://www.javbus.com/pics/cover/akre_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/akre.jpg",
        "code": "SONE-114",
        "genres": "足交,戀腿癖,女上位,單體作品,美少女,ファン感謝・訪問,DMM獨家,4K,高畫質",
        "producer": "エスワン ナンバーワンスタイル",
        "series": "エスワンファン感謝祭",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:09",
        "title": "SONE-114 ファン感謝祭！「おれたちは おマ●コなんかでイクもんか！！」 楓ふうあのおマ●コSEX我慢できたら世界最強の美脚堪能SEX",
        "release_date": "2024-06-21",
        "casts": "楓ふうあ",
        "publisher": "S1 NO.1 STYLE",
        "still_photo": "https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-1.jpg,https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-2.jpg,https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-3.jpg,https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-4.jpg,https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-5.jpg,https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-6.jpg,https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-7.jpg,https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-8.jpg,https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-9.jpg,https://pics.dmm.co.jp/digital/video/sone00114/sone00114jp-10.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 120,
        "banner": "https://www.javbus.com/pics/cover/ajpx_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ajpx.jpg",
        "code": "IPZZ-296",
        "genres": "高畫質,DMM獨家,女上位,單體作品,蕩婦,中出,苗條",
        "producer": "アイデアポケット",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:10",
        "title": "IPZZ-296 真面目で大人しい図書館司書の明里さんはとんでもなく歪んだ性癖の変態ドS痴女でした…。 明里つむぎ",
        "release_date": "2024-06-07",
        "casts": "明里つむぎ",
        "publisher": "ティッシュ",
        "still_photo": "https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-1.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-2.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-3.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-4.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-5.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-6.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-7.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-8.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-9.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-10.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-11.jpg,https://pics.dmm.co.jp/digital/video/ipzz00296/ipzz00296jp-12.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 160,
        "banner": "https://www.javbus.com/pics/cover/ajpw_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ajpw.jpg",
        "code": "IPZZ-300",
        "genres": "高畫質,DMM獨家,苗條,監禁,姐妹",
        "producer": "アイデアポケット",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:13",
        "title": "IPZZ-300 隣人変態野郎に媚薬拉致監禁…美人姉妹ぶっ飛びキメセク肉穴便器化… さくらわかな 希島あいり",
        "release_date": "2024-06-07",
        "casts": "さくらわかな,希島あいり",
        "publisher": "ティッシュ",
        "still_photo": "https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-1.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-2.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-3.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-4.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-5.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-6.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-7.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-8.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-9.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-10.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-11.jpg,https://pics.dmm.co.jp/digital/video/ipzz00300/ipzz00300jp-12.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 130,
        "banner": "https://www.javbus.com/pics/cover/ajq0_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ajq0.jpg",
        "code": "IPZZ-293",
        "genres": "高畫質,DMM獨家,學校泳裝,單體作品,凌辱,巨乳,苗條",
        "producer": "アイデアポケット",
        "series": "スク水マニア",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:14",
        "title": "IPZZ-293 スク水マニア ザーメンマーキング 桃乃木かな",
        "release_date": "2024-06-07",
        "casts": "桃乃木かな",
        "publisher": "ティッシュ",
        "still_photo": "https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-1.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-2.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-3.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-4.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-5.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-6.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-7.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-8.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-9.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-10.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-11.jpg,https://pics.dmm.co.jp/digital/video/ipzz00293/ipzz00293jp-12.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 118,
        "banner": "https://www.javbus.com/pics/cover/ajo1_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ajo1.jpg",
        "code": "SONE-182",
        "genres": "高畫質,4K,DMM獨家,美少女,出軌,單體作品,巨乳,戲劇",
        "producer": "エスワン ナンバーワンスタイル",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:15",
        "title": "SONE-182 終電を逃したバイト先店長と女子大生はその後…ホテルで朝まで甘くて切ない性交に溺れてしまった、イケない純愛相部屋NTR 三田真鈴",
        "release_date": "2024-06-07",
        "casts": "三田真鈴",
        "publisher": "S1 NO.1 STYLE",
        "still_photo": "https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-1.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-2.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-3.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-4.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-5.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-6.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-7.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-8.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-9.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-10.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-11.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-12.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-13.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-14.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-15.jpg,https://pics.dmm.co.jp/digital/video/sone00182/sone00182jp-16.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 121,
        "banner": "https://www.javbus.com/pics/cover/ahzp_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ahzp.jpg",
        "code": "SONE-201",
        "genres": "花癡,單體作品,姐姐,乳交,原作コラボ,巨乳,DMM獨家,高畫質,4K",
        "producer": "エスワン ナンバーワンスタイル",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:17",
        "title": "SONE-201 姉はヤンママ授乳中 in 実家 ランク1位総なめの超人気同人！業界屈指の肉感ボディ人気女優！初めての実写化コラボ作品！ 小宵こなん",
        "release_date": "2024-05-24",
        "casts": "小宵こなん",
        "publisher": "S1 NO.1 STYLE",
        "still_photo": "https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-1.jpg,https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-2.jpg,https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-3.jpg,https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-4.jpg,https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-5.jpg,https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-6.jpg,https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-7.jpg,https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-8.jpg,https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-9.jpg,https://pics.dmm.co.jp/digital/video/sone00201/sone00201jp-10.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 154,
        "banner": "https://www.javbus.com/pics/cover/ajny_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ajny.jpg",
        "code": "SONE-221",
        "genres": "高畫質,4K,DMM獨家,巨乳,偶像藝人,單體作品,超乳,美少女,首次亮相",
        "producer": "エスワン ナンバーワンスタイル",
        "series": "新人NO.1 STYLE",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:18",
        "title": "SONE-221 新人NO.1STYLE 田野憂AVデビュー Lカップでスリムで美少女、男の好きが全て詰まってる",
        "release_date": "2024-06-07",
        "casts": "田野憂",
        "publisher": "S1 NO.1 STYLE",
        "still_photo": "https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-1.jpg,https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-2.jpg,https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-3.jpg,https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-4.jpg,https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-5.jpg,https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-6.jpg,https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-7.jpg,https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-8.jpg,https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-9.jpg,https://pics.dmm.co.jp/digital/video/sone00221/sone00221jp-10.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 118,
        "banner": "https://www.javbus.com/pics/cover/ajoa_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ajoa.jpg",
        "code": "SONE-081",
        "genres": "高畫質,4K,DMM獨家,單體作品,出軌,女上司,乳交,戀乳癖,キス・接吻",
        "producer": "エスワン ナンバーワンスタイル",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:19",
        "title": "SONE-081 「ウチになら泊まっていいわよ」終電なくなりデキる美人社長の自宅に…無防備Jカップ部屋着のギャップに興奮した僕はSEX交渉ゴリ押しで朝までハメ続けた。 凪ひかる",
        "release_date": "2024-06-07",
        "casts": "凪ひかる",
        "publisher": "S1 NO.1 STYLE",
        "still_photo": "https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-1.jpg,https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-2.jpg,https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-3.jpg,https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-4.jpg,https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-5.jpg,https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-6.jpg,https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-7.jpg,https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-8.jpg,https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-9.jpg,https://pics.dmm.co.jp/digital/video/sone00081/sone00081jp-10.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 172,
        "banner": "https://www.javbus.com/pics/cover/ak2g_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ak2g.jpg",
        "code": "NHDTB-925",
        "genres": "潮吹,高畫質,巨尻,OL,連褲襪,拘束",
        "producer": "ナチュラルハイ",
        "series": "パンスト穴あけ指入れ痴●でねっとり膣内をほじられ本気汁が滴るほど感じまくる美脚女",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:21",
        "title": "NHDTB-925 パンスト穴あけ指入れ痴●でねっとり膣内をほじられ本気汁が滴るほど感じまくる美脚女2",
        "release_date": "2024-06-06",
        "casts": "",
        "publisher": "SYUCHI",
        "still_photo": "https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-1.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-2.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-3.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-4.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-5.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-6.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-7.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-8.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-9.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-10.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-11.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-12.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-13.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-14.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-15.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-16.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-17.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-18.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-19.jpg,https://pics.dmm.co.jp/digital/video/1nhdtb00925/1nhdtb00925jp-20.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 160,
        "banner": "https://www.javbus.com/pics/cover/ai12_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ai12.jpg",
        "code": "HUNTC-141",
        "genres": "連褲襪,女上位,內衣,花癡,口交,DMM獨家,高畫質",
        "producer": "Hunter",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:22",
        "title": "HUNTC-141 「ねぇ…私たちの体に絡まってみる？」過激な網タイツでボクを誘惑する義姉たちと逃れられない中出し乱交！冴えないボクと正反対のヤリマン義姉！",
        "release_date": "2024-05-24",
        "casts": "",
        "publisher": "HHHグループ",
        "still_photo": "https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-1.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-2.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-3.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-4.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-5.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-6.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-7.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-8.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-9.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-10.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-11.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-12.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-13.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-14.jpg,https://pics.dmm.co.jp/digital/video/huntc00141/huntc00141jp-15.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 164,
        "banner": "https://www.javbus.com/pics/cover/aj5j_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/aj5j.jpg",
        "code": "CAWD-676",
        "genres": "女上司,多P,旅行,蕩婦,中出,DMM獨家,4K,高畫質",
        "producer": "kawaii",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:23",
        "title": "CAWD-676 「一人前の男になりたくない？」新入社員のボクたちは社員旅行でホロ酔いの憧れ女上司2人に部屋に連れ込まれ朝までみっちりオトナの4POJT研修 桜空もも 伊藤舞雪",
        "release_date": "2024-05-31",
        "casts": "桜空もも,伊藤舞雪",
        "publisher": "kawaii",
        "still_photo": "https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-1.jpg,https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-2.jpg,https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-3.jpg,https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-4.jpg,https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-5.jpg,https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-6.jpg,https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-7.jpg,https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-8.jpg,https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-9.jpg,https://pics.dmm.co.jp/digital/video/cawd00676/cawd00676jp-10.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 120,
        "banner": "https://www.javbus.com/pics/cover/ak8b_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/ak8b.jpg",
        "code": "MIAB-202",
        "genres": "高畫質,DMM獨家,中出,單體作品,放尿,連褲襪,戀腿癖,OL",
        "producer": "ムーディーズ",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:24",
        "title": "MIAB-202 高身長170cm美脚部下に利尿媚薬盛ってパワハラ残業命令パンスト履きっぱお漏らしキメセクレ×プ 透美かなた",
        "release_date": "2024-06-14",
        "casts": "透美かなた",
        "publisher": "みんなのキカタン",
        "still_photo": "https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-1.jpg,https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-2.jpg,https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-3.jpg,https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-4.jpg,https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-5.jpg,https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-6.jpg,https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-7.jpg,https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-8.jpg,https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-9.jpg,https://pics.dmm.co.jp/digital/video/miab00202/miab00202jp-10.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    },
    {
        "duration": 120,
        "banner": "https://www.javbus.com/pics/cover/aj4c_b.jpg",
        "poster": "https://www.javbus.com/pics/thumb/aj4c.jpg",
        "code": "MIDV-741",
        "genres": "高畫質,DMM獨家,秘書,單體作品,デカチン・巨根,出軌,已婚婦女,アクメ・オーガズム",
        "producer": "ムーディーズ",
        "series": "",
        "status": "COMPLETE",
        "filter": null,
        "create_time": "2024-06-24 17:15:25",
        "title": "MIDV-741 婚約者（フィアンセ）のえりかが変態セクハラ社長のM女調教でイキ狂っていたなんて…巨乳凌●NTR 一心えりか",
        "release_date": "2024-05-31",
        "casts": "一心えりか",
        "publisher": "MOODYZ DIVA",
        "still_photo": "https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-1.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-2.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-3.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-4.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-5.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-6.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-7.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-8.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-9.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-10.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-11.jpg,https://pics.dmm.co.jp/digital/video/midv00741/midv00741jp-12.jpg",
        "mode": "STRICT",
        "sort": null,
        "update_time": null,
        "is_exist_server": true
    }
]
const Subscribe = () => {
    const [activeTab, setActiveTab] = useState('全部');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div role="tablist" className="tabs tabs-boxed mb-1">
                <a
                    role="tab"
                    className={`tab ${activeTab === '全部' ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick('全部')}
                >
                    全部
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === '已订阅' ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick('已订阅')}
                >
                    已订阅
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === '已完成' ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick('已完成')}
                >
                    已完成
                </a>
                <a
                    role="tab"
                    className={`tab ${activeTab === '未订阅' ? 'tab-active' : ''}`}
                    onClick={() => handleTabClick('未订阅')}
                >
                    未订阅
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 place-content-center">
                {codes.map((item, index) => (
                    <CodeCard code={item} key={index}></CodeCard>
                ))}
            </div>
        </div>

    );
};
export default Subscribe