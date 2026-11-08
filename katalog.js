export const machines = [
 ['Bandsäge','Zuschnitt',11000,95],['Laser','Zuschnitt',37000,300],['Stanze','Formen',24000,160],['Presse','Formen',54000,360],
 ['Universaldrehmaschine','Drehen',14000,95],['CNC-Drehzentrum','Drehen',41000,260],['Mehrspindler','Drehen',78000,560],
 ['Universalfräse','Fräsen',18000,80],['3-Achs-Zentrum','Fräsen',43000,210],['5-Achs-Zentrum','Fräsen',82000,380],
 ['Schleifmaschine','Finish',22000,100],['Feinschleifzentrum','Finish',55000,250],['Härteofen','Härten',35000,130],
 ['Durchlaufofen','Härten',73000,390],['Montageplatz','Montage',9000,60],['Montagelinie','Montage',45000,230],
 ['Roboterzelle','Montage',88000,450],['Messplatz','Prüfen',12000,110],['Koordinatenmessgerät','Prüfen',37000,240],
 ['Beschichtungsanlage','Beschichten',48000,190],['Wälzfräsmaschine','Verzahnen',55000,170]
];
const families=[
 ['Drehen','Buchse|Bolzen|Standardwelle|Distanzring'],
 ['Drehen/Finish','Lagerhülse|Präzisionswelle|Spindel'],
 ['Zuschnitt/Formen','Haltewinkel|Schutzblech|Trägerplatte'],
 ['Fräsen','Lagerbock|Ventilblock|Pumpengehäuse'],
 ['Drehen/Fräsen','Spezialflansch|Kupplungsnabe|Rotor'],
 ['Drehen/Verzahnen/Härten','Ritzel|Stirnrad|Zahnwelle'],
 ['Fräsen/Beschichten','Gehäusedeckel|Kühlkörper|Ventilgehäuse'],
 ['Drehen/Fräsen/Montage/Prüfen','Industriepumpe|Antriebsmodul|Spannaggregat'],
 ['Verzahnen/Härten/Montage/Prüfen','Planetengetriebe|Servogetriebe|Getriebemotor']
];
export const goods=families.flatMap(([route,names])=>names.split('|').map((name,i)=>({name,route:route.split('/'),hours:1+i*.35,price:Math.round((90+route.split('/').length*110)*(1+i*.35))})));
export const fields=['Fertigung','Automatisierung','Produktentwicklung','Qualität','Organisation','Energie'];
export const topics=[
 'Spannmittel|Schnittdaten|Werkzeugwechsel|Rüstplanung|Mehrfachspannung|Prozessfenster|Hartbearbeitung|Trockenbearbeitung|Werkzeugstandzeit|Feinbearbeitung|Mikrobearbeitung|Prozessintegration',
 'Zuführung|Greifer|Maschinenüberwachung|Werkstückerkennung|Roboterbeladung|Palettenwechsel|Sensorfusion|Zellensteuerung|Autonome Prüfung|Adaptive Regelung|Flexible Linien|Vernetzte Werke',
 'Modulbaukasten|Toleranzdesign|Prototypen|Werkstoffwahl|Variantenplanung|Leichtbau|Prüfmuster|Lebensdauertest|Plattformdesign|Funktionsintegration|Serienfreigabe|Produktplattform',
 'Prüfplanung|Messmittelfähigkeit|Stichproben|Prüflehren|Rückverfolgbarkeit|Prozessfähigkeit|Inlineprüfung|Fehleranalyse|Regelkarten|Optische Messung|Nullpunktprüfung|Adaptive Prüfung',
 'Einkaufsplanung|Auftragsbündelung|Kanban|Schichtübergabe|Lieferantenbewertung|Losgrößenplanung|Materialfluss|Lagersteuerung|Tourenplanung|Kapazitätsabgleich|Netzwerkplanung|Werksverbund',
 'Verbrauchsmessung|Abschaltplanung|Druckluftprüfung|Lastmanagement|Antriebsregelung|Wärmerückgewinnung|Speichertechnik|Abwärmenetz|Prozesskühlung|Energieprognose|Lastverschiebung|Verbundversorgung'
].map(x=>x.split('|'));
