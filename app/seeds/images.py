from app.models import db, Image


# # Adds a demo user, you can add other users here if you want
def seed_images():
    images = [
        Image(spot_id=1, url="https://a0.muscache.com/im/pictures/a57ab9ea-80d5-4ed0-aa15-ce536039778d.jpg"),
        Image(spot_id=1, url="https://a0.muscache.com/im/pictures/miso/Hosting-677112/original/a9014d8d-7a98-4dd2-91ab-7b69e140606d.jpeg"),
        Image(spot_id=1, url="https://a0.muscache.com/im/pictures/6797bbbb-8164-4a11-985c-fdeb1e7feabf.jpg"),
        Image(spot_id=1, url="https://a0.muscache.com/im/pictures/55513dc0-a948-463e-8b96-978c52b50267.jpg"),
        Image(spot_id=1, url="https://a0.muscache.com/im/pictures/miso/Hosting-677112/original/a9014d8d-7a98-4dd2-91ab-7b69e140606d.jpeg"),

        Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/812a5630-bf53-455e-9d2c-4014513d90e2.jpeg"),
        Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/6b96ab05-e704-4cd6-83a4-e1dc9ed9627c.jpeg"),
        Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/80c4353e-895d-43ec-aad4-39280264dcfe.jpeg"),
        Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/e27395f3-1f20-40d1-9de8-a99fc3ebfd7b.jpeg"),
        Image(spot_id=2, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-50747912/original/917279be-d34e-4259-a58f-0625e302adb3.jpeg"),

        Image(spot_id=3, url="https://a0.muscache.com/im/pictures/miso/Hosting-15433315/original/45ecd03d-5865-4e12-989f-20f6c66baedc.jpeg"),
        Image(spot_id=3, url="https://a0.muscache.com/im/pictures/eed0ecf6-7335-4e6c-911c-221a871083f5.jpg"),
        Image(spot_id=3, url="https://a0.muscache.com/im/pictures/0d79b412-229a-404c-a7ac-fc53d9085429.jpg"),
        Image(spot_id=3, url="https://a0.muscache.com/im/pictures/080acd2e-979e-4357-aa02-a79a13879be2.jpg"),

        Image(spot_id=4, url="https://a0.muscache.com/im/pictures/2bc234de-019d-4311-bfea-1a902a379a70.jpg"),
        Image(spot_id=4, url="https://a0.muscache.com/im/pictures/9bbdd36f-e44b-4057-b73a-d233b8cf16c1.jpg"),
        Image(spot_id=4, url="https://a0.muscache.com/im/pictures/0fdbc4c4-6107-4fc7-a1f1-f98ec305664f.jpg"),
        Image(spot_id=4, url="https://a0.muscache.com/im/pictures/9fa9fad4-e092-46b8-ad57-9aa5743801e5.jpg"),

        Image(spot_id=5, url="https://a0.muscache.com/im/pictures/0b419a3f-f853-4452-9c55-719c2976c30f.jpg"),
        Image(spot_id=5, url="https://a0.muscache.com/im/pictures/7a035a33-39f9-4512-a9bc-d14e9a26c8dd.jpg"),
        Image(spot_id=5, url="https://a0.muscache.com/im/pictures/5d48a0f0-c037-49a4-ae55-0a78e4c480ad.jpg"),
        Image(spot_id=5, url="https://a0.muscache.com/im/pictures/d8e6e8da-189e-4213-8845-73c41ad9a4ab.jpg"),

        Image(spot_id=6, url="https://a0.muscache.com/im/pictures/654cb4fb-d72f-4f43-9cbd-11c2871c3d77.jpg"),
        Image(spot_id=6, url="https://a0.muscache.com/im/pictures/a64f223e-88ce-4955-9fff-83746039230e.jpg"),
        Image(spot_id=6, url="https://a0.muscache.com/im/pictures/7a035a33-39f9-4512-a9bc-d14e9a26c8dd.jpg"),
        Image(spot_id=6, url="https://a0.muscache.com/im/pictures/dbccddae-48b3-4bf9-8eb4-505bda1aa54c.jpg"),

        Image(spot_id=7, url="https://static.wixstatic.com/media/891a36_29e974ffff5440bcb54c0785a7e7821e~mv2.jpg/v1/fill/w_1000,h_562,al_c,q_90,usm_0.66_1.00_0.01/891a36_29e974ffff5440bcb54c0785a7e7821e~mv2.jpg"),
        Image(spot_id=7, url="https://static2.mansionglobal.com/production/media/listing_images/f259f85b6073044a9ce0111ae5c46c34/xlarge_a5277f13d711490452a52910bbce33.jpg"),
        Image(spot_id=7, url="https://manage.isleblue.co/uploads/villas/images/6283/bvis-villa-rainbow-2021-header_large.jpg"),
        Image(spot_id=7, url="https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/wc4q8vjeqrgrpoa1oqxr/rainbow-bedroom"),
        Image(spot_id=7, url="https://images.squarespace-cdn.com/content/v1/5cf6fffb8e28850001118146/1620230428242-ELGKZYPYJPRXXBQ9DIP0/ONBHalo+Interior.jpg"),

        Image(spot_id=8, url="https://i.pinimg.com/originals/14/8b/f8/148bf870e6f458b213df8f3f80b02785.jpg"),
        Image(spot_id=8, url="https://i.pinimg.com/originals/36/6b/11/366b11d1b82f6db220002547919ced62.jpg"),
        Image(spot_id=8, url="https://www.priceypads.com/wp-content/uploads/2020/09/imagereader-29.aspx_-3.jpeg"),
        Image(spot_id=8, url="https://i.pinimg.com/736x/16/5a/d5/165ad59678a04189dc537e56833335b3.jpg"),
        Image(spot_id=8, url="https://static.mansionglobal.com/production/media/listing_images/8221e3fd6b20e3987bf99b1b65ce111d/large_172d885cf51e0c0251876571619974.jpg"),

        Image(spot_id=9, url="https://pbs.twimg.com/media/ElBOFRRWkAAVD3N.jpg:large"),
        Image(spot_id=9, url="https://www.cowgirlsinstyle.com/wp-content/uploads/2021/06/0cfac5b2-8906-4537-b296-61da4eff7f51.jpg"),
        Image(spot_id=9, url="https://static.mansionglobal.com/production/media/listing_images/092fe5547529c14731951aea2122d241/xlarge_183ddb189f9c1f7b7b4f04ce72a488.jpg"),
        Image(spot_id=9, url="https://www.abc4.com/wp-content/uploads/sites/4/2022/06/HOBBLE-CREEK-14.jpg?w=1020"),
        Image(spot_id=9, url="https://rew-feed-images.global.ssl.fastly.net/wfrmls/_cloud_media/property/residential/1705040-24-e053817a3852b9f2840f49625d9792e6-o.jpg"),

        Image(spot_id=10, url="https://www.habituallychic.luxury/wp-content/uploads/2021/11/denbigh-farm-greenwich-connecticut-habiyuallychic-002.jpeg"),
        Image(spot_id=10, url="http://cdn.photos.sparkplatform.com/grw/20210112194705568060000000-o.jpg"),
        Image(spot_id=10, url="https://d1dxs113ar9ebd.cloudfront.net/inregister/2021/03/51A4DE3F-D457-9679-A841-02BEB5F70CAF_1050x700.jpg"),
        Image(spot_id=10, url="https://d1dxs113ar9ebd.cloudfront.net/inregister/2021/03/0061194121.jpg"),
        Image(spot_id=10, url="https://d1dxs113ar9ebd.cloudfront.net/inregister/2021/03/006119418.jpg"),

        Image(spot_id=11, url="https://cdn.homes.com/x2/@v=770421464@/230/1/102/VALO2029102/VALO2029102_0.jpg"),
        Image(spot_id=11, url="https://circaoldhouses.com/wp-content/uploads/2022/06/21515-Trappe-Road-Upperville-VA-20184-15-592x444.jpeg"),
        Image(spot_id=11, url="https://circaoldhouses.com/wp-content/uploads/2022/06/21515-Trappe-Road-Upperville-VA-20184-19-592x444.jpeg"),
        Image(spot_id=11, url="https://circaoldhouses.com/wp-content/uploads/2022/06/21515-Trappe-Road-Upperville-VA-20184-34-592x444.jpeg"),
        Image(spot_id=11, url="https://circaoldhouses.com/wp-content/uploads/2022/06/21515-Trappe-Road-Upperville-VA-20184-45-592x444.jpeg"),

        Image(spot_id=12, url="https://www.compass.com/m2/86fc818f1804305d789495b83b67c07869d535c6_img_0/origin.jpg"),
        Image(spot_id=12, url="https://www.compass.com/m/86fc818f1804305d789495b83b67c07869d535c6_img_7/origin.jpg"),
        Image(spot_id=12, url="https://www.compass.com/m/86fc818f1804305d789495b83b67c07869d535c6_img_15/origin.jpg"),
        Image(spot_id=12, url="https://www.compass.com/m/86fc818f1804305d789495b83b67c07869d535c6_img_16/origin.jpg"),
        Image(spot_id=12, url="https://www.compass.com/m/86fc818f1804305d789495b83b67c07869d535c6_img_1/origin.jpg"),

        Image(spot_id=13, url="https://cdn.homedsgn.com/wp-content/uploads/2012/05/Winding-Way-01.jpg"),
        Image(spot_id=13, url="https://pbs.twimg.com/media/DKv92buW4AUMjzW?format=jpg&name=large"),
        Image(spot_id=13, url="https://www.magazindomov.ru/wp-content/uploads/2012/05/Bridge-House-in-Malibu-36.jpg"),
        Image(spot_id=13, url="http://3.bp.blogspot.com/-tAg8d9I2ILc/T70hc0OubeI/AAAAAAAAA7k/4sznoW8J03A/s1600/27312WindingWay45.jpeg"),
        Image(spot_id=13, url="https://cdn.homedsgn.com/wp-content/uploads/2012/05/Winding-Way-14-800x533.jpg"),

        Image(spot_id=14, url="https://toptenrealestatedeals.com/wp-content/uploads/2019/06/wk_58eb90e86cc3c.jpg"),
        Image(spot_id=14, url="https://toptenrealestatedeals.com/wp-content/uploads/2019/06/wk_58eb91021ec69-1.jpg"),
        Image(spot_id=14, url="https://toptenrealestatedeals.com/wp-content/uploads/2019/06/wk_58eb911ba35d4-1.jpg"),
        Image(spot_id=14, url="https://toptenrealestatedeals.com/wp-content/uploads/2019/06/wk_58eb90e8b58a1-1.jpg"),
        Image(spot_id=14, url="http://photos.prnewswire.com/prnfull/20150514/216156"),

        Image(spot_id=15, url="https://imgs.6sqft.com/wp-content/uploads/2017/06/29133233/443-greenwich-.jpg"),
        Image(spot_id=15, url="https://imgs.6sqft.com/wp-content/uploads/2017/06/29133207/443-greenwich-2.jpg"),
        Image(spot_id=15, url="https://imgs.6sqft.com/wp-content/uploads/2017/03/28100807/443-Greenwich-Street-12.jpg"),
        Image(spot_id=15, url="https://imgs.6sqft.com/wp-content/uploads/2017/06/29133008/443-Greenwich-1.png"),
        Image(spot_id=15, url="https://thumbs.cityrealty.com/assets/smart/736x/webp/c/c3/c3cb499902693e44ef4b7047237b190dcc1b6fd5"),

        Image(spot_id=16, url="https://miro.medium.com/max/1400/1*xp0lMGMzIbZHI9Sky9SPoQ.jpeg"),
        Image(spot_id=16, url="https://toptenrealestatedeals.com/wp-content/uploads/2019/09/2-1440x960.jpg"),
        Image(spot_id=16, url="https://photos.zillowstatic.com/fp/277edccd8d7e855da1874f84252ecb52-cc_ft_1536.jpg"),
        Image(spot_id=16, url="https://thegoodsmedia.blob.core.windows.net/thegoodsmedia/354810/354810-15.jpg"),
        Image(spot_id=16, url="https://i.pinimg.com/originals/a8/88/7c/a8887c78e77aeffa528106e0f1931e6b.jpg"),

        Image(spot_id=17, url="https://pbs.twimg.com/media/E1bW4yyXMAAhlG6?format=jpg&name=4096x4096"),
        Image(spot_id=17, url="https://www.cuballama.com/blog/wp-content/uploads/2021/04/casa-lujosa3.jpg"),
        Image(spot_id=17, url="https://awsimages.detik.net.id/visual/2021/04/20/owners-suite-luis-travieso-via-cnbccom_169.jpeg?w=800&q=90"),
        Image(spot_id=17, url="https://circaoldhouses.com/wp-content/uploads/2022/06/21515-Trappe-Road-Upperville-VA-20184-34-592x444.jpeg"),
        Image(spot_id=17, url="https://www.datocms-assets.com/33658/1624393780-e46c77f5.jpeg?auto=compress&dpr=1&fm=jpg&q=50&w=1680"),

        Image(spot_id=18, url="https://pbs.twimg.com/media/EXSatIfU0AEwHR5?format=jpg&name=4096x4096"),
        Image(spot_id=18, url="https://s3.amazonaws.com/usmfeedphotos/nonmls/X24314293_2.jpg?version=1637100734"),
        Image(spot_id=18, url="https://loveincorporated.blob.core.windows.net/contentimages/largesize/bc52161a-2329-4c08-99ae-826efb9ea853-luxury-mansion-lincoln-park-chicago-garden.jpg"),
        Image(spot_id=18, url="https://eurowindowmiennam.vn/upload/images/14-compressed(5).jpg"),
        Image(spot_id=18, url="https://media.architecturaldigest.com/photos/5887de26471633506a01092b/master/w_1600%2Cc_limit/chicago-50-mil-03.jpg"),

        Image(spot_id=19, url="https://cdn2.hawaii.house/images_properties/9-bay-dr-lahaina_394048_0.jpg?id=202112280203"),
        Image(spot_id=19, url="https://cdn2.hawaii.house/images_properties/9-bay-dr-lahaina_394048_1.jpg?id=202112280203"),
        Image(spot_id=19, url="https://cdn2.hawaii.house/images_properties/9-bay-dr-lahaina_394048_3.jpg?id=202112280203"),
        Image(spot_id=19, url="https://cdn2.hawaii.house/images_properties/9-bay-dr-lahaina_394048_7.jpg?id=202112280203"),
        Image(spot_id=19, url="https://cdn2.hawaii.house/images_properties/9-bay-dr-lahaina_394048_14.jpg?id=202112280203"),

        Image(spot_id=20, url="https://www.compass.com/m/74167d13d5a53479c064e9a0dd82b72be136bfab_img_9_5474a/1500x1000.jpg"),
        Image(spot_id=20, url="https://www.compass.com/m/74167d13d5a53479c064e9a0dd82b72be136bfab_img_0_6b5e9/1500x1000.jpg"),
        Image(spot_id=20, url="https://www.compass.com/m/74167d13d5a53479c064e9a0dd82b72be136bfab_img_7_41cd8/1500x1000.jpg"),
        Image(spot_id=20, url="https://www.compass.com/m/74167d13d5a53479c064e9a0dd82b72be136bfab_img_17_f5017/1500x1000.jpg"),
        Image(spot_id=20, url="https://www.compass.com/m/74167d13d5a53479c064e9a0dd82b72be136bfab_img_14_003e6/origin.jpg"),

        Image(spot_id=21, url="https://www.compass.com/m/def73ecbd59b3fefcb30e971a73cc98006565298_img_0_4/origin.jpg"),
        Image(spot_id=21, url="https://www.compass.com/m/def73ecbd59b3fefcb30e971a73cc98006565298_img_3_2/origin.jpg"),
        Image(spot_id=21, url="https://www.compass.com/m/def73ecbd59b3fefcb30e971a73cc98006565298_img_13_2/origin.jpg"),
        Image(spot_id=21, url="https://www.compass.com/m/def73ecbd59b3fefcb30e971a73cc98006565298_img_15_2/origin.jpg"),
        Image(spot_id=21, url="https://www.compass.com/m/def73ecbd59b3fefcb30e971a73cc98006565298_img_23_2/origin.jpg"),

        Image(spot_id=22, url="https://www.compass.com/m/48aab861dcf36f5646d51c8132b506ac6d7ae410_img_13_3cdaf/1500x1000.jpg"),
        Image(spot_id=22, url="https://www.compass.com/m/48aab861dcf36f5646d51c8132b506ac6d7ae410_img_0_e3023/1500x1000.jpg"),
        Image(spot_id=22, url="https://www.compass.com/m/48aab861dcf36f5646d51c8132b506ac6d7ae410_img_1_d0f31/1500x1000.jpg"),
        Image(spot_id=22, url="https://www.compass.com/m/48aab861dcf36f5646d51c8132b506ac6d7ae410_img_8_1c777/1500x1000.jpg"),
        Image(spot_id=22, url="https://www.compass.com/m/48aab861dcf36f5646d51c8132b506ac6d7ae410_img_9_28a4e/1500x1000.jpg"),

        Image(spot_id=23, url="https://i.pinimg.com/736x/3d/10/fc/3d10fc65fd1bf667d72c22d58e65e428.jpg"),
        Image(spot_id=23, url="https://www.gannett-cdn.com/-mm-/73a3e1a57d97ef6c4bea0139be417d565eb83bcf/c=8-0-2792-1573/local/-/media/2017/07/18/Reno/RGJ/636359857445872945-CrystalPointe-Beach-House-Exterior-Side-Night.jpg?width=660&height=373&format=pjpg&auto=webp"),
        Image(spot_id=23, url="https://www.gannett-cdn.com/-mm-/643a9d0ed5e8aa8eaac78f450dcbdfee48912edb/c=0-143-2800-1725/local/-/media/2017/07/18/Reno/RGJ/636359858730081409-CrystalPointe-Funicular.jpg?width=660&height=373&format=pjpg&auto=webp"),
        Image(spot_id=23, url="https://www.gannett-cdn.com/-mm-/58aaceebb43bbc40516271b04cfdf57696e0ec99/c=0-520-3200-2328/local/-/media/2017/07/18/Reno/RGJ/636359863027624505-CrystalPointe-Bedroom.jpg?width=660&height=373&format=pjpg&auto=webp"),
        Image(spot_id=23, url="https://www.gannett-cdn.com/-mm-/643a9d0ed5e8aa8eaac78f450dcbdfee48912edb/c=0-143-2800-1725/local/-/media/2017/07/18/Reno/RGJ/636359859361109499-CrystalPointe-Beach-Fire-Pit.jpg?width=660&height=373&format=pjpg&auto=webp"),

        Image(spot_id=24, url="https://photos.zillowstatic.com/fp/737b9782ed7311ceb30cb081d533c658-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=24, url="https://photos.zillowstatic.com/fp/0efe599c71b9c84b1b2a252e0509cc96-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=24, url="https://photos.zillowstatic.com/fp/4d80abbb039a2a1328d562fcee2c942e-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=24, url="https://photos.zillowstatic.com/fp/5ad1d63b36ed5abb4cd6dbb49f082c9a-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=24, url="https://photos.zillowstatic.com/fp/03d80c34e4ad369f224108e765b7fe2a-uncropped_scaled_within_1536_1152.webp"),

        Image(spot_id=25, url="https://www.priceypads.com/wp-content/uploads/2021/04/59937666ef51dd1792d57513234eee29l-m425572457xd-w1020_h770_q80-1-696x396.jpg"),
        Image(spot_id=25, url="https://www.priceypads.com/wp-content/uploads/2020/07/59937666ef51dd1792d57513234eee29l-m1409764545xd-w1020_h770_q80.jpg"),
        Image(spot_id=25, url="https://www.priceypads.com/wp-content/uploads/2020/07/59937666ef51dd1792d57513234eee29l-m3567664129xd-w1020_h770_q80.jpg"),
        Image(spot_id=25, url="https://rdcnewscdn.realtor.com/wp-content/uploads/2020/07/5ba67a751d57f3b8c2c5b75717c6c384l-m1719369691xd-w1020_h770_q80.jpg"),
        Image(spot_id=25, url="https://rdcnewscdn.realtor.com/wp-content/uploads/2020/07/5ba67a751d57f3b8c2c5b75717c6c384l-m3889967712xd-w1020_h770_q80.jpg"),

        Image(spot_id=26, url="https://photos.zillowstatic.com/fp/68b29f758dd4f85ba56cda0d525ce001-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=26, url="https://photos.zillowstatic.com/fp/81e2546070b944158af9d9fb8c292be3-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=26, url="https://photos.zillowstatic.com/fp/aed5b56dddb7ce93e916cf1eb1da84a3-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=26, url="https://photos.zillowstatic.com/fp/7a2cda0664fee3927e3afe76f131a92e-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=26, url="https://photos.zillowstatic.com/fp/5003b75fe74a9d17146180a22d5992f8-uncropped_scaled_within_1536_1152.webp"),

        Image(spot_id=27, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-34395685/original/c3c41178-4ad6-4cf8-b71d-98f8f5b0650e.jpeg?im_w=1200"),
        Image(spot_id=27, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-34395685/original/e5f93c51-7d7b-4455-b15e-6f0a39e289f0.jpeg?im_w=720"),
        Image(spot_id=27, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-34395685/original/51ae7281-0f61-4a0f-9822-3ac0bdb04593.jpeg?im_w=720"),
        Image(spot_id=27, url="https://a0.muscache.com/im/pictures/prohost-api/Hosting-34395685/original/802686ca-60e7-4141-a4b5-b9ad02361573.jpeg?im_w=720"),

        Image(spot_id=28, url="https://a0.muscache.com/im/pictures/8fb5a21f-44c5-4758-b1ce-6f049f6c1cb5.jpg?im_w=1200"),
        Image(spot_id=28, url="https://a0.muscache.com/im/pictures/64a0b002-cf95-4929-bc1a-3a1aff7033d3.jpg?im_w=720"),
        Image(spot_id=28, url="https://a0.muscache.com/im/pictures/d90b1af9-5684-4847-90f2-ce96c8cb61c5.jpg?im_w=720"),
        Image(spot_id=28, url="https://a0.muscache.com/im/pictures/1e29065e-f8f8-4daf-b19e-8971a64a440a.jpg?im_w=720"),

        Image(spot_id=29, url="https://a0.muscache.com/im/pictures/144d9f91-cc3b-4fd0-bbcb-6ba94f98ef5b.jpg?im_w=1200"),
        Image(spot_id=29, url="https://a0.muscache.com/im/pictures/50f7fdb8-745e-4b21-a05c-8ffaf9faf562.jpg?im_w=720"),
        Image(spot_id=29, url="https://a0.muscache.com/im/pictures/b7975d9c-d5af-4669-93a4-3ff1097fc237.jpg?im_w=720"),
        Image(spot_id=29, url="https://a0.muscache.com/im/pictures/ee4c45e5-0e75-4106-9efe-4b0481a10e79.jpg?im_w=720"),

        Image(spot_id=30, url="https://a0.muscache.com/im/pictures/miso/Hosting-45234545/original/b10beb82-bb7a-4e65-8632-24c6759d402f.jpeg?im_w=1200"),
        Image(spot_id=30, url="https://a0.muscache.com/im/pictures/miso/Hosting-45234545/original/36643037-89a8-4673-88ab-207d9026b459.jpeg?im_w=720"),
        Image(spot_id=30, url="https://a0.muscache.com/im/pictures/miso/Hosting-45234545/original/d56e2e30-48df-4583-b7a3-788b645c12ae.jpeg?im_w=720"),
        Image(spot_id=30, url="https://a0.muscache.com/im/pictures/miso/Hosting-45234545/original/a9259bbd-d57c-469d-9621-626d862df631.jpeg?im_w=720"),

        Image(spot_id=31, url="https://photos.zillowstatic.com/fp/15de08a8422ae60cb1bdc6161148ab4a-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=31, url="https://photos.zillowstatic.com/fp/c50c9ee2af5ff8cce79b6753c35c3fac-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=31, url="https://photos.zillowstatic.com/fp/f47af4fe4bf58ef28fb487ee3ce0eb40-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=31, url="https://photos.zillowstatic.com/fp/3f59d6c3e35a0e61948025a8462db92c-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=31, url="https://photos.zillowstatic.com/fp/3f57d6dd9d13b57077488ed3efdac96d-uncropped_scaled_within_1536_1152.webp"),

        Image(spot_id=32, url="https://photos.zillowstatic.com/fp/3198b1cf79ed4139b12501ae53bc4f1b-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=32, url="https://photos.zillowstatic.com/fp/8d5a59347b9c160667a624e2f66969e4-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=32, url="https://photos.zillowstatic.com/fp/cb3e3dd119eec3b37532545b86f44983-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=32, url="https://photos.zillowstatic.com/fp/9dc00be314505b16dd251b6ae9e6290f-uncropped_scaled_within_1536_1152.webp"),
        Image(spot_id=32, url="https://photos.zillowstatic.com/fp/0d9ed2825c6ce8be7776630810ce111f-uncropped_scaled_within_1536_1152.webp"),
    ]

    for image in images:
        db.session.add(image)

    db.session.commit()


# # Uses a raw SQL query to TRUNCATE the users table.
# # SQLAlchemy doesn't have a built in function to do this
# # TRUNCATE Removes all the data from the table, and RESET IDENTITY
# # resets the auto incrementing primary key, CASCADE deletes any
# # dependent entities
def undo_images():
    db.session.execute('TRUNCATE spots RESTART IDENTITY CASCADE;')
    db.session.commit()
