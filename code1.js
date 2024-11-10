gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.GDInfoObjects1= [];
gdjs.MainCode.GDInfoObjects2= [];
gdjs.MainCode.GDHMObjects1= [];
gdjs.MainCode.GDHMObjects2= [];
gdjs.MainCode.GDSettingsButtonObjects1= [];
gdjs.MainCode.GDSettingsButtonObjects2= [];
gdjs.MainCode.GDHMNameObjects1= [];
gdjs.MainCode.GDHMNameObjects2= [];
gdjs.MainCode.GDChipsObjects1= [];
gdjs.MainCode.GDChipsObjects2= [];
gdjs.MainCode.GDChipsNameObjects1= [];
gdjs.MainCode.GDChipsNameObjects2= [];
gdjs.MainCode.GDGolder_9595KingObjects1= [];
gdjs.MainCode.GDGolder_9595KingObjects2= [];
gdjs.MainCode.GDMarksObjects1= [];
gdjs.MainCode.GDMarksObjects2= [];


gdjs.MainCode.asyncCallback12531668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 0);
}gdjs.MainCode.localVariables.length = 0;
}
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.MainCode.asyncCallback12531668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "1", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "a");
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "MON", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "ID", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "Close", 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12523252);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.randomInRange(12481498, 124814980));
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "IDs", runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber());
}{gdjs.evtTools.storage.writeNumberInJSONFile("Save", "ID", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "a") >= 2;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "MON", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.storage.readNumberFromJSONFile("Save", "Close", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "a");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Golder_King"), gdjs.MainCode.GDGolder_9595KingObjects1);
{for(var i = 0, len = gdjs.MainCode.GDGolder_9595KingObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDGolder_9595KingObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString() + " МОН");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsButton"), gdjs.MainCode.GDSettingsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDSettingsButtonObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDSettingsButtonObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDSettingsButtonObjects1[k] = gdjs.MainCode.GDSettingsButtonObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDSettingsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Shop", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chips"), gdjs.MainCode.GDChipsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDChipsObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDChipsObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDChipsObjects1[k] = gdjs.MainCode.GDChipsObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDChipsObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "1", "https://topiminez.github.io/zotus-web-chips/", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), 0, 0, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("HM"), gdjs.MainCode.GDHMObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainCode.GDHMObjects1.length;i<l;++i) {
    if ( gdjs.MainCode.GDHMObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainCode.GDHMObjects1[k] = gdjs.MainCode.GDHMObjects1[i];
        ++k;
    }
}
gdjs.MainCode.GDHMObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "1", "https://topiminez.github.io/zotus-web-clicker/", gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene), 0, 0, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.MainCode.eventsList1(runtimeScene);
}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDInfoObjects1.length = 0;
gdjs.MainCode.GDInfoObjects2.length = 0;
gdjs.MainCode.GDHMObjects1.length = 0;
gdjs.MainCode.GDHMObjects2.length = 0;
gdjs.MainCode.GDSettingsButtonObjects1.length = 0;
gdjs.MainCode.GDSettingsButtonObjects2.length = 0;
gdjs.MainCode.GDHMNameObjects1.length = 0;
gdjs.MainCode.GDHMNameObjects2.length = 0;
gdjs.MainCode.GDChipsObjects1.length = 0;
gdjs.MainCode.GDChipsObjects2.length = 0;
gdjs.MainCode.GDChipsNameObjects1.length = 0;
gdjs.MainCode.GDChipsNameObjects2.length = 0;
gdjs.MainCode.GDGolder_9595KingObjects1.length = 0;
gdjs.MainCode.GDGolder_9595KingObjects2.length = 0;
gdjs.MainCode.GDMarksObjects1.length = 0;
gdjs.MainCode.GDMarksObjects2.length = 0;

gdjs.MainCode.eventsList2(runtimeScene);
gdjs.MainCode.GDInfoObjects1.length = 0;
gdjs.MainCode.GDInfoObjects2.length = 0;
gdjs.MainCode.GDHMObjects1.length = 0;
gdjs.MainCode.GDHMObjects2.length = 0;
gdjs.MainCode.GDSettingsButtonObjects1.length = 0;
gdjs.MainCode.GDSettingsButtonObjects2.length = 0;
gdjs.MainCode.GDHMNameObjects1.length = 0;
gdjs.MainCode.GDHMNameObjects2.length = 0;
gdjs.MainCode.GDChipsObjects1.length = 0;
gdjs.MainCode.GDChipsObjects2.length = 0;
gdjs.MainCode.GDChipsNameObjects1.length = 0;
gdjs.MainCode.GDChipsNameObjects2.length = 0;
gdjs.MainCode.GDGolder_9595KingObjects1.length = 0;
gdjs.MainCode.GDGolder_9595KingObjects2.length = 0;
gdjs.MainCode.GDMarksObjects1.length = 0;
gdjs.MainCode.GDMarksObjects2.length = 0;


return;

}

gdjs['MainCode'] = gdjs.MainCode;
