export interface ContentData {
  header: {
    category: string;
    title: string;
    subtitle: string;
  };
  photos: {
    [key: number]: {
      bodyText?: string;
    };
  };
}

export const content: { [key: string]: ContentData } = {
  en: {
    header: {
      category: "Photography",
      title: "Moments from Kerala",
      subtitle: "A glimpse into the colorful culture and life of Kerala, India's southwestern state"
    },
    photos: {
      1: {
        bodyText: "Exactly one year ago, in August 2024, I had the privilege of visiting India for the first time, and certainly not the last. It was an incredibly intense experience that provided many new perspectives and experiences, which gave great inspiration for this photo project to come to life. In this photo project, I focus on one of India's southwestern states, Kerala. This state has beautiful geographical features, with more than 600 kilometers of coastline and labyrinthine lagoons and inland waters. It boasts incredibly rich and colorful culture, as well as kind and open residents. The unity of the locals is also shown by the annual Onam festival, where for more than a week everyone celebrates together regardless of religion and affiliation."
      },
      3: {
        bodyText: "The proximity of the Arabian Sea and the Western Ghats mountains strongly determines Kerala's climate. In August-September, one encounters pleasant 25-degree temperatures and humidity that you can almost touch, and in keeping with the monsoon season, this is often accompanied by rain. The conditions couldn't be more perfect for rainforest vegetation - beautiful green landscape accompanies us everywhere, whether we're down near the coast or up in the mountains. The long coastline is not only decisive for the climate, but also greatly influences the local way of life. Kerala is famous for its various fish dishes, such as coconut milk fish curry, and due to its location, we encounter fishing both small and large scale."
      },
      5: {
        bodyText: "Fishing has great traditions in Kerala. Chinese fishing nets with their large spider-like structures can still be found around Kochi, but beyond that, we mainly encounter various net fishing techniques. In Indian culture, religion still occupies a prominent place in people's lives, so when fishermen set out on journeys that can often mean months at sea, they use various rituals to ensure that higher powers will also help them on their journey."
      },
      6: {
        bodyText: "While fishermen work to ensure that fresh fish reaches every family's table, there will of course be applicants who are just waiting for the right moment to profit from the fishermen's hard work."
      },
      7: {
        bodyText: "Kerala is defined not only by its gastronomy and fishing traditions, but also by the captivating Onam festival. The 10-day festival has designated activities and programs for each day, including dance, parades, and traditional curries served on palm leaves. On the last day of this celebration comes the symbolic arrival of King Mahabali."
      },
      9: {
        bodyText: "According to Hindu legend, the king was a very moral and selfless leader of Kerala, so his people loved and respected him very much. This aroused jealousy in the gods, so they asked Vishnu to help, who approached the king in the form of a dwarf boy and asked for three steps of land. The king nodded, at that moment the boy turned into a giant and with his first two steps covered the entire world. When there was no room for the third step, the king offered his own head. This generous act so impressed Vishnu that he allowed King Mahabali to visit his people once a year. The preparation for this arrival is the 10-day celebration, during which a great parade is also held, the Athachamayam."
      },
      10: {
        bodyText: "The parade is held in Ernakulam district and showcases almost every tradition connected to the Onam celebration and Kerala: ornately decorated elephants parade, the traditional 'Tiger dance' or Puli Kali can be seen, as well as the Indian martial art called Kalari, and much more. This parade, with its incredible buzz, is very captivating and attracts the entire community. Beyond providing a huge cultural experience, from the many impulses that hit the viewers, from admiration through amazement to astonishment, we can go through a wide palette of emotions."
      },
      13: {
        bodyText: "Many things appealed to me in Kerala, but perhaps most of all, I could see traditions still actively as part of people's lives. Traditions that the locals nurture and respect as living heritage."
      },
      15: {
        bodyText: "Thank you to everyone who made my stay there so intimate, and to you for accompanying me on this journey through these few pages."
      }
    }
  },
  hu: {
    header: {
      category: "Fotográfia",
      title: "Pillanatok Keralából",
      subtitle: "Bepillantás India délnyugati államának, Keralának színes kultúrájába és életébe"
    },
    photos: {
      1: {
        bodyText: "Pontosan egy évvel ezelőtt 2024 augusztusában először és biztosan nem utoljára szerencsém volt Indiába látogatni, ami nagyon intenzív volt, rengeteg új néző pontot és élményt adott, ami nagy inspirációt nyújtott ahhoz is, hogy ez a fotó projekt létrejöjjön. A fotó projektben India egyik dél-nyugaton fekvő államára koncentrálok Keralára. Ez az állam gyönyörű földrajzi adottságokkal rendelkezik, több mint 600 száz kilométeren át tartó tengerpartja, és labirintusszerű lagúnai és belvizei, egészen különlegessé teszik. Hihetetlenül gazdag és színes kultúrájával ezen túl kedves és nyitott lakosaival is büszkélkedhet. A helyiek összetartását a minden évben tartandó Onam fesztivál is mutatja, ahol több mint egy héten keresztül mindenki vallástól és hovatartozástól függetlenül együtt ünnepel."
      },
      3: {
        bodyText: "Az Arab-tenger és a Nyugati-Ghátok hegység közelsége erősen meghatározza Kerala éghajlatát, így augusztus szeptember környékén kellemes 25 fokkal, és olyan pára tartalommal találja magát szembe az ember, amit szinte tapintani lehet. Illetve monszun időszakhoz illően ehhez sokszor eső is társul. A körülmények ennél nem is lehetnének tökéletesebbek az esőerdős növényzet számára - gyönyörű zöld táj, mindenütt elkísér minket lehetünk lent a part közelében vagy fent a hegyeknél. A hosszasan húzódó tenger-part nem csak az éghajlat számára meghatározó, de a helyi életmódot is nagyban befolyásolja, Kerala híres a különböző hal ételeiről, mint például a kókusztejes halcurry, illetve az elhelyezkedése miatt a halászattal kis és nagy méretben egyaránt sokat találkozhatunk."
      },
      5: {
        bodyText: "A halászat nagy tradíciókra tekint vissza Keralában, a kínai halászhalók nagy pókszerű szerkezetükkel még mindig megtalálhatók Kochi környékén, de ezen túl inkább különböző hálós halászási technikákkal találkozhatunk. Indiai kultúrában a vallás még mindig kiemelt helyet foglal el az emberek életében, így amikor a halászok útnak indulnak, ami sokszor hónapokat is jelenthet a tengeren, különböző szertartásokat alkalmaznak, hogy a felsőbb erők is segítsék majd őket útjukon."
      },
      6: {
        bodyText: "Amellett, hogy a halászok azon dolgoznak, hogy minden család asztalára friss hal kerüljön, persze lesznek jelentkezők, akik csak a megfelelő pillanatra várnak, hogy hasznot húzzanak a halászok kemény munkájukból."
      },
      7: {
        bodyText: "Keralát nem csak a gasztronómiája és halászati tradíciói határozzák meg, hanem a mindenkit magával ragadó Onam fesztivál is. A 10 napos fesztivál minden napra meghatározott tevékenységekkel és programokkal rendelkezik, az ünneplés keretien belül van tánc, felvonulások, tradicionális curry-k pálma levélen szervírozva. Ennek a hosszas készülődésnek az utolsó napján történik Mahabali király szimbolikus eljövetele."
      },
      9: {
        bodyText: "A hindu legenda szerint a király nagyon erkölcsös és önzetlen vezetője volt Keralának, ezért a népe nagyon szerette és tisztelte, ám ez az istenekben féltékenységet keltett, így Vishnu-t kérték, hogy segítsen, aki egy törpe fiú formájában megkereste a királyt, és kért tőle három lépésnyi földet. A király rábólintott, abban a pillanatban a fiú óriássá változott és első két lépésével átérte az egész világot. Miután nem maradt hely a harmadik lépésre, a király felkínálta a saját fejét. Így a törpe fiú testébe megbúvó Vishnu utolsó lépésével a királyt a pokolba taposta. Viszont annyira lenyűgözte Vishnut ez a nagylelkű felajánlás, hogy megengedte Mahabali királynak, hogy évente egyszer látogatást tegyen a népénél."
      },
      10: {
        bodyText: "A Mahabali király eljövetelének előkészülete a 10 napos ünneplés. Aminek keretében egy nagy felvonulás is megrendezésre kerül, az Athachamayam. A felvonulást Ernakulam kerületben rendezik meg, és szinte minden, az Onam ünnepéhez és Keralához kapcsolódó hagyományt bemutat: díszesen feldíszített elefántok vonulnak fel, látható a tradicionális 'Tigris tánc' avagy Puli Kali, valamint a Kalari nevű indiai harcművészet is, meg még persze sok más. Ez a felvonulás hihetetlen zsongásával, nagyon magával ragadó és az egész közösséget odavonzza. Azon túl, hogy egy óriási kulturális élményt nyújt, a sok impulzustól, ami éri az nézőket, a gyönyörködéstől kezdve, a meghökkenésen át, a megdöbbenésig, egy széles palettáját járhatjuk végig az érzelmeknek."
      },
      13: {
        bodyText: "Sok minden tetszett Keralában, de talán a legjobban az, hogy láthattam a tradíciókat még aktívan az emberek életének részeként. Tradíciókat, amiket a helyiek élő hagyományként ápolnak és tisztelnek."
      },
      15: {
        bodyText: "Köszönöm mindenkinek aki ilyen bensőségessé tette az ott létem, nektek pedig, hogy ezen a pár oldalon keresztül velem tartottatok ezen az utazáson."
      }
    }
  },
  de: {
    header: {
      category: "Fotografie",
      title: "Momente aus Kerala",
      subtitle: "Ein Einblick in die farbenfrohe Kultur und das Leben von Kerala, Indiens südwestlichem Bundesstaat"
    },
    photos: {
      1: {
        bodyText: "Vor genau einem Jahr, im August 2024, hatte ich das Privileg, Indien zum ersten Mal zu besuchen, und sicherlich nicht zum letzten Mal. Es war eine unglaublich intensive Erfahrung, die viele neue Perspektiven und Erlebnisse bot und große Inspiration für die Entstehung dieses Fotoprojekts gab. In diesem Fotoprojekt konzentriere ich mich auf einen der südwestlichen Bundesstaaten Indiens, Kerala. Dieser Staat hat wunderschöne geografische Eigenschaften, mit mehr als 600 Kilometern Küstenlinie und labyrinthartigen Lagunen und Binnengewässern. Er rühmt sich einer unglaublich reichen und farbenfrohen Kultur sowie freundlicher und offener Bewohner. Die Einheit der Einheimischen zeigt sich auch beim jährlichen Onam-Festival, bei dem über eine Woche lang alle unabhängig von Religion und Zugehörigkeit gemeinsam feiern."
      },
      3: {
        bodyText: "Die Nähe des Arabischen Meeres und der Western Ghats-Berge bestimmt stark Keralas Klima. Im August-September begegnet man angenehmen 25-Grad-Temperaturen und einer Luftfeuchtigkeit, die man fast berühren kann, und passend zur Monsunzeit wird dies oft von Regen begleitet. Die Bedingungen könnten für die Regenwaldvegetation nicht perfekter sein - wunderschöne grüne Landschaft begleitet uns überall, ob wir unten in Küstennähe oder oben in den Bergen sind. Die lange Küstenlinie ist nicht nur entscheidend für das Klima, sondern beeinflusst auch stark die lokale Lebensweise. Kerala ist berühmt für seine verschiedenen Fischgerichte, wie zum Beispiel Kokosmilch-Fischcurry, und aufgrund seiner Lage begegnen wir der Fischerei sowohl im kleinen als auch im großen Maßstab."
      },
      5: {
        bodyText: "Die Fischerei hat große Traditionen in Kerala. Chinesische Fischernetze mit ihren großen spinnenartigen Strukturen sind noch immer rund um Kochi zu finden, aber darüber hinaus begegnen wir hauptsächlich verschiedenen Netzfischerei-Techniken. In der indischen Kultur nimmt die Religion noch immer einen prominenten Platz im Leben der Menschen ein, daher verwenden Fischer, wenn sie auf Reisen gehen, die oft Monate auf dem Meer bedeuten können, verschiedene Rituale, um sicherzustellen, dass höhere Mächte ihnen auch auf ihrer Reise helfen werden."
      },
      6: {
        bodyText: "Während Fischer daran arbeiten, sicherzustellen, dass frischer Fisch auf jeden Familientisch kommt, wird es natürlich Bewerber geben, die nur auf den richtigen Moment warten, um von der harten Arbeit der Fischer zu profitieren."
      },
      7: {
        bodyText: "Kerala wird nicht nur durch seine Gastronomie und Fischereitraditionen definiert, sondern auch durch das fesselnde Onam-Festival. Das 10-tägige Festival hat für jeden Tag bestimmte Aktivitäten und Programme, einschließlich Tanz, Paraden und traditioneller Currys, die auf Palmblättern serviert werden. Am letzten Tag dieser Feier kommt die symbolische Ankunft von König Mahabali."
      },
      9: {
        bodyText: "Laut hinduistischer Legende war der König ein sehr moralischer und selbstloser Führer von Kerala, daher liebten und respektierten ihn seine Menschen sehr. Dies weckte Eifersucht bei den Göttern, also baten sie Vishnu um Hilfe, der den König in Form eines Zwergenjungen aufsuchte und um drei Schritte Land bat. Der König nickte, in diesem Moment verwandelte sich der Junge in einen Riesen und bedeckte mit seinen ersten beiden Schritten die ganze Welt. Als kein Platz für den dritten Schritt war, bot der König seinen eigenen Kopf an. Diese großzügige Tat beeindruckte Vishnu so sehr, dass er König Mahabali erlaubte, sein Volk einmal im Jahr zu besuchen. Die Vorbereitung auf diese Ankunft ist die 10-tägige Feier, während der auch eine große Parade abgehalten wird, das Athachamayam."
      },
      10: {
        bodyText: "Die Parade findet im Bezirk Ernakulam statt und zeigt fast jede Tradition, die mit der Onam-Feier und Kerala verbunden ist: aufwendig geschmückte Elefanten paradieren, der traditionelle 'Tigertanz' oder Puli Kali ist zu sehen, sowie die indische Kampfkunst namens Kalari und vieles mehr. Diese Parade ist mit ihrem unglaublichen Summen sehr fesselnd und zieht die gesamte Gemeinschaft an. Neben der Bereitstellung einer riesigen kulturellen Erfahrung können wir durch die vielen Impulse, die die Zuschauer treffen, von Bewunderung über Erstaunen bis hin zum Staunen eine breite Palette von Emotionen durchlaufen."
      },
      13: {
        bodyText: "Viele Dinge gefielen mir in Kerala, aber vielleicht am meisten konnte ich Traditionen noch aktiv als Teil des Lebens der Menschen sehen. Traditionen, die die Einheimischen als lebendiges Erbe pflegen und respektieren."
      },
      15: {
        bodyText: "Danke an alle, die meinen Aufenthalt dort so intim gemacht haben, und an Sie, dass Sie mich auf dieser Reise durch diese wenigen Seiten begleitet haben."
      }
    }
  }
};
