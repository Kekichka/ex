import React from 'react';
import './bandinfo.css';

const BandInfo = () => {
  const topics = ['About', 'Members', 'Albums', 'Eras'];

  const scrollToTopic = (topic) => {
    const element = document.getElementById(topic.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bandInfo = {
    about: ['Malice Mizer (stylized as MALICE MIZER) was a Japanese visual kei rock band active from 1992 to 2001. Malice Mizer is as famous for their music as for their live shows, featuring lavish historical costumes and stage sets, short silent theatre pieces preluding various songs, whimsical dance routines, and even a particularly notable instance of the vocalist descending to Earth (the stage) as a fallen angel, only to ascend again at the end of the concert. Throughout their history, the band has gone through several different line-ups and three drastic image changes.', 'Formed by guitarists Mana and Közi, throughout their history, the band has gone through several different lineups and three drastic image changes. Their earlier music and themes were characterized by their strong French and classical influences, later moving away from deliberate French romanticism and incorporating Gothic aspects after several difficulties befell the band.', 'At their peak with singer Gackt, they were considered one of "the big four of visual kei" alongside Lacryma Christi, Fanatic Crisis and Shazna. Their third and most successful studio album Merveilles (1998) was included in 2021 by Kerrang! on a list of 13 essential Japanese rock and metal albums. However, their success was short-lived, and in late 2001 was announced that Malice Mizer would go on an indefinite hiatus. Mana, Közi and bassist Yu~ki have performed together several times since 2010.', 'Genres: Art rock, gothic rock, neoclassical darkwave, synthpop'],
    members: ['Gackt', 'Kami', 'Közi', 'Klaha', 'Mana', 'Yu~ki', 'Tetsu'],
    albums: ['Memoire (1994)', 'Voyage Sans Retour (1996)', 'Merveilles (1998)', 'Bara no Seidou (2000)'],
    eras: ['Tetsu Era', 'Gackt Era', 'Klaha Era'],
  };

  const renderMemberInfo = (member) => {
    switch (member) {
      case 'Gackt':
        return (
          <p>
            Gakuto Oshiro (大城 ガクト, Ōshiro Gakuto, born July 4, 1973),better known by his mononymous stage name Gackt 
            (stylized in all caps),is a Japanese singer-songwriter, musician, record producer and actor.
          </p>
        );
      case 'Kami':
        return (
          <p>
            Ukyou Kamimura (神村 右京, Kamimura Ukyou, February 1, 1972 – June 21, 1999), 
            better known by his stage name Kami, was a Japanese musician best known as drummer for the visual kei 
            rock band Malice Mizer. He died on June 21, 1999, in his sleep of a subarachnoid hemorrhage at the age of 27.
          </p>
        );
      case 'Közi':
        return (
          <p>
            Közi is a Japanese musician, singer-songwriter and DJ. He is best known as one of the guitarists for the 1990s
            visual kei rock band Malice Mizer. After they went on indefinite hiatus in 2001, he formed the industrial rock
            duo Eve of Destiny and also started a solo career. Közi is currently in the bands XA-VAT, ZIZ and Vamquet, while
            occasionally performing solo shows.
          </p>
        );
      case 'Klaha':
        return (
          <p>
            Masaki Haruna (Japanese: 春名 真樹, Hepburn: Haruna Masaki, born May 3, 1970), known professionally as Klaha, 
            is a Japanese former singer-songwriter. He is best known as third vocalist of the visual kei rock band Malice Mizer
            from 2000 to 2001. He was previously in the 1990s new wave band Pride of Mind, and started a solo career
            after leaving Malice Mizer.
          </p>
        );
      case 'Mana':
        return (
          <p>
            Mana (Japanese: 魔名) is a Japanese musician, songwriter, record producer, and fashion designer, best known as
            guitarist of the visual kei rock band Malice Mizer from their formation in 1992 until their indefinite hiatus in 2001.
            A year later, Mana formed the gothic metal band Moi dix Mois as his solo project.
          </p>
        );
      case 'Yu~ki':
        return (
          <p>
            Yu~ki was the bassist of popular visual kei band, MALICE MIZER. He has since retired from musical activities after
            their hiatus, and sometimes makes special appearances at live events of his bandmate Mana's band, Moi dix Mois.
          </p>
        );
      case 'Tetsu':
        return (
          <p>
            Tetsu Takano (高野哲) is a Japanese rock vocalist. He started his career in 1991 in the visual kei scene, 
            starting with the short-lived band, Ner-vous. He then went on to become the first vocalist of the famed band, 
            MALICE MIZER, but then departed in 1994 due to musical differences.
          </p>
        );
      default:
        return null;
    }
  };

  const renderAlbumInfo = (albums) => {
    switch (albums) {
      case 'Memoire (1994)':
        return (
          <p>
            "De Mémoire"<br/>	
            "Kioku to Sora" (記憶と空; "Memory and Sky")<br/>	
          	"Ēge Umi ni Sasagu" (エーゲ海に捧ぐ; "Dedicated to the Aegean Sea")<br/>	
	          "Gogo no Sasayaki" (午後のささやき; "Whispers in the Afternoon")<br/>	
	          "Miwaku no Rooma" (魅惑のローマ; "Enchanted in Rome")<br/>	
	          "Seraph"	<br/>	
	          "Baroque" (バロック)
          </p>
        );
      case 'Voyage Sans Retour (1996)':
        return (
          <p>
            "Yami no Kanata e~" (闇の彼方へ～) <br/>
            "Transylvania" <br/>
            "Tsuioku no Kakera" (追憶の破片かけら～a piece of broken recollection～) <br/>
            "Premier Amour" (premier amour) <br/>
            "Itsuwari no Musette" (偽りのmusette) <br/>
            "N.p.s N.g.s" (N・p・s N・g・s～No pains No gains～) <br/>
            "Claire ~Tsuki no Shirabe~" (claire～月の調べ～; "Melody of the Moon") <br/>
            "Madrigal" <br/>
            "Shi no Butō" (死の舞踏～a romance of the "Cendrillon"～) <br/>
            "~Zenchō~" (～前兆～) <br/>
          </p>
        );
        case 'Merveilles (1998)':
          return (
            <p>
              "De Merveilles"
              "Syunikiss (Nidome no Aitō)" (Syunikiss〜二度目の哀悼〜; "Second Lament")	
              "Bel Air (Kūhaku no Toki no Naka de)" (ヴェル・エール～空白の瞬間ときの中で～; "In the Blank Time")
              "Illuminati"
              "Brise"
              "Aegean (Sugisarishi Kaze to Tomo ni)" (エーゲ〜過ぎ去りし風と共に〜; "With the Passing Wind")
              "Au Revoir"
              "Je te Veux"
              "S-Conscious"	Mana	3:20
              "Le Ciel"	Gackt	5:00
              "Gekka no Yasōkyoku" (月下の夜想曲)	Közi	3:45
              "Bois de Merveilles"
            </p>
          );
          case 'Bara no Seidou (2000)':
            return (
              <p>
                "Bara ni Irodorareta Akui to Higeki no Makuake" (薔薇に彩られた悪意と悲劇の幕開け; A Prelude of Malice and Mizery, Painted by the Rose)  <br/>
                "Seinaru Toki Eien no Inori" (聖なる刻　永遠の祈り; Holy Time, Eternal Prayer) <br/>
	              "Kyomu no Naka de no Yuugi" (虚無の中での遊戯; Amusement in Nihilism) <br/>
	              "Kagami no Butou Genwaku no Yoru" (鏡の舞踏　幻惑の夜; Mirror Dance, Night of Bewitchment) <br/>
	              "Mayonaka ni Kawashita Yakusoku" (真夜中に交わした約束; Promises Exchanged at Midnight)	 <br/>
	              "Chinurareta Kajitsu" (血塗られた果実; Blood-stained Fruit) <br/>
	              "Chikasuimyaku no Meiro" (地下水脈の迷路; Labyrinth of Underground Rivers) <br/>
	              "Hakai no Hate" (破誡の果て; Blasphemy's Culmination) <br/>
	              "Shiroi Hada ni Kuruu ai to Kanashimi no Rondo" (白い肌に狂う愛と哀しみの輪舞; Rondo of Love and Sadness, Driven Mad by the White Skin) <br/>
	              "Saikai no Chi to Bara" (再会の血と薔薇; The Blood and Rose of Reunion) <br/>
              </p>
            );
      default:
        return null;
    }
  };

  const renderErasInfo = (era) => {
    switch (era) {
      case 'Tetsu Era':
        return (
          <p>
            After leaving Matenrou, guitarists Mana and Közi formed Malice Mizer in August 1992 with Tetsu on vocals,
            Yu~ki on bass and Gaz on drums. The band's name is a coined word for "Malice and Misery ", extracted from
            "Nothing but a being of malice and tragedy." — their reply to the question "What is a human being?" From the outset,
            the band established their trademark "twin guitar"' sound, whereby two guitars play different melodies creating
            polyphony.<br/> Malice Mizer's sound during the Tetsu era was a mixture of early 1980s gothic rock, progressive rock and strong 
            classical influences. Their first official release was the song "Speed of Desperate" on the 1993 compilation Brain Trash. 
            Before this, they had released a demo tape called "Sans Logique" (a nod to French pop singer Mylène Farmer's hit song 
            "Sans Logique") which contained no vocals.
          </p>
        );
      case 'Gackt Era':
        return (
          <p>
            After almost a year of inactivity, Malice Mizer recruited Gackt as their new vocalist and released the single 
            "Uruwashiki Kamen no Shoutaijou" on December 10, 1995. It was with this single that Malice Mizer started to actively 
            differentiate themselves from other bands; when the song was performed live, Mana and Közi put down their guitars 
            and instead performed a dance routine.<br/>With a new concept, the band's music became more art rock and synthpop, 
            incorporating even stronger classical and electronic elements. Visually, the band abandoned their 1980s goth look 
            for colorful historical costumes with a gothic feel.
          </p>
        );
      case 'Klaha Era':
        return (
          <p>
            In the second half of 1999 and the beginning of 2000, Malice Mizer, still without an official vocalist, released 
            a number of singles and began to work on a new album. Eventually, they recruited Klaha (vocalist of dark wave band 
            Pride of Mind), officially inducted into the band as a full member in January.<br/>By then the band had abandoned the 
            lighter pop music sound of the Gackt era for a dramatic mixture of classical music, dark wave, with slight heavy 
            metal elements, and adopted an elaborate funerary elegant gothic look. In the summer of 2000, they released what 
            would be their last album, Bara no Seidou.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="band-info-container">
      <div className="sidebar">
        <h2>Content</h2>
        <ul>
          {topics.map((topic) => (
            <li key={topic} onClick={() => scrollToTopic(topic)}>
              {topic}
            </li>
          ))}
        </ul>
      </div>
      <div className="band-content">
        <section id="about">
          <h1>About the Band</h1>
          {bandInfo.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>
        <section id="members">
          <h1>Band Members</h1>
          <ul>
            {bandInfo.members.map((member, index) => (
              <li key={index}>
                <h2>{member}</h2>
                {renderMemberInfo(member)}
              </li>
            ))}
          </ul>
        </section>
        <section id="albums">
          <h1>Albums</h1>
          <ul>
            {bandInfo.albums.map((album, index) => (
              <li key={index}>
                <h2>{album}</h2>
                {renderAlbumInfo(album)}
              </li>
            ))}
          </ul>
        </section>
        <section id="eras">
  <h1>Eras</h1>
  <ul>
    {bandInfo.eras.map((era, index) => (
      <li key={index}>
        <h2>{era}</h2>
        {renderErasInfo(era)}
      </li>
    ))}
  </ul>
</section>
      </div>
    </div>
  );
};

export default BandInfo;