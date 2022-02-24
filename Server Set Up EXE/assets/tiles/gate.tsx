<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.7.2" name="gate" tilewidth="33" tileheight="52" spacing="1" tilecount="5" columns="5" objectalignment="bottom">
 <grid orientation="isometric" width="64" height="32"/>
 <properties>
  <property name="Solid" type="bool" value="true"/>
 </properties>
 <image source="gate.png" width="170" height="52"/>
 <tile id="0">
  <objectgroup draworder="index" id="3">
   <object id="6" x="-1.125" y="18.625"/>
   <object id="7" x="10.125" y="26.875"/>
   <object id="14" x="-22.5" y="32.5" width="80.0181" height="45.5961" rotation="288.712"/>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="150"/>
   <frame tileid="1" duration="150"/>
   <frame tileid="2" duration="150"/>
   <frame tileid="3" duration="150"/>
  </animation>
 </tile>
</tileset>
