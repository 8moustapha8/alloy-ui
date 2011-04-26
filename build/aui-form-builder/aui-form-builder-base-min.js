AUI.add("aui-form-builder-base",function(p){var m=p.Lang,n=m.isArray,c=m.isString,f=m.isObject,u=m.isValue,v=function(A){return(A instanceof p.Node);},q=function(A){return(A instanceof p.NodeList);},o=function(A){return(A instanceof p.FormBuilder);},z=function(A){return(A instanceof p.FormBuilderField);},g=p.DD.DDM,j="active",r="acceptChildren",y="autoSelectFields",x="availableFields",w="append",B="boundingBox",i="builder",d="button",l="buttons",e="buttonsNode",h="children",b="clonable-portal-layout",t="cloneNode",k=", ";COMPONENT="component",CONTENT="content",CONTENT_BOX="contentBox",CONTAINER="container",DELETE="delete",DD="dd",DEFAULT="default",DEFAULT_MESSAGE_NODE="defaultMessageNode",DOT=".",DUPLICATE="duplicate",DRAG="drag",DRAGGING="dragging",DRAG_CONTAINER="dragContainer",DRAG_CONTAINER_NODE="dragContainerNode",DRAG_NODES_LIST="dragNodesList",DRAG_PORTAL_LAYOUT="dragPortalLayout",DROP="drop",DROP_CONTAINER="dropContainer",DROP_CONTAINER_NODE="dropContainerNode",DROP_PORTAL_LAYOUT="dropPortalLayout",DROP_NODE="dropNode",DROP_ZONE_NODE="dropZoneNode",EDIT="edit",EMPTY_STR="",FIELD="field",FIELDS="fields",FIRST="first",FIRST_CHILD="firstChild",FOCUSED="focused",FORM="form",FORM_BUILDER="formBuilder",FORM_LAYOUT="form-layout",ID="id",ICON="icon",INPUT="input",ITEMS="items",LABEL="label",LABEL_NODE="labelNode",LAST="last",LAST_CHILD="lastChild",LIST="list",MESSAGE="message",NAME="name",NESTED_LIST="nestedList",NODE="node",OVER="over",PARENT="parent",PARENT_NODE="parentNode",PLACEHOLDER="placeholder",PLACE_AFTER="placeAfter",PLACE_BEFORE="placeBefore",PREPEND="prepend",HELPER="helper",HIDDEN="hidden",RENDER="render",SAVE="save",SELECTED="selected",SETTINGS="settings",SETTINGS_FORM_NODE="settingsFormNode",SETTINGS_BUTTONS_NODE="settingsButtonsNode",SRC_NODE="srcNode",SPACE=" ",STATE="state",STRINGS="strings",TABS="tabs",TABS_NODE="tabsNode",TABS_CONTENT_NODE="tabsContentNode",TABS_LIST_NODE="tabsListNode",TABVIEW="tabview",TARGET="target",TEMPLATE_NODE="templateNode",TEXT="text",TYPE="type",VALUE="value",VALUES="values",ZONE="zone",REGION="region",WIDGET="widget",STRING_EMPTY_SELECTION="stringEmptySelection",getCN=p.getClassName,CSS_BUTTON_INPUT=getCN(d,INPUT),CSS_COMPONENT=getCN(COMPONENT),CSS_DD_DRAGGING=getCN(DD,DRAGGING),CSS_HELPER_HIDDEN=getCN(HELPER,HIDDEN),CSS_FORM_BUILDER_BUTTON_DELETE=getCN(FORM,i,d,DELETE),CSS_FORM_BUILDER_BUTTON_DUPLICATE=getCN(FORM,i,d,DUPLICATE),CSS_FORM_BUILDER_BUTTON_EDIT=getCN(FORM,i,d,EDIT),CSS_FORM_BUILDER_BUTTON_SAVE=getCN(FORM,i,d,SAVE),CSS_FORM_BUILDER_DEFAULT_MESSAGE=getCN(FORM,i,DEFAULT,MESSAGE),CSS_FORM_BUILDER_DRAG_CONTAINER=getCN(FORM,i,DRAG,CONTAINER),CSS_FORM_BUILDER_DRAG_NODE=getCN(FORM,i,DRAG,NODE),CSS_FORM_BUILDER_DROP_ACTIVE=getCN(FORM,i,DROP,j),CSS_FORM_BUILDER_DROP_CONTAINER=getCN(FORM,i,DROP,CONTAINER),CSS_FORM_BUILDER_DROP_NODE=getCN(FORM,i,DROP,NODE),CSS_FORM_BUILDER_DROP_ZONE=getCN(FORM,i,DROP,ZONE),CSS_FORM_BUILDER_FIELD=getCN(FORM,i,FIELD),CSS_FORM_BUILDER_FIELD_BUTTONS=getCN(FORM,i,FIELD,l),CSS_FORM_BUILDER_FIELD_CONTENT=getCN(FORM,i,FIELD,CONTENT),CSS_FORM_BUILDER_FIELD_HIDDEN=getCN(FORM,i,FIELD,HIDDEN),CSS_FORM_BUILDER_FIELD_ICON=getCN(FORM,i,FIELD,ICON),CSS_FORM_BUILDER_FIELD_ICON_TEXT=getCN(FORM,i,FIELD,ICON,TEXT),CSS_FORM_BUILDER_FIELD_OVER=getCN(FORM,i,FIELD,OVER),CSS_FORM_BUILDER_FIELD_SELECTED=getCN(FORM,i,FIELD,SELECTED),CSS_FORM_BUILDER_HELPER=getCN(FORM,i,HELPER),CSS_FORM_BUILDER_ICON=getCN(FORM,i,ICON),CSS_FORM_BUILDER_LABEL=getCN(FORM,i,LABEL),CSS_FORM_BUILDER_PLACEHOLDER=getCN(FORM,i,PLACEHOLDER),CSS_FORM_BUILDER_SETTINGS=getCN(FORM,i,SETTINGS),CSS_FORM_BUILDER_SETTINGS_BUTTONS=getCN(FORM,i,SETTINGS,l),CSS_FORM_BUILDER_TABS_CONTAINER=getCN(FORM,i,TABS,CONTAINER),CSS_TABVIEW_CONTENT=getCN(TABVIEW,CONTENT),CSS_TABVIEW_LIST=getCN(TABVIEW,LIST),CSS_ICON=getCN(ICON),CSS_WIDGET=getCN(WIDGET),TPL_DEFAULT_MESSAGE='<li class="'+CSS_FORM_BUILDER_DEFAULT_MESSAGE+'"></li>',TPL_DRAG_CONTAINER='<ul class="'+CSS_FORM_BUILDER_DRAG_CONTAINER+'"></ul>',TPL_DRAG_NODE='<li class="'+[CSS_FORM_BUILDER_DRAG_NODE,CSS_FORM_BUILDER_FIELD].join(SPACE)+'" data-name="{name}">'+'<span class="'+[CSS_FORM_BUILDER_ICON,CSS_ICON].join(SPACE)+' {icon}"></span>'+'<span class="'+CSS_FORM_BUILDER_LABEL+'">{label}</span>'+"</li>",TPL_DROP_CONTAINER='<ul class="'+[CSS_FORM_BUILDER_DROP_CONTAINER].join(SPACE)+'"></ul>',TPL_FIELD_BOUNDING_BOX='<li class="'+[CSS_WIDGET,CSS_COMPONENT,CSS_FORM_BUILDER_FIELD,CSS_HELPER_HIDDEN].join(SPACE)+'"></li>',TPL_HELPER='<div class="'+CSS_FORM_BUILDER_HELPER+'"></div>',TPL_PLACEHOLDER='<li class="'+CSS_FORM_BUILDER_PLACEHOLDER+'"></li>',TPL_TABS='<div class="'+CSS_FORM_BUILDER_TABS_CONTAINER+'"></div>',TPL_TABS_CONTENT='<div class="'+CSS_TABVIEW_CONTENT+'"></div>',TPL_TABS_LIST='<ul class="'+CSS_TABVIEW_LIST+'"></ul>',TPL_SETTINGS='<form class="'+CSS_FORM_BUILDER_SETTINGS+'"></form>',TPL_SETTINGS_BUTTONS='<div class="yui3-aui-button-row">'+'<span class="yui3-aui-button yui3-aui-button-submit yui3-aui-state-positive yui3-aui-priority-primary">'+'<span class="yui3-aui-button-content">'+'<input type="button" value="Save" class="yui3-aui-button-input yui3-aui-form-builder-button-save">'+"</span>"+"</span>"+'<span class="yui3-aui-button yui3-aui-button-submit yui3-aui-state-positive yui3-aui-priority-secondary">'+'<span class="yui3-aui-button-content">'+'<input type="button" value="Close" class="yui3-aui-button-input yui3-aui-form-builder-button-close">'+"</span>"+"</span>"+"</div>",TAB_INDEX_DRAG=0,TAB_INDEX_SETTINGS=1,DEFAULT_ICON_CLASS=[CSS_FORM_BUILDER_FIELD_ICON,CSS_FORM_BUILDER_FIELD_ICON_TEXT].join(SPACE),INVALID_CLONE_ATTRS=p.Array([B,CONTENT_BOX,SRC_NODE,FIELDS,ID,SELECTED,TEMPLATE_NODE,LABEL_NODE,NAME]),INVALID_DBCLICK_TARGETS="button,input,label,select,textarea";var a=function(){};a.ATTRS={fields:{value:[],setter:"_setFields",getter:function(A){return A||[];},validator:n}};p.mix(a.prototype,{addField:function(D){var A=this;var C=A.get(FIELDS);C=A._removeFromParent(D);C.push(D);A.set(FIELDS,C);},addFields:function(C){var A=this;
p.Array.each(A._normalizeFields(C),p.bind(A.addField,A));},contains:function(G,C){var A=this;var F=A.get(FIELDS);if(C){for(var D=0;D<F.length;D++){var E=F[D];if((E==G)||E.contains(G,C)){return true;}}}return(A.indexOf(G)>-1);},getField:function(C){var A=this;var D=A.get(FIELDS);return D[C];},indexOf:function(D){var A=this;var C=A.get(FIELDS);return p.Array.indexOf(C,D);},insertField:function(C,E){var A=this;var D=A.get(FIELDS);D=A._removeFromParent(E);D.splice(C,0,E);A.set(FIELDS,D);},removeField:function(D){var A=this;var C=A.get(FIELDS);C=A._removeFromParent(D);D.removeTarget(A);A.set(FIELDS,C);},removeFields:function(C){var A=this;p.Array.each(A._normalizeFields(C),p.bind(A.removeField,A));},_normalizeFields:function(D){var A=this;var C=[];D=p.Array(D);p.Array.each(D,function(G,E){var F=A.get(FORM_BUILDER)||A;if(!z(G)){G=F._renderField(A,E,G);}if(G){C.push(G);G.addTarget(F);G.set(PARENT,A);}});return C;},_removeFromParent:function(E){var A=this;var D=A.get(FIELDS);if(z(E)){var C=E.get(PARENT);if(C&&C!=A){C.removeField(E);}else{if(A.contains(E)){p.Array.removeItem(D,E);}}}return D;},_setFields:function(C){var A=this;return A._normalizeFields(C);}});p.FormBuilderFieldSupport=a;var s=p.Component.create({NAME:FORM_BUILDER,ATTRS:{autoSelectFields:{value:false},availableFields:{setter:"_indexAvaliableFieldsTypes",value:[],validator:n,lazyAdd:false},nestedList:{setter:function(D){var A=this;var C=p.merge({dd:{plugins:[{cfg:{horizontal:false,scrollDelay:30},fn:p.Plugin.DDWinScroll}]},dropCondition:function(F){var G=false;var E=F.drop.get(NODE);var H=E.getData(FIELD);if(H&&H.get(r)){G=true;}return G;},dropOn:DOT+CSS_FORM_BUILDER_DROP_ZONE,placeholder:p.Node.create(TPL_PLACEHOLDER),sortCondition:function(F){var E=A.get(DROP_CONTAINER_NODE);return E.contains(F.drop.get(NODE));}},D);return C;},value:{}},strings:{value:{stringDefaultMessage:"Drop a field here",stringEmptySelection:"No field selected"}},defaultMessageNode:{valueFn:function(){return p.Node.create(TPL_DEFAULT_MESSAGE);}},dragContainerNode:{valueFn:function(){return p.Node.create(TPL_DRAG_CONTAINER);}},dragNodesList:{valueFn:"_valueDragNodesList"},dropContainerNode:{valueFn:function(){return p.Node.create(TPL_DROP_CONTAINER);}},settingsButtonsNode:{valueFn:function(){return p.Node.create(TPL_SETTINGS_BUTTONS);}},settingsFormNode:{valueFn:function(){return p.Node.create(TPL_SETTINGS);}},tabsNode:{valueFn:function(){return p.Node.create(TPL_TABS);}},tabsContentNode:{valueFn:function(){return p.Node.create(TPL_TABS_CONTENT);}},tabsListNode:{valueFn:function(){return p.Node.create(TPL_TABS_LIST);}}},AUGMENTS:[p.FormBuilderFieldSupport],HTML_PARSER:{defaultMessageNode:DOT+CSS_FORM_BUILDER_DEFAULT_MESSAGE,dragContainerNode:DOT+CSS_FORM_BUILDER_DRAG_CONTAINER,dragNodesList:function(C){var A=C.all(DOT+CSS_FORM_BUILDER_DRAG_NODE);return(A.size()<=0)?null:A;},dropContainerNode:DOT+CSS_FORM_BUILDER_DROP_CONTAINER,settingsFormNode:FORM+DOT+CSS_FORM_BUILDER_SETTINGS,settingsButtonsNode:DOT+CSS_FORM_BUILDER_SETTINGS_BUTTONS,tabsNode:DOT+CSS_FORM_BUILDER_TABS_CONTAINER,tabsContentNode:DOT+CSS_TABVIEW_CONTENT,tabsListNode:DOT+CSS_TABVIEW_LIST},EXTENDS:p.Widget,prototype:{initializer:function(){var A=this;A.boundingBox=A.get(B);A.dragContainerNode=A.get(DRAG_CONTAINER_NODE);A.dragNodesList=A.get(DRAG_NODES_LIST);A.dropContainerNode=A.get(DROP_CONTAINER_NODE);A.settingsButtonsNode=A.get(SETTINGS_BUTTONS_NODE);A.settingsFormNode=A.get(SETTINGS_FORM_NODE);A.tabsNode=A.get(TABS_NODE);A.tabsContentNode=A.get(TABS_CONTENT_NODE);A.tabsListNode=A.get(TABS_LIST_NODE);A._dragNestedList=new p.NestedList(A.get(NESTED_LIST));A._dropNestedList=new p.NestedList(A.get(NESTED_LIST));A._tabs=new p.TabView({boundingBox:A.tabsNode,contentNode:A.tabsContentNode,listNode:A.tabsListNode});if(!A.tabsContentNode.inDoc()){A._tabs.set(ITEMS,[{label:"Add a field",contentNode:A.dragContainerNode},{label:"Field settings",content:A.settingsFormNode}]);}},renderUI:function(){var A=this;A.dragContainerNode.setContent(A.dragNodesList);A._tabs.render();},bindUI:function(){var A=this;var D=A.boundingBox;var C=A.dropContainerNode;var E=A.settingsButtonsNode;A._dragNestedList.on("drag:end",p.bind(A._onDragEndDragNestedList,A));A._dragNestedList.on("drag:start",p.bind(A._onDragStartDragNestedList,A));A._dropNestedList.on("drag:end",p.bind(A._onDragEndDropNestedList,A));A._tabs.after("activeTabChange",p.bind(A._afterActiveTabChange,A));C.delegate("click",p.bind(A._onClickFieldDelete,A),DOT+CSS_FORM_BUILDER_BUTTON_DELETE);C.delegate("click",p.bind(A._onClickFieldDuplicate,A),DOT+CSS_FORM_BUILDER_BUTTON_DUPLICATE);C.delegate("click",p.bind(A._onClickFieldEdit,A),DOT+CSS_FORM_BUILDER_BUTTON_EDIT);C.delegate("dblclick",p.bind(A._onDbClickField,A),DOT+CSS_FORM_BUILDER_FIELD);C.delegate("mouseenter",p.bind(A._onMouseEnterField,A),DOT+CSS_FORM_BUILDER_FIELD);C.delegate("mouseleave",p.bind(A._onMouseLeaveField,A),DOT+CSS_FORM_BUILDER_FIELD);E.delegate("click",p.bind(A._onClickSettingsButton,A),DOT+CSS_BUTTON_INPUT);A.after("*:fieldsChange",p.bind(A._afterFieldsChange,A));A.after("*:selectedChange",p.bind(A._afterSelectedChange,A));},syncUI:function(){var A=this;A.syncFieldsUI();A._syncDefaultMessage();A._syncNestedList();},availableFieldsTypes:{},appendFields:function(D,C){var A=this;C.setContent(EMPTY_STR);p.each(D,function(F){var E=F.get(FIELDS);C.append(F.get(B));A.appendFields(E,F.get(DROP_ZONE_NODE));});},duplicateField:function(F){var A=this;var E=A._cloneField(F);var C=F.get(PARENT);var D=C.indexOf(F);C.insertField(++D,E);},selectField:function(D){var A=this;D.set(SELECTED,true);var C=A.settingsFormNode.one(INPUT);if(C){C.focus();C.select();}A._tabs.selectTab(TAB_INDEX_SETTINGS);},syncFieldsUI:function(D){var A=this;var E=A.get(FIELDS);var C=A.get(DROP_CONTAINER_NODE);if(D&&z(D.target)){var F=D.target;E=F.get(FIELDS);C=F.get(DROP_ZONE_NODE);}A.appendFields(E,C);},_afterActiveTabChange:function(F){var A=this;var E=A.selectedField;var C=A.get(SETTINGS_FORM_NODE);var D=A.get(SETTINGS_BUTTONS_NODE);
var G=A.get(STRINGS);var H=A.contains(E,true);if(!H){C.setContent(G[STRING_EMPTY_SELECTION]);}D.toggleClass(CSS_HELPER_HIDDEN,!H);},_afterFieldsChange:function(){var A=this;A.syncUI();},_afterSelectedChange:function(D){var A=this;var E=D.target;var C=A.selectedField;A._syncSelectedFieldUI(E);if(E.get(SELECTED)){A.selectedField=E;if(C&&C!=E){C.set(SELECTED,false);}E.renderSettings();}},_cloneField:function(F){var A=this;var E=F.get(TYPE);var D={};p.each(F.getAttrs(),function(H,G){if(INVALID_CLONE_ATTRS.indexOf(G)===-1&&!v(H)){D[G]=H;}});var C=[];p.each(F.get(FIELDS),function(G){C.push(A._cloneField(G));});D[FIELDS]=C;D[TYPE]=E;return D;},_dropField:function(D){var I=this;var E=D.get(PARENT_NODE);var A=E.all("> "+DOT+CSS_FORM_BUILDER_FIELD);var G=D.getData(FIELD);var C=I.get(DEFAULT_MESSAGE_NODE);if(C.inDoc()){C.remove();}var J=I._getFieldParentByNode(D);var F=A.indexOf(D);if(!G){D.remove();var H=D.getAttribute("data-name");G=I.availableFieldsTypes[H];}J.insertField(F,G);return J.getField(F);},_getFieldInstance:function(C,E){var A=this;var E=E||C.type;var D=p.FormBuilder.types;var F=c(E)?D[E]:E;if(F!==undefined){return new F(C);}else{p.log("The field type: ["+E+"] couldn't be found.");}return null;},_getFieldParentByNode:function(C){var A=this;var D=C.ancestor(DOT+CSS_FORM_BUILDER_FIELD);if(D){return D.getData(FIELD);}return A;},_getFieldParentNode:function(D){var A=this;var C=D.get(PARENT);if(z(C)){return C.get(B);}return A.get(DROP_CONTAINER_NODE);},_indexAvaliableFieldsTypes:function(C){var A=this;p.each(C,function(F,E,G){var D=(F.name||F.type||(F.type+(++p.Env._uidx)));A.availableFieldsTypes[D]=F;});},_onClickFieldDelete:function(D){var A=this;var G=D.currentTarget;var E=G.ancestor(DOT+CSS_FORM_BUILDER_FIELD);var F=E.getData(FIELD);if(F){var C=A.selectedField;if(F==C||F.contains(C,true)){A._tabs.selectTab(TAB_INDEX_DRAG);}F.set(SELECTED,false);F.get(PARENT).removeField(F);}},_onClickFieldDuplicate:function(C){var A=this;var F=C.currentTarget;var D=F.ancestor(DOT+CSS_FORM_BUILDER_FIELD);var E=D.getData(FIELD);if(E){A.duplicateField(E);}},_onClickFieldEdit:function(C){var A=this;var F=C.currentTarget;var D=F.ancestor(DOT+CSS_FORM_BUILDER_FIELD);var E=D.getData(FIELD);if(E){A.selectField(E);}},_onClickSettingsButton:function(D){var A=this;var E=D.currentTarget;if(E.hasClass(CSS_FORM_BUILDER_BUTTON_SAVE)){var C=A.selectedField;if(C){C.saveSettings();}}A._tabs.selectTab(TAB_INDEX_DRAG);},_onDbClickField:function(C){var A=this;var E=C.target;if(E.test(INVALID_DBCLICK_TARGETS)){C.stopPropagation();return false;}if(!E.getData(FIELD)){E=E.ancestor(DOT+CSS_FORM_BUILDER_FIELD);}if(E){var D=E.getData(FIELD);if(D){A.selectField(D);}}return false;},_onDragEndDragNestedList:function(G){var C=this;var F=G.target;var A=F.get(NODE);var E=C.dragContainerNode;var D=C.dropContainerNode;var I=D.one(DOT+CSS_FORM_BUILDER_DRAG_NODE);if(I){var H=C._dropField(I);if(C.get(y)){C.selectField(H);}}else{F.set(NODE,C.originalNode);}if(E.contains(A)&&E.contains(C.originalNode)){A.remove();}},_onDragEndDropNestedList:function(E){var C=this;var D=E.target;var A=D.get(NODE);if(A.hasClass(CSS_FORM_BUILDER_FIELD)){C._dropField(A);}},_onDragStartDragNestedList:function(F){var C=this;var E=F.target;var A=E.get(NODE);var G=A.clone();G.placeBefore(A);E.set(NODE,G);G.attr(ID,EMPTY_STR);G.show();A.removeClass(CSS_DD_DRAGGING);A.show();C.originalNode=A;var D=p.merge(C.get(NESTED_LIST),{nodes:G});(new p.NestedList(D));},_onMouseEnterField:function(C){var A=this;var D=C.currentTarget;var E=D.getData(FIELD);if(E){A._toggleFieldButtonsNode(E,true);}},_onMouseLeaveField:function(C){var A=this;var D=C.currentTarget;var E=D.getData(FIELD);var F=false;if(E){if(E.get(SELECTED)){F=true;}A._toggleFieldButtonsNode(E,F);}},_renderField:function(C,D,F){var A=this;var G=C.get(DROP_CONTAINER_NODE);if(z(C)){G=C.get(DROP_ZONE_NODE);}var E=p.Node.create(TPL_FIELD_BOUNDING_BOX);var H=C.get(FIELDS);if(H.length>0){G.insert(E,D);}else{G.append(E);}F=p.merge(F,{boundingBox:E,formBuilder:A,after:{render:function(){E.removeClass(CSS_HELPER_HIDDEN);}}});return A._getFieldInstance(F).render();},_syncDefaultMessage:function(){var A=this;if(!A.dropContainerNode.hasChildNodes()){var C=A.get(STRINGS);var D=A.get(DEFAULT_MESSAGE_NODE);D.setContent(C["stringDefaultMessage"]);A.dropContainerNode.append(D);}},_syncNestedList:function(){var A=this;A._syncNodes();A._dragNestedList.addAll(A.dragNodes);A._dropNestedList.addAll(A.dropNodes);},_syncNodes:function(){var A=this;var D=A.dragContainerNode;var C=A.dropContainerNode;A.dragNodes=D.all(DOT+CSS_FORM_BUILDER_FIELD);A.dropNodes=C.all([DOT+CSS_FORM_BUILDER_FIELD,DOT+CSS_FORM_BUILDER_DEFAULT_MESSAGE].join(k));},_syncSelectedFieldUI:function(F){var A=this;var E=F.get(SELECTED);var D=F.get(B);var C=A.selectedField;D.toggleClass(CSS_FORM_BUILDER_FIELD_SELECTED,E);if(!E&&F.contains(C)){E=true;}A._toggleFieldButtonsNode(F,E);},_toggleFieldButtonsNode:function(D,E){var A=this;var C=D.get(e);if(C){C.toggleClass(CSS_HELPER_HIDDEN,!E);}},_valueDragNodesList:function(){var A=this;var D=A.availableFieldsTypes;var C=[];p.each(D,function(F,E,G){C.push(p.substitute(TPL_DRAG_NODE,{icon:F.iconClass||DEFAULT_ICON_CLASS,label:F.label,name:E,type:F.type}));});return p.NodeList.create(C.join(EMPTY_STR));}}});p.FormBuilder=s;p.FormBuilder.types={};},"@VERSION@",{requires:["aui-base","aui-button-item","aui-nested-list","aui-tabs","substitute"],skinnable:true});