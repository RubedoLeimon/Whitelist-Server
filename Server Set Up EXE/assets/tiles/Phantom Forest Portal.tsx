<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.7.2" name="Phantom Forest Portal" tilewidth="39" tileheight="67" spacing="1" tilecount="7" columns="7" objectalignment="bottom">
 <tileoffset x="0" y="8"/>
 <properties>
  <property name="Solid" type="bool" value="true"/>
 </properties>
 <image source="Phantom Forest Portal.png" width="283" height="70"/>
 <tile id="0">
  <objectgroup draworder="index" id="2">
   <object id="2" x="6" y="58.875">
    <polygon points="0,0 12.5,7.125 25,0 12.5,-7.125"/>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="100"/>
   <frame tileid="1" duration="100"/>
   <frame tileid="2" duration="100"/>
   <frame tileid="3" duration="100"/>
   <frame tileid="4" duration="100"/>
   <frame tileid="5" duration="100"/>
   <frame tileid="6" duration="1"/>
  </animation>
 </tile>
 <tile id="6" probability="0"/>
</tileset>
