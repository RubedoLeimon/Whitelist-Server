<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.7.2" name="Strange Fragment" tilewidth="28" tileheight="34" tilecount="1" columns="1" objectalignment="bottom">
 <tileoffset x="0" y="8"/>
 <grid orientation="orthogonal" width="64" height="32"/>
 <properties>
  <property name="Solid" type="bool" value="true"/>
 </properties>
 <image source="Strange Fragment.png" width="28" height="34"/>
 <tile id="0">
  <objectgroup draworder="index" id="2">
   <object id="2" x="10" y="25">
    <polygon points="0,0 3,2 6,0 3,-2"/>
   </object>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="100"/>
  </animation>
 </tile>
</tileset>
