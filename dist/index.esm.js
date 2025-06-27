import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Text, TooltipTrigger as TooltipTrigger$1, Tooltip as Tooltip$1, OverlayArrow, Label as Label$1, Heading as Heading$1, Link as Link$1, Button as Button$1, ProgressBar as ProgressBar$1, ModalOverlay, Modal, Dialog, MenuItem, RootMenuTriggerStateContext, Separator, Header, MenuTrigger, Popover as Popover$1, Menu as Menu$1, SubmenuTrigger, MenuSection, DialogTrigger as DialogTrigger$1, Provider, LabelContext, TextContext, useContextProps, CalendarContext, CheckboxGroupStateContext, Checkbox as Checkbox$1, CheckboxGroup as CheckboxGroup$1, ColorSwatch as ColorSwatch$1, ColorSwatchPickerItem as ColorSwatchPickerItem$1, parseColor, ColorSwatchPicker as ColorSwatchPicker$1, DatePicker as DatePicker$1, Group, DateInput, DateSegment, FileTrigger as FileTrigger$1, DropZone, SearchField as SearchField$1, Input, Breadcrumbs as Breadcrumbs$1, Breadcrumb, Tabs as Tabs$1, TabList, Tab, TabPanel, TextField as TextField$1, RadioGroupStateContext, Radio as Radio$1, RadioGroup as RadioGroup$1, Slider as Slider$1, SliderTrack, SliderThumb, SliderOutput, TextArea as TextArea$1, Switch, ButtonContext } from 'react-aria-components';
import { isMac, useResizeObserver, mergeRefs, useSlotId } from '@react-aria/utils';
import { useRef, useImperativeHandle, useCallback, createContext, useContext, useMemo, useState, useEffect, useId, Fragment as Fragment$1, createElement, memo, Children, cloneElement, isValidElement } from 'react';
import { useFocusRing, useButton, mergeProps, I18nProvider as I18nProvider$1, useDisclosure, useFocusable, FocusRing, chain, useCalendarCell, useCalendarGrid, useHover, useFilter, useCalendar, useDateSegment, useTimeField, useLabel } from 'react-aria';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import 'dayjs/locale/en-ie';
import 'dayjs/locale/en-gb';
import 'dayjs/locale/nb';
import 'dayjs/locale/fi';
import 'dayjs/locale/da';
import 'dayjs/locale/nl';
import 'dayjs/locale/de';
import 'dayjs/locale/sv';
import 'dayjs/locale/et';
import 'dayjs/locale/fr';
import 'dayjs/locale/it';
import 'dayjs/locale/pl';
import 'dayjs/locale/ru';
import 'dayjs/locale/es';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isBetween from 'dayjs/plugin/isBetween';
import duration from 'dayjs/plugin/duration';
import { getLocalTimeZone, isSameDay, today, parseDate, createCalendar, CalendarDate, parseDateTime, now, CalendarDateTime, Time, toCalendarDateTime, toCalendarDate, toTime, isToday } from '@internationalized/date';
import { useDisclosureState, useDisclosureGroupState, useCalendarState, useTimeFieldState } from 'react-stately';
import { toast, useToasterStore, useToaster } from 'react-hot-toast/headless';
import { useSensors, useSensor, MouseSensor, TouchSensor, KeyboardSensor, DndContext, closestCenter, closestCorners, getFirstCollision, DragOverlay, useDroppable, MeasuringStrategy, useDraggable } from '@dnd-kit/core';
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { useSortable, sortableKeyboardCoordinates, SortableContext, verticalListSortingStrategy, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { flexRender, useReactTable, getCoreRowModel, getExpandedRowModel, getGroupedRowModel, isRowSelected, isSubRowSelected } from '@tanstack/react-table';
export { createColumnHelper as createDataTableColumnHelper } from '@tanstack/react-table';
import { ariaHideOutside } from '@react-aria/overlays';
import { useCombobox, useSelect, useMultipleSelection } from 'downshift';
import { announce } from '@react-aria/live-announcer';
import { LocalizedStringDictionary } from '@internationalized/string';
import codes from 'country-calling-code';
import { mergeAttributes, useCurrentEditor, NodeViewWrapper, ReactNodeViewRenderer, EditorProvider, BubbleMenu } from '@tiptap/react';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Underline from '@tiptap/extension-underline';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text$1 from '@tiptap/extension-text';
import ListItem$1 from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import Link$2 from '@tiptap/extension-link';
import BaseHeading from '@tiptap/extension-heading';
import { Node, mergeAttributes as mergeAttributes$1 } from '@tiptap/core';
import { createPortal } from 'react-dom';
import { Pressable } from '@react-aria/interactions';
import sortBy from 'lodash.sortby';
import { coreTokens } from '@tan3li/d-tokens';
import Highcharts from 'highcharts';
import 'highcharts/modules/accessibility';
import { HighchartsReact } from 'highcharts-react-official';
import merge from 'lodash.merge';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var isArray = Array.isArray;
function isUndefined(obj) {
    // eslint-disable-next-line no-void
    return obj === void 0;
}
function isNullOrUndefined(obj) {
    return obj === null || isUndefined(obj);
}
function isEmptyString(obj) {
    return isNullOrUndefined(obj) || obj === '';
}
function isEmptyArray(obj) {
    return isNullOrUndefined(obj) || (isArray(obj) && obj.length === 0);
}
function isNumber(num) {
    return typeof num === 'number';
}
function isObject(obj) {
    return typeof obj === 'object';
}

function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var argsLen = args.length;
    var classes = [];
    var argType, arg, key;
    for (var i = 0; i < argsLen; i++) {
        arg = args[i];
        if (!isEmptyString(arg)) {
            argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            }
            else if (argType === 'object') {
                for (key in arg) {
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}

var add = "add.svg";

var accountcirclefilled = "accountcirclefilled.svg";

var addcircle = "addcircle.svg";

var addcirclefilled = "addcirclefilled.svg";

var addfilled = "addfilled.svg";

var arrowback = "arrowback.svg";

var arrowbackfilled = "arrowbackfilled.svg";

var arrowcircledownfilled = "arrowcircledownfilled.svg";

var arrowcircleleft = "arrowcircleleft.svg";

var arrowcircleleftfilled = "arrowcircleleftfilled.svg";

var arrowcircleright = "arrowcircleright.svg";

var arrowcirclerightfilled = "arrowcirclerightfilled.svg";

var arrowcircleup = "arrowcircleup.svg";

var arrowcircleupfilled = "arrowcircleupfilled.svg";

var arrowdropdown = "arrowdropdown.svg";

var arrowdropdownfilled = "arrowdropdownfilled.svg";

var arrowdropup = "arrowdropup.svg";

var arrowdropupfilled = "arrowdropupfilled.svg";

var arrowforward = "arrowforward.svg";

var arrowforwardfilled = "arrowforwardfilled.svg";

var arrowleft = "arrowleft.svg";

var arrowleftfilled = "arrowleftfilled.svg";

var arrowlineleft = "arrowlineleft.svg";

var arrowlineleftfilled = "arrowlineleftfilled.svg";

var arrowlineright = "arrowlineright.svg";

var arrowlinerightfilled = "arrowlinerightfilled.svg";

var arrowoutward = "arrowoutward.svg";

var arrowoutwardfilled = "arrowoutwardfilled.svg";

var arrowright = "arrowright.svg";

var arrowrightfilled = "arrowrightfilled.svg";

var barchartalt = "barchartalt.svg";

var barchartaltfilled = "barchartaltfilled.svg";

var block = "block.svg";

var blockfilled = "blockfilled.svg";

var businesscenter = "businesscenter.svg";

var businesscenterfilled = "businesscenterfilled.svg";

var calendar = "calendar.svg";

var calendarfilled = "calendarfilled.svg";

var calendartoday = "calendartoday.svg";

var calendartodayfilled = "calendartodayfilled.svg";

var calendarviewmonth = "calendarviewmonth.svg";

var calendarviewmonthfilled = "calendarviewmonthfilled.svg";

var calendarviewweek = "calendarviewweek.svg";

var calendarviewweekfilled = "calendarviewweekfilled.svg";

var call = "call.svg";

var callfilled = "callfilled.svg";

var cancel = "cancel.svg";

var cancelfilled = "cancelfilled.svg";

var check = "check.svg";

var checkcircle = "checkcircle.svg";

var checkcirclefilled = "checkcirclefilled.svg";

var checkfilled = "checkfilled.svg";

var chevronleft = "chevronleft.svg";

var chevronleftfilled = "chevronleftfilled.svg";

var chevronright = "chevronright.svg";

var chevronrightfilled = "chevronrightfilled.svg";

var clockclockwise = "clockclockwise.svg";

var clockclockwisefilled = "clockclockwisefilled.svg";

var close = "close.svg";

var closefilled = "closefilled.svg";

var cloud = "cloud.svg";

var clouddone = "clouddone.svg";

var clouddonefilled = "clouddonefilled.svg";

var cloudfilled = "cloudfilled.svg";

var cloudoff = "cloudoff.svg";

var cloudofffilled = "cloudofffilled.svg";

var comment = "comment.svg";

var commentfilled = "commentfilled.svg";

var contactsupport = "contactsupport.svg";

var contactsupportfilled = "contactsupportfilled.svg";

var contentpaste = "contentpaste.svg";

var contentpastefilled = "contentpastefilled.svg";

var copyall = "copyall.svg";

var copyallfilled = "copyallfilled.svg";

var corporatefare = "corporatefare.svg";

var corporatefarefilled = "corporatefarefilled.svg";

var cycle = "cycle.svg";

var cyclefilled = "cyclefilled.svg";

var darkmodefilled = "darkmodefilled.svg";

var _delete = "delete.svg";

var deletefilled = "deletefilled.svg";

var description = "description.svg";

var descriptionfilled = "descriptionfilled.svg";

var docktoright = "docktoright.svg";

var docktorightfilled = "docktorightfilled.svg";

var dollar = "dollar.svg";

var dollarfilled = "dollarfilled.svg";

var draft = "draft.svg";

var draftfilled = "draftfilled.svg";

var draghandle = "draghandle.svg";

var draghandlefilled = "draghandlefilled.svg";

var dragindicator = "dragindicator.svg";

var dragindicatorfilled = "dragindicatorfilled.svg";

var edit = "edit.svg";

var editfilled = "editfilled.svg";

var emergencyhome = "emergencyhome.svg";

var emergencyhomefilled = "emergencyhomefilled.svg";

var error = "error.svg";

var errorfilled = "errorfilled.svg";

var euro = "euro.svg";

var eurofilled = "eurofilled.svg";

var expandless = "expandless.svg";

var expandlessfilled = "expandlessfilled.svg";

var expandmore = "expandmore.svg";

var expandmorefilled = "expandmorefilled.svg";

var favorite = "favorite.svg";

var favoritefilled = "favoritefilled.svg";

var filepresent = "filepresent.svg";

var filepresentfilled = "filepresentfilled.svg";

var fingerprint = "fingerprint.svg";

var fingerprintfilled = "fingerprintfilled.svg";

var flightsmode = "flightsmode.svg";

var flightsmodefilled = "flightsmodefilled.svg";

var formatlistbullets = "formatlistbullets.svg";

var formatlistbulletsfilled = "formatlistbulletsfilled.svg";

var formatlistnumbers = "formatlistnumbers.svg";

var formatlistnumbersfilled = "formatlistnumbersfilled.svg";

var gear = "gear.svg";

var gearfilled = "gearfilled.svg";

var globe = "globe.svg";

var globefilled = "globefilled.svg";

var group = "group.svg";

var groupfilled = "groupfilled.svg";

var headsetmic = "headsetmic.svg";

var headsetmicfilled = "headsetmicfilled.svg";

var help = "help.svg";

var helpfilled = "helpfilled.svg";

var history = "history.svg";

var historyfilled = "historyfilled.svg";

var house = "house.svg";

var housefilled = "housefilled.svg";

var imagesmode = "imagesmode.svg";

var imagesmodefilled = "imagesmodefilled.svg";

var info = "info.svg";

var infofilled = "infofilled.svg";

var inputcheck = "inputcheck.svg";

var key = "key.svg";

var keyfilled = "keyfilled.svg";

var language = "language.svg";

var languagefilled = "languagefilled.svg";

var lightmode = "lightmode.svg";

var lightmodefilled = "lightmodefilled.svg";

var link = "link.svg";

var linkfilled = "linkfilled.svg";

var lists = "lists.svg";

var listsfilled = "listsfilled.svg";

var locationon = "locationon.svg";

var locationonfilled = "locationonfilled.svg";

var lock = "lock.svg";

var lockfilled = "lockfilled.svg";

var lockopen = "lockopen.svg";

var lockopenfilled = "lockopenfilled.svg";

var lockperson = "lockperson.svg";

var lockpersonfilled = "lockpersonfilled.svg";

var login = "login.svg";

var loginfilled = "loginfilled.svg";

var logout = "logout.svg";

var logoutfilled = "logoutfilled.svg";

var magnifyingglass = "magnifyingglass.svg";

var magnifyingglassfilled = "magnifyingglassfilled.svg";

var mail = "mail.svg";

var mailfilled = "mailfilled.svg";

var managesearch = "managesearch.svg";

var managesearchfilled = "managesearchfilled.svg";

var menu = "menu.svg";

var menufilled = "menufilled.svg";

var mimo = "mimo.svg";

var mimofilled = "mimofilled.svg";

var minuscircle = "minuscircle.svg";

var minuscirclefilled = "minuscirclefilled.svg";

var morevert = "morevert.svg";

var morevertfilled = "morevertfilled.svg";

var notifications = "notifications.svg";

var notificationsfilled = "notificationsfilled.svg";

var online = "online.svg";

var onlinefilled = "onlinefilled.svg";

var openinnew = "openinnew.svg";

var openinnewfilled = "openinnewfilled.svg";

var pace = "pace.svg";

var pacefilled = "pacefilled.svg";

var panzoom = "panzoom.svg";

var panzoomfilled = "panzoomfilled.svg";

var pause = "pause.svg";

var pausefilled = "pausefilled.svg";

var person = "person.svg";

var personalplaces = "personalplaces.svg";

var personalplacesfilled = "personalplacesfilled.svg";

var personfilled = "personfilled.svg";

var photocamera = "photocamera.svg";

var photocamerafilled = "photocamerafilled.svg";

var placeholder = "placeholder.svg";

var placeholderfilled = "placeholderfilled.svg";

var playarrow = "playarrow.svg";

var playarrowfilled = "playarrowfilled.svg";

var remove = "remove.svg";

var removefilled = "removefilled.svg";

var requestpage = "requestpage.svg";

var requestpagefilled = "requestpagefilled.svg";

var schedule = "schedule.svg";

var schedulefilled = "schedulefilled.svg";

var sell = "sell.svg";

var sellfilled = "sellfilled.svg";

var send = "send.svg";

var sendfilled = "sendfilled.svg";

var signalcellularalt = "signalcellularalt.svg";

var signalcellularaltfilled = "signalcellularaltfilled.svg";

var star = "star.svg";

var starfilled = "starfilled.svg";

var statuslight = "statuslight.svg";

var statuslightfilled = "statuslightfilled.svg";

var stop = "stop.svg";

var stopfilled = "stopfilled.svg";

var textb = "textb.svg";

var textbfilled = "textbfilled.svg";

var textitalic = "textitalic.svg";

var textitalicfilled = "textitalicfilled.svg";

var textunderline = "textunderline.svg";

var textunderlinefilled = "textunderlinefilled.svg";

var timer = "timer.svg";

var timerfilled = "timerfilled.svg";

var tune = "tune.svg";

var tunefilled = "tunefilled.svg";

var unfoldless = "unfoldless.svg";

var unfoldlessfilled = "unfoldlessfilled.svg";

var unfoldmore = "unfoldmore.svg";

var unfoldmorefilled = "unfoldmorefilled.svg";

var verified = "verified.svg";

var verifiedfilled = "verifiedfilled.svg";

var viewcomfy = "viewcomfy.svg";

var viewcomfyfilled = "viewcomfyfilled.svg";

var viewkanban = "viewkanban.svg";

var viewkanbanfilled = "viewkanbanfilled.svg";

var viewtimeline = "viewtimeline.svg";

var viewtimelinefilled = "viewtimelinefilled.svg";

var visibility = "visibility.svg";

var visibilityfilled = "visibilityfilled.svg";

var visibilityoff = "visibilityoff.svg";

var visibilityofffilled = "visibilityofffilled.svg";

var warning = "warning.svg";

var warningfilled = "warningfilled.svg";

var wifioff = "wifioff.svg";

var wifiofffilled = "wifiofffilled.svg";

var zoomoutmap = "zoomoutmap.svg";

var zoomoutmapfilled = "zoomoutmapfilled.svg";

var arrowdownward = "arrowdownward.svg";

var arrowdownwardfilled = "arrowdownwardfilled.svg";

var arrowupward = "arrowupward.svg";

var arrowupwardfilled = "arrowupwardfilled.svg";

var doublearrowdown = "doublearrowdown.svg";

var doublearrowdownfilled = "doublearrowdownfilled.svg";

var doublearrowleft = "doublearrowleft.svg";

var doublearrowleftfilled = "doublearrowleftfilled.svg";

var doublearrowright = "doublearrowright.svg";

var doublearrowrightfilled = "doublearrowrightfilled.svg";

var doublearrowup = "doublearrowup.svg";

var doublearrowupfilled = "doublearrowupfilled.svg";

var filteralt = "filteralt.svg";

var filteraltfilled = "filteraltfilled.svg";

var filteraltoff = "filteraltoff.svg";

var filteraltofffilled = "filteraltofffilled.svg";

var filterlist = "filterlist.svg";

var filterlistfilled = "filterlistfilled.svg";

var filterlistoff = "filterlistoff.svg";

var filterlistofffilled = "filterlistofffilled.svg";

var sparkle = "sparkle.svg";

var sparklefilled = "sparklefilled.svg";

var accountbalance = "accountbalance.svg";

var accountbalancefilled = "accountbalancefilled.svg";

var accounttree = "accounttree.svg";

var accounttreefilled = "accounttreefilled.svg";

var attachfile = "attachfile.svg";

var attachfilefilled = "attachfilefilled.svg";

var attachment = "attachment.svg";

var attachmentfilled = "attachmentfilled.svg";

var barchart = "barchart.svg";

var barchartfilled = "barchartfilled.svg";

var build = "build.svg";

var buildfilled = "buildfilled.svg";

var cached = "cached.svg";

var cachedfilled = "cachedfilled.svg";

var dashboard = "dashboard.svg";

var dashboardfilled = "dashboardfilled.svg";

var datatable = "datatable.svg";

var datatablefilled = "datatablefilled.svg";

var detachfile = "detachfile.svg";

var detachfilefilled = "detachfilefilled.svg";

var download = "download.svg";

var downloadfilled = "downloadfilled.svg";

var editoff = "editoff.svg";

var editofffilled = "editofffilled.svg";

var flag = "flag.svg";

var flagfilled = "flagfilled.svg";

var folderopen = "folderopen.svg";

var folderopenfilled = "folderopenfilled.svg";

var gridview = "gridview.svg";

var gridviewfilled = "gridviewfilled.svg";

var layers = "layers.svg";

var layersfilled = "layersfilled.svg";

var linkalt = "linkalt.svg";

var linkaltfilled = "linkaltfilled.svg";

var linkoff = "linkoff.svg";

var linkofffilled = "linkofffilled.svg";

var morehoriz = "morehoriz.svg";

var morehorizfilled = "morehorizfilled.svg";

var number = "number.svg";

var numberfilled = "numberfilled.svg";

var percentage = "percentage.svg";

var percentagefilled = "percentagefilled.svg";

var piechart = "piechart.svg";

var piechartfilled = "piechartfilled.svg";

var quickreferenceall = "quickreferenceall.svg";

var quickreferenceallfilled = "quickreferenceallfilled.svg";

var redo = "redo.svg";

var redofilled = "redofilled.svg";

var share = "share.svg";

var sharefilled = "sharefilled.svg";

var swaphorizontal = "swaphorizontal.svg";

var swaphorizontalfilled = "swaphorizontalfilled.svg";

var text = "text.svg";

var textalt = "textalt.svg";

var textaltfilled = "textaltfilled.svg";

var textfilled = "textfilled.svg";

var trendingdown = "trendingdown.svg";

var trendingdownfilled = "trendingdownfilled.svg";

var trendingup = "trendingup.svg";

var trendingupfilled = "trendingupfilled.svg";

var undo = "undo.svg";

var undofilled = "undofilled.svg";

var upload = "upload.svg";

var uploadfilled = "uploadfilled.svg";

var variables = "variables.svg";

var variablesfilled = "variablesfilled.svg";

var zoomin = "zoomin.svg";

var zoominfilled = "zoominfilled.svg";

var zoomout = "zoomout.svg";

var zoomoutfilled = "zoomoutfilled.svg";

var accountbalancewallet = "accountbalancewallet.svg";

var accountbalancewalletfilled = "accountbalancewalletfilled.svg";

var assignmentadd = "assignmentadd.svg";

var assignmentaddfilled = "assignmentaddfilled.svg";

var bank = "bank.svg";

var bankfilled = "bankfilled.svg";

var beachaccess = "beachaccess.svg";

var beachaccessfilled = "beachaccessfilled.svg";

var calculate = "calculate.svg";

var calculatefilled = "calculatefilled.svg";

var category = "category.svg";

var categoryfilled = "categoryfilled.svg";

var collectionsbookmark = "collectionsbookmark.svg";

var collectionsbookmarkfilled = "collectionsbookmarkfilled.svg";

var compress = "compress.svg";

var compressfilled = "compressfilled.svg";

var conversionpath = "conversionpath.svg";

var conversionpathfilled = "conversionpathfilled.svg";

var datetime = "datetime.svg";

var datetimefilled = "datetimefilled.svg";

var deployedcode = "deployedcode.svg";

var deployedcodefilled = "deployedcodefilled.svg";

var enable = "enable.svg";

var enablefilled = "enablefilled.svg";

var expand = "expand.svg";

var expandfilled = "expandfilled.svg";

var filecss = "filecss.svg";

var filecssfilled = "filecssfilled.svg";

var filecsv = "filecsv.svg";

var filecsvfilled = "filecsvfilled.svg";

var filedoc = "filedoc.svg";

var filedocfilled = "filedocfilled.svg";

var filehtml = "filehtml.svg";

var filehtmlfilled = "filehtmlfilled.svg";

var filejpg = "filejpg.svg";

var filejpgfilled = "filejpgfilled.svg";

var filejs = "filejs.svg";

var filejsfilled = "filejsfilled.svg";

var filejsx = "filejsx.svg";

var filejsxfilled = "filejsxfilled.svg";

var filepdf = "filepdf.svg";

var filepdffilled = "filepdffilled.svg";

var filepng = "filepng.svg";

var filepngfilled = "filepngfilled.svg";

var fileppt = "fileppt.svg";

var filepptfilled = "filepptfilled.svg";

var filers = "filers.svg";

var filersfilled = "filersfilled.svg";

var filesql = "filesql.svg";

var filesqlfilled = "filesqlfilled.svg";

var filesvg = "filesvg.svg";

var filesvgfilled = "filesvgfilled.svg";

var filets = "filets.svg";

var filetsfilled = "filetsfilled.svg";

var filetsx = "filetsx.svg";

var filetsxfilled = "filetsxfilled.svg";

var filevue = "filevue.svg";

var filevuefilled = "filevuefilled.svg";

var filevideo = "filevideo.svg";

var filevideofilled = "filevideofilled.svg";

var filexls = "filexls.svg";

var filexlsfilled = "filexlsfilled.svg";

var filezip = "filezip.svg";

var filezipfilled = "filezipfilled.svg";

var forum = "forum.svg";

var forumfilled = "forumfilled.svg";

var homework = "homework.svg";

var homeworkfilled = "homeworkfilled.svg";

var hourglassdisabled = "hourglassdisabled.svg";

var hourglassdisabledfilled = "hourglassdisabledfilled.svg";

var inventory = "inventory.svg";

var inventoryfilled = "inventoryfilled.svg";

var movetouser = "movetouser.svg";

var movetouserfilled = "movetouserfilled.svg";

var otheradmission = "otheradmission.svg";

var otheradmissionfilled = "otheradmissionfilled.svg";

var palette = "palette.svg";

var palettefilled = "palettefilled.svg";

var payments = "payments.svg";

var paymentsfilled = "paymentsfilled.svg";

var playlistaddcheck = "playlistaddcheck.svg";

var playlistaddcheckfilled = "playlistaddcheckfilled.svg";

var receipt = "receipt.svg";

var receiptfilled = "receiptfilled.svg";

var rotateright = "rotateright.svg";

var rotaterightfilled = "rotaterightfilled.svg";

var shoppingcart = "shoppingcart.svg";

var shoppingcartfilled = "shoppingcartfilled.svg";

var smarttoy = "smarttoy.svg";

var smarttoyfilled = "smarttoyfilled.svg";

var split = "split.svg";

var splitfilled = "splitfilled.svg";

var store = "store.svg";

var storefilled = "storefilled.svg";

var tagsimple = "tagsimple.svg";

var tagsimplefilled = "tagsimplefilled.svg";

var viewday = "viewday.svg";

var viewdayfilled = "viewdayfilled.svg";

var areachart = "areachart.svg";

var areachartfilled = "areachartfilled.svg";

var areachartfull = "areachartfull.svg";

var areachartfullfilled = "areachartfullfilled.svg";

var barchartstacked = "barchartstacked.svg";

var barchartstackedfilled = "barchartstackedfilled.svg";

var barchartstackedfull = "barchartstackedfull.svg";

var barchartstackedfullfilled = "barchartstackedfullfilled.svg";

var candlestickchart = "candlestickchart.svg";

var candlestickchartfilled = "candlestickchartfilled.svg";

var columnchart = "columnchart.svg";

var columnchartfilled = "columnchartfilled.svg";

var columnchartstacked = "columnchartstacked.svg";

var columnchartstackedfilled = "columnchartstackedfilled.svg";

var columnchartstackedfull = "columnchartstackedfull.svg";

var columnchartstackedfullfilled = "columnchartstackedfullfilled.svg";

var combinationchart = "combinationchart.svg";

var combinationchartfilled = "combinationchartfilled.svg";

var currency = "currency.svg";

var currencyfilled = "currencyfilled.svg";

var donutchart = "donutchart.svg";

var donutchartfilled = "donutchartfilled.svg";

var genericchart = "genericchart.svg";

var genericchartfilled = "genericchartfilled.svg";

var kpipin = "kpipin.svg";

var kpipinfilled = "kpipinfilled.svg";

var linechart = "linechart.svg";

var linechartfilled = "linechartfilled.svg";

var matrixchart = "matrixchart.svg";

var matrixchartfilled = "matrixchartfilled.svg";

var pivottablechart = "pivottablechart.svg";

var pivottablechartfilled = "pivottablechartfilled.svg";

var scatterchart = "scatterchart.svg";

var scatterchartfilled = "scatterchartfilled.svg";

var speed = "speed.svg";

var speedfilled = "speedfilled.svg";

var tablechart = "tablechart.svg";

var toggleon = "toggleon.svg";

var toggleonfilled = "toggleonfilled.svg";

var above = "above.svg";

var abovefilled = "abovefilled.svg";

var addition = "addition.svg";

var additionfilled = "additionfilled.svg";

var astrophotographyauto = "astrophotographyauto.svg";

var astrophotographyautofilled = "astrophotographyautofilled.svg";

var below = "below.svg";

var belowfilled = "belowfilled.svg";

var between = "between.svg";

var betweenfilled = "betweenfilled.svg";

var division = "division.svg";

var divisionalt = "divisionalt.svg";

var divisionaltfilled = "divisionaltfilled.svg";

var divisionfilled = "divisionfilled.svg";

var doneall = "doneall.svg";

var doneallfilled = "doneallfilled.svg";

var editcalendar = "editcalendar.svg";

var editcalendarfilled = "editcalendarfilled.svg";

var electricalservices = "electricalservices.svg";

var electricalservicesfilled = "electricalservicesfilled.svg";

var equals = "equals.svg";

var equalsfilled = "equalsfilled.svg";

var eventavailable = "eventavailable.svg";

var eventavailablefilled = "eventavailablefilled.svg";

var formula = "formula.svg";

var formulafilled = "formulafilled.svg";

var leftparenthesis = "leftparenthesis.svg";

var leftparenthesisfilled = "leftparenthesisfilled.svg";

var menuopen = "menuopen.svg";

var menuopenfilled = "menuopenfilled.svg";

var multiplication = "multiplication.svg";

var multiplicationfilled = "multiplicationfilled.svg";

var personcancel = "personcancel.svg";

var personcancelfilled = "personcancelfilled.svg";

var rightparenthesis = "rightparenthesis.svg";

var rightparenthesisfilled = "rightparenthesisfilled.svg";

var scaleindicator = "scaleindicator.svg";

var scaleindicatoralt = "scaleindicatoralt.svg";

var scaleindicatoraltfilled = "scaleindicatoraltfilled.svg";

var scaleindicatorfilled = "scaleindicatorfilled.svg";

var signpost = "signpost.svg";

var signpostfilled = "signpostfilled.svg";

var subtraction = "subtraction.svg";

var subtractionfilled = "subtractionfilled.svg";

var swatch = "swatch.svg";

var swatchfilled = "swatchfilled.svg";

var target = "target.svg";

var targetfilled = "targetfilled.svg";

var taskalt = "taskalt.svg";

var taskaltfilled = "taskaltfilled.svg";

var ghost = "ghost.svg";

var ghostfilled = "ghostfilled.svg";

var docktoleft = "docktoleft.svg";

var docktoleftfilled = "docktoleftfilled.svg";

var notepad = "notepad.svg";

var notepadfilled = "notepadfilled.svg";

var directionscar = "directionscar.svg";

var directionscarfilled = "directionscarfilled.svg";

var book = "book.svg";

var bookfilled = "bookfilled.svg";

var subdirectory = "subdirectory.svg";

var subdirectoryfilled = "subdirectoryfilled.svg";

var thumbdown = "thumbdown.svg";

var thumbdownfilled = "thumbdownfilled.svg";

var thumbup = "thumbup.svg";

var thumbupfilled = "thumbupfilled.svg";

var SvgComponents = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Above: above,
    AboveFilled: abovefilled,
    AccountBalance: accountbalance,
    AccountBalanceFilled: accountbalancefilled,
    AccountBalanceWallet: accountbalancewallet,
    AccountBalanceWalletFilled: accountbalancewalletfilled,
    AccountCircleFilled: accountcirclefilled,
    AccountTree: accounttree,
    AccountTreeFilled: accounttreefilled,
    Add: add,
    AddCircle: addcircle,
    AddCircleFilled: addcirclefilled,
    AddFilled: addfilled,
    Addition: addition,
    AdditionFilled: additionfilled,
    AreaChart: areachart,
    AreaChartFilled: areachartfilled,
    AreaChartFull: areachartfull,
    AreaChartFullFilled: areachartfullfilled,
    ArrowBack: arrowback,
    ArrowBackFilled: arrowbackfilled,
    ArrowCircleDownFilled: arrowcircledownfilled,
    ArrowCircleLeft: arrowcircleleft,
    ArrowCircleLeftFilled: arrowcircleleftfilled,
    ArrowCircleRight: arrowcircleright,
    ArrowCircleRightFilled: arrowcirclerightfilled,
    ArrowCircleUp: arrowcircleup,
    ArrowCircleUpFilled: arrowcircleupfilled,
    ArrowDownward: arrowdownward,
    ArrowDownwardFilled: arrowdownwardfilled,
    ArrowDropDown: arrowdropdown,
    ArrowDropDownFilled: arrowdropdownfilled,
    ArrowDropUp: arrowdropup,
    ArrowDropUpFilled: arrowdropupfilled,
    ArrowForward: arrowforward,
    ArrowForwardFilled: arrowforwardfilled,
    ArrowLeft: arrowleft,
    ArrowLeftFilled: arrowleftfilled,
    ArrowLineLeft: arrowlineleft,
    ArrowLineLeftFilled: arrowlineleftfilled,
    ArrowLineRight: arrowlineright,
    ArrowLineRightFilled: arrowlinerightfilled,
    ArrowOutward: arrowoutward,
    ArrowOutwardFilled: arrowoutwardfilled,
    ArrowRight: arrowright,
    ArrowRightFilled: arrowrightfilled,
    ArrowUpward: arrowupward,
    ArrowUpwardFilled: arrowupwardfilled,
    AssignmentAdd: assignmentadd,
    AssignmentAddFilled: assignmentaddfilled,
    AstrophotographyAuto: astrophotographyauto,
    AstrophotographyAutoFilled: astrophotographyautofilled,
    AttachFile: attachfile,
    AttachFileFilled: attachfilefilled,
    Attachment: attachment,
    AttachmentFilled: attachmentfilled,
    Bank: bank,
    BankFilled: bankfilled,
    BarChart: barchart,
    BarChartAlt: barchartalt,
    BarChartAltFilled: barchartaltfilled,
    BarChartFilled: barchartfilled,
    BarChartStacked: barchartstacked,
    BarChartStackedFilled: barchartstackedfilled,
    BarChartStackedFull: barchartstackedfull,
    BarChartStackedFullFilled: barchartstackedfullfilled,
    BeachAccess: beachaccess,
    BeachAccessFilled: beachaccessfilled,
    Below: below,
    BelowFilled: belowfilled,
    Between: between,
    BetweenFilled: betweenfilled,
    Block: block,
    BlockFilled: blockfilled,
    Book: book,
    BookFilled: bookfilled,
    Build: build,
    BuildFilled: buildfilled,
    BusinessCenter: businesscenter,
    BusinessCenterFilled: businesscenterfilled,
    Cached: cached,
    CachedFilled: cachedfilled,
    Calculate: calculate,
    CalculateFilled: calculatefilled,
    Calendar: calendar,
    CalendarFilled: calendarfilled,
    CalendarToday: calendartoday,
    CalendarTodayFilled: calendartodayfilled,
    CalendarViewMonth: calendarviewmonth,
    CalendarViewMonthFilled: calendarviewmonthfilled,
    CalendarViewWeek: calendarviewweek,
    CalendarViewWeekFilled: calendarviewweekfilled,
    Call: call,
    CallFilled: callfilled,
    Cancel: cancel,
    CancelFilled: cancelfilled,
    CandlestickChart: candlestickchart,
    CandlestickChartFilled: candlestickchartfilled,
    Category: category,
    CategoryFilled: categoryfilled,
    Check: check,
    CheckCircle: checkcircle,
    CheckCircleFilled: checkcirclefilled,
    CheckFilled: checkfilled,
    ChevronLeft: chevronleft,
    ChevronLeftFilled: chevronleftfilled,
    ChevronRight: chevronright,
    ChevronRightFilled: chevronrightfilled,
    ClockClockwise: clockclockwise,
    ClockClockwiseFilled: clockclockwisefilled,
    Close: close,
    CloseFilled: closefilled,
    Cloud: cloud,
    CloudDone: clouddone,
    CloudDoneFilled: clouddonefilled,
    CloudFilled: cloudfilled,
    CloudOff: cloudoff,
    CloudOffFilled: cloudofffilled,
    CollectionsBookmark: collectionsbookmark,
    CollectionsBookmarkFilled: collectionsbookmarkfilled,
    ColumnChart: columnchart,
    ColumnChartFilled: columnchartfilled,
    ColumnChartStacked: columnchartstacked,
    ColumnChartStackedFilled: columnchartstackedfilled,
    ColumnChartStackedFull: columnchartstackedfull,
    ColumnChartStackedFullFilled: columnchartstackedfullfilled,
    CombinationChart: combinationchart,
    CombinationChartFilled: combinationchartfilled,
    Comment: comment,
    CommentFilled: commentfilled,
    Compress: compress,
    CompressFilled: compressfilled,
    ContactSupport: contactsupport,
    ContactSupportFilled: contactsupportfilled,
    ContentPaste: contentpaste,
    ContentPasteFilled: contentpastefilled,
    ConversionPath: conversionpath,
    ConversionPathFilled: conversionpathfilled,
    CopyAll: copyall,
    CopyAllFilled: copyallfilled,
    CorporateFare: corporatefare,
    CorporateFareFilled: corporatefarefilled,
    Currency: currency,
    CurrencyFilled: currencyfilled,
    Cycle: cycle,
    CycleFilled: cyclefilled,
    DarkModeFilled: darkmodefilled,
    Dashboard: dashboard,
    DashboardFilled: dashboardfilled,
    DataTable: datatable,
    DataTableFilled: datatablefilled,
    DateTime: datetime,
    DateTimeFilled: datetimefilled,
    Delete: _delete,
    DeleteFilled: deletefilled,
    DeployedCode: deployedcode,
    DeployedCodeFilled: deployedcodefilled,
    Description: description,
    DescriptionFilled: descriptionfilled,
    DetachFile: detachfile,
    DetachFileFilled: detachfilefilled,
    DirectionsCar: directionscar,
    DirectionsCarFilled: directionscarfilled,
    Division: division,
    DivisionAlt: divisionalt,
    DivisionAltFilled: divisionaltfilled,
    DivisionFilled: divisionfilled,
    DockToLeft: docktoleft,
    DockToLeftFilled: docktoleftfilled,
    DockToRight: docktoright,
    DockToRightFilled: docktorightfilled,
    Dollar: dollar,
    DollarFilled: dollarfilled,
    DoneAll: doneall,
    DoneAllFilled: doneallfilled,
    DonutChart: donutchart,
    DonutChartFilled: donutchartfilled,
    DoubleArrowDown: doublearrowdown,
    DoubleArrowDownFilled: doublearrowdownfilled,
    DoubleArrowLeft: doublearrowleft,
    DoubleArrowLeftFilled: doublearrowleftfilled,
    DoubleArrowRight: doublearrowright,
    DoubleArrowRightFilled: doublearrowrightfilled,
    DoubleArrowUp: doublearrowup,
    DoubleArrowUpFilled: doublearrowupfilled,
    Download: download,
    DownloadFilled: downloadfilled,
    Draft: draft,
    DraftFilled: draftfilled,
    DragHandle: draghandle,
    DragHandleFilled: draghandlefilled,
    DragIndicator: dragindicator,
    DragIndicatorFilled: dragindicatorfilled,
    Edit: edit,
    EditCalendar: editcalendar,
    EditCalendarFilled: editcalendarfilled,
    EditFilled: editfilled,
    EditOff: editoff,
    EditOffFilled: editofffilled,
    ElectricalServices: electricalservices,
    ElectricalServicesFilled: electricalservicesfilled,
    EmergencyHome: emergencyhome,
    EmergencyHomeFilled: emergencyhomefilled,
    Enable: enable,
    EnableFilled: enablefilled,
    Equals: equals,
    EqualsFilled: equalsfilled,
    Error: error,
    ErrorFilled: errorfilled,
    Euro: euro,
    EuroFilled: eurofilled,
    EventAvailable: eventavailable,
    EventAvailableFilled: eventavailablefilled,
    Expand: expand,
    ExpandFilled: expandfilled,
    ExpandLess: expandless,
    ExpandLessFilled: expandlessfilled,
    ExpandMore: expandmore,
    ExpandMoreFilled: expandmorefilled,
    Favorite: favorite,
    FavoriteFilled: favoritefilled,
    FileCSS: filecss,
    FileCSSFilled: filecssfilled,
    FileCSV: filecsv,
    FileCSVFilled: filecsvfilled,
    FileDOC: filedoc,
    FileDOCFilled: filedocfilled,
    FileHTML: filehtml,
    FileHTMLFilled: filehtmlfilled,
    FileJPG: filejpg,
    FileJPGFilled: filejpgfilled,
    FileJS: filejs,
    FileJSFilled: filejsfilled,
    FileJSX: filejsx,
    FileJSXFilled: filejsxfilled,
    FilePDF: filepdf,
    FilePDFFilled: filepdffilled,
    FilePNG: filepng,
    FilePNGFilled: filepngfilled,
    FilePPT: fileppt,
    FilePPTFilled: filepptfilled,
    FilePresent: filepresent,
    FilePresentFilled: filepresentfilled,
    FileRS: filers,
    FileRSFilled: filersfilled,
    FileSQL: filesql,
    FileSQLFilled: filesqlfilled,
    FileSVG: filesvg,
    FileSVGFilled: filesvgfilled,
    FileTS: filets,
    FileTSFilled: filetsfilled,
    FileTSX: filetsx,
    FileTSXFilled: filetsxfilled,
    FileVUE: filevue,
    FileVUEFilled: filevuefilled,
    FileVideo: filevideo,
    FileVideoFilled: filevideofilled,
    FileXLS: filexls,
    FileXLSFilled: filexlsfilled,
    FileZIP: filezip,
    FileZIPFilled: filezipfilled,
    FilterAlt: filteralt,
    FilterAltFilled: filteraltfilled,
    FilterAltOff: filteraltoff,
    FilterAltOffFilled: filteraltofffilled,
    FilterList: filterlist,
    FilterListFilled: filterlistfilled,
    FilterListOff: filterlistoff,
    FilterListOffFilled: filterlistofffilled,
    Fingerprint: fingerprint,
    FingerprintFilled: fingerprintfilled,
    Flag: flag,
    FlagFilled: flagfilled,
    FlightsMode: flightsmode,
    FlightsModeFilled: flightsmodefilled,
    FolderOpen: folderopen,
    FolderOpenFilled: folderopenfilled,
    FormatListBullets: formatlistbullets,
    FormatListBulletsFilled: formatlistbulletsfilled,
    FormatListNumbers: formatlistnumbers,
    FormatListNumbersFilled: formatlistnumbersfilled,
    Formula: formula,
    FormulaFilled: formulafilled,
    Forum: forum,
    ForumFilled: forumfilled,
    Gear: gear,
    GearFilled: gearfilled,
    GenericChart: genericchart,
    GenericChartFilled: genericchartfilled,
    Ghost: ghost,
    GhostFilled: ghostfilled,
    Globe: globe,
    GlobeFilled: globefilled,
    GridView: gridview,
    GridViewFilled: gridviewfilled,
    Group: group,
    GroupFilled: groupfilled,
    HeadsetMic: headsetmic,
    HeadsetMicFilled: headsetmicfilled,
    Help: help,
    HelpFilled: helpfilled,
    History: history,
    HistoryFilled: historyfilled,
    Homework: homework,
    HomeworkFilled: homeworkfilled,
    HourglassDisabled: hourglassdisabled,
    HourglassDisabledFilled: hourglassdisabledfilled,
    House: house,
    HouseFilled: housefilled,
    Imagesmode: imagesmode,
    ImagesmodeFilled: imagesmodefilled,
    Info: info,
    InfoFilled: infofilled,
    InputCheck: inputcheck,
    Inventory: inventory,
    InventoryFilled: inventoryfilled,
    Key: key,
    KeyFilled: keyfilled,
    KpiPin: kpipin,
    KpiPinFilled: kpipinfilled,
    Language: language,
    LanguageFilled: languagefilled,
    Layers: layers,
    LayersFilled: layersfilled,
    LeftParenthesis: leftparenthesis,
    LeftParenthesisFilled: leftparenthesisfilled,
    LightMode: lightmode,
    LightModeFilled: lightmodefilled,
    LineChart: linechart,
    LineChartFilled: linechartfilled,
    Link: link,
    LinkAlt: linkalt,
    LinkAltFilled: linkaltfilled,
    LinkFilled: linkfilled,
    LinkOff: linkoff,
    LinkOffFilled: linkofffilled,
    Lists: lists,
    ListsFilled: listsfilled,
    LocationOn: locationon,
    LocationOnFilled: locationonfilled,
    Lock: lock,
    LockFilled: lockfilled,
    LockOpen: lockopen,
    LockOpenFilled: lockopenfilled,
    LockPerson: lockperson,
    LockPersonFilled: lockpersonfilled,
    Login: login,
    LoginFilled: loginfilled,
    Logout: logout,
    LogoutFilled: logoutfilled,
    MagnifyingGlass: magnifyingglass,
    MagnifyingGlassFilled: magnifyingglassfilled,
    Mail: mail,
    MailFilled: mailfilled,
    ManageSearch: managesearch,
    ManageSearchFilled: managesearchfilled,
    MatrixChart: matrixchart,
    MatrixChartFilled: matrixchartfilled,
    Menu: menu,
    MenuFilled: menufilled,
    MenuOpen: menuopen,
    MenuOpenFilled: menuopenfilled,
    Mimo: mimo,
    MimoFilled: mimofilled,
    MinusCircle: minuscircle,
    MinusCircleFilled: minuscirclefilled,
    MoreHoriz: morehoriz,
    MoreHorizFilled: morehorizfilled,
    MoreVert: morevert,
    MoreVertFilled: morevertfilled,
    MoveToUser: movetouser,
    MoveToUserFilled: movetouserfilled,
    Multiplication: multiplication,
    MultiplicationFilled: multiplicationfilled,
    Notepad: notepad,
    NotepadFilled: notepadfilled,
    Notifications: notifications,
    NotificationsFilled: notificationsfilled,
    Number: number,
    NumberFilled: numberfilled,
    Online: online,
    OnlineFilled: onlinefilled,
    OpenInNew: openinnew,
    OpenInNewFilled: openinnewfilled,
    OtherAdmission: otheradmission,
    OtherAdmissionFilled: otheradmissionfilled,
    Pace: pace,
    PaceFilled: pacefilled,
    Palette: palette,
    PaletteFilled: palettefilled,
    PanZoom: panzoom,
    PanZoomFilled: panzoomfilled,
    Pause: pause,
    PauseFilled: pausefilled,
    Payments: payments,
    PaymentsFilled: paymentsfilled,
    Percentage: percentage,
    PercentageFilled: percentagefilled,
    Person: person,
    PersonCancel: personcancel,
    PersonCancelFilled: personcancelfilled,
    PersonFilled: personfilled,
    PersonalPlaces: personalplaces,
    PersonalPlacesFilled: personalplacesfilled,
    PhotoCamera: photocamera,
    PhotoCameraFilled: photocamerafilled,
    PieChart: piechart,
    PieChartFilled: piechartfilled,
    PivotTableChart: pivottablechart,
    PivotTableChartFilled: pivottablechartfilled,
    Placeholder: placeholder,
    PlaceholderFilled: placeholderfilled,
    PlayArrow: playarrow,
    PlayArrowFilled: playarrowfilled,
    PlaylistAddCheck: playlistaddcheck,
    PlaylistAddCheckFilled: playlistaddcheckfilled,
    QuickReferenceAll: quickreferenceall,
    QuickReferenceAllFilled: quickreferenceallfilled,
    Receipt: receipt,
    ReceiptFilled: receiptfilled,
    Redo: redo,
    RedoFilled: redofilled,
    Remove: remove,
    RemoveFilled: removefilled,
    RequestPage: requestpage,
    RequestPageFilled: requestpagefilled,
    RightParenthesis: rightparenthesis,
    RightParenthesisFilled: rightparenthesisfilled,
    RotateRight: rotateright,
    RotateRightFilled: rotaterightfilled,
    ScaleIndicator: scaleindicator,
    ScaleIndicatorAlt: scaleindicatoralt,
    ScaleIndicatorAltFilled: scaleindicatoraltfilled,
    ScaleIndicatorFilled: scaleindicatorfilled,
    ScatterChart: scatterchart,
    ScatterChartFilled: scatterchartfilled,
    Schedule: schedule,
    ScheduleFilled: schedulefilled,
    Sell: sell,
    SellFilled: sellfilled,
    Send: send,
    SendFilled: sendfilled,
    Share: share,
    ShareFilled: sharefilled,
    ShoppingCart: shoppingcart,
    ShoppingCartFilled: shoppingcartfilled,
    SignPost: signpost,
    SignPostFilled: signpostfilled,
    SignalCellularAlt: signalcellularalt,
    SignalCellularAltFilled: signalcellularaltfilled,
    SmartToy: smarttoy,
    SmartToyFilled: smarttoyfilled,
    Sparkle: sparkle,
    SparkleFilled: sparklefilled,
    Speed: speed,
    SpeedFilled: speedfilled,
    Split: split,
    SplitFilled: splitfilled,
    Star: star,
    StarFilled: starfilled,
    StatusLight: statuslight,
    StatusLightFilled: statuslightfilled,
    Stop: stop,
    StopFilled: stopfilled,
    Store: store,
    StoreFilled: storefilled,
    Subdirectory: subdirectory,
    SubdirectoryFilled: subdirectoryfilled,
    Subtraction: subtraction,
    SubtractionFilled: subtractionfilled,
    SwapHorizontal: swaphorizontal,
    SwapHorizontalFilled: swaphorizontalfilled,
    Swatch: swatch,
    SwatchFilled: swatchfilled,
    TableChart: tablechart,
    TagSimple: tagsimple,
    TagSimpleFilled: tagsimplefilled,
    Target: target,
    TargetFilled: targetfilled,
    TaskAlt: taskalt,
    TaskAltFilled: taskaltfilled,
    Text: text,
    TextAlt: textalt,
    TextAltFilled: textaltfilled,
    TextB: textb,
    TextBFilled: textbfilled,
    TextFilled: textfilled,
    TextItalic: textitalic,
    TextItalicFilled: textitalicfilled,
    TextUnderline: textunderline,
    TextUnderlineFilled: textunderlinefilled,
    ThumbDown: thumbdown,
    ThumbDownFilled: thumbdownfilled,
    ThumbUp: thumbup,
    ThumbUpFilled: thumbupfilled,
    Timer: timer,
    TimerFilled: timerfilled,
    ToggleOn: toggleon,
    ToggleOnFilled: toggleonfilled,
    TrendingDown: trendingdown,
    TrendingDownFilled: trendingdownfilled,
    TrendingUp: trendingup,
    TrendingUpFilled: trendingupfilled,
    Tune: tune,
    TuneFilled: tunefilled,
    Undo: undo,
    UndoFilled: undofilled,
    UnfoldLess: unfoldless,
    UnfoldLessFilled: unfoldlessfilled,
    UnfoldMore: unfoldmore,
    UnfoldMoreFilled: unfoldmorefilled,
    Upload: upload,
    UploadFilled: uploadfilled,
    Variables: variables,
    VariablesFilled: variablesfilled,
    Verified: verified,
    VerifiedFilled: verifiedfilled,
    ViewComfy: viewcomfy,
    ViewComfyFilled: viewcomfyfilled,
    ViewDay: viewday,
    ViewDayFilled: viewdayfilled,
    ViewKanban: viewkanban,
    ViewKanbanFilled: viewkanbanfilled,
    ViewTimeline: viewtimeline,
    ViewTimelineFilled: viewtimelinefilled,
    Visibility: visibility,
    VisibilityFilled: visibilityfilled,
    VisibilityOff: visibilityoff,
    VisibilityOffFilled: visibilityofffilled,
    Warning: warning,
    WarningFilled: warningfilled,
    WifiOff: wifioff,
    WifiOffFilled: wifiofffilled,
    ZoomIn: zoomin,
    ZoomInFilled: zoominfilled,
    ZoomOut: zoomout,
    ZoomOutFilled: zoomoutfilled,
    ZoomOutMap: zoomoutmap,
    ZoomOutMapFilled: zoomoutmapfilled
});

var _a$9;
function createIconMappings(components) {
    var mappings = {
        iconNames: {},
        icons: {}
    };
    for (var _i = 0, _a = Object.keys(components); _i < _a.length; _i++) {
        var name_1 = _a[_i];
        mappings.iconNames[name_1] = name_1;
        mappings.icons[name_1] = components[name_1];
    }
    return mappings;
}
var iconNames = (_a$9 = createIconMappings(SvgComponents), _a$9.iconNames), icons = _a$9.icons;

var IconSize;
(function (IconSize) {
    IconSize[IconSize["XS"] = 12] = "XS";
    IconSize[IconSize["SM"] = 16] = "SM";
    IconSize[IconSize["MD"] = 20] = "MD";
    IconSize[IconSize["LG"] = 24] = "LG";
    IconSize[IconSize["XL"] = 32] = "XL";
    IconSize[IconSize["XXL"] = 48] = "XXL";
})(IconSize || (IconSize = {}));
function Icon(_a) {
    var ariaHidden = _a.ariaHidden, ariaLabel = _a.ariaLabel, className = _a.className, color = _a.color, name = _a.name, ref = _a.ref, size = _a.size;
    var SvgIcon = icons[name];
    return (jsx(SvgIcon, { "aria-hidden": ariaHidden, "aria-label": ariaLabel, className: classNames('icon', className), color: color, height: size, ref: ref, width: size }));
}

var Alignment;
(function (Alignment) {
    Alignment["center"] = "center";
    Alignment["end"] = "end";
    Alignment["start"] = "start";
})(Alignment || (Alignment = {}));

var AriaRole;
(function (AriaRole) {
    AriaRole["button"] = "button";
    AriaRole["link"] = "link";
    AriaRole["none"] = "none";
    AriaRole["separator"] = "separator";
    AriaRole["status"] = "status";
})(AriaRole || (AriaRole = {}));

var HTMLElementType;
(function (HTMLElementType) {
    HTMLElementType["A"] = "a";
    HTMLElementType["Button"] = "button";
    HTMLElementType["Div"] = "div";
    HTMLElementType["Label"] = "label";
    HTMLElementType["P"] = "p";
    HTMLElementType["Span"] = "span";
})(HTMLElementType || (HTMLElementType = {}));

var InputType;
(function (InputType) {
    InputType["number"] = "number";
    InputType["password"] = "password";
    InputType["text"] = "text";
})(InputType || (InputType = {}));

var KeyboardEventKey;
(function (KeyboardEventKey) {
    KeyboardEventKey["ArrowDown"] = "ArrowDown";
    KeyboardEventKey["ArrowLeft"] = "ArrowLeft";
    KeyboardEventKey["ArrowRight"] = "ArrowRight";
    KeyboardEventKey["ArrowUp"] = "ArrowUp";
    KeyboardEventKey["Enter"] = "Enter";
    KeyboardEventKey["Escape"] = "Escape";
    KeyboardEventKey["l"] = "l";
    KeyboardEventKey["Space"] = " ";
    KeyboardEventKey["Tab"] = "Tab";
})(KeyboardEventKey || (KeyboardEventKey = {}));
var CTRL_MODIFIER_KEY = isMac() ? 'metaKey' : 'ctrlKey';

var LabelPlacement;
(function (LabelPlacement) {
    LabelPlacement["Start"] = "start";
    LabelPlacement["End"] = "end";
})(LabelPlacement || (LabelPlacement = {}));

var Orientation;
(function (Orientation) {
    Orientation["horizontal"] = "horizontal";
    Orientation["vertical"] = "vertical";
})(Orientation || (Orientation = {}));

var Position;
(function (Position) {
    Position["Top"] = "top";
    Position["Right"] = "right";
    Position["Bottom"] = "bottom";
    Position["Left"] = "left";
})(Position || (Position = {}));

var Size;
(function (Size) {
    Size["xxs"] = "xxs";
    Size["xs"] = "xs";
    Size["sm"] = "sm";
    Size["md"] = "md";
    Size["lg"] = "lg";
    Size["xl"] = "xl";
    Size["xxl"] = "xxl";
})(Size || (Size = {}));

var SortDirection;
(function (SortDirection) {
    SortDirection["Ascending"] = "asc";
    SortDirection["Descending"] = "desc";
})(SortDirection || (SortDirection = {}));

var LABEL_SIZE_XS_CSS_CLASS = 'label--xs';
var LABEL_SIZE_SM_CSS_CLASS = 'label--sm';
var LABEL_SIZE_MD_CSS_CLASS = 'label--md';
var LABEL_SIZE_LG_CSS_CLASS = 'label--lg';
function Label(_a) {
    var className = _a.className, elementType = _a.elementType, htmlFor = _a.htmlFor, size = _a.size, props = __rest(_a, ["className", "elementType", "htmlFor", "size"]);
    var Element = elementType !== null && elementType !== void 0 ? elementType : (htmlFor ? HTMLElementType.Label : HTMLElementType.Span);
    return (jsx(Element, __assign({}, props, { className: classNames("label label--".concat(size), className) }, (Element === HTMLElementType.Label && { htmlFor: htmlFor }))));
}

var ACTION_ITEM_CSS_CLASS = 'action-item';
function ActionItemContent(_a) {
    var actionLabel = _a.actionLabel, description = _a.description, label = _a.label, leftIconName = _a.leftIconName, prefix = _a.prefix, rightIconName = _a.rightIconName, suffix = _a.suffix;
    return (jsxs(Fragment, { children: [prefix, leftIconName && jsx(Icon, { className: "action-item__left-icon", name: leftIconName, size: IconSize.MD }), jsxs("div", __assign({ className: "action-item__body" }, { children: [jsx(Text, __assign({ className: classNames('action-item__label', LABEL_SIZE_MD_CSS_CLASS), slot: "label" }, { children: label })), description && (jsx(Text, __assign({ className: classNames('action-item__description', LABEL_SIZE_SM_CSS_CLASS), slot: "description" }, { children: description })))] })), (!!rightIconName || !!actionLabel || !!suffix) && (jsxs("div", __assign({ className: "action-item__suffix" }, { children: [suffix, actionLabel && (jsx(Label, __assign({ className: "action-item__action-label", size: Size.md }, { children: actionLabel }))), rightIconName && (jsx(Icon, { className: "action-item__right-icon", name: rightIconName, size: IconSize.MD }))] })))] }));
}

function BodyText(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.start : _b, children = _a.children, className = _a.className, elementType = _a.elementType, ref = _a.ref, size = _a.size, style = _a.style;
    var Element = elementType !== null && elementType !== void 0 ? elementType : HTMLElementType.P;
    return (jsx(Element, __assign({ className: classNames("body-text body-text--".concat(size, " body-text--align-").concat(alignment), className), ref: ref, style: style }, { children: children })));
}

function RequiredIndicator(_a) {
    var className = _a.className;
    return (jsx("svg", __assign({ className: classNames('required-indicator', className), height: "6", viewBox: "0 0 6 6", width: "6" }, { children: jsx("path", { d: "M2.29159 5.72727L2.37114 3.53977L0.521706 4.71307L0.0444336 3.87784L1.9933 2.86364L0.0444336 1.84943L0.521706 1.0142L2.37114 2.1875L2.29159 0H3.24614L3.16659 2.1875L5.01602 1.0142L5.4933 1.84943L3.54443 2.86364L5.4933 3.87784L5.01602 4.71307L3.16659 3.53977L3.24614 5.72727H2.29159Z", fill: "currentColor" }) })));
}

var DEFAULT_DELAY = 750;
function TooltipTrigger(_a) {
    var children = _a.children, _b = _a.delay, delay = _b === void 0 ? DEFAULT_DELAY : _b, props = __rest(_a, ["children", "delay"]);
    return (jsx(TooltipTrigger$1, __assign({}, props, { delay: delay }, { children: children })));
}

var DEFAULT_MAX_WIDTH = 160;
var TooltipType;
(function (TooltipType) {
    TooltipType["Rich"] = "rich";
    TooltipType["Plain"] = "plain";
})(TooltipType || (TooltipType = {}));
function Tooltip(_a) {
    var children = _a.children, className = _a.className, _b = _a.elementType, elementType = _b === void 0 ? HTMLElementType.Div : _b, headerIconName = _a.headerIconName, headerText = _a.headerText, _c = _a.maxWidth, maxWidth = _c === void 0 ? DEFAULT_MAX_WIDTH : _c, _d = _a.position, position = _d === void 0 ? Position.Top : _d, _e = _a.showArrow, showArrow = _e === void 0 ? true : _e, type = _a.type, props = __rest(_a, ["children", "className", "elementType", "headerIconName", "headerText", "maxWidth", "position", "showArrow", "type"]);
    return (jsxs(Tooltip$1, __assign({}, props, { className: classNames("tooltip tooltip--".concat(type), className), placement: position, style: { maxWidth: maxWidth } }, { children: [type === 'rich' && (jsxs("div", __assign({ className: "tooltip__header" }, { children: [jsx(Label, __assign({ className: "tooltip__header-text", size: Size.sm }, { children: jsx("strong", { children: headerText }) })), headerIconName && (jsx(Icon, { className: "tooltip__header-icon", name: headerIconName, size: IconSize.SM }))] }))), showArrow && (jsx(OverlayArrow, { children: jsx("svg", __assign({ className: "tooltip__arrow", height: "12", viewBox: "0 0 12 12", width: "12" }, { children: jsx("path", { d: "M6 6.16614L7.15493e-08 0L12 0L6 6.16614Z" }) })) })), jsx(BodyText, __assign({ elementType: elementType, size: Size.xs }, { children: children }))] })));
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
function isFunction(obj) {
    return typeof obj === 'function';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function emptyFn() {
    /* Nothing to do here... */
}
function safeCall(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(fn)) {
        return fn.apply(void 0, args);
    }
    return undefined;
}

function TriggerElement(_a) {
    var children = _a.children, className = _a.className, elementType = _a.elementType, outerRef = _a.ref, role = _a.role, style = _a.style, props = __rest(_a, ["children", "className", "elementType", "ref", "role", "style"]);
    var ElementType = elementType !== null && elementType !== void 0 ? elementType : HTMLElementType.Span;
    var ref = useRef(null);
    var _b = useFocusRing(props), focusProps = _b.focusProps, isFocused = _b.isFocused, isFocusVisible = _b.isFocusVisible;
    var buttonProps = useButton(__assign({ elementType: ElementType }, props), ref).buttonProps;
    var renderProps = {
        isFocused: isFocused,
        isFocusVisible: isFocusVisible
    };
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    return (jsx(ElementType, __assign({}, mergeProps(buttonProps, focusProps), { className: classNames('trigger-element', className), ref: ref, role: role !== null && role !== void 0 ? role : buttonProps.role, style: __assign(__assign({}, buttonProps.style), style) }, { children: isFunction(children) ? children(renderProps) : children })));
}

function FieldLabel(_a) {
    var children = _a.children, className = _a.className, isDisabled = _a.isDisabled, isRequired = _a.isRequired, _b = _a.size, size = _b === void 0 ? Size.md : _b, suffix = _a.suffix, tooltipContent = _a.tooltipContent, props = __rest(_a, ["children", "className", "isDisabled", "isRequired", "size", "suffix", "tooltipContent"]);
    var _c = tooltipContent !== null && tooltipContent !== void 0 ? tooltipContent : {}, ttContent = _c.content, ttProps = __rest(_c, ["content"]);
    var iconSize = IconSize.XS;
    if (size === Size.md) {
        iconSize = IconSize.SM;
    }
    return (jsxs(Label$1, __assign({}, props, { className: classNames('field-label', className, {
            'field-label--disabled': isDisabled
        }) }, { children: [isRequired && jsx(RequiredIndicator, {}), jsx(Label, __assign({ size: size }, { children: jsx("strong", { children: children }) })), ttContent && (jsxs(TooltipTrigger, { children: [jsx(TriggerElement, { children: jsx(Icon, { className: "field-label__icon", name: iconNames.Help, size: iconSize }) }), jsx(Tooltip, __assign({}, ttProps, { type: TooltipType.Rich }, { children: ttContent }))] })), suffix] })));
}

var HEADING_SIZE_XXS_CSS_CLASS = 'heading--xxs';
var HEADING_SIZE_XS_CSS_CLASS = 'heading--xs';
var HEADING_SIZE_SM_CSS_CLASS = 'heading--sm';
var HEADING_SIZE_MD_CSS_CLASS = 'heading--md';
var HEADING_SIZE_LG_CSS_CLASS = 'heading--lg';
function Heading(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.start : _b, children = _a.children, className = _a.className, Element = _a.elementType, size = _a.size, props = __rest(_a, ["alignment", "children", "className", "elementType", "size"]);
    var cssClassName = classNames("heading heading--".concat(size, " heading--align-").concat(alignment), className);
    if (Element) {
        return (jsx(Element, __assign({}, props, { className: cssClassName }, { children: children })));
    }
    return (jsx(Heading$1, __assign({}, props, { className: cssClassName }, { children: children })));
}

function useTranslateFn(prefix) {
    var t = useTranslation().t;
    return useCallback(function (phrase, keys) { return t("".concat(prefix, ".").concat(phrase), keys); }, [t, prefix]);
}

function useTranslateCommon() {
    return useTranslateFn('common');
}

var HelpTextVariant;
(function (HelpTextVariant) {
    HelpTextVariant["Neutral"] = "neutral";
    HelpTextVariant["Danger"] = "danger";
    HelpTextVariant["Success"] = "success";
    HelpTextVariant["Disabled"] = "disabled";
})(HelpTextVariant || (HelpTextVariant = {}));
function getIconProps(variant, translateFn) {
    var name, label;
    switch (variant) {
        case HelpTextVariant.Danger:
            name = iconNames.EmergencyHomeFilled;
            label = translateFn('warning');
            break;
        case HelpTextVariant.Success:
            name = iconNames.CheckCircleFilled;
            label = translateFn('success');
            break;
        default:
            name = iconNames.InfoFilled;
            label = translateFn('info');
            break;
    }
    return { name: name, label: label };
}
function HelpText(_a) {
    var children = _a.children, className = _a.className, id = _a.id, showIcon = _a.showIcon, _b = _a.variant, variant = _b === void 0 ? HelpTextVariant.Neutral : _b;
    var translateCommon = useTranslateCommon();
    var content = [
        jsx(Label, __assign({ size: Size.sm }, { children: children }), "text")
    ];
    if (showIcon || variant === HelpTextVariant.Danger) {
        var _c = getIconProps(variant, translateCommon), name_1 = _c.name, label = _c.label;
        content.unshift(jsx(Icon, { ariaLabel: label, name: name_1, size: IconSize.SM }, "icon"));
    }
    return (jsx(Text, __assign({ className: classNames("help-text help-text--".concat(variant), className), id: id, slot: "description" }, { children: content })));
}

function Title(_a) {
    var children = _a.children, className = _a.className, _b = _a.elementType, Element = _b === void 0 ? HTMLElementType.Div : _b, size = _a.size, props = __rest(_a, ["children", "className", "elementType", "size"]);
    var cssClassName = classNames("title title--".concat(size), className);
    if (props.level) {
        return (jsx(Heading$1, __assign({}, props, { className: cssClassName }, { children: children })));
    }
    return (jsx(Element, __assign({}, props, { className: cssClassName }, { children: children })));
}

var SpinnerVariant;
(function (SpinnerVariant) {
    SpinnerVariant["Neutral"] = "neutral";
    SpinnerVariant["Accent"] = "accent";
    SpinnerVariant["None"] = "none";
})(SpinnerVariant || (SpinnerVariant = {}));
function Spinner(_a) {
    var _b;
    var ariaLabel = _a["aria-label"], ariaLabelledBy = _a["aria-labelledby"], className = _a.className, label = _a.label, _c = _a.labelPosition, labelPosition = _c === void 0 ? Position.Bottom : _c, labelSize = _a.labelSize, ref = _a.ref, size = _a.size, _d = _a.variant, variant = _d === void 0 ? SpinnerVariant.Accent : _d;
    return (jsxs("div", __assign({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className: classNames("spinner spinner--".concat(size), className, (_b = {},
            _b["spinner--".concat(variant)] = variant !== SpinnerVariant.None,
            _b["spinner--label-".concat(labelPosition)] = !!label,
            _b)), ref: ref, role: AriaRole.status }, { children: [jsx("span", { className: "spinner__loader" }), label && (jsx(Label, __assign({ className: "spinner__label", size: labelSize !== null && labelSize !== void 0 ? labelSize : (size === Size.xl ? Size.lg : Size.md) }, { children: label })))] })));
}

function isString(val) {
    return typeof val === 'string';
}
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function mergeStrings(separator) {
    var strings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        strings[_i - 1] = arguments[_i];
    }
    return strings.filter(Boolean).join(separator);
}

var ButtonStyle;
(function (ButtonStyle) {
    ButtonStyle["Fill"] = "fill";
    ButtonStyle["Outline"] = "outline";
    ButtonStyle["Dash"] = "dash";
    ButtonStyle["Plain"] = "plain";
    ButtonStyle["Link"] = "link";
})(ButtonStyle || (ButtonStyle = {}));
var ButtonRole;
(function (ButtonRole) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    ButtonRole["Button"] = "button";
    ButtonRole["Link"] = "link";
})(ButtonRole || (ButtonRole = {}));
function Button(_a) {
    var ariaLabel = _a["aria-label"], className = _a.className, children = _a.children, endIconName = _a.endIconName, inverted = _a.inverted, isLoading = _a.isLoading, ref = _a.ref, _b = _a.role, role = _b === void 0 ? ButtonRole.Button : _b, _c = _a.size, size = _c === void 0 ? Size.md : _c, startIconName = _a.startIconName, style = _a.style, variant = _a.variant, props = __rest(_a, ['aria-label', "className", "children", "endIconName", "inverted", "isLoading", "ref", "role", "size", "startIconName", "style", "variant"]);
    var isChildrenStrOrNum = isString(children) || isNumber(children);
    var commonProps = {
        'aria-label': ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : (isChildrenStrOrNum ? children.toString() : undefined),
        className: classNames("button ".concat(style, "-button ").concat(style, "-button--").concat(variant, " button--").concat(size), className, {
            'button--loading': isLoading,
            'button--inverted': inverted
        })
    };
    var content = (jsxs(Fragment, { children: [isLoading && (jsx(Spinner, { className: "button__spinner", size: size === Size.lg ? Size.md : Size.sm, variant: SpinnerVariant.None })), startIconName && (jsx(Icon, { ariaHidden: true, className: "button__icon button__icon--".concat(size), name: startIconName })), jsx(Label, __assign({ className: "button__label", size: size }, { children: isChildrenStrOrNum ?
                    jsx("strong", { children: children })
                    : children })), endIconName && (jsx(Icon, { ariaHidden: true, className: "button__icon button__icon--".concat(size), name: endIconName }))] }));
    if (role === ButtonRole.Link) {
        return (jsx(Link$1, __assign({}, props, commonProps, { ref: ref }, { children: content })));
    }
    return (jsx(Button$1, __assign({}, props, commonProps, { ref: ref }, { children: content })));
}

function ClearButton(_a) {
    var _b;
    var className = _a.className, props = __rest(_a, ["className"]);
    var translateCommon = useTranslateCommon();
    return (jsx(Button$1, __assign({}, props, { "aria-label": (_b = props['aria-label']) !== null && _b !== void 0 ? _b : translateCommon('clear'), className: classNames('clear-button', className) }, { children: jsx(Icon, { className: "clear-button__icon", name: iconNames.CancelFilled }) })));
}

var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["Neutral"] = "neutral";
    ButtonVariant["Accent"] = "accent";
    ButtonVariant["Danger"] = "danger";
    ButtonVariant["Success"] = "success";
})(ButtonVariant || (ButtonVariant = {}));

dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(weekOfYear);
dayjs.extend(isBetween);
dayjs.extend(duration);
var day = dayjs;

var I18nContext = createContext({
    cultureLocale: 'en-GB',
    languageLocale: 'en-GB',
    timeZone: getLocalTimeZone()
});
function useLocales() {
    return useContext(I18nContext);
}
function I18nProvider(_a) {
    var children = _a.children, cultureLocale = _a.cultureLocale, languageLocale = _a.languageLocale, timeZone = _a.timeZone;
    var value = useMemo(function () { return ({ cultureLocale: cultureLocale, languageLocale: languageLocale, timeZone: timeZone }); }, [cultureLocale, languageLocale, timeZone]);
    return (jsx(I18nProvider$1, __assign({ locale: languageLocale }, { children: jsx(I18nContext, __assign({ value: value }, { children: children })) })));
}

function useCultureDay() {
    var cultureLocale = useLocales().cultureLocale;
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return day.apply(void 0, args).locale(cultureLocale);
    }, [cultureLocale]);
}

function IconButton(_a) {
    var className = _a.className, iconName = _a.iconName, inverted = _a.inverted, isLoading = _a.isLoading, ref = _a.ref, _b = _a.role, role = _b === void 0 ? ButtonRole.Button : _b, _c = _a.size, size = _c === void 0 ? Size.md : _c, style = _a.style, variant = _a.variant, props = __rest(_a, ["className", "iconName", "inverted", "isLoading", "ref", "role", "size", "style", "variant"]);
    var commonProps = {
        className: classNames("button icon-button ".concat(style, "-button ").concat(style, "-button--").concat(variant, " button--").concat(size, " icon-button--").concat(size), className, {
            'button--loading': isLoading,
            'button--inverted': inverted
        })
    };
    var content = (jsxs(Fragment, { children: [isLoading && (jsx(Spinner, { className: "button__spinner", size: size === Size.lg ? Size.md : Size.sm, variant: SpinnerVariant.None })), jsx(Icon, { className: classNames("button__icon icon-button__icon icon-button__icon--".concat(size), {
                    'button__icon--loading': isLoading
                }), name: iconName })] }));
    if (role === ButtonRole.Link) {
        return (jsx(Link$1, __assign({}, props, commonProps, { ref: ref }, { children: content })));
    }
    return (jsx(Button$1, __assign({}, props, commonProps, { ref: ref }, { children: content })));
}

var AlertBannerVariant;
(function (AlertBannerVariant) {
    AlertBannerVariant["Neutral"] = "neutral";
    AlertBannerVariant["Informative"] = "informative";
    AlertBannerVariant["Success"] = "success";
    AlertBannerVariant["Danger"] = "danger";
    AlertBannerVariant["Warning"] = "warning";
})(AlertBannerVariant || (AlertBannerVariant = {}));
function AlertBanner(_a) {
    var className = _a.className, children = _a.children, iconName = _a.iconName, isDismissible = _a.isDismissible, ref = _a.ref, _b = _a.role, role = _b === void 0 ? 'status' : _b, variant = _a.variant, props = __rest(_a, ["className", "children", "iconName", "isDismissible", "ref", "role", "variant"]);
    var _c = useState(true), isVisible = _c[0], setIsVisible = _c[1];
    var translateCommon = useTranslateCommon();
    var onDismiss = function () {
        setIsVisible(false);
        safeCall(props.onDismiss);
    };
    if (!isVisible) {
        return null;
    }
    return (jsxs("div", __assign({ className: classNames("alert-banner alert-banner--".concat(variant), className, {
            'alert-banner--dismissible': isDismissible
        }), ref: ref, role: role }, { children: [iconName && jsx(Icon, { className: "alert-banner__icon", name: iconName, size: IconSize.MD }), jsx(BodyText, __assign({ className: "alert-banner__content", size: Size.md }, { children: children })), isDismissible && (jsx(IconButton, { "aria-label": translateCommon('closeNotification'), className: "alert-banner__close-button", iconName: iconNames.CloseFilled, inverted: variant !== AlertBannerVariant.Warning, onPress: onDismiss, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }))] })));
}

function useIntersectionObserver(callback) {
    var observer = useRef(null);
    var onVisible = useCallback(function (entries) {
        if (!isEmptyArray(entries) && entries[0].isIntersecting) {
            safeCall(callback, entries[0]);
        }
    }, [callback]);
    return useCallback(function (element) {
        var _a;
        if (element) {
            observer.current = new IntersectionObserver(onVisible);
            observer.current.observe(element);
        }
        else {
            (_a = observer.current) === null || _a === void 0 ? void 0 : _a.disconnect();
        }
        return function () {
            var _a;
            (_a = observer.current) === null || _a === void 0 ? void 0 : _a.disconnect();
        };
    }, [onVisible]);
}

// Tooltip arrow width is hardcoded to 12px
var TOOLTIP_ARROW_WIDTH = 12;
function ProgressBar(props) {
    var className = props.className, helpText = props.helpText, isIndeterminate = props.isIndeterminate, labelPosition = props.labelPosition, showHelpTextIcon = props.showHelpTextIcon, tooltipPosition = props.tooltipPosition, valueLabelPosition = props.valueLabelPosition;
    var _a = useState(0), progressBarWidth = _a[0], setProgressBarWidth = _a[1];
    var _b = useState(0), tooltipArrowOffset = _b[0], setTooltipArrowOffset = _b[1];
    var isValueLabelPositionRight = valueLabelPosition === Position.Right;
    var label = props['aria-label'];
    var progressBarRef = useRef(null);
    var calculateTooltipOffset = function (percentage) {
        if (percentage === void 0) { percentage = 0; }
        var progressBarFillWidth = (percentage / 100) * progressBarWidth;
        return Math.round(progressBarFillWidth - progressBarWidth / 2);
    };
    var onProgressBarResize = useCallback(function () {
        var _a, _b;
        var width = (_b = (_a = progressBarRef.current) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0;
        setProgressBarWidth(width);
    }, [progressBarRef]);
    var onTooltipVisible = function (tooltipElement) {
        var _a, _b;
        var tooltipContentWidth = (_b = (_a = tooltipElement.intersectionRect) === null || _a === void 0 ? void 0 : _a.width) !== null && _b !== void 0 ? _b : 0;
        if (tooltipContentWidth === 0) {
            return;
        }
        var arrowOffset = Math.round(tooltipContentWidth / 2 - TOOLTIP_ARROW_WIDTH / 2);
        setTooltipArrowOffset(arrowOffset);
    };
    useResizeObserver({
        ref: progressBarRef,
        onResize: onProgressBarResize
    });
    var tooltipRef = useIntersectionObserver(onTooltipVisible);
    return (jsx(ProgressBar$1, __assign({}, props, { className: classNames('progress-bar', className) }, { children: function (_a) {
            var percentage = _a.percentage, valueText = _a.valueText;
            return (jsxs(Fragment, { children: [label && labelPosition === Position.Top && (jsx(Label, __assign({ className: classNames('progress-bar__label', {
                            'progress-bar__label--top': !valueText || !isValueLabelPositionRight
                        }), elementType: HTMLElementType.Div, size: Size.md }, { children: label }))), jsxs("div", __assign({ className: "progress-bar__top_container" }, { children: [jsxs(TooltipTrigger, { children: [jsx("div", __assign({ className: "progress-bar__bar-wrapper", ref: progressBarRef }, { children: jsx(TriggerElement, __assign({ "aria-label": label !== null && label !== void 0 ? label : props['aria-label'], className: "progress-bar__bar" }, { children: jsx("div", { className: classNames('progress-bar__fill', {
                                                    'progress-bar__fill--indeterminate': isIndeterminate
                                                }), style: isIndeterminate ? {} : { width: "".concat(percentage, "%") } }) })) })), valueText && (jsx(Tooltip, __assign({ arrowBoundaryOffset: tooltipArrowOffset, crossOffset: calculateTooltipOffset(percentage), position: tooltipPosition, ref: tooltipRef, type: TooltipType.Plain }, { children: jsx(Label, __assign({ size: Size.sm }, { children: jsx("strong", { children: valueText }) })) })))] }), valueText && isValueLabelPositionRight && (jsx(Label, __assign({ className: "progress-bar__value-label progress-bar__value-label--right", size: Size.md }, { children: valueText })))] })), jsxs("div", __assign({ className: "progress-bar__bottom_container" }, { children: [jsxs("div", __assign({ className: "progress-bar__bottom_left-container" }, { children: [label && labelPosition === Position.Bottom && (jsx(Label, __assign({ className: classNames('progress-bar__label', {
                                            'progress-bar__label--bottom': !valueText || !isValueLabelPositionRight
                                        }), size: Size.md }, { children: label }))), helpText && (jsx(HelpText, __assign({ className: "progress-bar__help-text", showIcon: showHelpTextIcon }, { children: helpText })))] })), valueText && valueLabelPosition === Position.Bottom && (jsx(Label, __assign({ className: "progress-bar__value-label progress-bar__value-label--bottom", size: Size.md }, { children: valueText })))] }))] }));
        } })));
}

function LoadingIndicatorProgressBar() {
    var translateCommon = useTranslateCommon();
    return (jsx(ProgressBar, { "aria-label": translateCommon('loading'), className: "loading-indicator-progress-bar", isIndeterminate: true }));
}

var OverlayHeaderVariant;
(function (OverlayHeaderVariant) {
    OverlayHeaderVariant["Neutral"] = "neutral";
    OverlayHeaderVariant["Success"] = "success";
    OverlayHeaderVariant["Danger"] = "danger";
})(OverlayHeaderVariant || (OverlayHeaderVariant = {}));
function OverlayHeader(_a) {
    var _b = _a.autoFocusClose, autoFocusClose = _b === void 0 ? true : _b, children = _a.children, className = _a.className, details = _a.details, iconName = _a.iconName, onClose = _a.onClose, onExpand = _a.onExpand, ref = _a.ref, showLoadingIndicator = _a.showLoadingIndicator, _c = _a.variant, variant = _c === void 0 ? OverlayHeaderVariant.Neutral : _c;
    var translateCommon = useTranslateCommon();
    return (jsxs("div", __assign({ className: classNames("overlay-header overlay-header--".concat(variant), className), ref: ref }, { children: [iconName && (jsx("div", __assign({ className: "overlay-header__icon-area" }, { children: jsx(Icon, { name: iconName, size: IconSize.MD }) }))), jsxs("div", __assign({ className: "overlay-header__title" }, { children: [jsx(Heading, __assign({ size: Size.xs, slot: "title" }, { children: children })), details] })), onExpand && (jsx(IconButton, { "aria-label": translateCommon('expand'), iconName: iconNames.PanZoom, onPress: onExpand, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })), jsx(IconButton, { "aria-label": translateCommon('close'), autoFocus: autoFocusClose, iconName: iconNames.CloseFilled, onPress: onClose, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }), showLoadingIndicator && jsx(LoadingIndicatorProgressBar, {})] })));
}

function OverlayFooter(_a) {
    var _b, _c, _d, _e, _f, _g;
    var className = _a.className, closeCallback = _a.closeCallback, destructiveAction = _a.destructiveAction, primaryAction = _a.primaryAction, ref = _a.ref, secondaryAction = _a.secondaryAction;
    var destructiveButton;
    if (destructiveAction) {
        if (destructiveAction.iconName) {
            destructiveButton = (jsx(IconButton, { "aria-label": destructiveAction.label, autoFocus: destructiveAction.autoFocus, iconName: destructiveAction.iconName, isDisabled: destructiveAction.isDisabled, isLoading: destructiveAction.isLoading, onPress: function () { return safeCall(destructiveAction === null || destructiveAction === void 0 ? void 0 : destructiveAction.onPress, closeCallback); }, size: Size.lg, style: ButtonStyle.Plain, variant: (_b = destructiveAction.variant) !== null && _b !== void 0 ? _b : ButtonVariant.Danger }));
        }
        else {
            destructiveButton = (jsx(Button, __assign({ autoFocus: destructiveAction.autoFocus, isDisabled: destructiveAction.isDisabled, isLoading: destructiveAction.isLoading, onPress: function () { return safeCall(destructiveAction === null || destructiveAction === void 0 ? void 0 : destructiveAction.onPress, closeCallback); }, size: Size.lg, style: ButtonStyle.Plain, variant: (_c = destructiveAction.variant) !== null && _c !== void 0 ? _c : ButtonVariant.Danger }, { children: destructiveAction.label })));
        }
    }
    return (jsxs("div", __assign({ className: classNames('overlay-footer', className), ref: ref }, { children: [destructiveButton, jsxs("div", __assign({ className: "overlay-footer__actions" }, { children: [secondaryAction && (jsx(Button, __assign({ autoFocus: secondaryAction.autoFocus, isDisabled: secondaryAction.isDisabled, isLoading: secondaryAction.isLoading, onPress: function () { return safeCall(secondaryAction === null || secondaryAction === void 0 ? void 0 : secondaryAction.onPress, closeCallback); }, size: Size.lg, style: (_d = secondaryAction.style) !== null && _d !== void 0 ? _d : ButtonStyle.Outline, variant: (_e = secondaryAction.variant) !== null && _e !== void 0 ? _e : ButtonVariant.Neutral }, { children: secondaryAction.label }))), primaryAction && (jsx(Button, __assign({ autoFocus: primaryAction.autoFocus, isDisabled: primaryAction.isDisabled, isLoading: primaryAction.isLoading, onPress: function () { return safeCall(primaryAction === null || primaryAction === void 0 ? void 0 : primaryAction.onPress, closeCallback); }, size: Size.lg, style: (_f = primaryAction.style) !== null && _f !== void 0 ? _f : ButtonStyle.Fill, variant: (_g = primaryAction.variant) !== null && _g !== void 0 ? _g : ButtonVariant.Accent }, { children: primaryAction.label })))] }))] })));
}

function debounce(func, wait, options) {
    var _a;
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (options) {
        leading = !!options.leading;
        maxing = 'maxWait' in options;
        maxWait = maxing ? Math.max((_a = options.maxWait) !== null && _a !== void 0 ? _a : 0, wait) : 0;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs;
        var thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime;
        var timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return (lastCallTime === undefined ||
            timeSinceLastCall >= wait ||
            timeSinceLastCall < 0 ||
            (maxing && timeSinceLastInvoke >= maxWait));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time);
        }
        lastArgs = lastThis = undefined;
        return result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime;
        var timeSinceLastInvoke = time - lastInvokeTime;
        var timeWaiting = wait - timeSinceLastCall;
        return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function timerExpired() {
        var time = Date.now();
        if (shouldInvoke(time)) {
            trailingEdge(time);
            return;
        }
        // Restart the timer.
        timerId = window.setTimeout(timerExpired, remainingWait(time));
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = window.setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function debounced() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var time = Date.now();
        var isInvoking = shouldInvoke(time);
        lastArgs = args;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime);
            }
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = window.setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        timerId !== null && timerId !== void 0 ? timerId : (timerId = window.setTimeout(timerExpired, wait));
        return result;
    }
    debounced.cancel = cancel;
    return debounced;
}
function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (options) {
        leading = 'leading' in options ? !!options.leading : leading;
        trailing = 'trailing' in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        leading: leading,
        maxWait: wait,
        trailing: trailing
    });
}

var BodyScrollPosition;
(function (BodyScrollPosition) {
    BodyScrollPosition["Top"] = "top";
    BodyScrollPosition["Middle"] = "middle";
    BodyScrollPosition["Bottom"] = "bottom";
})(BodyScrollPosition || (BodyScrollPosition = {}));
function useBodyScrollPosition() {
    var _a = useState(null), bodyScrollPosition = _a[0], setBodyScrollPosition = _a[1];
    var detectAndSetBodyScrollPosition = useCallback(function (bodyElement) {
        var scrollTop = bodyElement.scrollTop, scrollHeight = bodyElement.scrollHeight, clientHeight = bodyElement.clientHeight;
        var position = null;
        if (scrollHeight > clientHeight) {
            if (scrollTop === 0) {
                position = BodyScrollPosition.Top;
            }
            else if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
                position = BodyScrollPosition.Bottom;
            }
            else {
                position = BodyScrollPosition.Middle;
            }
        }
        setBodyScrollPosition(position);
    }, []);
    var onScroll = useCallback(throttle(function (e) {
        detectAndSetBodyScrollPosition(e.target);
    }, 100), []);
    var resizeObserver = useRef(null);
    var onBodyRef = useCallback(function (bodyElement) {
        if (bodyElement) {
            resizeObserver.current = new ResizeObserver(function () {
                detectAndSetBodyScrollPosition(bodyElement);
            });
            resizeObserver.current.observe(bodyElement);
        }
        return function () {
            var _a;
            (_a = resizeObserver.current) === null || _a === void 0 ? void 0 : _a.disconnect();
        };
    }, []);
    return {
        bodyScrollPosition: bodyScrollPosition,
        onBodyRef: onBodyRef,
        onScroll: onScroll
    };
}

function AlertModal(_a) {
    var _b;
    var autoFocusClose = _a.autoFocusClose, children = _a.children, className = _a.className, destructiveAction = _a.destructiveAction, headerIcon = _a.headerIcon, isDismissibleOnOutClick = _a.isDismissibleOnOutClick, primaryAction = _a.primaryAction, secondaryAction = _a.secondaryAction, shouldScrollInViewport = _a.shouldScrollInViewport, size = _a.size, title = _a.title, variant = _a.variant, props = __rest(_a, ["autoFocusClose", "children", "className", "destructiveAction", "headerIcon", "isDismissibleOnOutClick", "primaryAction", "secondaryAction", "shouldScrollInViewport", "size", "title", "variant"]);
    var _c = useBodyScrollPosition(), bodyScrollPosition = _c.bodyScrollPosition, onScroll = _c.onScroll, onBodyRef = _c.onBodyRef;
    var hasFooter = !(isNullOrUndefined(primaryAction) && isNullOrUndefined(secondaryAction));
    var renderContent = function (_a) {
        var close = _a.close;
        return (jsxs(Fragment, { children: [jsx(OverlayHeader, __assign({ autoFocusClose: autoFocusClose, className: "alert-modal-dialog__header", iconName: headerIcon, onClose: close, variant: variant }, { children: title })), jsx("div", __assign({ className: classNames('alert-modal-dialog__body', {
                        'alert-modal-dialog__body--no-footer': !hasFooter
                    }), onScroll: onScroll, ref: shouldScrollInViewport ? null : onBodyRef, 
                    // Scrollable body should be keyboard-focusable.
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                    tabIndex: 0 }, { children: isFunction(children) ? children(close) : children })), hasFooter && (jsx(OverlayFooter, { className: "alert-modal-dialog__footer", closeCallback: close, destructiveAction: destructiveAction, primaryAction: primaryAction, secondaryAction: secondaryAction }))] }));
    };
    return (jsx(ModalOverlay, __assign({}, props, { className: classNames('alert-modal-overlay', className, {
            'alert-modal-overlay--scrollable': shouldScrollInViewport
        }), isDismissable: isDismissibleOnOutClick }, { children: jsx("div", __assign({ className: "alert-modal-wrapper" }, { children: jsx(Modal, __assign({ className: "alert-modal alert-modal--".concat(size) }, { children: jsx(Dialog, __assign({ className: classNames('alert-modal-dialog', (_b = {},
                        _b["alert-modal-dialog--scroll-".concat(bodyScrollPosition)] = !shouldScrollInViewport && bodyScrollPosition,
                        _b)) }, { children: renderContent })) })) })) })));
}

var BadgeStyle;
(function (BadgeStyle) {
    BadgeStyle["Fill"] = "fill";
    BadgeStyle["Outline"] = "outline";
    BadgeStyle["Plain"] = "plain";
})(BadgeStyle || (BadgeStyle = {}));
var BadgeVariant;
(function (BadgeVariant) {
    BadgeVariant["Neutral"] = "neutral";
    BadgeVariant["Success"] = "success";
    BadgeVariant["Danger"] = "danger";
    BadgeVariant["Warning"] = "warning";
    BadgeVariant["Informative"] = "informative";
})(BadgeVariant || (BadgeVariant = {}));
function useIconLabel(variant) {
    var translateCommon = useTranslateCommon();
    switch (variant) {
        case BadgeVariant.Informative:
            return translateCommon('info');
        case BadgeVariant.Success:
            return translateCommon('success');
        case BadgeVariant.Danger:
            return translateCommon('danger');
        case BadgeVariant.Warning:
            return translateCommon('warning');
        default:
            return translateCommon('neutral');
    }
}
function Badge(_a) {
    var ariaLabel = _a["aria-label"], children = _a.children, className = _a.className, iconName = _a.iconName, isDisabled = _a.isDisabled, ref = _a.ref, role = _a.role, style = _a.style, variant = _a.variant;
    var isStringOrNumberChild = isString(children) || isNumber(children);
    var iconLabel = useIconLabel(variant);
    return (jsxs("span", __assign({ "aria-label": ariaLabel, className: classNames("badge badge--".concat(variant, " ").concat(style, "-badge ").concat(style, "-badge--").concat(variant), className, {
            'badge--disabled': isDisabled
        }), ref: ref, role: role }, { children: [iconName && jsx(Icon, { ariaLabel: iconLabel, className: "badge__icon", name: iconName, size: IconSize.XS }), jsx(Label, __assign({ className: "badge__label", size: Size.sm }, { children: isStringOrNumberChild ?
                    jsx("strong", { children: children })
                    : children }))] })));
}

function useAutoHeightAnimation(_a) {
    var isExpanded = _a.isExpanded, ref = _a.ref;
    var isFirstRenderRef = useRef(true);
    var isLoadedRef = useRef(isExpanded);
    useEffect(function () {
        var element = ref.current;
        if (!element) {
            return;
        }
        var isFirstRender = isFirstRenderRef.current;
        // @ts-expect-error TS2322
        element.hidden = isFirstRender && !isExpanded ? 'until-found' : false;
        element.style.overflow = isFirstRender ? 'visible' : 'hidden';
        element.style.height = isFirstRender && isExpanded ? 'auto' : "".concat(element.scrollHeight, "px");
        isFirstRenderRef.current = false;
        if (isExpanded) {
            isLoadedRef.current = true;
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            element.offsetHeight; // force browser re-paint
            element.style.height = '0px';
        }
    }, [isExpanded]);
    var onTransitionEnd = function (event) {
        var target = event.target;
        if (isExpanded) {
            target.style.height = 'auto';
        }
        else {
            // @ts-expect-error TS2322
            target.hidden = 'until-found';
        }
        target.style.overflow = 'visible';
    };
    return {
        isLoaded: isLoadedRef.current,
        props: {
            onTransitionEnd: onTransitionEnd,
            style: {
                transition: 'height 0.2s ease-out'
            }
        }
    };
}

function Callout(_a) {
    var children = _a.children, className = _a.className, iconName = _a.iconName, ref = _a.ref, title = _a.title, props = __rest(_a, ["children", "className", "iconName", "ref", "title"]);
    var state = useDisclosureState(props);
    var panelRef = useRef(null);
    var triggerRef = useRef(null);
    var _b = useDisclosure(props, state, panelRef), triggerProps = _b.buttonProps, panelProps = _b.panelProps;
    var buttonProps = useButton(triggerProps, triggerRef).buttonProps;
    var _c = useFocusRing(), isFocusVisible = _c.isFocusVisible, focusProps = _c.focusProps;
    var isExpanded = state.isExpanded;
    var _d = useAutoHeightAnimation({ isExpanded: isExpanded, ref: panelRef }), isLoaded = _d.isLoaded, animationProps = _d.props;
    return (jsxs("div", __assign({ className: classNames('callout', className), ref: ref }, { children: [jsxs("button", __assign({}, mergeProps(buttonProps, focusProps), { className: "callout__header", "data-focus-visible": isFocusVisible || undefined, ref: triggerRef }, { children: [jsxs("div", __assign({ className: "callout__header-left" }, { children: [jsx(Icon, { ariaHidden: true, className: "callout__icon", name: iconName, size: IconSize.MD }), jsx(Label, __assign({ className: "callout__title", size: Size.md }, { children: jsx("strong", { children: title }) }))] })), jsx(Icon, { ariaHidden: true, className: "callout__expander-icon", name: isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight, size: IconSize.MD })] })), jsx("div", __assign({}, mergeProps(panelProps, animationProps), { className: "callout__panel", ref: panelRef }, { children: (isExpanded || isLoaded) && (jsx("div", __assign({ className: "callout__panel-content" }, { children: jsx(BodyText, __assign({ elementType: HTMLElementType.Div, size: Size.sm }, { children: children })) }))) }))] })));
}

var DrawerVariant;
(function (DrawerVariant) {
    DrawerVariant["FullOverlay"] = "full-overlay";
    DrawerVariant["Standard"] = "standard";
})(DrawerVariant || (DrawerVariant = {}));
var DrawerWidth;
(function (DrawerWidth) {
    DrawerWidth["Medium"] = "medium";
    DrawerWidth["Wide"] = "wide";
})(DrawerWidth || (DrawerWidth = {}));
var DrawerHeaderStyle;
(function (DrawerHeaderStyle) {
    DrawerHeaderStyle["Emphasized"] = "emphasized";
    DrawerHeaderStyle["Standard"] = "standard";
})(DrawerHeaderStyle || (DrawerHeaderStyle = {}));
function Drawer(_a) {
    var ariaLabel = _a["aria-label"], autoFocusClose = _a.autoFocusClose, children = _a.children, className = _a.className, destructiveAction = _a.destructiveAction, footer = _a.footer, header = _a.header, headerDetails = _a.headerDetails, _b = _a.headerStyle, headerStyle = _b === void 0 ? DrawerHeaderStyle.Standard : _b, isDismissable = _a.isDismissable, primaryAction = _a.primaryAction, scrollRef = _a.scrollRef, secondaryAction = _a.secondaryAction, showHeaderLoadingIndicator = _a.showHeaderLoadingIndicator, _c = _a.shouldAnimate, shouldAnimate = _c === void 0 ? true : _c, title = _a.title, _d = _a.variant, variant = _d === void 0 ? DrawerVariant.Standard : _d, _e = _a.width, width = _e === void 0 ? DrawerWidth.Medium : _e, props = __rest(_a, ['aria-label', "autoFocusClose", "children", "className", "destructiveAction", "footer", "header", "headerDetails", "headerStyle", "isDismissable", "primaryAction", "scrollRef", "secondaryAction", "showHeaderLoadingIndicator", "shouldAnimate", "title", "variant", "width"]);
    var _f = useBodyScrollPosition(), bodyScrollPosition = _f.bodyScrollPosition, onScroll = _f.onScroll, onBodyRef = _f.onBodyRef;
    var renderContent = function (_a) {
        var close = _a.close;
        var headerCssClass = "drawer__header drawer__header--".concat(headerStyle);
        var footerCssClass = 'drawer__footer';
        var headerElement, footerElement;
        if (header) {
            headerElement = jsx("div", __assign({ className: headerCssClass }, { children: isFunction(header) ? header({ close: close }) : header }));
        }
        else if (title) {
            headerElement = (jsx(OverlayHeader, __assign({ autoFocusClose: autoFocusClose, className: headerCssClass, details: headerDetails, onClose: close, showLoadingIndicator: showHeaderLoadingIndicator, variant: OverlayHeaderVariant.Neutral }, { children: title })));
        }
        if (footer) {
            footerElement = jsx("div", __assign({ className: footerCssClass }, { children: isFunction(footer) ? footer({ close: close }) : footer }));
        }
        else if (primaryAction) {
            footerElement = (jsx(OverlayFooter, { className: footerCssClass, closeCallback: close, destructiveAction: destructiveAction, primaryAction: primaryAction, secondaryAction: secondaryAction }));
        }
        return (jsxs(Fragment, { children: [headerElement, jsx("div", __assign({ className: "drawer__body", onScroll: onScroll, ref: mergeRefs(scrollRef, onBodyRef) }, { children: children })), footerElement] }));
    };
    return (jsx(ModalOverlay, __assign({}, props, { className: classNames("drawer-overlay drawer-overlay--".concat(variant), {
            'drawer-overlay--animated': shouldAnimate
        }), isDismissable: isDismissable !== null && isDismissable !== void 0 ? isDismissable : true }, { children: jsx(Modal, __assign({ className: classNames("drawer drawer--".concat(width), className) }, { children: jsx(Dialog, __assign({ "aria-label": ariaLabel, className: "drawer__dialog drawer__dialog--scroll-".concat(bodyScrollPosition) }, { children: renderContent })) })) })));
}

var InlineAlertVariant;
(function (InlineAlertVariant) {
    InlineAlertVariant["Neutral"] = "neutral";
    InlineAlertVariant["Informative"] = "informative";
    InlineAlertVariant["Success"] = "success";
    InlineAlertVariant["Danger"] = "danger";
    InlineAlertVariant["Warning"] = "warning";
})(InlineAlertVariant || (InlineAlertVariant = {}));
function getIconName(variant) {
    switch (variant) {
        case InlineAlertVariant.Danger:
            return iconNames.EmergencyHomeFilled;
        case InlineAlertVariant.Success:
            return iconNames.CheckCircleFilled;
        case InlineAlertVariant.Warning:
            return iconNames.WarningFilled;
        default:
            return iconNames.InfoFilled;
    }
}
function InlineAlert(_a) {
    var actionLabel = _a.actionLabel, className = _a.className, content = _a.content, _b = _a.isDismissible, isDismissible = _b === void 0 ? true : _b, onAction = _a.onAction, ref = _a.ref, title = _a.title, variant = _a.variant;
    var _c = useState(true), isVisible = _c[0], setIsVisible = _c[1];
    var translateCommon = useTranslateCommon();
    if (!isVisible) {
        return null;
    }
    return (jsxs("div", __assign({ className: classNames("inline-alert inline-alert--".concat(variant), className), ref: ref, role: "alert" }, { children: [variant && jsx(Icon, { className: "inline-alert__icon", name: getIconName(variant), size: IconSize.MD }), jsxs("div", __assign({ className: "inline-alert__content" }, { children: [title && (jsx(BodyText, __assign({ elementType: HTMLElementType.Div, size: Size.sm }, { children: jsx("strong", { children: title }) }))), jsx(BodyText, __assign({ elementType: HTMLElementType.Div, size: Size.sm }, { children: content }))] })), (!!actionLabel || isDismissible) && (jsxs("div", __assign({ className: "inline-alert__actions" }, { children: [actionLabel && (jsx(Button, __assign({ className: "inline-alert__action-button", onPress: onAction, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: actionLabel }))), isDismissible && (jsx(IconButton, { "aria-label": translateCommon('close'), className: "inline-alert__close-button", iconName: iconNames.CloseFilled, onPress: function () { return setIsVisible(!isVisible); }, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }))] })))] })));
}

var SkeletonShape;
(function (SkeletonShape) {
    SkeletonShape["Circle"] = "circle";
    SkeletonShape["Rectangle"] = "rectangle";
})(SkeletonShape || (SkeletonShape = {}));
function Skeleton(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, height = _a.height, _b = _a.shape, shape = _b === void 0 ? SkeletonShape.Rectangle : _b, style = _a.style, width = _a.width, props = __rest(_a, ['aria-hidden', "className", "height", "shape", "style", "width"]);
    return (jsx("div", __assign({}, props, { "aria-hidden": ariaHidden === false ? undefined : true, className: classNames("skeleton skeleton--".concat(shape), className), style: __assign(__assign({}, style), { height: height, width: width }) })));
}

var SkeletonTextType;
(function (SkeletonTextType) {
    SkeletonTextType["Body"] = "body";
    SkeletonTextType["Heading"] = "heading";
    SkeletonTextType["Label"] = "label";
    SkeletonTextType["Title"] = "title";
})(SkeletonTextType || (SkeletonTextType = {}));
function SkeletonText(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, ref = _a.ref, size = _a.size, _b = _a.type, type = _b === void 0 ? SkeletonTextType.Body : _b, width = _a.width;
    return (jsx("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames("skeleton-text skeleton-text--".concat(type, "-").concat(size), className), ref: ref, style: { width: width } }, { children: jsx(Skeleton, { "aria-hidden": false }) })));
}
function SkeletonTextMultiline(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, _b = _a.lineCount, lineCount = _b === void 0 ? 2 : _b, ref = _a.ref, width = _a.width, props = __rest(_a, ['aria-hidden', "className", "lineCount", "ref", "width"]);
    if (lineCount <= 0) {
        return null;
    }
    if (lineCount < 2) {
        return jsx(SkeletonText, __assign({}, props, { "aria-hidden": ariaHidden, className: className, ref: ref, width: width }));
    }
    return (jsx("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-text-multiline', className), ref: ref }, { children: Array.from({ length: lineCount }, function (_, i) { return (jsx(SkeletonText, __assign({ "aria-hidden": false }, props, { width: i === lineCount - 1 ? '60%' : width }), i)); }) })));
}

function useTranslateProject() {
    return useTranslateFn('project');
}

function useAnimationFrame(nextAnimationFrameHandler, shouldAnimate) {
    if (shouldAnimate === void 0) { shouldAnimate = true; }
    var frame = useRef(0);
    var animate = function (time) {
        nextAnimationFrameHandler(time);
        frame.current = requestAnimationFrame(animate);
    };
    useEffect(function () {
        if (shouldAnimate) {
            frame.current = requestAnimationFrame(animate);
        }
        else {
            cancelAnimationFrame(frame.current);
        }
        return function () { return cancelAnimationFrame(frame.current); };
    }, [shouldAnimate]);
}

function ToastProgressBar(_a) {
    var isPaused = _a.isPaused, timeout = _a.timeout;
    var translateProject = useTranslateProject();
    var _b = useState(timeout), remainingTimeout = _b[0], setRemainingTimeout = _b[1];
    var fillRef = useRef(null);
    var prevTimeRef = useRef(null);
    useAnimationFrame(function (time) {
        if (prevTimeRef.current !== null) {
            var deltaTime_1 = time - prevTimeRef.current;
            setRemainingTimeout(function (prevRemainingTimeout) { return prevRemainingTimeout - deltaTime_1; });
        }
        prevTimeRef.current = time;
    }, remainingTimeout > 0 && !isPaused);
    useEffect(function () {
        var fill = fillRef.current;
        if (fill) {
            // Need to set width directly to DOM node because React style prop makes the animation lag when moving mouse.
            fill.style.width = "".concat((remainingTimeout / timeout) * 100, "%");
        }
    }, [remainingTimeout, timeout]);
    useEffect(function () {
        if (isPaused) {
            prevTimeRef.current = null;
        }
    }, [isPaused]);
    return (jsx(ProgressBar$1, __assign({ "aria-label": translateProject('progress'), className: "toast-progress-bar", value: (remainingTimeout / timeout) * 100 }, { children: jsx("div", __assign({ className: "toast-progress-bar__bar" }, { children: jsx("div", { className: "toast-progress-bar__fill", ref: fillRef }) })) })));
}

var rhtToastDismiss = toast.dismiss;
// This is layer on top of React Hot Toast which adds queueing feature for toasts.
var ToastHandler = /** @class */ (function () {
    function ToastHandler() {
        this._maxVisibleCount = 7;
        this._toastQueue = [];
        this._visibleToastIds = new Set();
        this._lastId = 0;
        this.add = this.add.bind(this);
        this.dismiss = this.dismiss.bind(this);
    }
    ToastHandler.prototype.add = function (message, opts) {
        var id = (++this._lastId).toString();
        if (this._visibleToastIds.size >= this._maxVisibleCount) {
            this._toastQueue.push({
                message: message,
                options: __assign(__assign({}, opts), { id: id })
            });
        }
        else {
            toast(message, __assign(__assign({}, opts), { id: id }));
            this._visibleToastIds.add(id);
        }
        return id;
    };
    ToastHandler.prototype.dismiss = function (toastId) {
        rhtToastDismiss(toastId);
        this._visibleToastIds.delete(toastId);
        if (this._toastQueue.length > 0 && this._visibleToastIds.size < this._maxVisibleCount) {
            var _a = this._toastQueue.shift(), message = _a.message, options = _a.options;
            this.add(message, options);
        }
    };
    return ToastHandler;
}());
var toastHandler = new ToastHandler();
toast.dismiss = toastHandler.dismiss;

var ToastVariant;
(function (ToastVariant) {
    ToastVariant["Neutral"] = "neutral";
    ToastVariant["Informative"] = "informative";
    ToastVariant["Success"] = "success";
    ToastVariant["Danger"] = "danger";
    ToastVariant["Warning"] = "warning";
    ToastVariant["Loading"] = "loading";
})(ToastVariant || (ToastVariant = {}));
function getPrefixIcon(variant) {
    switch (variant) {
        case ToastVariant.Danger:
            return iconNames.EmergencyHomeFilled;
        case ToastVariant.Informative:
            return iconNames.InfoFilled;
        case ToastVariant.Success:
            return iconNames.CheckCircleFilled;
        case ToastVariant.Warning:
            return iconNames.WarningFilled;
        default:
            return null;
    }
}
function Toast(_a) {
    var _b = _a.shouldAnimate, shouldAnimate = _b === void 0 ? true : _b, toast = _a.toast;
    var pausedAt = useToasterStore().pausedAt;
    var translateCommon = useTranslateCommon();
    var textId = useId();
    var id = toast.id, content = toast.content, duration = toast.duration, visible = toast.visible, height = toast.height;
    var actionLabel = content.actionLabel, children = content.children, onAction = content.onAction, shouldCloseOnAction = content.shouldCloseOnAction, variant = content.variant;
    var prefix, animationCssClass = shouldAnimate ? 'toast--hidden' : undefined;
    if (shouldAnimate && height) {
        animationCssClass = visible ? 'toast--entering' : 'toast--exiting';
    }
    if (variant === ToastVariant.Loading) {
        prefix = jsx(Spinner, { size: Size.sm, variant: SpinnerVariant.None });
    }
    else {
        var iconName = getPrefixIcon(variant);
        if (iconName) {
            prefix = (jsx("div", __assign({ className: "toast__icon-wrapper" }, { children: jsx(Icon, { className: "toast__icon", name: iconName, size: IconSize.MD }) })));
        }
    }
    var onActionPress = function () {
        safeCall(onAction);
        if (shouldCloseOnAction) {
            toastHandler.dismiss(id);
        }
    };
    return (jsxs("div", __assign({ "aria-labelledby": textId, "aria-modal": false, className: classNames("toast toast--".concat(variant), animationCssClass), role: "alertdialog", 
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex: 0 }, { children: [jsxs("div", __assign({ "aria-atomic": true, className: "toast__body", role: "alert" }, { children: [prefix, jsx("div", __assign({ className: "toast__text", id: textId }, { children: jsx(BodyText, __assign({ size: Size.md }, { children: children })) })), actionLabel && (jsx(Button, __assign({ className: "toast__action-button", inverted: true, onPress: onActionPress, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: actionLabel }))), jsx(IconButton, { "aria-label": translateCommon('close'), className: "toast__close-button", iconName: iconNames.CloseFilled, inverted: true, onPress: function () {
                            toastHandler.dismiss(id);
                        }, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })] })), duration && jsx(ToastProgressBar, { isPaused: !!pausedAt, timeout: duration })] })));
}

function ToastWrapper(_a) {
    var children = _a.children, id = _a.id, isActive = _a.isActive, onHeightUpdate = _a.onHeightUpdate, style = _a.style;
    var observerRef = useRef(null);
    var ref = useCallback(function (el) {
        if (el) {
            var updateHeight = function () {
                var height = el.getBoundingClientRect().height;
                onHeightUpdate(id, height);
            };
            updateHeight();
            observerRef.current = new MutationObserver(updateHeight);
            observerRef.current.observe(el, {
                subtree: true,
                childList: true,
                characterData: true
            });
        }
        else if (observerRef.current) {
            observerRef.current.disconnect();
        }
    }, [id, onHeightUpdate]);
    return (jsx("div", __assign({ className: classNames('toast-wrapper', {
            'toast-wrapper--active': isActive
        }), ref: ref, style: style }, { children: children })));
}

var DEFAULT_TIMEOUT = 10000;
function addToast(children, variant, options) {
    var shouldCloseOnAction = options.shouldCloseOnAction, actionLabel = options.actionLabel, onAction = options.onAction, timeout = options.timeout;
    return toastHandler.add(function (t) { return (jsx(Toast, { toast: __assign(__assign({}, t), { content: {
                actionLabel: actionLabel,
                children: children,
                onAction: onAction,
                shouldCloseOnAction: shouldCloseOnAction,
                variant: variant
            } }) })); }, { duration: timeout !== null && timeout !== void 0 ? timeout : DEFAULT_TIMEOUT });
}
function closeToast(id) {
    toastHandler.dismiss(id);
}
var ToastQueue = {
    neutral: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Neutral, options);
    },
    informative: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Informative, options);
    },
    success: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Success, options);
    },
    danger: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Danger, options);
    },
    warning: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Warning, options);
    },
    loading: function (children, options) {
        if (options === void 0) { options = {}; }
        return addToast(children, ToastVariant.Loading, options);
    }
};
function GlobalToastRegion(props) {
    var _a = useToaster(), handlers = _a.handlers, toasts = _a.toasts;
    return (jsx("div", __assign({}, props, { className: "global-toast-region", onMouseEnter: handlers.startPause, onMouseLeave: handlers.endPause }, { children: toasts.map(function (t) {
            var offset = handlers.calculateOffset(t, {
                reverseOrder: true,
                gutter: 8,
                defaultPosition: 'bottom-center'
            });
            var id = t.id, message = t.message;
            return (jsx(ToastWrapper, __assign({ id: id, isActive: t.visible, onHeightUpdate: handlers.updateHeight, style: {
                    transform: "translateY(".concat(offset * -1, "px)")
                } }, { children: isFunction(message) ? message(t) : message }), id));
        }) })));
}

var DueDateButtonVariant;
(function (DueDateButtonVariant) {
    DueDateButtonVariant["Neutral"] = "neutral";
    DueDateButtonVariant["Danger"] = "danger";
    DueDateButtonVariant["Warning"] = "warning";
})(DueDateButtonVariant || (DueDateButtonVariant = {}));
function DueDateButton(_a) {
    var date = _a.date, tooltipContent = _a.tooltipContent, _b = _a.variant, variant = _b === void 0 ? DueDateButtonVariant.Neutral : _b, props = __rest(_a, ["date", "tooltipContent", "variant"]);
    var cultureDay = useCultureDay();
    var startIconName = variant === DueDateButtonVariant.Danger ? iconNames.EmergencyHomeFilled : iconNames.CalendarToday;
    return (jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipContent }, { children: [jsx(Button, __assign({}, props, { "aria-label": date, className: classNames("due-date-button due-date-button--".concat(variant), props.className), size: Size.sm, startIconName: startIconName, style: ButtonStyle.Fill, variant: ButtonVariant.Neutral }, { children: "".concat(cultureDay(date).format('l')) })), jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: tooltipContent }))] })));
}

function MenuOptionContent(_a) {
    var hasSubmenu = _a.hasSubmenu, isDestructive = _a.isDestructive, isDisabled = _a.isDisabled, isFocusVisible = _a.isFocusVisible, isHovered = _a.isHovered, isPressed = _a.isPressed, isReadOnly = _a.isReadOnly, leftIconName = _a.leftIconName, outerRef = _a.ref, rightIconName = _a.rightIconName, selectionMode = _a.selectionMode, props = __rest(_a, ["hasSubmenu", "isDestructive", "isDisabled", "isFocusVisible", "isHovered", "isPressed", "isReadOnly", "leftIconName", "ref", "rightIconName", "selectionMode"]);
    var ref = useRef(null);
    var focusableProps = useFocusable({}, ref).focusableProps;
    var showLeftIcon = !!leftIconName || selectionMode !== 'none';
    var showRightIcon = !!rightIconName || hasSubmenu;
    return (jsx("div", __assign({}, focusableProps, { className: ACTION_ITEM_CSS_CLASS, "data-destructive": !!isDestructive || undefined, "data-disabled": isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-hovered": (isHovered && !isReadOnly) || undefined, "data-pressed": (isPressed && !isReadOnly) || undefined, "data-readonly": !!isReadOnly || undefined, ref: mergeRefs(ref, outerRef) }, { children: jsx(ActionItemContent, __assign({}, props, { leftIconName: showLeftIcon ? (leftIconName !== null && leftIconName !== void 0 ? leftIconName : iconNames.InputCheck) : undefined, rightIconName: showRightIcon ? (rightIconName !== null && rightIconName !== void 0 ? rightIconName : iconNames.ArrowRightFilled) : undefined })) })));
}
function MenuOptionInner(_a) {
    var tooltipRef = _a.tooltipRef, props = __rest(_a, ["tooltipRef"]);
    var _b = useState(false), isTooltipOpen = _b[0], setIsTooltipOpen = _b[1];
    var ref = useRef(null);
    var isFocusVisible = props.isFocusVisible, tooltip = props.tooltip;
    var tooltipContent = tooltip === null || tooltip === void 0 ? void 0 : tooltip.content;
    useEffect(function () {
        setIsTooltipOpen(tooltipContent ? isFocusVisible : false);
    }, [isFocusVisible]);
    return (jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipContent, isOpen: isTooltipOpen, onOpenChange: setIsTooltipOpen }, { children: [jsx(MenuOptionContent, __assign({}, props, { ref: ref })), jsx(Tooltip, __assign({ offset: -2, position: Position.Left, ref: tooltipRef, triggerRef: ref, type: TooltipType.Plain }, { children: tooltipContent }))] })));
}
function MenuOption(_a) {
    var actionLabel = _a.actionLabel, className = _a.className, description = _a.description, isDestructive = _a.isDestructive, isReadOnly = _a.isReadOnly, label = _a.label, leftIconName = _a.leftIconName, prefix = _a.prefix, rightIconName = _a.rightIconName, outerRef = _a.ref, tooltip = _a.tooltip, props = __rest(_a, ["actionLabel", "className", "description", "isDestructive", "isReadOnly", "label", "leftIconName", "prefix", "rightIconName", "ref", "tooltip"]);
    var ref = useRef(null);
    return (jsx(MenuItem, __assign({}, props, { className: classNames('menu-item', className), ref: mergeRefs(outerRef, ref, function (node) {
            // RAC MenuItem does not support aria-disabled prop so need to do this the hard way...
            if (node && isReadOnly) {
                node.setAttribute('aria-disabled', 'true');
            }
        }) }, { children: function (itemRenderProps) { return (jsx(MenuOptionInner, __assign({}, itemRenderProps, { actionLabel: actionLabel, description: description, isDestructive: isDestructive, isReadOnly: isReadOnly, label: label, leftIconName: leftIconName, prefix: prefix, rightIconName: rightIconName, tooltip: tooltip, tooltipRef: function (tooltipNode) {
                // RAC MenuItem does not support Tooltip so need to handle the aria-describedby the hard way...
                var itemNode = ref.current;
                if (!itemNode) {
                    return;
                }
                if (tooltipNode) {
                    itemNode.setAttribute('aria-describedby', tooltipNode.getAttribute('id'));
                }
                else {
                    itemNode.removeAttribute('aria-describedby');
                }
            } }))); } })));
}

function MenuLinkButton(_a) {
    var children = _a.children, onPress = _a.onPress, role = _a.role;
    var state = useContext(RootMenuTriggerStateContext);
    return (jsx(Button, __assign({ className: "menu-link-button", onPress: function () {
            safeCall(onPress);
            state === null || state === void 0 ? void 0 : state.close();
        }, role: role, style: ButtonStyle.Link, variant: ButtonVariant.Neutral }, { children: children })));
}

function Divider(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.center : _b, className = _a.className, _c = _a.orientation, orientation = _c === void 0 ? Orientation.horizontal : _c, ref = _a.ref, size = _a.size, style = _a.style, text = _a.text;
    var cssClassName = classNames("divider divider--".concat(size, " divider--").concat(orientation, " divider--align-").concat(alignment), className);
    if (!text) {
        return (jsx(Separator, { className: cssClassName, elementType: HTMLElementType.Div, orientation: orientation, style: style }));
    }
    return (jsx("div", __assign({ "aria-orientation": orientation, className: cssClassName, ref: ref, role: AriaRole.separator, style: style }, { children: jsx(Label, __assign({ className: "divider__label", size: Size.sm }, { children: text })) })));
}

function MenuGroupHeader(_a) {
    var children = _a.children, className = _a.className;
    return (jsx(Header, __assign({ className: classNames('menu-group-header', className) }, { children: jsx(Label, __assign({ size: Size.sm }, { children: jsx("strong", { children: children }) })) })));
}

var SubmenuBehavior;
(function (SubmenuBehavior) {
    SubmenuBehavior["Separate"] = "separate";
    SubmenuBehavior["InPlace"] = "in-place";
})(SubmenuBehavior || (SubmenuBehavior = {}));
var SelectionMode;
(function (SelectionMode) {
    SelectionMode["Single"] = "single";
    SelectionMode["Multiple"] = "multiple";
})(SelectionMode || (SelectionMode = {}));
function findItem(items, key) {
    if (!items || isNullOrUndefined(key)) {
        return undefined;
    }
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        if (item.id === key) {
            return item;
        }
        if (item.children) {
            var childItem = findItem(item.children, key);
            if (childItem) {
                return childItem;
            }
        }
    }
    return undefined;
}
function Menu(_a) {
    var _b;
    var className = _a.className, children = _a.children, footerItems = _a.footerItems, header = _a.header, minWidth = _a.minWidth, propsOnOpenChange = _a.onOpenChange, placement = _a.placement, ref = _a.ref, props = __rest(_a, ["className", "children", "footerItems", "header", "minWidth", "onOpenChange", "placement", "ref"]);
    var selectedKeysFromProps = props.selectedKeys;
    var _c = useState(new Set(selectedKeysFromProps)), selectedKeys = _c[0], setSelectedKeys = _c[1];
    var _d = useState(false), isOpen = _d[0], setIsOpen = _d[1];
    var skipCloseRef = useRef(false);
    var menuRef = useRef(null);
    var _e = useState(null), activeSubMenuItem = _e[0], setActiveSubMenuItem = _e[1];
    var itemsToRender = activeSubMenuItem ? __spreadArray([__assign(__assign({}, activeSubMenuItem), { children: undefined })], activeSubMenuItem.children, true) : props.items;
    useImperativeHandle(ref, function () { return menuRef.current; }, []);
    var onAction = function (key) {
        var _a;
        var item = findItem(props.items, key);
        if (!item) {
            return;
        }
        if ((_a = item.props) === null || _a === void 0 ? void 0 : _a.isReadOnly) {
            skipCloseRef.current = true;
            return;
        }
        if (item.isSubmenuTrigger) {
            skipCloseRef.current = item.selectionMode !== SelectionMode.Multiple || activeSubMenuItem === null;
            setActiveSubMenuItem(activeSubMenuItem ? null : item);
        }
        else {
            safeCall(props.onAction, key);
        }
    };
    var onOpenChange = function (isMenuOpen) {
        if (!isMenuOpen && skipCloseRef.current) {
            skipCloseRef.current = false;
            return;
        }
        setIsOpen(isMenuOpen);
        propsOnOpenChange === null || propsOnOpenChange === void 0 ? void 0 : propsOnOpenChange(isMenuOpen);
        if (!isMenuOpen) {
            setActiveSubMenuItem(null);
        }
    };
    var onSelectionChange = function (keys) {
        if (activeSubMenuItem && keys instanceof Set && keys.has(activeSubMenuItem.id)) {
            return;
        }
        setSelectedKeys(keys);
        safeCall(props.onSelectionChange, keys);
    };
    useEffect(function () {
        setSelectedKeys(new Set(selectedKeysFromProps));
    }, [selectedKeysFromProps]);
    var renderItem = function (item) {
        var _a, _b, _c, _d, _e, _f;
        var id = item.id, itemProps = item.props, name = item.name, itemChildren = item.children, hasSeparator = item.hasSeparator, isSubmenuTrigger = item.isSubmenuTrigger, _g = item.submenuBehavior, submenuBehavior = _g === void 0 ? SubmenuBehavior.Separate : _g, selectionMode = item.selectionMode;
        if (itemChildren) {
            if (isSubmenuTrigger) {
                if (submenuBehavior === SubmenuBehavior.InPlace) {
                    return (jsxs(Fragment$1, { children: [createElement(MenuOption, __assign({}, itemProps, { id: id, key: id, label: (_a = itemProps === null || itemProps === void 0 ? void 0 : itemProps.label) !== null && _a !== void 0 ? _a : name, rightIconName: iconNames.ArrowRightFilled, textValue: (_b = itemProps === null || itemProps === void 0 ? void 0 : itemProps.textValue) !== null && _b !== void 0 ? _b : name })), hasSeparator && jsx(Divider, { size: Size.sm })] }, id));
                }
                return (jsxs(Fragment$1, { children: [jsxs(SubmenuTrigger, { children: [createElement(MenuOption, __assign({}, itemProps, { key: id, label: (_c = itemProps === null || itemProps === void 0 ? void 0 : itemProps.label) !== null && _c !== void 0 ? _c : name, textValue: (_d = itemProps === null || itemProps === void 0 ? void 0 : itemProps.textValue) !== null && _d !== void 0 ? _d : name })), jsx(Popover$1, __assign({ className: "menu-popover" }, { children: jsx("div", __assign({ className: "menu-popover__content" }, { children: jsx(Menu$1, __assign({ className: classNames('menu', className), onAction: onAction, onSelectionChange: onSelectionChange, selectedKeys: selectedKeys, selectionMode: selectionMode }, { children: itemChildren.map(renderItem) })) })) }))] }), hasSeparator && jsx(Divider, { size: Size.sm })] }, id));
            }
            return (jsxs(Fragment$1, { children: [jsxs(MenuSection, __assign({ className: "menu-section" }, { children: [jsx(MenuGroupHeader, { children: name }), itemChildren.map(renderItem)] })), hasSeparator && jsx(Divider, { size: Size.sm })] }, id));
        }
        return (jsxs(Fragment$1, { children: [createElement(MenuOption, __assign({}, itemProps, { className: classNames(itemProps === null || itemProps === void 0 ? void 0 : itemProps.className, { 'menu-item--back': isSubmenuTrigger }), id: id, key: id, label: (_e = itemProps === null || itemProps === void 0 ? void 0 : itemProps.label) !== null && _e !== void 0 ? _e : name, leftIconName: isSubmenuTrigger ? iconNames.ArrowLeftFilled : itemProps === null || itemProps === void 0 ? void 0 : itemProps.leftIconName, textValue: (_f = itemProps === null || itemProps === void 0 ? void 0 : itemProps.textValue) !== null && _f !== void 0 ? _f : name })), hasSeparator && jsx(Divider, { size: Size.sm })] }, id));
    };
    return (jsxs(MenuTrigger, __assign({ isOpen: isOpen, onOpenChange: onOpenChange }, { children: [children, jsx(Popover$1, __assign({ className: "menu-popover", placement: placement }, { children: jsxs("div", __assign({ className: "menu-popover__content" }, { children: [header && (jsx("div", __assign({ className: "menu-header" }, { children: jsx(Label, __assign({ size: Size.md }, { children: jsx("strong", { children: header }) })) }))), jsx(Menu$1, __assign({}, props, { className: classNames('menu', className), onAction: onAction, onSelectionChange: onSelectionChange, ref: menuRef, selectedKeys: selectedKeys, selectionMode: (_b = activeSubMenuItem === null || activeSubMenuItem === void 0 ? void 0 : activeSubMenuItem.selectionMode) !== null && _b !== void 0 ? _b : props.selectionMode, style: { minWidth: minWidth ? "".concat(minWidth, "px") : undefined } }, { children: itemsToRender.map(renderItem) })), footerItems && footerItems.length > 0 && (jsxs(Fragment, { children: [jsx(Divider, { size: Size.sm }), jsx("div", __assign({ className: "menu-footer", onBlur: function () {
                                        if (menuRef.current) {
                                            menuRef.current.tabIndex = -1;
                                        }
                                    }, onFocus: function () {
                                        if (menuRef.current) {
                                            menuRef.current.tabIndex = 0;
                                        }
                                    } }, { children: footerItems.map(function (footerItem) { return (jsx(MenuLinkButton, __assign({ onPress: footerItem.onPress, role: footerItem.role }, { children: footerItem.name }), footerItem.id)); }) }))] }))] })) }))] })));
}

var DialogTrigger = DialogTrigger$1;

function Popover(_a) {
    var ariaLabel = _a["aria-label"], ariaLabelledBy = _a["aria-labelledby"], children = _a.children, className = _a.className, maxWidth = _a.maxWidth, padding = _a.padding, style = _a.style, props = __rest(_a, ['aria-label', 'aria-labelledby', "children", "className", "maxWidth", "padding", "style"]);
    return (jsx(Popover$1, __assign({}, props, { className: classNames('popover', className), style: __assign(__assign({}, style), { maxWidth: maxWidth }) }, { children: jsx(Dialog, __assign({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className: "popover__dialog", style: isObject(padding) && !isString(padding) ?
                {
                    paddingTop: padding === null || padding === void 0 ? void 0 : padding.top,
                    paddingBottom: padding === null || padding === void 0 ? void 0 : padding.bottom,
                    paddingLeft: padding === null || padding === void 0 ? void 0 : padding.left,
                    paddingRight: padding === null || padding === void 0 ? void 0 : padding.right
                }
                : { padding: padding } }, { children: children })) })));
}

function SegmentedControlItem(_a) {
    var label = _a.label, startIconName = _a.startIconName, props = __rest(_a, ["label", "startIconName"]);
    var buttonElement = (jsxs(Button$1, __assign({}, props, { className: "segmented-control-item" }, { children: [startIconName && jsx(Icon, { className: "segmented-control-item__icon", name: startIconName }), label && (jsx(Label, __assign({ className: "segmented-control-item__label", size: Size.md }, { children: label })))] })));
    if (label) {
        return buttonElement;
    }
    return (jsxs(TooltipTrigger, { children: [buttonElement, jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: props['aria-label'] }))] }));
}

function SegmentedControl(_a) {
    var className = _a.className, items = _a.items, onSelectionChange = _a.onSelectionChange, ref = _a.ref, props = __rest(_a, ["className", "items", "onSelectionChange", "ref"]);
    var initialSelectedKey = props.selectedKey;
    var _b = useState(initialSelectedKey !== null && initialSelectedKey !== void 0 ? initialSelectedKey : (items.length > 0 ? items[0].id : null)), selectedKey = _b[0], setSelectedKey = _b[1];
    var onChange = function (id) {
        setSelectedKey(id);
        safeCall(onSelectionChange, id);
    };
    useEffect(function () {
        setSelectedKey(initialSelectedKey !== null && initialSelectedKey !== void 0 ? initialSelectedKey : (items.length > 0 ? items[0].id : null));
    }, [initialSelectedKey]);
    return (jsx("div", __assign({ className: classNames('segmented-control', className), ref: ref, role: "group" }, { children: items.map(function (_a) {
            var id = _a.id, label = _a.label, ariaLabel = _a.ariaLabel, isDisabled = _a.isDisabled, startIconName = _a.startIconName;
            var isSelected = selectedKey === id;
            return (jsx(SegmentedControlItem, { "aria-label": ariaLabel, "aria-pressed": isSelected, "data-selected": isSelected || undefined, isDisabled: isDisabled, label: label, onPress: function () { return onChange(id); }, startIconName: startIconName }, id));
        }) })));
}

var CollapsibleItemStyle;
(function (CollapsibleItemStyle) {
    CollapsibleItemStyle["Card"] = "card";
    CollapsibleItemStyle["Plain"] = "plain";
})(CollapsibleItemStyle || (CollapsibleItemStyle = {}));
function CollapsibleItem(_a) {
    var _b = _a.arrowPlacement, arrowPlacement = _b === void 0 ? Alignment.start : _b, groupState = _a.groupState, isDisabled = _a.isDisabled, item = _a.item, ref = _a.ref, _c = _a.style, style = _c === void 0 ? CollapsibleItemStyle.Plain : _c, props = __rest(_a, ["arrowPlacement", "groupState", "isDisabled", "item", "ref", "style"]);
    var id = item.id, title = item.title, tooltipContent = item.tooltipContent, children = item.children;
    var panelRef = useRef(null);
    var propsIsExpanded = groupState ? groupState.expandedKeys.has(id) : props.isExpanded;
    var state = useDisclosureState(__assign(__assign({}, props), { isExpanded: propsIsExpanded, onExpandedChange: function (newIsExpanded) {
            var _a;
            if (groupState) {
                groupState.toggleKey(id);
            }
            (_a = props.onExpandedChange) === null || _a === void 0 ? void 0 : _a.call(props, newIsExpanded);
        } }));
    var _d = useDisclosure(__assign(__assign({}, props), { isExpanded: propsIsExpanded, isDisabled: isDisabled }), state, panelRef), buttonProps = _d.buttonProps, panelProps = _d.panelProps;
    var isExpanded = state.isExpanded;
    var _e = useAutoHeightAnimation({ isExpanded: isExpanded, ref: panelRef }), isLoaded = _e.isLoaded, panelProps2 = _e.props;
    var onKeyDown = function (e) {
        if (isExpanded && e.key === KeyboardEventKey.Escape) {
            state.collapse();
        }
    };
    var tooltipElement = tooltipContent ?
        jsxs(TooltipTrigger, { children: [jsx(TriggerElement, { children: jsx(Icon, { className: "collapsible-item__tooltip-icon", name: iconNames.InfoFilled, size: style === CollapsibleItemStyle.Card ? IconSize.SM : IconSize.XS }) }), jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: tooltipContent }))] })
        : null;
    return (jsxs("div", __assign({ className: classNames("collapsible-item collapsible-item--".concat(style, " collapsible-item--arrow-").concat(arrowPlacement), {
            'collapsible-item--disabled': isDisabled,
            'collapsible-item--open': isExpanded
        }), ref: ref }, { children: [jsx(FocusRing, __assign({ focusRingClass: "collapsible-item__header--focused" }, { children: jsxs(Button$1, __assign({}, buttonProps, { className: "collapsible-item__header", onKeyDown: chain(buttonProps.onKeyDown, onKeyDown) }, { children: [style === CollapsibleItemStyle.Card ?
                            jsxs(Heading, __assign({ className: "collapsible-item__header-text", level: 1, size: Size.xs }, { children: [title, tooltipElement] }))
                            : jsxs(Label, __assign({ className: "collapsible-item__header-text", size: Size.lg }, { children: [jsx("strong", { children: title }), tooltipElement] })), jsx(Icon, { className: "collapsible-item__header-icon", name: isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight, size: IconSize.LG })] })) })), jsx("div", __assign({}, mergeProps(panelProps, panelProps2), { className: "collapsible-item__content-wrapper", ref: panelRef }, { children: (isExpanded || isLoaded) && jsx("div", __assign({ className: "collapsible-item__content" }, { children: children })) })), style === CollapsibleItemStyle.Plain && jsx(Divider, { className: "collapsible-item__divider", size: Size.sm })] })));
}

function Collapsible(_a) {
    var _b = _a.allowsMultipleExpanded, allowsMultipleExpanded = _b === void 0 ? true : _b, _c = _a.arrowPlacement, arrowPlacement = _c === void 0 ? Alignment.start : _c, className = _a.className, disabledKeys = _a.disabledKeys, items = _a.items, ref = _a.ref, _d = _a.style, style = _d === void 0 ? CollapsibleItemStyle.Plain : _d, props = __rest(_a, ["allowsMultipleExpanded", "arrowPlacement", "className", "disabledKeys", "items", "ref", "style"]);
    var groupState = useDisclosureGroupState(__assign({ allowsMultipleExpanded: allowsMultipleExpanded }, props));
    var disabledKeysSet = useMemo(function () { return (disabledKeys ? new Set(disabledKeys) : new Set()); }, [disabledKeys]);
    return (jsx("div", __assign({ className: classNames("collapsible collapsible--".concat(style, "-items"), className), ref: ref }, { children: items.map(function (item) {
            var _a;
            return (jsx(CollapsibleItem, { arrowPlacement: arrowPlacement, groupState: groupState, isDisabled: (_a = props.isDisabled) !== null && _a !== void 0 ? _a : disabledKeysSet.has(item.id), item: item, style: style }, item.id));
        }) })));
}

function useLanguageDay() {
    var languageLocale = useLocales().languageLocale;
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return day.apply(void 0, args).locale(languageLocale);
    }, [languageLocale]);
}

function useTranslateDatePeriod() {
    return useTranslateFn('datePeriod');
}

function CalendarCell(_a) {
    var date = _a.date, isSelectedAsRelatedValue = _a.isSelectedAsRelatedValue, rangeInfo = _a.rangeInfo, renderContent = _a.renderContent, state = _a.state;
    var ref = useRef(null);
    var timeZone = useLocales().timeZone;
    var _b = useCalendarCell({ date: date }, state, ref), cellProps = _b.cellProps, buttonProps = _b.buttonProps, formattedDate = _b.formattedDate, isSelected = _b.isSelected, isFocused = _b.isFocused, isDisabled = _b.isDisabled, isOutsideVisibleRange = _b.isOutsideVisibleRange, isUnavailable = _b.isUnavailable;
    var isToday = isSameDay(date, today(timeZone));
    var dayOfMonthProps = __assign(__assign({}, buttonProps), { children: formattedDate, isDisabled: isDisabled || isOutsideVisibleRange, isFocused: isFocused, isInteractive: true, isSelected: !!isSelectedAsRelatedValue || isSelected, isToday: isToday, isUnavailable: isUnavailable, ref: ref });
    var _c = rangeInfo !== null && rangeInfo !== void 0 ? rangeInfo : {}, isInRange = _c.isInRange, isStartOfRange = _c.isStartOfRange, isEndOfRange = _c.isEndOfRange;
    var content;
    if (renderContent) {
        content = renderContent({
            date: date.toString(),
            dayOfMonthProps: dayOfMonthProps
        });
    }
    else {
        content = jsx(DayOfMonth, __assign({}, dayOfMonthProps));
    }
    return (jsx("td", __assign({}, cellProps, { className: "calendar-grid__cell", "data-in-range": !!isInRange || undefined, "data-range-end": !!isEndOfRange || undefined, "data-range-start": !!isStartOfRange || undefined }, { children: jsx("div", __assign({ className: "calendar-grid__cell-content" }, { children: content })) })));
}

function CalendarHeaderCell(_a) {
    var ariaLabel = _a["aria-label"], children = _a.children;
    return (jsx("th", __assign({ "aria-label": ariaLabel, className: "calendar-grid__header-cell" }, { children: children && (jsx("div", __assign({ className: "calendar-grid__header-cell-content" }, { children: jsx(Label, __assign({ size: Size.sm }, { children: jsx("strong", { children: children }) })) }))) })));
}

function getDateValue(value) {
    if (value) {
        return isString(value) ? parseDate(value) : value;
    }
    return null;
}

function CalendarWeekNumberCell(_a) {
    var children = _a.children;
    return (jsx("td", __assign({ className: "calendar-grid__week-nr-cell" }, { children: jsx("div", __assign({ className: "calendar-grid__week-nr-cell-content" }, { children: jsx(Label, __assign({ size: Size.sm }, { children: jsx("strong", { children: children }) })) })) })));
}

var VISIBLE_WEEKS_IN_MONTH = 6;
function CalendarGrid(_a) {
    var highlightSelectedWeek = _a.highlightSelectedWeek, relatedValue = _a.relatedValue, renderCellContent = _a.renderCellContent, showWeekNumbers = _a.showWeekNumbers, state = _a.state, props = __rest(_a, ["highlightSelectedWeek", "relatedValue", "renderCellContent", "showWeekNumbers", "state"]);
    var _b = useCalendarGrid(props, state), gridProps = _b.gridProps, headerProps = _b.headerProps;
    var languageDay = useLanguageDay();
    var cultureDay = useCultureDay();
    var translateDatePeriod = useTranslateDatePeriod();
    var renderHeaderCells = function () {
        var cells = __spreadArray([], state.getDatesInWeek(0).map(function (date, i) {
            var weekDay = languageDay(date === null || date === void 0 ? void 0 : date.toString()).format('dd');
            return jsx(CalendarHeaderCell, { children: weekDay }, i);
        }), true);
        if (showWeekNumbers) {
            cells.unshift(jsx(CalendarHeaderCell, { "aria-label": translateDatePeriod('weekShort') }, "week"));
        }
        return cells;
    };
    var renderBodyCells = function (weekDates) {
        var cells = [];
        weekDates.forEach(function (date, i) {
            if (date) {
                if (i === 0 && showWeekNumbers) {
                    var weekNumber = cultureDay(date.toString()).week();
                    cells.push(jsx(CalendarWeekNumberCell, { children: weekNumber }, "week"));
                }
                var selectedValue = state.value;
                var relatedSelectedValue = relatedValue ? getDateValue(relatedValue) : null;
                var hasRange = !!relatedSelectedValue && !!selectedValue && !isSameDay(selectedValue, relatedSelectedValue);
                var isInRange = hasRange &&
                    cultureDay(date.toString()).isBetween(relatedSelectedValue.toString(), selectedValue.toString(), 'day', '[]');
                var isSelectedAsRelatedValue = !!relatedSelectedValue && isSameDay(relatedSelectedValue, date);
                var isStartOfRange = false, isEndOfRange = false;
                if (hasRange && isInRange) {
                    var startDateOfRange = (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.compare(relatedSelectedValue)) > 0 ? relatedSelectedValue : selectedValue;
                    var endDateOfRange = startDateOfRange === selectedValue ? relatedSelectedValue : selectedValue;
                    isStartOfRange = isSameDay(startDateOfRange, date);
                    isEndOfRange = !isStartOfRange && isSameDay(endDateOfRange, date);
                }
                cells.push(jsx(CalendarCell, { date: date, isSelectedAsRelatedValue: isSelectedAsRelatedValue, rangeInfo: { isInRange: isInRange, isStartOfRange: isStartOfRange, isEndOfRange: isEndOfRange }, renderContent: renderCellContent, state: state }, i));
            }
            else {
                cells.push(jsx("td", { className: "calendar-grid__cell" }, i));
            }
        });
        return cells;
    };
    return (jsxs("table", __assign({}, gridProps, { className: "calendar-grid" }, { children: [jsx("thead", __assign({}, headerProps, { className: "calendar-grid__header" }, { children: jsx("tr", __assign({ className: "calendar-grid__header-row" }, { children: renderHeaderCells() })) })), jsx("tbody", __assign({ className: "calendar-grid__body" }, { children: __spreadArray([], new Array(VISIBLE_WEEKS_IN_MONTH).keys(), true).map(function (weekIndex) {
                    var _a, _b;
                    var weekDates = state.getDatesInWeek(weekIndex);
                    var firstDateOfWeek = (_a = weekDates[0]) === null || _a === void 0 ? void 0 : _a.toString();
                    var selectedDate = (_b = state.value) === null || _b === void 0 ? void 0 : _b.toString();
                    var isHighlighted = highlightSelectedWeek &&
                        firstDateOfWeek &&
                        selectedDate &&
                        cultureDay(firstDateOfWeek).week() === cultureDay(selectedDate).week();
                    return (jsx("tr", __assign({ className: classNames('calendar-grid__row', {
                            'calendar-grid__row--highlight': isHighlighted
                        }) }, { children: renderBodyCells(weekDates) }), weekIndex));
                }) }))] })));
}

var InputChangeTriggerAction;
(function (InputChangeTriggerAction) {
    InputChangeTriggerAction["Focus"] = "focus";
    InputChangeTriggerAction["Input"] = "input";
})(InputChangeTriggerAction || (InputChangeTriggerAction = {}));

function hasState(stateMap, state) {
    return !isNullOrUndefined(stateMap) && !isNullOrUndefined(state) && stateMap.has(state);
}

var DataState = {
    LOADING: 0,
    ERROR: 1,
    UPDATED: 2,
    REMOVING: 3,
    NOT_ALLOWED: 4,
    HIDDEN: 5,
    DRAGGING: 6,
    COLLAPSED: 7,
    PHASETREE_PLACEHOLDER: 8,
    UPLOADING: 9,
    CREATED: 10,
    NO_EDIT: 11,
    SEARCH_MATCHES: 12,
    SAVED: 13
};

function useDataState(dataState, isInvalid, isReadOnly) {
    var _a;
    return {
        hasError: !!isInvalid || hasState(dataState, DataState.ERROR),
        errorMessage: (_a = dataState === null || dataState === void 0 ? void 0 : dataState.get(DataState.ERROR)) !== null && _a !== void 0 ? _a : '',
        isReadOnly: !!isReadOnly || hasState(dataState, DataState.LOADING)
    };
}

function hasItemWithText(items, searchText) {
    var searchTxt = searchText.toLowerCase();
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var children = item.children;
        var subItems = item.items;
        var text = item.text.toLowerCase();
        if (text === searchTxt ||
            (children && hasItemWithText(children, searchText)) ||
            (subItems && hasItemWithText(subItems, searchText))) {
            return true;
        }
    }
    return false;
}

var SpecialSelectItemKey;
(function (SpecialSelectItemKey) {
    SpecialSelectItemKey["CREATABLE"] = "creatable";
})(SpecialSelectItemKey || (SpecialSelectItemKey = {}));

function createFlatSelectItemList(selectItems, includeHeaders, expandedKeys) {
    var len = selectItems.length;
    if (len === 0) {
        return selectItems;
    }
    var flatItems = [];
    for (var i = 0; i < len; i++) {
        var selectItem = selectItems[i];
        var children = selectItem.children, items = selectItem.items, value = selectItem.value;
        if (!items || includeHeaders) {
            flatItems.push(selectItem);
        }
        if (items) {
            flatItems.push.apply(flatItems, createFlatSelectItemList(items, includeHeaders, expandedKeys));
        }
        else if (children && (expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(value)) !== false) {
            flatItems.push.apply(flatItems, createFlatSelectItemList(children, includeHeaders, expandedKeys));
        }
    }
    return flatItems;
}

/**
 * Use for field components which do not pass id and aria-describedby via Reach Aria components.
 */
function useFieldHelpText(props) {
    var dataState = props.dataState, helpText = props.helpText, helpTextSuccess = props.helpTextSuccess, isInvalid = props.isInvalid;
    var _a = useDataState(dataState, isInvalid), hasError = _a.hasError, errorMessage = _a.errorMessage;
    var helpContent = helpText;
    if (hasError) {
        helpContent = errorMessage ? errorMessage : helpContent;
    }
    else if (helpTextSuccess) {
        helpContent = helpTextSuccess;
    }
    var helpId = useSlotId([!!helpContent]);
    return {
        fieldProps: {
            'aria-describedby': helpId || undefined
        },
        helpTextProps: {
            id: helpId
        }
    };
}

function useScrollToSelectedOption(_a) {
    var isLoading = _a.isLoading, isOpen = _a.isOpen, menuRef = _a.menuRef;
    useEffect(function () {
        if (isOpen && !isLoading) {
            var menuElement = menuRef.current;
            if (menuElement) {
                var selectedElement = menuElement.querySelector('.select-option[data-selected]');
                if (selectedElement instanceof HTMLElement) {
                    menuElement.scrollTop = selectedElement.offsetTop - menuElement.offsetHeight / 2;
                }
            }
        }
    }, [isOpen, isLoading]);
}

// This hook should be run when using Popover with isNonModal = true.
// It is a workaround for accessibility issue when Popover is used inside Modal.
// For more info, see: https://github.com/adobe/react-spectrum/issues/4213
function useNonModalPopoverInModalFix(isOpen, triggerRef, popoverRef) {
    useEffect(function () {
        if (isOpen && triggerRef.current && popoverRef.current) {
            return ariaHideOutside([triggerRef.current, popoverRef.current]);
        }
    }, [isOpen, triggerRef, popoverRef]);
}

var InteractionSource;
(function (InteractionSource) {
    InteractionSource[InteractionSource["Keyboard"] = 1] = "Keyboard";
    InteractionSource[InteractionSource["Mouse"] = 2] = "Mouse";
})(InteractionSource || (InteractionSource = {}));

var _a$8 = useCombobox.stateChangeTypes, InputKeyDownArrowDown = _a$8.InputKeyDownArrowDown, InputKeyDownArrowUp = _a$8.InputKeyDownArrowUp, InputKeyDownPageUp = _a$8.InputKeyDownPageUp, InputKeyDownPageDown = _a$8.InputKeyDownPageDown, InputKeyDownEnd = _a$8.InputKeyDownEnd, InputKeyDownHome = _a$8.InputKeyDownHome;
var _b$3 = useSelect.stateChangeTypes, ToggleButtonKeyDownArrowDown = _b$3.ToggleButtonKeyDownArrowDown, ToggleButtonKeyDownArrowUp = _b$3.ToggleButtonKeyDownArrowUp, ToggleButtonKeyDownPageUp = _b$3.ToggleButtonKeyDownPageUp, ToggleButtonKeyDownPageDown = _b$3.ToggleButtonKeyDownPageDown, ToggleButtonKeyDownHome = _b$3.ToggleButtonKeyDownHome, ToggleButtonKeyDownEnd = _b$3.ToggleButtonKeyDownEnd;
var keyboardNavigationChangeTypes = [
    InputKeyDownArrowDown,
    InputKeyDownArrowUp,
    InputKeyDownPageUp,
    InputKeyDownPageDown,
    InputKeyDownEnd,
    InputKeyDownHome,
    ToggleButtonKeyDownArrowDown,
    ToggleButtonKeyDownArrowUp,
    ToggleButtonKeyDownPageUp,
    ToggleButtonKeyDownPageDown,
    ToggleButtonKeyDownHome,
    ToggleButtonKeyDownEnd
];
function useSelectItemHighlight() {
    var _a = useState(-1), highlightedIndex = _a[0], setHighlightedIndex = _a[1];
    var _b = useState(InteractionSource.Mouse), highlightSource = _b[0], setHighlightSource = _b[1];
    var onHighlightedIndexChange = function (changes) {
        var type = changes.type, newHighlightedIndex = changes.highlightedIndex;
        setHighlightedIndex(newHighlightedIndex);
        setHighlightSource(newHighlightedIndex > -1 && keyboardNavigationChangeTypes.includes(type) ?
            InteractionSource.Keyboard
            : InteractionSource.Mouse);
    };
    return {
        onHighlightedIndexChange: onHighlightedIndexChange,
        highlightedIndex: highlightedIndex,
        highlightSource: highlightSource,
        setHighlightSource: setHighlightSource,
        setHighlightedIndex: setHighlightedIndex
    };
}

// Simplified version of the React Stately useControlledState hook.
// See @react-stately/utils package for the original implementation.
function useControlledState(defaultValue, value, onChange) {
    var _a = useState(value !== null && value !== void 0 ? value : defaultValue), stateValue = _a[0], setStateValue = _a[1];
    var isControlled = value !== undefined;
    var currentValue = isControlled ? value : stateValue;
    var setValue = useCallback(function (newValue) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var onChangeCaller = function (val) {
            var onChangeArgs = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                onChangeArgs[_i - 1] = arguments[_i];
            }
            if (onChange && !Object.is(currentValue, val)) {
                onChange.apply(void 0, __spreadArray([val], onChangeArgs, false));
            }
            if (!isControlled) {
                // If uncontrolled, mutate the currentValue local variable so that
                // calling setState multiple times with the same value only emits onChange once.
                // We do not use a ref for this because we specifically _do_ want the value to
                // reset every render, and assigning to a ref in render breaks aborted suspended renders.
                currentValue = val;
            }
        };
        if (!isControlled) {
            setStateValue(newValue);
        }
        onChangeCaller.apply(void 0, __spreadArray([newValue], args, false));
    }, [isControlled, currentValue, onChange]);
    return [currentValue, setValue];
}

function useSelectCommon(_a) {
    var allowCreate = _a.allowCreate, changeCallback = _a.changeCallback, changeParams = _a.changeParams, dataState = _a.dataState, expandedKeys = _a.expandedKeys, helpText = _a.helpText, items = _a.items, isInvalid = _a.isInvalid, isLoading = _a.isLoading, onFocusChange = _a.onFocusChange, text = _a.text, value = _a.value, props = __rest(_a, ["allowCreate", "changeCallback", "changeParams", "dataState", "expandedKeys", "helpText", "items", "isInvalid", "isLoading", "onFocusChange", "text", "value"]);
    var triggerContentRef = useRef(null);
    var popoverRef = useRef(null);
    var listBoxRef = useRef(null);
    var _b = useFocusRing({ within: true, isTextInput: false }), baseFocusProps = _b.focusProps, isFocused = _b.isFocused, isFocusVisible = _b.isFocusVisible;
    var focusProps = mergeProps(baseFocusProps, {
        onBlur: function () { return onFocusChange === null || onFocusChange === void 0 ? void 0 : onFocusChange(false); },
        onFocus: function () { return onFocusChange === null || onFocusChange === void 0 ? void 0 : onFocusChange(true); }
    });
    var _c = useHover(props), hoverProps = _c.hoverProps, isHovered = _c.isHovered;
    var _d = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _d.hasError, isReadOnly = _d.isReadOnly;
    var _e = useFieldHelpText({
        dataState: dataState,
        helpText: helpText,
        isInvalid: isInvalid
    }), fieldProps = _e.fieldProps, helpTextProps = _e.helpTextProps;
    var _f = useControlledState(false, props.isOpen, props.onOpenChange), isOpen = _f[0], setIsOpen = _f[1];
    var _g = useSelectItemHighlight(), onHighlightedIndexChange = _g.onHighlightedIndexChange, highlightedIndex = _g.highlightedIndex, highlightSource = _g.highlightSource;
    var _h = useState(0), dynamicMenuWidth = _h[0], setDynamicMenuWidth = _h[1];
    var _j = useState(value && text ? { value: value, text: text } : null), selectedItem = _j[0], setSelectedItem = _j[1];
    var _k = useState(text !== null && text !== void 0 ? text : ''), inputValue = _k[0], setInputValue = _k[1];
    var _l = useState(null), filteredItems = _l[0], setFilteredItems = _l[1];
    var localFilter = useFilter({ sensitivity: 'base' });
    var itemsToRender = useMemo(function () {
        var baseItems = (filteredItems !== null && filteredItems !== void 0 ? filteredItems : items).slice();
        if (allowCreate && inputValue && isOpen && !hasItemWithText(items, inputValue)) {
            baseItems.push({ value: SpecialSelectItemKey.CREATABLE, text: inputValue });
        }
        return baseItems;
    }, [filteredItems, items, allowCreate, inputValue, isOpen]);
    var updateMenuWidth = function () {
        var content = triggerContentRef.current;
        if (content) {
            var width = content.getBoundingClientRect().width;
            if (width !== dynamicMenuWidth) {
                setDynamicMenuWidth(width);
            }
        }
    };
    var onSelectionChange = function (newSelectedItem) {
        safeCall(props.onSelectionChange, newSelectedItem ? newSelectedItem.value : null);
        setSelectedItem(newSelectedItem);
        if (newSelectedItem) {
            safeCall(changeCallback, __assign(__assign({}, changeParams), newSelectedItem));
        }
        else {
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: null }));
        }
    };
    var flatItems = useMemo(function () { return createFlatSelectItemList(itemsToRender, false, expandedKeys); }, [itemsToRender, expandedKeys]);
    var onResize = useCallback(function () {
        updateMenuWidth();
    }, [triggerContentRef]);
    useResizeObserver({ ref: triggerContentRef, onResize: onResize });
    useScrollToSelectedOption({ isLoading: isLoading, isOpen: isOpen, menuRef: listBoxRef });
    useNonModalPopoverInModalFix(isOpen, triggerContentRef, popoverRef);
    useEffect(function () {
        if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) !== (value !== null && value !== void 0 ? value : undefined) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.text) !== text) {
            setSelectedItem(value && text ? { value: value, text: text } : null);
        }
        setInputValue(text !== null && text !== void 0 ? text : '');
    }, [value, text]);
    var menuWidth = props.menuWidth;
    if (isEmptyString(menuWidth)) {
        menuWidth = "".concat(dynamicMenuWidth, "px");
    }
    return {
        focusProps: focusProps,
        isFocused: isFocused,
        isFocusVisible: isFocusVisible,
        hoverProps: hoverProps,
        isHovered: isHovered,
        hasError: hasError,
        isReadOnly: isReadOnly,
        setIsOpen: setIsOpen,
        isOpen: isOpen,
        selectedItem: selectedItem,
        inputValue: inputValue,
        setInputValue: setInputValue,
        setFilteredItems: setFilteredItems,
        popoverRef: popoverRef,
        listBoxRef: listBoxRef,
        triggerContentRef: triggerContentRef,
        localFilter: localFilter,
        updateMenuWidth: updateMenuWidth,
        onSelectionChange: onSelectionChange,
        flatItems: flatItems,
        menuWidth: menuWidth,
        itemsToRender: itemsToRender,
        fieldProps: fieldProps,
        helpTextProps: helpTextProps,
        onHighlightedIndexChange: onHighlightedIndexChange,
        highlightedIndex: highlightedIndex,
        highlightSource: highlightSource
    };
}

function filterItems(items, text, filter) {
    var contains = filter.contains;
    var matchingItems = [];
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var itemChildren = item.children;
        var subItems = item.items;
        if (itemChildren) {
            var filteredChildren = filterItems(itemChildren, text, filter);
            if (filteredChildren.length > 0) {
                matchingItems.push(__assign(__assign({}, item), { children: filteredChildren }));
            }
            else if (contains(item.text, text)) {
                matchingItems.push(__assign(__assign({}, item), { children: undefined }));
            }
        }
        else if (subItems) {
            var filteredSubItems = filterItems(subItems, text, filter);
            if (filteredSubItems.length > 0) {
                matchingItems.push(__assign(__assign({}, item), { items: filteredSubItems }));
            }
        }
        else if (contains(item.text, text)) {
            matchingItems.push(item);
        }
    }
    return matchingItems;
}

function scrollBottom(element) {
    if (element) {
        element.scrollTop = element.scrollHeight;
    }
}

function getHelpContentAndVariant(_a) {
    var errorMessage = _a.errorMessage, hasError = _a.hasError, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled;
    var helpContent = helpText, helpVariant = HelpTextVariant.Neutral;
    if (hasError) {
        helpVariant = HelpTextVariant.Danger;
        helpContent = errorMessage ? errorMessage : helpContent;
    }
    else if (helpTextSuccess) {
        helpVariant = HelpTextVariant.Success;
        helpContent = helpTextSuccess;
    }
    else if (isDisabled) {
        helpVariant = HelpTextVariant.Disabled;
    }
    return {
        helpContent: helpContent,
        helpVariant: helpVariant
    };
}
function Field(_a) {
    var children = _a.children, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, label = _a.label, labelSuffix = _a.labelSuffix, showHelpTextIcon = _a.showHelpTextIcon, size = _a.size, tooltipContent = _a.tooltipContent;
    var _b = useDataState(dataState, isInvalid), hasError = _b.hasError, errorMessage = _b.errorMessage;
    var _c = getHelpContentAndVariant({
        errorMessage: errorMessage,
        hasError: hasError,
        helpText: helpText,
        helpTextSuccess: helpTextSuccess,
        isDisabled: isDisabled
    }), helpContent = _c.helpContent, helpVariant = _c.helpVariant;
    return (jsxs(Fragment, { children: [label && (jsx(FieldLabel, __assign({ isDisabled: isDisabled, isRequired: isRequired, size: size, suffix: labelSuffix, tooltipContent: tooltipContent }, { children: label }))), children, helpContent && (jsx(HelpText, __assign({ showIcon: showHelpTextIcon, variant: helpVariant }, { children: helpContent })))] }));
}

function SelectOptionsEmptyState(_a) {
    var className = _a.className, _b = _a.iconName, iconName = _b === void 0 ? iconNames.VisibilityOff : _b, ref = _a.ref, size = _a.size, text = _a.text;
    var translateCommon = useTranslateCommon();
    return (jsxs("div", __assign({ className: classNames('select-options-empty-state', className), ref: ref, role: "presentation" }, { children: [jsx(Icon, { className: "select-options-empty-state__icon", name: iconName }), jsx(Label, __assign({ size: size === Size.xs ? Size.md : Size.lg }, { children: text !== null && text !== void 0 ? text : translateCommon('noResultsFound') }))] })));
}

function LoadingItem(_a) {
    var size = _a.size;
    var translateCommon = useTranslateCommon();
    return (jsx("div", __assign({ className: "loading-item", role: "presentation" }, { children: jsx(Spinner, { label: "".concat(translateCommon('loading'), "..."), labelPosition: Position.Right, labelSize: size === Size.xs ? Size.md : Size.lg, size: Size.sm, variant: SpinnerVariant.Neutral }) })));
}

function BottomLoader(_a) {
    var onVisible = _a.onVisible;
    return jsx("div", { className: "bottom-loader", ref: useIntersectionObserver(onVisible) });
}

var INDENT_SIZE_PX = 28;
function SelectOptionContent(_a) {
    var bodyPrefix = _a.bodyPrefix, bodySuffix = _a.bodySuffix, className = _a.className, description = _a.description, descriptionRef = _a.descriptionRef, isExpanded = _a.isExpanded, isLoading = _a.isLoading, item = _a.item, label = _a.label, labelRef = _a.labelRef, labelSuffix = _a.labelSuffix, level = _a.level, onToggleItem = _a.onToggleItem, ref = _a.ref, size = _a.size, suffix = _a.suffix;
    var action = item.action, children = item.children, text = item.text;
    var translateCommon = useTranslateCommon();
    return (jsxs("div", __assign({ className: classNames('select-option-content', className, {
            'select-option-content--expandable': !!children
        }), ref: ref, style: level > 0 ? { paddingLeft: "".concat(INDENT_SIZE_PX * level, "px") } : undefined }, { children: [(action === null || action === void 0 ? void 0 : action.iconName) && (jsx(Icon, { className: "select-option-content__action-icon", name: action.iconName, size: IconSize.MD })), isLoading && (jsx(Spinner, { className: "select-option-content__spinner", size: Size.sm, variant: SpinnerVariant.Neutral })), !action && onToggleItem && !isLoading && (
            // Expanding is controlled with left and right arrow keys on higher level.
            // Select option content should not be keyboard-focusable.
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
            jsx("div", __assign({ "aria-expanded": isExpanded, "aria-label": translateCommon(isExpanded ? 'collapse' : 'expand'), className: "select-option-content__expander", onClick: function (e) {
                    e.stopPropagation();
                    onToggleItem(item);
                }, role: "button" }, { children: jsx(Icon, { name: isExpanded ? iconNames.ExpandMoreFilled : iconNames.ChevronRightFilled, size: IconSize.MD }) }))), jsxs("div", __assign({ className: "select-option-content__body" }, { children: [bodyPrefix && jsx("div", __assign({ className: "select-option-content__body-prefix" }, { children: bodyPrefix })), jsxs("div", __assign({ className: "select-option-content__body-content" }, { children: [label !== null && label !== void 0 ? label : (jsxs("div", __assign({ className: "select-option-content__label-wrapper" }, { children: [jsx(Label, __assign({ className: "select-option-content__label", ref: labelRef, size: size === Size.xs ? Size.md : Size.lg }, { children: text })), labelSuffix && jsx("div", __assign({ className: "select-option-content__label-suffix" }, { children: labelSuffix }))] }))), description && (jsx(Label, __assign({ className: "select-option-content__description", ref: descriptionRef, size: Size.md }, { children: description })))] })), bodySuffix && jsx("div", __assign({ className: "select-option-content__body-suffix" }, { children: bodySuffix }))] })), jsx(Icon, { "aria-hidden": true, className: "select-option-content__check", name: iconNames.InputCheck, size: IconSize.MD }), suffix && jsx("div", __assign({ className: "select-option-content__suffix" }, { children: suffix }))] })));
}

function useIsTextTruncated(_a) {
    var onTruncatedChange = _a.onTruncatedChange, _b = _a.overflowDirection, overflowDirection = _b === void 0 ? Orientation.horizontal : _b, ref = _a.ref;
    var _c = useState(false), isTruncated = _c[0], setIsTruncated = _c[1];
    var onResize = useCallback(function () {
        var element = ref.current;
        if (element) {
            var newIsTruncated = overflowDirection === Orientation.vertical ?
                element.offsetHeight < element.scrollHeight
                : element.offsetWidth < element.scrollWidth;
            setIsTruncated(newIsTruncated);
            onTruncatedChange === null || onTruncatedChange === void 0 ? void 0 : onTruncatedChange(newIsTruncated);
        }
    }, [onTruncatedChange, ref, overflowDirection]);
    useResizeObserver({ ref: ref, onResize: onResize });
    return isTruncated;
}

function SelectOptionInner(_a) {
    var children = _a.children, className = _a.className, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isKeyboardFocused = _a.isKeyboardFocused, isReadOnly = _a.isReadOnly, isSelected = _a.isSelected, outerRef = _a.ref, _b = _a.size, size = _b === void 0 ? Size.md : _b, props = __rest(_a, ["children", "className", "isDisabled", "isFocused", "isKeyboardFocused", "isReadOnly", "isSelected", "ref", "size"]);
    var ref = useRef(null);
    var focusableProps = useFocusable(props, ref).focusableProps;
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    return (jsx("div", __assign({}, focusableProps, props, { "aria-disabled": isReadOnly ? true : props['aria-disabled'], className: classNames("select-option select-option--".concat(size), className), "data-disabled": !!isDisabled || undefined, "data-focused": !!isFocused || undefined, "data-keyboard-focused": !!isKeyboardFocused || undefined, "data-readonly": !!isReadOnly || undefined, "data-selected": !!isSelected || undefined, ref: ref, tabIndex: undefined }, { children: children })));
}
function SelectOption(_a) {
    var _b, _c;
    var disabledKeys = _a.disabledKeys, getItemProps = _a.getItemProps, highlightSource = _a.highlightSource, isFocused = _a.isFocused, isSelected = _a.isSelected, item = _a.item, itemClassName = _a.itemClassName, itemIndex = _a.itemIndex, level = _a.level, renderItemContent = _a.renderItemContent, size = _a.size, useDataValue = _a.useDataValue;
    var ref = useRef(null);
    var labelRef = useRef(null);
    var descriptionRef = useRef(null);
    var isLabelTruncated = useIsTextTruncated({ overflowDirection: Orientation.vertical, ref: labelRef });
    var isDescriptionTruncated = useIsTextTruncated({ overflowDirection: Orientation.vertical, ref: descriptionRef });
    var _d = useState(false), isTooltipOpen = _d[0], setIsTooltipOpen = _d[1];
    var tooltipContent = [];
    var itemValue = item.value;
    var isItemReadOnly = item.isReadOnly;
    var isItemDisabled = !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(itemValue));
    var isItemKeyboardFocused = isFocused && highlightSource === InteractionSource.Keyboard;
    var optionContentProps = {
        isDisabled: isItemDisabled,
        isReadOnly: isItemReadOnly,
        item: item,
        labelRef: labelRef,
        descriptionRef: descriptionRef,
        level: level,
        size: size
    };
    if (item.tooltip) {
        tooltipContent.push(jsx("div", { children: item.tooltip.content }, "item-tt"));
    }
    if (isLabelTruncated) {
        if (tooltipContent.length > 0) {
            tooltipContent.push(jsx("br", {}, "br1"));
        }
        tooltipContent.push(jsx("div", { children: (_b = labelRef.current) === null || _b === void 0 ? void 0 : _b.textContent }, "text"));
    }
    if (isDescriptionTruncated) {
        if (tooltipContent.length > 0) {
            tooltipContent.push(jsx("br", {}, "br2"));
        }
        tooltipContent.push(jsx("div", { children: (_c = descriptionRef.current) === null || _c === void 0 ? void 0 : _c.textContent }, "desc"));
    }
    var content;
    if (renderItemContent) {
        content = renderItemContent(optionContentProps);
    }
    else {
        content = jsx(SelectOptionContent, __assign({}, optionContentProps));
    }
    var hasTooltipContent = tooltipContent.length > 0;
    useEffect(function () {
        setIsTooltipOpen(hasTooltipContent ? !!isItemKeyboardFocused : false);
    }, [isItemKeyboardFocused]);
    return (jsxs(TooltipTrigger, __assign({ isDisabled: !hasTooltipContent, isOpen: isTooltipOpen, onOpenChange: setIsTooltipOpen }, { children: [jsx(SelectOptionInner, __assign({}, getItemProps({ item: item, index: itemIndex, ref: ref }), { className: classNames(isFunction(itemClassName) ? itemClassName(item) : itemClassName, {
                    'select-option--action': !!item.action
                }), "data-value": useDataValue ? itemValue : undefined, isDisabled: isItemDisabled, isFocused: isFocused, isKeyboardFocused: isItemKeyboardFocused, isReadOnly: isItemReadOnly, isSelected: isSelected, size: size }, { children: content })), jsx(Tooltip, __assign({ position: Position.Right, triggerRef: ref, type: TooltipType.Plain }, { children: tooltipContent }))] })));
}
var MemoizedSelectOption = memo(SelectOption);

function renderSelectItems(_a) {
    var createText = _a.createText, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, getItemProps = _a.getItemProps, highlightedIndex = _a.highlightedIndex, highlightSource = _a.highlightSource, itemClassName = _a.itemClassName, items = _a.items, renderItemContent = _a.renderItemContent, selectedItem = _a.selectedItem, size = _a.size;
    var itemIndex = 0;
    var renderItem = function (item, level) {
        var itemValue = item.value;
        var isSelected = itemValue === (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value);
        return (jsx(MemoizedSelectOption, { disabledKeys: disabledKeys, getItemProps: getItemProps, highlightSource: highlightSource, isFocused: highlightedIndex === itemIndex, isSelected: isSelected, item: item, itemClassName: itemClassName, itemIndex: itemIndex, level: level, renderItemContent: renderItemContent, size: size }, itemValue));
    };
    var renderItems = function (itemArr, level) {
        var itemNodes = [];
        var _loop_1 = function (i, len) {
            var item = itemArr[i];
            var itemValue = item.value;
            var itemText = item.text;
            var subItems = item.items;
            var children = item.children, hasSeparator = item.hasSeparator;
            if (subItems) {
                if (level > 0) {
                    throw new Error('Sub-items are only supported on root level.');
                }
                itemNodes.push(jsxs("section", { children: [jsx("header", __assign({ className: "select-header" }, { children: jsx(Label, __assign({ size: Size.sm }, { children: itemText })) })), renderItems(subItems, level)] }, itemValue));
            }
            else if (children) {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
                if ((expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(itemValue)) !== false) {
                    itemNodes.push.apply(itemNodes, renderItems(children, level + 1));
                }
            }
            else if (itemValue === SpecialSelectItemKey.CREATABLE) {
                itemNodes.push(jsx(MemoizedSelectOption, { getItemProps: getItemProps, isFocused: highlightedIndex === itemIndex, item: item, itemIndex: itemIndex, level: level, renderItemContent: function (optionContentProps) { return (jsx(SelectOptionContent, __assign({}, optionContentProps, { bodyPrefix: jsx(Icon, { className: "select-option__start-icon", name: iconNames.AddCircleFilled }), label: jsx(Label, __assign({ size: size === Size.xs ? Size.md : Size.lg }, { children: isFunction(createText) ? createText(itemText) : createText })) }))); }, size: size }, itemValue));
                itemIndex++;
            }
            else {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
            }
            if (hasSeparator) {
                itemNodes.push(jsx(Divider, { size: Size.sm }, "".concat(itemValue, "--separator")));
            }
        };
        for (var i = 0, len = itemArr.length; i < len; i++) {
            _loop_1(i);
        }
        return itemNodes;
    };
    return renderItems(items, 0);
}

var _a$7;
var defaultInputRectHeightForSize = (_a$7 = {},
    _a$7[Size.xs] = 28,
    _a$7[Size.sm] = 32,
    _a$7[Size.md] = 40,
    _a$7[Size.lg] = 40,
    _a$7);
function SkeletonField(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, hasHelpText = _a.hasHelpText, hasLabel = _a.hasLabel, inputRectHeight = _a.inputRectHeight, ref = _a.ref, size = _a.size, style = _a.style;
    var labelSize = Size.md;
    if (size === Size.xs) {
        labelSize = Size.sm;
    }
    else if (size === Size.lg) {
        labelSize = Size.lg;
    }
    return (jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-field', className), ref: ref, style: style }, { children: [hasLabel && (jsx(SkeletonText, { "aria-hidden": false, size: labelSize, type: SkeletonTextType.Label, width: "50%" })), jsx(Skeleton, { "aria-hidden": false, height: inputRectHeight !== null && inputRectHeight !== void 0 ? inputRectHeight : defaultInputRectHeightForSize[size], shape: SkeletonShape.Rectangle }), hasHelpText && (jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Label, width: "25%" }))] }), "".concat(hasLabel, "-").concat(hasHelpText)));
}

function SelectField(_a) {
    var fieldContent = _a.children, className = _a.className, dataState = _a.dataState, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, getItemProps = _a.getItemProps, getLabelProps = _a.getLabelProps, getMenuProps = _a.getMenuProps, hasError = _a.hasError, helpText = _a.helpText, helpTextProps = _a.helpTextProps, highlightedIndex = _a.highlightedIndex, highlightSource = _a.highlightSource, isDisabled = _a.isDisabled, isOpen = _a.isOpen, isLoading = _a.isLoading, isReadOnly = _a.isReadOnly, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, itemClassName = _a.itemClassName, itemsToRender = _a.itemsToRender, label = _a.label, listBoxRef = _a.listBoxRef, menuWidth = _a.menuWidth, onBottomLoaderVisible = _a.onBottomLoaderVisible, popoverRef = _a.popoverRef, ref = _a.ref, renderItemContent = _a.renderItemContent, propsRenderItemsEmptyState = _a.renderItemsEmptyState, tooltipContent = _a.tooltipContent, triggerContentRef = _a.triggerContentRef, selectedItem = _a.selectedItem, showHelpTextIcon = _a.showHelpTextIcon, _b = _a.size, size = _b === void 0 ? Size.md : _b;
    var translateCommon = useTranslateCommon();
    var renderCreateText = function (itemText) { return (jsxs(Fragment, { children: ["".concat(translateCommon('create'), " "), "\"", jsx("strong", { children: itemText }), "\""] })); };
    var errorMessage = useDataState(dataState, hasError, isReadOnly).errorMessage;
    var menuProps = getMenuProps({ ref: listBoxRef }, { suppressRefError: true });
    // eslint-disable-next-line sonarjs/function-return-type
    var renderItemsEmptyState = function () {
        var emptyStateProps = {
            size: size
        };
        if (isFunction(propsRenderItemsEmptyState)) {
            return propsRenderItemsEmptyState(emptyStateProps);
        }
        return jsx(SelectOptionsEmptyState, __assign({}, emptyStateProps), "empty");
    };
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-select", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (jsx(Provider, __assign({ values: [
            [LabelContext, __assign({}, getLabelProps())],
            [TextContext, { slots: { description: helpTextProps } }]
        ] }, { children: jsxs("div", __assign({ className: classNames('select', className), ref: ref }, { children: [jsx(Field, __assign({ dataState: dataState, helpText: helpText, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: fieldContent })), jsx(Popover$1, __assign({ className: "select__popover", isNonModal: true, isOpen: isOpen, maxHeight: 280, placement: "bottom left", ref: popoverRef, shouldFlip: true, style: menuWidth ? { width: menuWidth } : undefined, triggerRef: triggerContentRef }, { children: jsxs("div", __assign({}, menuProps, { className: "select__listbox" }, { children: [(itemsToRender.length === 0 || itemsToRender[0].value === SpecialSelectItemKey.CREATABLE) &&
                                !isLoading &&
                                renderItemsEmptyState(), isOpen &&
                                renderSelectItems({
                                    createText: renderCreateText,
                                    disabledKeys: disabledKeys,
                                    expandedKeys: expandedKeys,
                                    getItemProps: getItemProps,
                                    highlightSource: highlightSource,
                                    highlightedIndex: highlightedIndex,
                                    itemClassName: itemClassName,
                                    items: itemsToRender,
                                    renderItemContent: renderItemContent,
                                    selectedItem: selectedItem,
                                    size: size
                                }), isLoading && jsx(LoadingItem, { size: size }, "loading"), onBottomLoaderVisible && jsx(BottomLoader, { onVisible: onBottomLoaderVisible }, "loader")] })) }))] })) })));
}

function useSelectOptionCountAnnouncement(_a) {
    var isOpen = _a.isOpen, itemCount = _a.itemCount;
    var translateCommon = useTranslateCommon();
    useEffect(function () {
        if (isOpen) {
            announce(translateCommon('optionsAvailable', { count: itemCount }));
        }
    }, [isOpen, itemCount]);
}

function ComboBox(props) {
    var translateCommon = useTranslateCommon();
    var inputRef = useRef(null);
    var disabledKeys = props.disabledKeys, isClearable = props.isClearable, isDisabled = props.isDisabled, isPlain = props.isPlain, items = props.items, preserveInputValue = props.preserveInputValue, renderStartContent = props.renderStartContent, _a = props.showSearchIcon, showSearchIcon = _a === void 0 ? true : _a, startIconName = props.startIconName, _b = props.size, size = _b === void 0 ? Size.md : _b, text = props.text;
    var _c = useSelectCommon(props), focusProps = _c.focusProps, isFocused = _c.isFocused, isFocusVisible = _c.isFocusVisible, hoverProps = _c.hoverProps, isHovered = _c.isHovered, hasError = _c.hasError, isReadOnly = _c.isReadOnly, setIsOpen = _c.setIsOpen, isOpen = _c.isOpen, selectedItem = _c.selectedItem, inputValue = _c.inputValue, setInputValue = _c.setInputValue, setFilteredItems = _c.setFilteredItems, triggerContentRef = _c.triggerContentRef, listBoxRef = _c.listBoxRef, localFilter = _c.localFilter, updateMenuWidth = _c.updateMenuWidth, onSelectionChange = _c.onSelectionChange, flatItems = _c.flatItems, itemsToRender = _c.itemsToRender, menuWidth = _c.menuWidth, fieldProps = _c.fieldProps, helpTextProps = _c.helpTextProps, popoverRef = _c.popoverRef, onHighlightedIndexChange = _c.onHighlightedIndexChange, highlightedIndex = _c.highlightedIndex, highlightSource = _c.highlightSource;
    useSelectOptionCountAnnouncement({ isOpen: isOpen, itemCount: itemsToRender.length });
    var _d = useCombobox({
        highlightedIndex: highlightedIndex,
        isOpen: isOpen,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        selectedItem: selectedItem,
        inputValue: inputValue,
        onHighlightedIndexChange: onHighlightedIndexChange,
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem;
            onSelectionChange(newSelectedItem !== null && newSelectedItem !== void 0 ? newSelectedItem : null);
        },
        onInputValueChange: function (_a) {
            var newInputValue = _a.inputValue;
            setInputValue(newInputValue !== null && newInputValue !== void 0 ? newInputValue : '');
        },
        onIsOpenChange: function (_a) {
            var _b, _c;
            var newIsOpen = _a.isOpen, type = _a.type, currSelectedItem = _a.selectedItem;
            if (isReadOnly || newIsOpen === isOpen || (type === useCombobox.stateChangeTypes.InputClick && isOpen)) {
                return;
            }
            if (newIsOpen) {
                // Clear external filtering on open.
                safeCall(props.onInputChange, '', InputChangeTriggerAction.Focus);
                updateMenuWidth();
            }
            else {
                setFilteredItems(null);
                if (!preserveInputValue) {
                    if (currSelectedItem) {
                        setInputValue((_c = (_b = currSelectedItem.text) !== null && _b !== void 0 ? _b : text) !== null && _c !== void 0 ? _c : '');
                    }
                    else {
                        setInputValue('');
                    }
                }
            }
            setIsOpen(newIsOpen !== null && newIsOpen !== void 0 ? newIsOpen : false);
        },
        onStateChange: function (changes) {
            var type = changes.type;
            if ((type === useCombobox.stateChangeTypes.InputKeyDownArrowUp ||
                type === useCombobox.stateChangeTypes.InputKeyDownArrowDown) &&
                changes.highlightedIndex === flatItems.length - 1) {
                // scroll at the bottom when last item is highlighted to make sure loader is visible
                scrollBottom(listBoxRef.current);
            }
        },
        stateReducer: function (state, actionAndChanges) {
            var _a, _b;
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEscape:
                    if (isClearable) {
                        return changes;
                    }
                    return __assign(__assign({}, changes), { selectedItem: state.selectedItem, inputValue: state.inputValue });
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    if ((_a = changes.selectedItem) === null || _a === void 0 ? void 0 : _a.action) {
                        changes.selectedItem.action.callback();
                        return __assign(__assign({}, changes), { selectedItem: state.selectedItem, inputValue: state.inputValue });
                    }
                    if ((_b = changes.selectedItem) === null || _b === void 0 ? void 0 : _b.isReadOnly) {
                        return __assign(__assign({}, changes), { isOpen: true, selectedItem: state.selectedItem, inputValue: state.inputValue, highlightedIndex: state.highlightedIndex });
                    }
                    return changes;
                default:
                    return changes;
            }
        }
    }), getToggleButtonProps = _d.getToggleButtonProps, getLabelProps = _d.getLabelProps, getMenuProps = _d.getMenuProps, getInputProps = _d.getInputProps, getItemProps = _d.getItemProps, selectItem = _d.selectItem;
    var onKeyDown = function (e) {
        safeCall(props.onKeyDown, e, highlightedIndex >= 0 ? flatItems[highlightedIndex] : undefined);
    };
    var onInputChange = function (e) {
        var newInputValue = e.target.value;
        setInputValue(newInputValue);
        safeCall(props.onInputChange, newInputValue, InputChangeTriggerAction.Input);
        if (!newInputValue && isClearable) {
            onSelectionChange(null);
        }
        if (!props.onInputChange) {
            setFilteredItems(newInputValue ? filterItems(items, newInputValue, localFilter) : null);
        }
    };
    var showClearButton = !!isClearable &&
        !isOpen &&
        !isDisabled &&
        !isReadOnly &&
        (!!selectedItem || (!!preserveInputValue && !!inputValue));
    var inputProps = getInputProps({
        disabled: isDisabled,
        // Workaround to cursor jump issue: https://github.com/downshift-js/downshift/issues/1108
        onChange: onInputChange,
        ref: inputRef
    }, { suppressRefError: true });
    var toggleButtonProps = getToggleButtonProps({ disabled: isDisabled });
    return (jsx(SelectField, __assign({}, props, { getItemProps: getItemProps, getLabelProps: getLabelProps, getMenuProps: getMenuProps, hasError: hasError, helpTextProps: helpTextProps, highlightSource: highlightSource, highlightedIndex: highlightedIndex, isOpen: isOpen, itemsToRender: itemsToRender, listBoxRef: listBoxRef, menuWidth: menuWidth, popoverRef: popoverRef, selectedItem: selectedItem, triggerContentRef: triggerContentRef }, { children: jsxs("div", __assign({}, hoverProps, focusProps, { className: classNames("select__content select__content--".concat(size), {
                'select__content--plain': isPlain
            }), "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined, ref: triggerContentRef }, { children: [isOpen && showSearchIcon && jsx(Icon, { className: "select__search-icon", name: iconNames.MagnifyingGlass }), !isOpen && startIconName && jsx(Icon, { className: "select__start-icon", name: startIconName }), !isOpen && isFunction(renderStartContent) && renderStartContent(selectedItem), jsx("input", __assign({}, inputProps, fieldProps, { "aria-label": props['aria-label'], className: classNames('select__input', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), onKeyDown: chain(onKeyDown, inputProps.onKeyDown), placeholder: isOpen ? translateCommon('search') : props.placeholder, readOnly: isReadOnly, size: 1 })), jsxs("div", __assign({ className: "select__action-buttons" }, { children: [showClearButton && (jsx(ClearButton, { className: "select__clear-button", onPress: function () {
                                var _a;
                                selectItem(null);
                                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                            } })), jsx("button", __assign({}, toggleButtonProps, { "aria-label": translateCommon('toggleMenu'), className: "select__expander" }, { children: jsx(Icon, { className: "select__expand-icon", name: isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled }) }))] }))] })) })));
}

function SelectBox(props) {
    var disabledKeys = props.disabledKeys, isClearable = props.isClearable, isDisabled = props.isDisabled, isPlain = props.isPlain, renderStartContent = props.renderStartContent, startIconName = props.startIconName, _a = props.size, size = _a === void 0 ? Size.md : _a;
    var _b = useSelectCommon(props), focusProps = _b.focusProps, isFocused = _b.isFocused, isFocusVisible = _b.isFocusVisible, hoverProps = _b.hoverProps, isHovered = _b.isHovered, hasError = _b.hasError, isReadOnly = _b.isReadOnly, setIsOpen = _b.setIsOpen, isOpen = _b.isOpen, selectedItem = _b.selectedItem, triggerContentRef = _b.triggerContentRef, listBoxRef = _b.listBoxRef, updateMenuWidth = _b.updateMenuWidth, onSelectionChange = _b.onSelectionChange, flatItems = _b.flatItems, itemsToRender = _b.itemsToRender, menuWidth = _b.menuWidth, fieldProps = _b.fieldProps, helpTextProps = _b.helpTextProps, popoverRef = _b.popoverRef, onHighlightedIndexChange = _b.onHighlightedIndexChange, highlightedIndex = _b.highlightedIndex, highlightSource = _b.highlightSource;
    var _c = useState(false), isClearFocused = _c[0], setIsClearFocused = _c[1];
    var _d = useSelect({
        highlightedIndex: highlightedIndex,
        isOpen: isOpen,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        selectedItem: selectedItem,
        onHighlightedIndexChange: onHighlightedIndexChange,
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem;
            onSelectionChange(newSelectedItem !== null && newSelectedItem !== void 0 ? newSelectedItem : null);
        },
        onIsOpenChange: function (_a) {
            var newIsOpen = _a.isOpen;
            if (isReadOnly || newIsOpen === isOpen || isClearFocused) {
                return;
            }
            if (newIsOpen) {
                updateMenuWidth();
            }
            setIsOpen(newIsOpen !== null && newIsOpen !== void 0 ? newIsOpen : false);
        },
        onStateChange: function (changes) {
            if (changes.type === useSelect.stateChangeTypes.ToggleButtonKeyDownArrowDown &&
                changes.highlightedIndex === flatItems.length - 1) {
                // scroll at the bottom when last item is highlighted to make sure loader is visible
                scrollBottom(listBoxRef.current);
            }
        },
        stateReducer: function (state, actionAndChanges) {
            var _a, _b;
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
                case useSelect.stateChangeTypes.ItemClick:
                    if ((_a = changes.selectedItem) === null || _a === void 0 ? void 0 : _a.action) {
                        changes.selectedItem.action.callback();
                        return __assign(__assign({}, changes), { selectedItem: state.selectedItem, inputValue: state.inputValue });
                    }
                    if ((_b = changes.selectedItem) === null || _b === void 0 ? void 0 : _b.isReadOnly) {
                        return __assign(__assign({}, changes), { isOpen: true, selectedItem: state.selectedItem, inputValue: state.inputValue, highlightedIndex: state.highlightedIndex });
                    }
                    return changes;
                default:
                    return changes;
            }
        }
    }), getToggleButtonProps = _d.getToggleButtonProps, getLabelProps = _d.getLabelProps, getMenuProps = _d.getMenuProps, getItemProps = _d.getItemProps, selectItem = _d.selectItem;
    var onKeyDown = function (e) {
        safeCall(props.onKeyDown, e, highlightedIndex >= 0 ? flatItems[highlightedIndex] : undefined);
    };
    var showClearButton = isClearable && !isOpen && !isDisabled && !isReadOnly && selectedItem;
    var toggleButtonProps = getToggleButtonProps({ disabled: isDisabled, ref: triggerContentRef }, { suppressRefError: true });
    return (jsx(SelectField, __assign({}, props, { getItemProps: getItemProps, getLabelProps: getLabelProps, getMenuProps: getMenuProps, hasError: hasError, helpTextProps: helpTextProps, highlightSource: highlightSource, highlightedIndex: highlightedIndex, isOpen: isOpen, itemsToRender: itemsToRender, listBoxRef: listBoxRef, menuWidth: menuWidth, popoverRef: popoverRef, selectedItem: selectedItem, triggerContentRef: triggerContentRef }, { children: jsxs("div", __assign({}, hoverProps, focusProps, toggleButtonProps, fieldProps, { "aria-label": props['aria-label'], className: classNames("select__content select__content--".concat(size, " select__button"), {
                'select__content--plain': isPlain
            }), "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": (isFocused && !isDisabled) || undefined, "data-hovered": isHovered || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined, onBlur: chain(focusProps.onBlur, toggleButtonProps.onBlur), onKeyDown: chain(onKeyDown, toggleButtonProps.onKeyDown) }, { children: [startIconName && jsx(Icon, { className: "select__start-icon", name: startIconName }), isFunction(renderStartContent) && renderStartContent(selectedItem), jsx("span", __assign({ className: classNames('select__value', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), "data-placeholder": !selectedItem || undefined }, { children: selectedItem ? selectedItem.text : props.placeholder })), jsxs("div", __assign({ className: "select__action-buttons" }, { children: [showClearButton && (jsx(ClearButton, { className: "select__clear-button", onFocusChange: setIsClearFocused, onPress: function () {
                                var _a;
                                selectItem(null);
                                (_a = triggerContentRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                            } })), jsx("div", __assign({ className: "select__expander" }, { children: jsx(Icon, { className: "select__expand-icon", name: isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled }) }))] }))] })) })));
}

function Select(_a) {
    var _b = _a.isSearchable, isSearchable = _b === void 0 ? true : _b, props = __rest(_a, ["isSearchable"]);
    // eslint-disable-next-line sonarjs/no-selector-parameter
    return isSearchable ? jsx(ComboBox, __assign({}, props)) : jsx(SelectBox, __assign({}, props));
}

function InlineSelect(_a) {
    var _b = _a.size, size = _b === void 0 ? Size.xs : _b, props = __rest(_a, ["size"]);
    var _c = useState(false), isFocused = _c[0], setIsFocused = _c[1];
    var _d = useDataState(props.dataState), hasError = _d.hasError, errorMessage = _d.errorMessage;
    var ref = useRef(null);
    var translateCommon = useTranslateCommon();
    useImperativeHandle(props.ref, function () { return ref.current; }, []);
    return (jsxs(TooltipTrigger, __assign({ isOpen: hasError && isFocused }, { children: [jsx(Select, __assign({}, props, { className: classNames(props.className, 'inline-select'), isPlain: true, onFocusChange: chain(setIsFocused, props.onFocusChange), ref: ref, showSearchIcon: false, size: size })), jsx(Tooltip, __assign({ className: "inline-select__error-tooltip", headerIconName: iconNames.EmergencyHomeFilled, headerText: translateCommon('error'), offset: 2, position: Position.Left, triggerRef: ref, type: TooltipType.Rich }, { children: errorMessage }))] })));
}

function SkeletonCalendar(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, ref = _a.ref;
    return (jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-calendar', className), ref: ref }, { children: [jsx("div", __assign({ className: "skeleton-calendar__header" }, { children: jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "50%" }) })), jsxs("div", __assign({ className: "skeleton-calendar__body" }, { children: [jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Label }), Array.from({ length: 5 }, function (_x, i) { return (jsx("div", __assign({ className: "skeleton-calendar__grid-row" }, { children: Array.from({ length: 7 }, function (_y, j) { return (jsx(Skeleton, { "aria-hidden": false, height: 32, shape: SkeletonShape.Rectangle, width: 32 }, j)); }) }), i)); })] }))] })));
}

var PAST_YEAR_ITEM_COUNT = 5;
var FUTURE_YEAR_ITEM_COUNT = 5;
function isInvalidDate(date, minValue, maxValue) {
    return !!(minValue && date.compare(minValue) < 0) || !!(maxValue && date.compare(maxValue) > 0);
}
function Calendar(_a) {
    var _b, _c;
    var className = _a.className, footer = _a.footer, highlightSelectedWeek = _a.highlightSelectedWeek, isSkeleton = _a.isSkeleton, propsMaxValue = _a.maxValue, propsMinValue = _a.minValue, propsOnFocusChange = _a.onFocusChange, ref = _a.ref, relatedValue = _a.relatedValue, renderCellContent = _a.renderCellContent, _d = _a.showWeekNumbers, showWeekNumbers = _d === void 0 ? true : _d, yearSelectionRange = _a.yearSelectionRange, props = __rest(_a, ["className", "footer", "highlightSelectedWeek", "isSkeleton", "maxValue", "minValue", "onFocusChange", "ref", "relatedValue", "renderCellContent", "showWeekNumbers", "yearSelectionRange"]);
    var isDisabled = props.isDisabled, isReadOnly = props.isReadOnly;
    var _e = useLocales(), cultureLocale = _e.cultureLocale, languageLocale = _e.languageLocale, timeZone = _e.timeZone;
    var languageDay = useLanguageDay();
    var translateDatePeriod = useTranslateDatePeriod();
    var translateCommon = useTranslateCommon();
    var _f = useContextProps(__assign(__assign({}, props), { maxValue: (_b = getDateValue(propsMaxValue)) !== null && _b !== void 0 ? _b : undefined, minValue: (_c = getDateValue(propsMinValue)) !== null && _c !== void 0 ? _c : undefined }), ref !== null && ref !== void 0 ? ref : null, CalendarContext), contextProps = _f[0], refObj = _f[1];
    var onChange = contextProps.onChange, minValue = contextProps.minValue, maxValue = contextProps.maxValue, value = contextProps.value;
    var _g = useState(getDateValue(value)), selectedDate = _g[0], setSelectedDate = _g[1];
    var _h = useState(selectedDate !== null && selectedDate !== void 0 ? selectedDate : today(timeZone)), focusedDate = _h[0], setFocusedDate = _h[1];
    var onFocusChange = function (date) {
        if (date.compare(focusedDate) !== 0) {
            setFocusedDate(date);
            propsOnFocusChange === null || propsOnFocusChange === void 0 ? void 0 : propsOnFocusChange(date);
        }
    };
    var derivedProps = __assign(__assign({}, contextProps), { focusedValue: focusedDate, isDateUnavailable: function (date) { var _a; return isInvalidDate(date, minValue, maxValue) || !!((_a = contextProps.isDateUnavailable) === null || _a === void 0 ? void 0 : _a.call(contextProps, date)); }, maxValue: undefined, minValue: undefined, onChange: function (date) {
            setSelectedDate(date);
            safeCall(onChange, date);
        }, onFocusChange: onFocusChange, value: selectedDate });
    var state = useCalendarState(__assign(__assign({}, derivedProps), { locale: cultureLocale, createCalendar: createCalendar }));
    var _j = useCalendar(derivedProps, state), calendarProps = _j.calendarProps, prevButtonProps = _j.prevButtonProps, nextButtonProps = _j.nextButtonProps;
    var monthItems = useMemo(function () {
        return languageDay()
            .localeData()
            .months()
            .map(function (month, i) { return ({ value: i + 1, text: month }); });
    }, [languageLocale]);
    var yearItems = useMemo(function () {
        var startYear, endYear;
        if (yearSelectionRange) {
            startYear = yearSelectionRange.start;
            endYear = yearSelectionRange.end;
        }
        else {
            var currentYear = today(timeZone).year;
            startYear = currentYear - PAST_YEAR_ITEM_COUNT;
            endYear = currentYear + FUTURE_YEAR_ITEM_COUNT;
        }
        var arr = [];
        for (var year = startYear; year <= endYear; year++) {
            arr.push({ value: year, text: year.toString() });
        }
        return arr;
    }, [timeZone, yearSelectionRange === null || yearSelectionRange === void 0 ? void 0 : yearSelectionRange.start, yearSelectionRange === null || yearSelectionRange === void 0 ? void 0 : yearSelectionRange.end]);
    useEffect(function () {
        setSelectedDate(getDateValue(value));
    }, [value]);
    if (isSkeleton) {
        return jsx(SkeletonCalendar, {});
    }
    return (jsxs("div", __assign({}, calendarProps, { className: classNames('calendar', className), ref: refObj }, { children: [jsxs("div", __assign({ className: "calendar-header" }, { children: [jsxs("div", __assign({ className: "calendar-header__start" }, { children: [jsx(IconButton, __assign({}, prevButtonProps, { "aria-label": translateDatePeriod('previousMonth'), iconName: iconNames.ChevronLeft, size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })), jsx(IconButton, __assign({}, nextButtonProps, { "aria-label": translateDatePeriod('nextMonth'), iconName: iconNames.ChevronRight, size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })), jsx(Select, { "aria-label": translateDatePeriod('month'), isDisabled: isDisabled, isPlain: true, isReadOnly: isReadOnly, isSearchable: false, items: monthItems, menuWidth: "150px", onSelectionChange: function (month) {
                                    onFocusChange(new CalendarDate(focusedDate.year, month, focusedDate.day));
                                }, size: Size.xs, text: monthItems[focusedDate.month - 1].text, value: focusedDate.month }), jsx(Select, { "aria-label": translateDatePeriod('year'), isDisabled: isDisabled, isPlain: true, isReadOnly: isReadOnly, isSearchable: false, items: yearItems, menuWidth: "100px", onSelectionChange: function (year) {
                                    onFocusChange(new CalendarDate(year, focusedDate.month, focusedDate.day));
                                }, size: Size.xs, text: focusedDate.year.toString(), value: focusedDate.year })] })), jsx("div", __assign({ className: "calendar-header__end" }, { children: jsx(Button, __assign({ isDisabled: !!isDisabled || !!isReadOnly, onPress: function () {
                                onFocusChange(today(timeZone));
                            }, size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: translateCommon('today') })) }))] })), jsx(Divider, { size: Size.sm }), jsx(CalendarGrid, { highlightSelectedWeek: highlightSelectedWeek, relatedValue: relatedValue, renderCellContent: renderCellContent, showWeekNumbers: showWeekNumbers, state: state }), footer && (jsxs(Fragment, { children: [jsx(Divider, { size: Size.sm }), jsx("div", __assign({ className: "calendar-footer" }, { children: footer }))] }))] })));
}

function InputIndeterminate(_a) {
    var size = _a.size;
    return (jsx("svg", __assign({ "aria-hidden": true, fill: "currentColor", height: size, viewBox: "0 0 24 24", width: size }, { children: jsx("path", { d: "M6.845 13.325c-.369 0-.681-.129-.94-.386A1.278 1.278 0 0 1 5.52 12c0-.368.128-.68.386-.938.258-.258.57-.387.939-.387h10.31c.368 0 .681.129.939.386.258.258.386.571.386.94 0 .367-.128.68-.386.938a1.28 1.28 0 0 1-.939.386H6.845Z" }) })));
}

function useChangeParamsCallback(changeParams, callback) {
    // Can be used f.e. with onChange event when arg is value of element and also with onBlur event when arg is event
    return function (eventOrValue) {
        var value = (eventOrValue === null || eventOrValue === void 0 ? void 0 : eventOrValue.target) ? eventOrValue.target.value : eventOrValue;
        safeCall(callback, __assign(__assign({}, changeParams), { value: value }));
    };
}

function SkeletonCheckbox(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, hasHelpText = _a.hasHelpText, ref = _a.ref, size = _a.size, style = _a.style;
    return (jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-checkbox', className), ref: ref, style: style }, { children: [jsx(SkeletonText, { "aria-hidden": false, size: size === Size.md ? Size.lg : Size.md, type: SkeletonTextType.Label }), hasHelpText && (jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Label, width: "25%" }))] }), "".concat(hasHelpText)));
}

function Checkbox(_a) {
    var className = _a.className, changeCallback = _a.changeCallback, changeParams = _a.changeParams, dataState = _a.dataState, dataTestId = _a.dataTestId, helpText = _a.helpText, isDisabled = _a.isDisabled, isIndeterminate = _a.isIndeterminate, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSelected = _a.isSelected, isSkeleton = _a.isSkeleton, label = _a.label, _b = _a.labelPlacement, labelPlacement = _b === void 0 ? LabelPlacement.End : _b, onChange = _a.onChange, _c = _a.size, size = _c === void 0 ? Size.sm : _c, props = __rest(_a, ["className", "changeCallback", "changeParams", "dataState", "dataTestId", "helpText", "isDisabled", "isIndeterminate", "isInvalid", "isRequired", "isSelected", "isSkeleton", "label", "labelPlacement", "onChange", "size"]);
    var checkboxGroupState = useContext(CheckboxGroupStateContext);
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var _d = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _d.hasError, isReadOnly = _d.isReadOnly, errorMessage = _d.errorMessage;
    var helpTextId = useId();
    var labelSize = Size.md, iconSize = IconSize.SM;
    if (size === Size.md) {
        labelSize = Size.lg;
        iconSize = IconSize.LG;
    }
    if (isSkeleton) {
        return jsx(SkeletonCheckbox, { hasHelpText: !!helpText || !!errorMessage, size: size });
    }
    var content = [];
    if (isRequired) {
        content.push(jsx(RequiredIndicator, {}, "required"));
    }
    var box = (jsx("div", __assign({ className: classNames("checkbox__box checkbox__box--".concat(size)) }, { children: isIndeterminate ?
            jsx(InputIndeterminate, { size: iconSize })
            : jsx(Icon, { "aria-hidden": true, name: iconNames.InputCheck, size: iconSize }) }), "box"));
    if (label) {
        var boxAndLabels = [];
        var labelNode = (jsx(Label, __assign({ className: "checkbox__label", size: labelSize }, { children: label }), "label"));
        var wrapperClass = 'checkbox__box-and-label';
        if (labelPlacement === LabelPlacement.Start) {
            boxAndLabels.push(labelNode, box);
            wrapperClass = 'checkbox__label-and-box';
        }
        else {
            boxAndLabels.push(box, labelNode);
        }
        if (helpText || errorMessage) {
            var _e = getHelpContentAndVariant({
                errorMessage: errorMessage,
                hasError: hasError || (checkboxGroupState === null || checkboxGroupState === void 0 ? void 0 : checkboxGroupState.isInvalid),
                helpText: helpText,
                isDisabled: !!isDisabled || (checkboxGroupState === null || checkboxGroupState === void 0 ? void 0 : checkboxGroupState.isDisabled)
            }), helpContent = _e.helpContent, helpVariant = _e.helpVariant;
            if (labelPlacement === LabelPlacement.End) {
                // needed to align the label and helpText in grid
                boxAndLabels.push(jsx("div", {}, "boxPlaceholder"));
            }
            boxAndLabels.push(jsx(HelpText, __assign({ id: helpTextId, variant: helpVariant }, { children: helpContent }), "helpText"));
        }
        content.push(jsx("div", __assign({ className: wrapperClass }, { children: boxAndLabels }), "boxAndLabel"));
    }
    else {
        content.push(box);
    }
    return (jsx(Checkbox$1, __assign({}, props, { "aria-describedby": mergeStrings(' ', helpTextId, props['aria-describedby']), className: classNames('checkbox', className, {
            'checkbox--labeled': !!label,
            'checkbox--reversed': !!label && labelPlacement === LabelPlacement.Start
        }), "data-testid": dataTestId, isDisabled: isDisabled, isIndeterminate: isIndeterminate, isInvalid: hasError, isReadOnly: isReadOnly, isRequired: isRequired, isSelected: isSelected, onChange: onChange !== null && onChange !== void 0 ? onChange : changeParamsCb }, { children: content })));
}

function CheckboxGroup(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, children = _a.children, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, label = _a.label, onChange = _a.onChange, showHelpTextIcon = _a.showHelpTextIcon, size = _a.size, tooltipContent = _a.tooltipContent, props = __rest(_a, ["changeCallback", "changeParams", "children", "className", "dataState", "helpText", "helpTextSuccess", "isDisabled", "isInvalid", "isRequired", "isSkeleton", "label", "onChange", "showHelpTextIcon", "size", "tooltipContent"]);
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var mappedChildren = Children.map(children, function (child) { return cloneElement(child, { size: size }); });
    var _b = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _b.hasError, isReadOnly = _b.isReadOnly, errorMessage = _b.errorMessage;
    var fieldSize = Size.md;
    if (size === Size.md) {
        fieldSize = Size.lg;
    }
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-checkbox-group", hasHelpText: hasAnyHelpText, hasLabel: !!label, inputRectHeight: size === Size.md ? '5.5rem' : '4.75rem', size: fieldSize }));
    }
    return (jsx(CheckboxGroup$1, __assign({}, props, { className: classNames('checkbox-group', className), isDisabled: isDisabled, isInvalid: hasError, isReadOnly: isReadOnly, isRequired: isRequired, onChange: onChange !== null && onChange !== void 0 ? onChange : changeParamsCb }, { children: jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: isInvalid, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: fieldSize, tooltipContent: tooltipContent }, { children: mappedChildren })) })));
}

function ColorSelect(props) {
    return (jsx(Select, __assign({}, props, { renderItemContent: function (optionContentProps) {
            var item = optionContentProps.item;
            return (jsx(SelectOptionContent, __assign({}, optionContentProps, { bodyPrefix: jsx(ColorSwatch$1, { className: "color-select-option__color-swatch", color: item.value }) })));
        }, renderStartContent: function (selectedItem) {
            if (selectedItem) {
                return (jsx(ColorSwatch$1, { className: "color-select-option__color-swatch", color: selectedItem.value }));
            }
            return null;
        } })));
}

function ColorSwatch(_a) {
    var className = _a.className, size = _a.size, props = __rest(_a, ["className", "size"]);
    return jsx(ColorSwatch$1, __assign({}, props, { className: classNames("color-swatch color-swatch--".concat(size), className) }));
}

function ColorSwatchPickerItemLine() {
    return (jsx("svg", __assign({ "aria-hidden": true, className: "color-swatch-picker-item__line", fill: "currentColor", viewBox: "0 0 41 41" }, { children: jsx("path", { d: "M15.2744 24.6838C23.3149 16.6406 32.9621 6.99345 39.3878 0.578125L40.8009 1.99348C34.3759 8.40804 24.7294 18.0546 16.6889 26.0977C12.6686 30.1193 9.04999 33.7399 6.4364 36.3551L3.34525 39.4483L2.50646 40.2877L2.28852 40.5058L2.233 40.5614L2.21899 40.5754L2.21548 40.5789L2.2146 40.5798C2.2144 40.58 2.2143 40.5801 1.50691 39.8733C0.799516 39.1665 0.799615 39.1664 0.799811 39.1662L0.800693 39.1653L0.804212 39.1618L0.818223 39.1478L0.873745 39.0922L1.0917 38.8741L1.93052 38.0346L5.02175 34.9413C7.63539 32.326 11.2541 28.7054 15.2744 24.6838Z" }) })));
}
function ColorSwatchPickerItem(_a) {
    var className = _a.className, isInvalid = _a.isInvalid, size = _a.size, props = __rest(_a, ["className", "isInvalid", "size"]);
    return (jsxs(ColorSwatchPickerItem$1, __assign({}, props, { className: classNames('color-swatch-picker-item', className), "data-invalid": !!isInvalid || undefined }, { children: [jsx(ColorSwatch, { size: size }), jsx(ColorSwatchPickerItemLine, {}), jsx(Icon, { className: "color-swatch-picker-item__check", name: iconNames.InputCheck })] })));
}

var _a$6;
var rectWidthForSize = (_a$6 = {},
    _a$6[Size.xs] = 28,
    _a$6[Size.sm] = 32,
    _a$6[Size.md] = 40,
    _a$6);
function SkeletonColorSwatchPicker(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, itemCount = _a.itemCount, _b = _a.layout, layout = _b === void 0 ? 'grid' : _b, ref = _a.ref, size = _a.size;
    var rectWidth = rectWidthForSize[size];
    return (jsx("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-color-swatch-picker', className), "data-layout": layout, ref: ref }, { children: Array.from({ length: itemCount }, function (_, i) { return (jsx(Skeleton, { "aria-hidden": false, height: rectWidth, shape: SkeletonShape.Rectangle, width: rectWidth }, i)); }) })));
}

function ColorSwatchPicker(_a) {
    var className = _a.className, isSkeleton = _a.isSkeleton, items = _a.items, size = _a.size, props = __rest(_a, ["className", "isSkeleton", "items", "size"]);
    var initialValue = props.value;
    var _b = useState(isString(initialValue) ? parseColor(initialValue) : initialValue), value = _b[0], setValue = _b[1];
    var onChange = function (newValue) {
        setValue(newValue);
        safeCall(props.onChange, newValue);
    };
    useEffect(function () {
        setValue(isString(initialValue) ? parseColor(initialValue) : initialValue);
    }, [initialValue]);
    if (isSkeleton) {
        return jsx(SkeletonColorSwatchPicker, { itemCount: items.length, layout: props.layout, size: size });
    }
    return (jsx(ColorSwatchPicker$1, __assign({}, props, { className: classNames('color-swatch-picker', className), onChange: onChange, value: value }, { children: items.map(function (_a) {
            var color = _a.color, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid;
            return (jsx(ColorSwatchPickerItem, { color: color, isDisabled: isDisabled, isInvalid: isInvalid, size: size }, color));
        }) })));
}

/**
 * Source: @react-stately/datepicker/src/placeholders.ts
 * Modified for our purposes.
 */
// These placeholders are based on the strings used by the <input type="date">
// implementations in Chrome and Firefox. Additional languages are supported
// here than React Spectrum's typical translations.
var placeholders = new LocalizedStringDictionary({
    ach: { year: 'mwaka', month: 'dwe', day: 'nino' },
    af: { year: 'jjjj', month: 'mm', day: 'dd' },
    am: { year: 'ዓዓዓዓ', month: 'ሚሜ', day: 'ቀቀ' },
    an: { year: 'aaaa', month: 'mm', day: 'dd' },
    ar: { year: 'سنة', month: 'شهر', day: 'يوم' },
    ast: { year: 'aaaa', month: 'mm', day: 'dd' },
    az: { year: 'iiii', month: 'aa', day: 'gg' },
    be: { year: 'гггг', month: 'мм', day: 'дд' },
    bg: { year: 'гггг', month: 'мм', day: 'дд' },
    bn: { year: 'yyyy', month: 'মিমি', day: 'dd' },
    br: { year: 'bbbb', month: 'mm', day: 'dd' },
    bs: { year: 'gggg', month: 'mm', day: 'dd' },
    ca: { year: 'aaaa', month: 'mm', day: 'dd' },
    cak: { year: 'jjjj', month: 'ii', day: "q'q'" },
    ckb: { year: 'ساڵ', month: 'مانگ', day: 'ڕۆژ' },
    cs: { year: 'rrrr', month: 'mm', day: 'dd' },
    cy: { year: 'bbbb', month: 'mm', day: 'dd' },
    da: { year: 'åååå', month: 'mm', day: 'dd' },
    de: { year: 'jjjj', month: 'mm', day: 'tt' },
    dsb: { year: 'llll', month: 'mm', day: 'źź' },
    el: { year: 'εεεε', month: 'μμ', day: 'ηη' },
    en: { year: 'yyyy', month: 'mm', day: 'dd' },
    eo: { year: 'jjjj', month: 'mm', day: 'tt' },
    es: { year: 'aaaa', month: 'mm', day: 'dd' },
    et: { year: 'aaaa', month: 'kk', day: 'pp' },
    eu: { year: 'uuuu', month: 'hh', day: 'ee' },
    fa: { year: 'سال', month: 'ماه', day: 'روز' },
    ff: { year: 'hhhh', month: 'll', day: 'ññ' },
    fi: { year: 'vvvv', month: 'kk', day: 'pp' },
    fr: { year: 'aaaa', month: 'mm', day: 'jj' },
    fy: { year: 'jjjj', month: 'mm', day: 'dd' },
    ga: { year: 'bbbb', month: 'mm', day: 'll' },
    gd: { year: 'bbbb', month: 'mm', day: 'll' },
    gl: { year: 'aaaa', month: 'mm', day: 'dd' },
    he: { year: 'שנה', month: 'חודש', day: 'יום' },
    hr: { year: 'gggg', month: 'mm', day: 'dd' },
    hsb: { year: 'llll', month: 'mm', day: 'dd' },
    hu: { year: 'éééé', month: 'hh', day: 'nn' },
    ia: { year: 'aaaa', month: 'mm', day: 'dd' },
    id: { year: 'tttt', month: 'bb', day: 'hh' },
    it: { year: 'aaaa', month: 'mm', day: 'gg' },
    ja: { year: ' 年 ', month: '月', day: '日' },
    ka: { year: 'წწწწ', month: 'თთ', day: 'რრ' },
    kk: { year: 'жжжж', month: 'аа', day: 'кк' },
    kn: { year: 'ವವವವ', month: 'ಮಿಮೀ', day: 'ದಿದಿ' },
    ko: { year: '연도', month: '월', day: '일' },
    lb: { year: 'jjjj', month: 'mm', day: 'dd' },
    lo: { year: 'ປປປປ', month: 'ດດ', day: 'ວວ' },
    lt: { year: 'mmmm', month: 'mm', day: 'dd' },
    lv: { year: 'gggg', month: 'mm', day: 'dd' },
    meh: { year: 'aaaa', month: 'mm', day: 'dd' },
    ml: { year: 'വർഷം', month: 'മാസം', day: 'തീയതി' },
    ms: { year: 'tttt', month: 'mm', day: 'hh' },
    nl: { year: 'jjjj', month: 'mm', day: 'dd' },
    nn: { year: 'åååå', month: 'mm', day: 'dd' },
    no: { year: 'åååå', month: 'mm', day: 'dd' },
    oc: { year: 'aaaa', month: 'mm', day: 'jj' },
    pl: { year: 'rrrr', month: 'mm', day: 'dd' },
    pt: { year: 'aaaa', month: 'mm', day: 'dd' },
    rm: { year: 'oooo', month: 'mm', day: 'dd' },
    ro: { year: 'aaaa', month: 'll', day: 'zz' },
    ru: { year: 'гггг', month: 'мм', day: 'дд' },
    sc: { year: 'aaaa', month: 'mm', day: 'dd' },
    scn: { year: 'aaaa', month: 'mm', day: 'jj' },
    sk: { year: 'rrrr', month: 'mm', day: 'dd' },
    sl: { year: 'llll', month: 'mm', day: 'dd' },
    sr: { year: 'гггг', month: 'мм', day: 'дд' },
    sv: { year: 'åååå', month: 'mm', day: 'dd' },
    szl: { year: 'rrrr', month: 'mm', day: 'dd' },
    tg: { year: 'сссс', month: 'мм', day: 'рр' },
    th: { year: 'ปปปป', month: 'ดด', day: 'วว' },
    tr: { year: 'yyyy', month: 'aa', day: 'gg' },
    uk: { year: 'рррр', month: 'мм', day: 'дд' },
    'zh-CN': { year: '年', month: '月', day: '日' },
    'zh-TW': { year: '年', month: '月', day: '日' }
}, 'en');
function getPlaceholder(field, value, locale) {
    switch (field) {
        case 'era':
        case 'dayPeriod':
            return value;
        case 'year':
        case 'month':
        case 'day':
            return placeholders.getStringForLocale(field, locale);
        case 'hour':
            return 'hh';
        case 'minute':
            return 'mm';
        default:
            return '––';
    }
}

function DatePicker(_a) {
    var _b, _c;
    var calendarProps = _a.calendarProps, changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, propsIsReadOnly = _a.isReadOnly, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, label = _a.label, maxValue = _a.maxValue, minValue = _a.minValue, relatedValue = _a.relatedValue, _d = _a.showClearButton, showClearButton = _d === void 0 ? true : _d, showHelpTextIcon = _a.showHelpTextIcon, _e = _a.size, size = _e === void 0 ? Size.md : _e, tooltipContent = _a.tooltipContent, value = _a.value, props = __rest(_a, ["calendarProps", "changeCallback", "changeParams", "className", "dataState", "helpText", "helpTextSuccess", "isReadOnly", "isRequired", "isSkeleton", "label", "maxValue", "minValue", "relatedValue", "showClearButton", "showHelpTextIcon", "size", "tooltipContent", "value"]);
    var isDisabled = props.isDisabled, isInvalid = props.isInvalid;
    var _f = useState(getDateValue(value)), selectedValue = _f[0], setSelectedValue = _f[1];
    var _g = useState(false), isCalendarOpen = _g[0], setIsCalendarOpen = _g[1];
    var _h = useDataState(dataState, isInvalid, propsIsReadOnly), hasError = _h.hasError, isReadOnly = _h.isReadOnly, errorMessage = _h.errorMessage;
    var translateCommon = useTranslateCommon();
    var _j = useLocales(), cultureLocale = _j.cultureLocale, languageLocale = _j.languageLocale;
    var firstSpinBtnRef = useRef(null);
    var onChange = function (date) {
        var _a;
        if (!isUndefined(value) && (date === null || date === void 0 ? void 0 : date.toString()) === ((_a = getDateValue(value)) === null || _a === void 0 ? void 0 : _a.toString())) {
            return;
        }
        safeCall(props.onChange, date);
        safeCall(changeCallback, __assign(__assign({}, changeParams), { value: date ? date.toString() : null }));
    };
    useEffect(function () {
        setSelectedValue(getDateValue(value));
    }, [value]);
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-datepicker", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (jsxs(DatePicker$1, __assign({}, props, { className: classNames('datepicker', className), isInvalid: hasError, isReadOnly: isReadOnly, isRequired: isRequired, maxValue: (_b = getDateValue(maxValue)) !== null && _b !== void 0 ? _b : undefined, minValue: (_c = getDateValue(minValue)) !== null && _c !== void 0 ? _c : undefined, onBlur: function () {
            onChange(selectedValue);
        }, onChange: function (date) {
            setSelectedValue(date);
            if (isCalendarOpen) {
                onChange(date);
            }
        }, onOpenChange: setIsCalendarOpen, value: selectedValue }, { children: [jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: jsxs(Group, __assign({ className: "datepicker__controls datepicker__controls--".concat(size) }, { children: [jsx(I18nProvider$1, __assign({ locale: cultureLocale }, { children: jsx(DateInput, __assign({ className: "datepicker__input" }, { children: function (segment) { return (
                                // Need to wrap DateSegment with div: https://github.com/adobe/react-spectrum/issues/3164
                                jsx(I18nProvider$1, __assign({ locale: languageLocale }, { children: jsx("div", __assign({ ref: function (node) {
                                            var _a;
                                            if (node && ((_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.firstChild) === node) {
                                                firstSpinBtnRef.current = node.firstChild;
                                            }
                                        } }, { children: jsx(DateSegment, __assign({ className: "datepicker__segment ".concat(size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), segment: segment }, { children: segment.isPlaceholder ?
                                                getPlaceholder(segment.type, segment.text, languageLocale)
                                                : segment.text })) })) }))); } })) })), jsxs("div", __assign({ className: "datepicker__buttons" }, { children: [showClearButton && !isDisabled && !isReadOnly && selectedValue && (jsx(ClearButton, { className: "datepicker__clear-button", onPress: function () {
                                        var _a;
                                        setSelectedValue(null);
                                        onChange(null);
                                        (_a = firstSpinBtnRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                                    }, slot: null })), jsx(Button$1, __assign({ "aria-label": translateCommon('toggleCalendar'), className: "datepicker__button" }, { children: jsx(Icon, { name: iconNames.Calendar, size: IconSize.MD }) }))] }))] })) })), jsx(Popover$1, __assign({ className: "datepicker__popover", placement: "bottom left" }, { children: jsx(Dialog, __assign({ className: "datepicker__dialog" }, { children: jsx(Calendar, __assign({}, calendarProps, { relatedValue: relatedValue })) })) }))] })));
}

function getDateTimeValue(value) {
    if (value) {
        return isString(value) ? parseDateTime(value) : value;
    }
    return null;
}

function TimeSegment(_a) {
    var className = _a.className, outerRef = _a.ref, segment = _a.segment, state = _a.state;
    var ref = useRef(null);
    var segmentProps = useDateSegment(segment, state, ref).segmentProps;
    var languageLocale = useLocales().languageLocale;
    var isPlaceholder = segment.isPlaceholder, text = segment.text, type = segment.type;
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    // Need to wrap with div: https://github.com/adobe/react-spectrum/issues/3164
    return (jsx("div", { children: jsx("div", __assign({}, segmentProps, { className: classNames('timepicker__segment', className), ref: ref }, { children: isPlaceholder ? getPlaceholder(type, text, languageLocale) : text })) }));
}

var TIME_ITEM_INTERVAL_MINUTES = 15;
function useTimeItems(selectedValue, relatedValue) {
    var cultureDay = useCultureDay();
    return useMemo(function () {
        var items = [];
        var startTime = relatedValue ? cultureDay(relatedValue.toString()) : cultureDay(selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.toString()).startOf('day');
        var time = startTime.clone();
        while (time.diff(startTime, 'days') <= 0) {
            var textSuffix = '';
            if (relatedValue) {
                var duration = day.duration(time.diff(startTime));
                var durationAsHours = duration.asHours();
                var durationAsMinutes = duration.asMinutes();
                if (durationAsHours >= 1) {
                    textSuffix = "".concat(durationAsHours, " h");
                }
                else {
                    textSuffix = "".concat(durationAsMinutes, " min");
                }
                textSuffix = " (".concat(textSuffix, ")");
            }
            items.push({
                value: time.format('YYYY-MM-DDTHH:mm:ss'),
                text: time.format('LT') + textSuffix
            });
            time = time.add(TIME_ITEM_INTERVAL_MINUTES, 'minutes');
        }
        return items;
    }, [cultureDay, relatedValue, selectedValue]);
}

var MINUTES_IN_HOUR = 60;

function getIndexWithPropertyValue(propertyName, value, arrOfObjects) {
    var len = isNullOrUndefined(arrOfObjects) ? 0 : arrOfObjects.length;
    for (var i = 0; i < len; i++) {
        // Checked above that if arrOfObjects is null or undefined, len is 0. So if we get here, arrOfObjects is not null or undefined.
        if (arrOfObjects[i][propertyName] === value) {
            return i;
        }
    }
    return -1;
}

var VALUE = 'value';

function getNearestTimeItemValue(time) {
    var nearestIntervalMinute = Math.round(time.minute / TIME_ITEM_INTERVAL_MINUTES) * TIME_ITEM_INTERVAL_MINUTES;
    var hour = time.hour + (nearestIntervalMinute >= MINUTES_IN_HOUR ? 1 : 0);
    var minute = nearestIntervalMinute >= MINUTES_IN_HOUR ? 0 : nearestIntervalMinute;
    return new CalendarDateTime(time.year, time.month, time.day, hour, minute, 0).toString();
}
function TimePicker(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, propsIsReadOnly = _a.isReadOnly, isSkeleton = _a.isSkeleton, label = _a.label, ref = _a.ref, relatedValue = _a.relatedValue, _b = _a.showClearButton, showClearButton = _b === void 0 ? true : _b, showHelpTextIcon = _a.showHelpTextIcon, _c = _a.size, size = _c === void 0 ? Size.md : _c, tooltipContent = _a.tooltipContent, value = _a.value, props = __rest(_a, ["changeCallback", "changeParams", "className", "dataState", "helpText", "helpTextSuccess", "isReadOnly", "isSkeleton", "label", "ref", "relatedValue", "showClearButton", "showHelpTextIcon", "size", "tooltipContent", "value"]);
    var _d = useLocales(), cultureLocale = _d.cultureLocale, timeZone = _d.timeZone;
    var isDisabled = props.isDisabled, isInvalid = props.isInvalid, isRequired = props.isRequired;
    var _e = useDataState(dataState, isInvalid, propsIsReadOnly), hasError = _e.hasError, isReadOnly = _e.isReadOnly, errorMessage = _e.errorMessage;
    var _f = useState(getDateTimeValue(value)), selectedValue = _f[0], setSelectedValue = _f[1];
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var inputRef = useRef(null);
    var groupRef = useRef(null);
    var presetMenuRef = useRef(null);
    var toggleBtnRef = useRef(null);
    var popoverRef = useRef(null);
    var firstSpinBtnRef = useRef(null);
    var translateCommon = useTranslateCommon();
    var onInnerChange = function (time) {
        var _a;
        var dateTime;
        if (time instanceof Time) {
            dateTime = toCalendarDateTime((_a = selectedValue !== null && selectedValue !== void 0 ? selectedValue : getDateTimeValue(relatedValue)) !== null && _a !== void 0 ? _a : today(timeZone), time);
        }
        else {
            dateTime = time;
        }
        setSelectedValue(dateTime);
    };
    var onChange = function (dateTime) {
        var _a;
        if (!isUndefined(value) && (dateTime === null || dateTime === void 0 ? void 0 : dateTime.toString()) === ((_a = getDateTimeValue(value)) === null || _a === void 0 ? void 0 : _a.toString())) {
            return;
        }
        safeCall(props.onChange, dateTime);
        safeCall(changeCallback, __assign(__assign({}, changeParams), { value: dateTime ? dateTime.toString() : null }));
    };
    // Time field hooks
    var timeFieldHookProps = __assign(__assign({}, props), { label: label, onBlur: function () {
            onChange(selectedValue);
        }, onChange: onInnerChange, isInvalid: hasError, isReadOnly: isReadOnly, value: selectedValue });
    var state = useTimeFieldState(__assign(__assign({}, timeFieldHookProps), { locale: cultureLocale }));
    var _h = useTimeField(timeFieldHookProps, state, inputRef), fieldProps = _h.fieldProps, labelProps = _h.labelProps;
    var _j = useFieldHelpText({
        dataState: dataState,
        helpText: helpText,
        helpTextSuccess: helpTextSuccess,
        isInvalid: isInvalid
    }), fieldProps2 = _j.fieldProps, helpTextProps = _j.helpTextProps;
    // To match popover width to group element width.
    var _k = useState(null), groupWidth = _k[0], setGroupWidth = _k[1];
    var onResize = useCallback(function () {
        if (groupRef.current) {
            setGroupWidth("".concat(groupRef.current.offsetWidth, "px"));
        }
    }, []);
    useResizeObserver({
        ref: groupRef,
        onResize: onResize
    });
    // Preset dropdown
    var timeItems = useTimeItems(selectedValue, relatedValue);
    var selectedItem = useMemo(function () { return (selectedValue ? { value: selectedValue.toString() } : null); }, [selectedValue]);
    var defaultHighlightedIndex = getIndexWithPropertyValue(VALUE, getNearestTimeItemValue(selectedValue !== null && selectedValue !== void 0 ? selectedValue : now(timeZone)), timeItems);
    var _l = useSelect({
        defaultHighlightedIndex: defaultHighlightedIndex,
        isOpen: isOpen,
        items: timeItems,
        selectedItem: selectedItem,
        onIsOpenChange: function (_a) {
            var newIsOpen = _a.isOpen;
            if (isReadOnly) {
                return;
            }
            setIsOpen(newIsOpen);
        },
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem, type = _a.type;
            // Downshift triggers selection for highlighted item on click outside dropdown, we don't want this.
            if (newSelectedItem && type !== useSelect.stateChangeTypes.ToggleButtonBlur) {
                var dateTime = parseDateTime(newSelectedItem.value);
                onInnerChange(dateTime);
                onChange(dateTime);
            }
        }
    }), getItemProps = _l.getItemProps, getToggleButtonProps = _l.getToggleButtonProps, getMenuProps = _l.getMenuProps, highlightedIndex = _l.highlightedIndex;
    var toggleButtonFocusRing = useFocusRing({ within: true, isTextInput: false });
    var toggleBtnProps = getToggleButtonProps(__assign(__assign({}, toggleButtonFocusRing.focusProps), { disabled: !!isDisabled || isReadOnly, ref: toggleBtnRef }), { suppressRefError: true });
    var menuProps = getMenuProps({ ref: presetMenuRef }, { suppressRefError: true });
    useNonModalPopoverInModalFix(isOpen, toggleBtnRef, popoverRef);
    useEffect(function () {
        setSelectedValue(getDateTimeValue(value));
    }, [value]);
    useEffect(function () {
        if (isOpen) {
            var presetMenu = presetMenuRef.current;
            if (presetMenu) {
                var dataValue = getNearestTimeItemValue(selectedValue !== null && selectedValue !== void 0 ? selectedValue : now(timeZone));
                var selectedElement = presetMenu.querySelector(".select-option[data-value=\"".concat(dataValue, "\"]"));
                if (selectedElement instanceof HTMLElement) {
                    presetMenu.scrollTop = selectedElement.offsetTop - presetMenu.offsetHeight / 2;
                }
            }
        }
    }, [isOpen]);
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-timepicker", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (jsx(Provider, __assign({ values: [
            [LabelContext, __assign({}, labelProps)],
            [TextContext, { slots: { description: helpTextProps } }]
        ] }, { children: jsxs("div", __assign({ className: classNames('timepicker', className), ref: ref }, { children: [jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: jsxs(Group, __assign({ className: "timepicker__controls timepicker__controls--".concat(size), isDisabled: isDisabled, isInvalid: hasError, ref: groupRef }, { children: [jsx("div", __assign({}, fieldProps, fieldProps2, { className: "timepicker__input", ref: inputRef }, { children: state.segments.map(function (segment, i) { return (jsx(TimeSegment, { className: size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS, ref: i === 0 ? firstSpinBtnRef : undefined, segment: segment, state: state }, i)); }) })), jsxs("div", __assign({ className: "timepicker__buttons" }, { children: [showClearButton && !isDisabled && !isReadOnly && selectedValue && (jsx(ClearButton, { className: "timepicker__clear-button", onPress: function () {
                                            var _a;
                                            setSelectedValue(null);
                                            onChange(null);
                                            (_a = firstSpinBtnRef.current) === null || _a === void 0 ? void 0 : _a.focus();
                                        }, slot: null })), jsx("button", __assign({}, toggleBtnProps, { "aria-label": translateCommon('toggleMenu'), className: "timepicker__button", "data-disabled": toggleBtnProps.disabled || undefined, "data-focus-visible": toggleButtonFocusRing.isFocusVisible || undefined, "data-focused": toggleButtonFocusRing.isFocused || undefined }, { children: jsx(Icon, { name: iconNames.Schedule, size: IconSize.MD }) }))] }))] })) })), jsx(Popover$1, __assign({ className: "timepicker__popover", isNonModal: true, isOpen: isOpen, maxHeight: 280, placement: "bottom start", ref: popoverRef, style: groupWidth ? { width: groupWidth } : undefined, triggerRef: groupRef }, { children: jsx("div", __assign({}, menuProps, { className: "timepicker__menu" }, { children: timeItems.map(function (item, index) {
                            var itemValue = item.value;
                            var isSelected = (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) === itemValue;
                            return (jsx(MemoizedSelectOption, { getItemProps: getItemProps, isFocused: highlightedIndex === index, isSelected: isSelected, item: item, itemIndex: index, level: 0, size: size, useDataValue: true }, itemValue));
                        }) })) }))] })) })));
}

function getDateTimeRangeValue(value) {
    if (value) {
        var start = value.start, end = value.end;
        if (start && isString(start)) {
            start = parseDateTime(start);
        }
        if (end && isString(end)) {
            end = parseDateTime(end);
        }
        return { start: start, end: end };
    }
    return null;
}

function useTranslateValidation() {
    return useTranslateFn('validation');
}

var DateTimeFieldType;
(function (DateTimeFieldType) {
    DateTimeFieldType[DateTimeFieldType["EndDate"] = 0] = "EndDate";
    DateTimeFieldType[DateTimeFieldType["EndTime"] = 1] = "EndTime";
    DateTimeFieldType[DateTimeFieldType["StartDate"] = 2] = "StartDate";
    DateTimeFieldType[DateTimeFieldType["StartTime"] = 3] = "StartTime";
})(DateTimeFieldType || (DateTimeFieldType = {}));
function useDateTimeValidation(value) {
    var translateValidation = useTranslateValidation();
    var _a = value !== null && value !== void 0 ? value : {}, start = _a.start, end = _a.end;
    var field = DateTimeFieldType.EndDate, isInvalid = false, errorMessage = '';
    if (start && end && end.compare(start) < 0) {
        isInvalid = true;
        errorMessage = translateValidation('endAfterStart');
        if (isSameDay(start, end)) {
            field = DateTimeFieldType.EndTime;
        }
    }
    return {
        errorMessage: errorMessage,
        field: field,
        isInvalid: isInvalid
    };
}
// eslint-disable-next-line complexity
function DateTimeRangeFields(_a) {
    var className = _a.className, changeCallback = _a.changeCallback, changeParams = _a.changeParams, fields = _a.fields, ref = _a.ref, _b = _a.size, size = _b === void 0 ? Size.md : _b, value = _a.value, props = __rest(_a, ["className", "changeCallback", "changeParams", "fields", "ref", "size", "value"]);
    var _c = useState(getDateTimeRangeValue(value)), selectedValue = _c[0], setSelectedValue = _c[1];
    var dateTimeValidation = useDateTimeValidation(selectedValue);
    var hasTimesOnly = fields.filter(function (_a) {
        var type = _a.type;
        return type === DateTimeFieldType.EndDate || type === DateTimeFieldType.StartDate;
    }).length ===
        0;
    var onChange = function (newValue) {
        var _a, _b, _c, _d;
        var newValueToSet = newValue.start === null && newValue.end === null ? null : newValue;
        setSelectedValue(newValueToSet);
        safeCall(props.onChange, newValueToSet);
        safeCall(changeCallback, __assign(__assign({}, changeParams), { value: newValueToSet ?
                {
                    start: (_b = (_a = newValueToSet.start) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : null,
                    end: (_d = (_c = newValueToSet.end) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : null
                }
                : null }));
    };
    var onStartDateChange = function (date) {
        var _a = selectedValue !== null && selectedValue !== void 0 ? selectedValue : {}, start = _a.start, end = _a.end;
        var endTime = end ? toTime(end) : undefined;
        var newStart = date ? toCalendarDateTime(date, start ? toTime(start) : endTime) : null;
        var newEnd = end !== null && end !== void 0 ? end : null;
        // If end is before selected start date, change it to same.
        if (newStart && end && end.compare(newStart) < 0) {
            newEnd = newStart.copy();
        }
        onChange({
            start: newStart,
            end: newEnd
        });
    };
    var onEndDateChange = function (date) {
        var _a = selectedValue !== null && selectedValue !== void 0 ? selectedValue : {}, start = _a.start, end = _a.end;
        var startTime = start ? toTime(start) : undefined;
        var newEnd = date ? toCalendarDateTime(date, end ? toTime(end) : startTime) : null;
        var newStart = start !== null && start !== void 0 ? start : null;
        // If start is after selected end date, change it to same.
        if (newEnd && start && start.compare(newEnd) > 0) {
            newStart = newEnd.copy();
        }
        onChange({
            start: newStart,
            end: newEnd
        });
    };
    var onStartTimeChange = function (dateTime) {
        var end = (selectedValue !== null && selectedValue !== void 0 ? selectedValue : {}).end;
        var newEnd = end !== null && end !== void 0 ? end : null;
        // If end is before selected start date, change it to same.
        if (dateTime && end && end.compare(dateTime) < 0) {
            newEnd = dateTime.copy();
        }
        onChange({
            start: dateTime,
            end: newEnd
        });
    };
    var onEndTimeChange = function (dateTime) {
        var start = (selectedValue !== null && selectedValue !== void 0 ? selectedValue : {}).start;
        var newStart = start !== null && start !== void 0 ? start : null;
        // If start is after selected end date, change it to same.
        if (dateTime && start && start.compare(dateTime) > 0) {
            newStart = dateTime.copy();
        }
        onChange({
            start: newStart,
            end: dateTime
        });
    };
    useEffect(function () {
        setSelectedValue(getDateTimeRangeValue(value));
    }, [value]);
    var pickerRows = [];
    for (var i = 0, len = fields.length; i < len; i++) {
        var _d = fields[i], type = _d.type, fieldProps = __rest(_d, ["type"]);
        var pickers = pickerRows[pickerRows.length - 1], isInvalid = void 0, errorMessage = void 0;
        if (dateTimeValidation.field === type) {
            isInvalid = dateTimeValidation.isInvalid;
            errorMessage = dateTimeValidation.errorMessage;
        }
        if (!pickers || pickers.length === 2) {
            pickers = [];
            pickerRows.push(pickers);
        }
        if (type === DateTimeFieldType.StartDate || type === DateTimeFieldType.EndDate) {
            var isStart = type === DateTimeFieldType.StartDate;
            var dateTime = isStart ? selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start : selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.end;
            pickers.push(createElement(DatePicker, __assign({}, fieldProps, { helpText: errorMessage, isInvalid: isInvalid, key: type, onChange: isStart ? onStartDateChange : onEndDateChange, relatedValue: isStart ? selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.end : selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start, size: size, value: dateTime ? toCalendarDate(dateTime).toString() : null })));
        }
        else if (type === DateTimeFieldType.StartTime || type === DateTimeFieldType.EndTime) {
            var isStart = type === DateTimeFieldType.StartTime;
            var dateTime = isStart ? selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start : selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.end;
            var relatedValue = void 0;
            if (!isStart &&
                (selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start) &&
                (!dateTime || hasTimesOnly || isSameDay(selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start, dateTime))) {
                relatedValue = selectedValue === null || selectedValue === void 0 ? void 0 : selectedValue.start;
            }
            pickers.push(createElement(TimePicker, __assign({}, fieldProps, { helpText: errorMessage, isInvalid: isInvalid, key: type, onChange: isStart ? onStartTimeChange : onEndTimeChange, relatedValue: relatedValue, size: size, value: dateTime ? dateTime.toString() : null })));
        }
    }
    return (jsx("div", __assign({ className: classNames('datetime-range-fields', className), ref: ref }, { children: pickerRows.map(function (pickers, i) { return (jsx("div", __assign({ className: "datetime-range-fields__row" }, { children: pickers }), i)); }) })));
}

var FileTrigger = FileTrigger$1;

function SkeletonFileUploadArea(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, ref = _a.ref;
    return (jsx("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-file-upload-area', className), ref: ref }, { children: jsxs("div", __assign({ className: "skeleton-file-upload-area__inner" }, { children: [jsx(Skeleton, { "aria-hidden": false, height: 48, shape: SkeletonShape.Circle, width: 48 }), jsxs("div", __assign({ className: "skeleton-file-upload-area__texts" }, { children: [jsx(SkeletonText, { "aria-hidden": false, size: Size.lg, type: SkeletonTextType.Label }), jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Body, width: "50%" })] }))] })) })));
}

function FileUploadArea(_a) {
    var _this = this;
    var acceptedFileTypes = _a.acceptedFileTypes, allowsMultiple = _a.allowsMultiple, className = _a.className, descriptionText = _a.descriptionText, helpTextProps = _a.helpTextProps, iconName = _a.iconName, isSkeleton = _a.isSkeleton, mainText = _a.mainText, onSelect = _a.onSelect, ref = _a.ref, props = __rest(_a, ["acceptedFileTypes", "allowsMultiple", "className", "descriptionText", "helpTextProps", "iconName", "isSkeleton", "mainText", "onSelect", "ref"]);
    var isDisabled = props.isDisabled;
    var translateCommon = useTranslateCommon();
    var onDrop = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var items, files, i, len, item, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    items = e.items;
                    files = [];
                    i = 0, len = items.length;
                    _c.label = 1;
                case 1:
                    if (!(i < len)) return [3 /*break*/, 4];
                    item = items[i];
                    if (!(item.kind === 'file' && (!acceptedFileTypes || acceptedFileTypes.includes(item.type)))) return [3 /*break*/, 3];
                    _b = (_a = files).push;
                    return [4 /*yield*/, item.getFile()];
                case 2:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    safeCall(props.onDrop, files);
                    return [2 /*return*/];
            }
        });
    }); };
    if (isSkeleton) {
        return jsx(SkeletonFileUploadArea, {});
    }
    return (jsxs("div", __assign({ className: "file-upload-area-wrapper", ref: ref }, { children: [jsx(DropZone, __assign({}, props, { className: classNames('file-upload-area', className), getDropOperation: function (types) {
                    var op = 'copy';
                    if (acceptedFileTypes) {
                        for (var _i = 0, acceptedFileTypes_1 = acceptedFileTypes; _i < acceptedFileTypes_1.length; _i++) {
                            var fileType = acceptedFileTypes_1[_i];
                            if (types.has(fileType)) {
                                return op;
                            }
                        }
                        op = 'cancel';
                    }
                    return op;
                }, onDrop: function (e) {
                    onDrop(e);
                } }, { children: jsxs("div", __assign({ className: "file-upload-area__inner" }, { children: [jsx(Icon, { className: "file-upload-area__icon", name: iconName, size: IconSize.XXL }), jsxs("div", __assign({ className: "file-upload-area__content" }, { children: [jsxs("div", __assign({ className: "file-upload-area__texts" }, { children: [jsx(Text, __assign({ className: "".concat(LABEL_SIZE_LG_CSS_CLASS, " file-upload-area__main-text"), elementType: HTMLElementType.Div, slot: "label" }, { children: jsx("strong", { children: mainText }) })), jsx(BodyText, __assign({ className: "file-upload-area__description-text", elementType: HTMLElementType.Div, size: Size.sm }, { children: descriptionText }))] })), jsx(FileTrigger, __assign({ acceptedFileTypes: acceptedFileTypes, allowsMultiple: allowsMultiple, onSelect: function (files) {
                                        safeCall(onSelect, files ? Array.from(files) : []);
                                    } }, { children: jsx(Button, __assign({ isDisabled: isDisabled, size: Size.md, startIconName: iconNames.Upload, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }, { children: translateCommon('upload') })) }))] }))] })) })), helpTextProps && (jsx(HelpText, __assign({}, helpTextProps, { className: classNames('file-upload-area__help-text', helpTextProps.className) })))] })));
}

var FilterBarStyle;
(function (FilterBarStyle) {
    FilterBarStyle["Card"] = "card";
    FilterBarStyle["Plain"] = "plain";
})(FilterBarStyle || (FilterBarStyle = {}));
function FilterBar(_a) {
    var activeFiltersCount = _a.activeFiltersCount, className = _a.className, children = _a.children, nonVisibleActiveFiltersCount = _a.nonVisibleActiveFiltersCount, onClearAll = _a.onClearAll, onPressFilters = _a.onPressFilters, ref = _a.ref, _b = _a.style, style = _b === void 0 ? FilterBarStyle.Card : _b;
    var translateCommon = useTranslateCommon();
    var filterAreaRef = useRef(null);
    var _c = useState(false), isScrollable = _c[0], setIsScrollable = _c[1];
    var _d = useState({ scrollLeft: 0, scrollWidth: 0, offsetWidth: 0 }), scrollParams = _d[0], setScrollParams = _d[1];
    var actionSize = style === FilterBarStyle.Card ? Size.md : Size.sm;
    var scrollFilterArea = function (direction) {
        var filterAreaEl = filterAreaRef.current;
        if (filterAreaEl) {
            var scrollableWidth = scrollParams.scrollWidth - scrollParams.offsetWidth;
            var newScrollLeft = Math.min(filterAreaEl.scrollLeft + direction * scrollParams.offsetWidth, scrollableWidth);
            filterAreaEl.scrollLeft = newScrollLeft;
            setScrollParams(__assign(__assign({}, scrollParams), { scrollLeft: newScrollLeft }));
        }
    };
    var onResize = useCallback(function () {
        var filterAreaEl = filterAreaRef.current;
        if (filterAreaEl) {
            var currScrollWidth = filterAreaEl.scrollWidth;
            var currScrollLeft = filterAreaEl.scrollLeft;
            var currOffsetWidth = filterAreaEl.offsetWidth;
            setIsScrollable(currOffsetWidth < currScrollWidth);
            setScrollParams({ scrollWidth: currScrollWidth, scrollLeft: currScrollLeft, offsetWidth: currOffsetWidth });
        }
    }, [filterAreaRef]);
    useResizeObserver({ ref: filterAreaRef, onResize: onResize });
    return (jsxs("div", __assign({ className: classNames("filter-bar filter-bar--".concat(style), className), ref: ref }, { children: [jsxs("div", __assign({ className: "filter-bar__filters-wrapper" }, { children: [isScrollable && scrollParams.scrollLeft > 0 && (jsx(IconButton, { "aria-label": translateCommon('scrollLeft'), className: "filter-bar__scroll-btn filter-bar__scroll-btn--left", iconName: iconNames.ChevronLeft, onPress: function () {
                            scrollFilterArea(-1);
                        }, style: ButtonStyle.Fill, variant: ButtonVariant.Neutral })), jsx("div", __assign({ className: "filter-bar__filters", ref: filterAreaRef }, { children: children })), isScrollable && scrollParams.scrollLeft < scrollParams.scrollWidth - scrollParams.offsetWidth && (jsx(IconButton, { "aria-label": translateCommon('scrollRight'), className: "filter-bar__scroll-btn filter-bar__scroll-btn--right", iconName: iconNames.ChevronRight, onPress: function () {
                            scrollFilterArea(1);
                        }, style: ButtonStyle.Fill, variant: ButtonVariant.Neutral }))] })), jsxs("div", __assign({ className: "filter-bar__actions" }, { children: [jsxs(Button, __assign({ className: "filters-button", onPress: onPressFilters, size: actionSize, startIconName: iconNames.Tune, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: [!!nonVisibleActiveFiltersCount && (jsx(Icon, { ariaLabel: translateCommon('additionalFilters', { count: nonVisibleActiveFiltersCount }), className: "filters-button__icon", name: iconNames.StatusLightFilled, size: IconSize.SM })), jsxs("strong", { children: [translateCommon('filters'), !!activeFiltersCount && " (".concat(activeFiltersCount, ")")] })] })), jsx(Button, __assign({ isDisabled: !activeFiltersCount, onPress: onClearAll, size: actionSize, style: ButtonStyle.Plain, variant: ButtonVariant.Danger }, { children: translateCommon('clearAll') }))] }))] })));
}

function FilterButton(_a) {
    var children = _a.children, className = _a.className, clearButtonProps = _a.clearButtonProps, helpText = _a.helpText, isActive = _a.isActive, isDisabled = _a.isDisabled, _b = _a.isFocusable, isFocusable = _b === void 0 ? true : _b, isOpen = _a.isOpen, isSkeleton = _a.isSkeleton, label = _a.label, labelProps = _a.labelProps, onOpenChange = _a.onOpenChange, ref = _a.ref, showClearButton = _a.showClearButton, showHelpTextIcon = _a.showHelpTextIcon, _c = _a.size, size = _c === void 0 ? Size.md : _c, startIconName = _a.startIconName, toggleButtonProps = _a.toggleButtonProps;
    var isClearable = showClearButton && isActive;
    var _d = useFieldHelpText({ helpText: helpText }), fieldProps = _d.fieldProps, helpTextProps = _d.helpTextProps;
    if (isSkeleton) {
        return jsx(SkeletonField, { className: "skeleton-filter-button", hasHelpText: !!helpText, size: size });
    }
    return (jsxs("div", __assign({ className: classNames("filter-button filter-button--".concat(size), className), "data-clearable": !!isClearable || undefined, ref: ref }, { children: [jsx(Label, __assign({}, labelProps, { className: "visually-hidden", size: Size.lg }, { children: label })), jsxs("div", __assign({ className: classNames('filter-toggle-button-wrapper', className) }, { children: [jsx(Button$1, __assign({}, fieldProps, toggleButtonProps, { className: "filter-toggle-button filter-toggle-button--".concat(size), "data-active": !!isActive || undefined, "data-focusable": !!isFocusable || undefined, excludeFromTabOrder: !isFocusable, isDisabled: isDisabled, onKeyDown: function (e) {
                            var _a;
                            var eventKey = e.key;
                            if (eventKey === KeyboardEventKey.ArrowDown) {
                                e.preventDefault();
                                onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(true);
                            }
                            else if (eventKey === KeyboardEventKey.Escape) {
                                onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(false);
                            }
                            (_a = toggleButtonProps === null || toggleButtonProps === void 0 ? void 0 : toggleButtonProps.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(toggleButtonProps, e);
                        }, onPress: function (e) {
                            var _a;
                            onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(!isOpen);
                            (_a = toggleButtonProps === null || toggleButtonProps === void 0 ? void 0 : toggleButtonProps.onPress) === null || _a === void 0 ? void 0 : _a.call(toggleButtonProps, e);
                        }, preventFocusOnPress: !isFocusable }, { children: jsxs("span", __assign({ className: "filter-toggle-button__content" }, { children: [startIconName && (jsx(Icon, { ariaHidden: true, className: "filter-toggle-button__start-icon", name: startIconName })), jsx(Label, __assign({ className: "filter-toggle-button__label", size: size === Size.xs ? Size.md : Size.lg }, { children: children })), isFocusable && (jsx(Icon, { className: classNames("filter-toggle-button__expand-icon filter-toggle-button__expand-icon--".concat(size), {
                                        'filter-toggle-button__expand-icon--disabled': isDisabled
                                    }), name: isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled }))] })) })), isClearable && (jsx(ClearButton, __assign({ className: "filter-clear-button filter-clear-button--".concat(size), isDisabled: isDisabled }, clearButtonProps)))] })), helpText && (jsx(HelpText, __assign({}, helpTextProps, { showIcon: showHelpTextIcon, variant: isDisabled ? HelpTextVariant.Disabled : HelpTextVariant.Neutral }, { children: helpText })))] })));
}

function SearchField(_a) {
    var className = _a.className, helpText = _a.helpText, isSkeleton = _a.isSkeleton, placeholder = _a.placeholder, showHelpTextIcon = _a.showHelpTextIcon, _b = _a.size, size = _b === void 0 ? Size.md : _b, props = __rest(_a, ["className", "helpText", "isSkeleton", "placeholder", "showHelpTextIcon", "size"]);
    var _c = useFocusRing({ within: true, isTextInput: false }), focusProps = _c.focusProps, isFocused = _c.isFocused, isFocusVisible = _c.isFocusVisible;
    var _d = useHover(props), hoverProps = _d.hoverProps, isHovered = _d.isHovered;
    if (isSkeleton) {
        return jsx(SkeletonField, { className: "skeleton-search-field", hasHelpText: !!helpText, size: size });
    }
    return (jsxs(SearchField$1, __assign({}, props, { className: classNames("search-field search-field--".concat(size), className) }, { children: [jsxs("div", __assign({}, hoverProps, focusProps, { className: "search-field__content", "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined }, { children: [jsx(Icon, { className: "search-field__search-icon", name: iconNames.MagnifyingGlass }), jsx(Input, { className: classNames('search-field__input', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), placeholder: placeholder }), jsx(ClearButton, { className: "search-field__clear-button" })] })), helpText && jsx(HelpText, __assign({ showIcon: showHelpTextIcon }, { children: helpText }))] })));
}

function useSelectedItemsMap(selectedItems) {
    return useMemo(function () {
        var map = new Map();
        for (var i = 0, len = selectedItems.length; i < len; i++) {
            var item = selectedItems[i];
            map.set(item.value, item);
        }
        return map;
    }, [selectedItems]);
}

function MultiSelectHeader(_a) {
    var children = _a.children, className = _a.className, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isSelected = _a.isSelected, props = __rest(_a, ["children", "className", "isDisabled", "isFocused", "isSelected"]);
    return (jsx("div", __assign({}, props, { className: classNames('multiselect-header', className), "data-disabled": !!isDisabled || undefined, "data-focused": !!isFocused || undefined, "data-selected": !!isSelected || undefined }, { children: children })));
}

function isAllItemsSelected(items, selectedItemsMap) {
    var isAllSelected = true;
    for (var i = 0, len = items.length; i < len; i++) {
        var _a = items[i], children = _a.children, value = _a.value;
        if (!selectedItemsMap.has(value) || (children && !isAllItemsSelected(children, selectedItemsMap))) {
            isAllSelected = false;
            break;
        }
    }
    return isAllSelected;
}

function renderMultiSelectItems(_a) {
    var createText = _a.createText, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, getItemProps = _a.getItemProps, highlightedIndex = _a.highlightedIndex, highlightSource = _a.highlightSource, itemClassName = _a.itemClassName, items = _a.items, renderItemContent = _a.renderItemContent, selectedItemsMap = _a.selectedItemsMap, size = _a.size;
    var itemIndex = 0;
    var renderItem = function (item, level) {
        var itemValue = item.value;
        var isSelected = selectedItemsMap.has(itemValue);
        return (jsx(MemoizedSelectOption, { disabledKeys: disabledKeys, getItemProps: getItemProps, highlightSource: highlightSource, isFocused: highlightedIndex === itemIndex, isSelected: isSelected, item: item, itemClassName: itemClassName, itemIndex: itemIndex, level: level, renderItemContent: renderItemContent, size: size }, itemValue));
    };
    var renderItems = function (itemArr, level) {
        var itemNodes = [];
        var _loop_1 = function (i, len) {
            var item = itemArr[i];
            var value = item.value, text = item.text, children = item.children, hasSeparator = item.hasSeparator;
            var subItems = item.items;
            if (subItems) {
                if (level > 0) {
                    throw new Error('Sub-items are only supported on root level.');
                }
                var isSelected = isAllItemsSelected(subItems, selectedItemsMap);
                itemNodes.push(createElement(MultiSelectHeader, __assign({}, getItemProps({ item: item, index: itemIndex }), { isDisabled: disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(value), isFocused: highlightedIndex === itemIndex, isSelected: isSelected, key: value }),
                    jsx(Label, __assign({ size: Size.sm }, { children: text })),
                    isSelected && (jsx(Icon, { "aria-hidden": true, className: "multiselect-header__check", name: iconNames.InputCheck, size: IconSize.MD }))));
                itemIndex++;
                itemNodes.push.apply(itemNodes, renderItems(subItems, level));
            }
            else if (children) {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
                if ((expandedKeys === null || expandedKeys === void 0 ? void 0 : expandedKeys.has(value)) !== false) {
                    itemNodes.push.apply(itemNodes, renderItems(children, level + 1));
                }
            }
            else if (value === SpecialSelectItemKey.CREATABLE) {
                itemNodes.push(jsx(MemoizedSelectOption, { getItemProps: getItemProps, isFocused: highlightedIndex === itemIndex, item: item, itemIndex: itemIndex, level: level, renderItemContent: function (optionContentProps) { return (jsx(SelectOptionContent, __assign({}, optionContentProps, { bodyPrefix: jsx(Icon, { className: "select-option__start-icon", name: iconNames.AddCircleFilled }), label: jsx(Label, __assign({ size: size === Size.xs ? Size.md : Size.lg }, { children: isFunction(createText) ? createText(text) : createText })) }))); }, size: size }, value));
                itemIndex++;
            }
            else {
                itemNodes.push(renderItem(item, level));
                itemIndex++;
            }
            if (hasSeparator) {
                itemNodes.push(jsx(Divider, { size: Size.sm }, "".concat(value, "--separator")));
            }
        };
        for (var i = 0, len = itemArr.length; i < len; i++) {
            _loop_1(i);
        }
        return itemNodes;
    };
    return renderItems(items, 0);
}

function findUnselectedItems(items, selectedItems) {
    var unselectedItems = [];
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var children = item.children, value = item.value;
        var idx = getIndexWithPropertyValue(VALUE, value, selectedItems);
        if (idx === -1) {
            unselectedItems.push(item);
        }
        if (children) {
            unselectedItems.push.apply(unselectedItems, findUnselectedItems(children, selectedItems));
        }
    }
    return unselectedItems;
}
function findSelectedItemIndices(items, selectedItems) {
    var indices = [];
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var children = item.children, value = item.value;
        var idx = getIndexWithPropertyValue(VALUE, value, selectedItems);
        if (idx !== -1) {
            indices.push(idx);
        }
        if (children) {
            indices.push.apply(indices, findSelectedItemIndices(children, selectedItems));
        }
    }
    return indices;
}
function updateSelectedItems(selectedItems, selectedItem) {
    var subItems = selectedItem.items;
    if (subItems) {
        var subItemsToSelect = [];
        var selectedItemIndices = [];
        for (var i = 0, len = subItems.length; i < len; i++) {
            var subItem = subItems[i];
            var children = subItem.children, value = subItem.value;
            var idx_1 = getIndexWithPropertyValue(VALUE, value, selectedItems);
            if (idx_1 === -1) {
                subItemsToSelect.push(subItem);
                if (children) {
                    subItemsToSelect.push.apply(subItemsToSelect, findUnselectedItems(children, selectedItems));
                }
            }
            else {
                if (children) {
                    var unselectedChildren = findUnselectedItems(children, selectedItems);
                    if (unselectedChildren.length > 0) {
                        subItemsToSelect.push.apply(subItemsToSelect, unselectedChildren);
                        continue;
                    }
                }
                selectedItemIndices.push(idx_1);
                if (children) {
                    selectedItemIndices.push.apply(selectedItemIndices, findSelectedItemIndices(children, selectedItems));
                }
            }
        }
        if (subItemsToSelect.length === 0) {
            // All sub-items selected --> remove from selected.
            selectedItemIndices.sort(function (a, b) { return b - a; }); // sort desc
            for (var i = 0, len = selectedItemIndices.length; i < len; i++) {
                selectedItems.splice(selectedItemIndices[i], 1);
            }
        }
        else {
            selectedItems.push.apply(selectedItems, subItemsToSelect);
        }
        return selectedItems;
    }
    var idx = getIndexWithPropertyValue(VALUE, selectedItem.value, selectedItems);
    if (idx === -1) {
        selectedItems.push(selectedItem);
        var children = selectedItem.children;
        if (children) {
            selectedItems.push.apply(selectedItems, findUnselectedItems(children, selectedItems));
        }
    }
    else {
        selectedItems.splice(idx, 1);
    }
    return selectedItems;
}

function isItemsChanged(items, oldItems) {
    if (items === oldItems) {
        return false;
    }
    if (oldItems === undefined) {
        return true;
    }
    var len = items.length;
    var oldLen = oldItems.length;
    if (len !== oldLen) {
        return true;
    }
    for (var i = 0; i < len; i++) {
        var key = items[i].value;
        if (getIndexWithPropertyValue(VALUE, key, oldItems) === -1) {
            return true;
        }
    }
    return false;
}

var _a$5, _b$2;
var footerButtonSize = (_a$5 = {},
    _a$5[Size.xs] = Size.sm,
    _a$5[Size.sm] = Size.md,
    _a$5[Size.md] = Size.lg,
    _a$5);
var defaultMenuWidth = (_b$2 = {},
    _b$2[Size.xs] = 250,
    _b$2[Size.sm] = 250,
    _b$2[Size.md] = 300,
    _b$2);
function FilterMultiSelect(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, helpText = _a.helpText, _b = _a.isClearable, isClearable = _b === void 0 ? true : _b, isDisabled = _a.isDisabled, isLoading = _a.isLoading, _c = _a.isSelectable, isSelectable = _c === void 0 ? true : _c, isSkeleton = _a.isSkeleton, itemClassName = _a.itemClassName, items = _a.items, label = _a.label, menuWidth = _a.menuWidth, onBottomLoaderVisible = _a.onBottomLoaderVisible, propsOnInputChange = _a.onInputChange, propsOnOpenChange = _a.onOpenChange, ref = _a.ref, renderItemContent = _a.renderItemContent, searchPlaceholder = _a.searchPlaceholder, propsSelectedItems = _a.selectedItems, showHelpTextIcon = _a.showHelpTextIcon, _d = _a.size, size = _d === void 0 ? Size.md : _d, startIconName = _a.startIconName;
    var translateCommon = useTranslateCommon();
    var localFilter = useFilter({ sensitivity: 'base' });
    var triggerRef = useRef(null);
    var menuRef = useRef(null);
    var _e = useState(false), isSearchFocused = _e[0], setIsSearchFocused = _e[1];
    var _f = useState(''), inputValue = _f[0], setInputValue = _f[1];
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var _h = useSelectItemHighlight(), highlightedIndex = _h.highlightedIndex, onHighlightedIndexChange = _h.onHighlightedIndexChange, highlightSource = _h.highlightSource, setHighlightSource = _h.setHighlightSource;
    var _j = useState(null), tempSelectedItems = _j[0], setTempSelectedItems = _j[1];
    var _k = useState(propsSelectedItems ? __spreadArray([], propsSelectedItems, true) : []), selectedItems = _k[0], setSelectedItems = _k[1];
    var _l = useState(null), filteredItems = _l[0], setFilteredItems = _l[1];
    var itemsToRender = (filteredItems !== null && filteredItems !== void 0 ? filteredItems : items).slice();
    var flatItems = createFlatSelectItemList(itemsToRender, true, expandedKeys);
    var onSearchFocusChange = function (isFocused) {
        setIsSearchFocused(isFocused);
        setHighlightSource(InteractionSource.Mouse);
    };
    var onInputChange = function (val) {
        setInputValue(val);
        safeCall(propsOnInputChange, val, InputChangeTriggerAction.Input);
        if (!propsOnInputChange) {
            setFilteredItems(val ? filterItems(items, val, localFilter) : null);
        }
    };
    var triggerChange = function (newSelectedItems) {
        if (isItemsChanged(newSelectedItems, propsSelectedItems)) {
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: newSelectedItems.slice() }));
        }
    };
    var clearSelectedItems = function () {
        var newSelectedItems = [];
        setSelectedItems(newSelectedItems);
        triggerChange(newSelectedItems);
    };
    var _m = useCombobox({
        highlightedIndex: highlightedIndex,
        selectedItem: null,
        inputValue: inputValue,
        isOpen: isOpen,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        onHighlightedIndexChange: onHighlightedIndexChange,
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem;
            if (newSelectedItem && tempSelectedItems) {
                updateSelectedItems(tempSelectedItems, newSelectedItem);
                setTempSelectedItems(__spreadArray([], tempSelectedItems, true));
            }
        },
        onIsOpenChange: function (_a) {
            var newIsOpen = _a.isOpen;
            if (!isSelectable) {
                return;
            }
            if (newIsOpen) {
                // Clear filtering on open
                safeCall(propsOnInputChange, '', InputChangeTriggerAction.Focus);
                setInputValue('');
                setFilteredItems(null);
                setTempSelectedItems(__spreadArray([], selectedItems, true));
            }
            else {
                setTempSelectedItems(null);
            }
            setIsOpen(newIsOpen);
            propsOnOpenChange === null || propsOnOpenChange === void 0 ? void 0 : propsOnOpenChange(newIsOpen);
        },
        stateReducer: function (state, actionAndChanges) {
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    return __assign(__assign({}, changes), { isOpen: true, highlightedIndex: state.highlightedIndex // ...with same option highlighted
                     });
                case useCombobox.stateChangeTypes.InputBlur:
                    // Keep the current state on input blur (out-click, Tab etc.)
                    return __assign(__assign({}, changes), { selectedItem: state.selectedItem, inputValue: state.inputValue, highlightedIndex: state.highlightedIndex, isOpen: true });
                default:
                    return changes;
            }
        },
        onStateChange: function (changes) {
            var type = changes.type;
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownArrowUp:
                case useCombobox.stateChangeTypes.InputKeyDownArrowDown:
                    if (changes.highlightedIndex === flatItems.length - 1) {
                        // scroll at the bottom when last item is highlighted to make sure loader is visible
                        scrollBottom(menuRef.current);
                    }
                    break;
            }
        }
    }), getToggleButtonProps = _m.getToggleButtonProps, getLabelProps = _m.getLabelProps, getMenuProps = _m.getMenuProps, getInputProps = _m.getInputProps, getItemProps = _m.getItemProps, openMenu = _m.openMenu, closeMenu = _m.closeMenu;
    var clearTempSelectedItems = function () {
        setTempSelectedItems([]);
    };
    var confirmTempSelectedItems = function () {
        if (tempSelectedItems) {
            setSelectedItems(__spreadArray([], tempSelectedItems, true));
            triggerChange(tempSelectedItems);
            closeMenu();
        }
    };
    useEffect(function () {
        setSelectedItems(propsSelectedItems ? __spreadArray([], propsSelectedItems, true) : []);
    }, [propsSelectedItems]);
    useSelectOptionCountAnnouncement({ isOpen: isOpen, itemCount: itemsToRender.length });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _o = getToggleButtonProps(); _o.onClick; _o.onPress; var toggleButtonProps = __rest(_o, ["onClick", "onPress"]);
    var inputProps = getInputProps({}, { suppressRefError: true });
    var menuProps = getMenuProps({ ref: menuRef }, { suppressRefError: true });
    var labelProps = getLabelProps();
    var selectedCount = selectedItems.length;
    var tempSelectedCount = tempSelectedItems === null || tempSelectedItems === void 0 ? void 0 : tempSelectedItems.length;
    var selectedItemsMap = useSelectedItemsMap(tempSelectedItems !== null && tempSelectedItems !== void 0 ? tempSelectedItems : []);
    var selectedCountForButton = isNullOrUndefined(tempSelectedCount) ? selectedCount : tempSelectedCount;
    var selectedItemsText = selectedCountForButton > 0 ? " (".concat(selectedCountForButton, ")") : '';
    if (selectedCountForButton === 1) {
        selectedItemsText = ": ".concat((tempSelectedItems !== null && tempSelectedItems !== void 0 ? tempSelectedItems : selectedItems)[0].text);
    }
    return (jsxs(Fragment, { children: [jsx(FilterButton, __assign({ className: classNames('filter-multiselect', className), clearButtonProps: { onPress: clearSelectedItems }, helpText: helpText, isActive: selectedCount > 0, isDisabled: isDisabled, isFocusable: isSelectable, isOpen: isOpen, isSkeleton: isSkeleton, label: label, labelProps: __assign(__assign({}, labelProps), { htmlFor: [labelProps.htmlFor, toggleButtonProps.id].join(' ') }), onOpenChange: function (newIsOpen) { return (newIsOpen ? openMenu() : closeMenu()); }, ref: ref, showClearButton: isClearable, showHelpTextIcon: showHelpTextIcon, size: size, startIconName: startIconName, toggleButtonProps: __assign(__assign({}, toggleButtonProps), { ref: triggerRef }) }, { children: jsxs(Fragment, { children: [label, selectedItemsText] }) })), jsx(Popover$1, __assign({ className: "filter-select__popover", isOpen: isOpen, maxHeight: 375, onOpenChange: closeMenu, placement: "bottom start", shouldFlip: true, style: { width: menuWidth !== null && menuWidth !== void 0 ? menuWidth : defaultMenuWidth[size] }, triggerRef: triggerRef }, { children: jsx(Dialog, __assign({ "aria-label": label, className: "filter-select__dialog" }, { children: jsxs("div", __assign({ className: "filter-select__menu" }, { children: [jsx("div", __assign({ className: "filter-select__menu-header" }, { children: jsx(SearchField, __assign({}, inputProps, { "aria-label": translateCommon('search'), autoFocus: true, onChange: onInputChange, onFocusChange: onSearchFocusChange, placeholder: searchPlaceholder !== null && searchPlaceholder !== void 0 ? searchPlaceholder : translateCommon('search'), size: size })) })), jsxs("div", __assign({}, menuProps, { className: "filter-select__menu-body", tabIndex: -1 }, { children: [itemsToRender.length === 0 && !isLoading && (jsx(SelectOptionsEmptyState, { size: size }, "empty")), renderMultiSelectItems({
                                        createText: '',
                                        disabledKeys: disabledKeys,
                                        expandedKeys: expandedKeys,
                                        getItemProps: getItemProps,
                                        highlightedIndex: highlightedIndex,
                                        highlightSource: isSearchFocused ? highlightSource : undefined,
                                        itemClassName: itemClassName,
                                        items: itemsToRender,
                                        renderItemContent: renderItemContent,
                                        selectedItemsMap: selectedItemsMap,
                                        size: size
                                    }), isLoading && jsx(LoadingItem, { size: size }, "loading"), onBottomLoaderVisible && jsx(BottomLoader, { onVisible: onBottomLoaderVisible }, "loader")] })), jsxs("div", __assign({ className: "filter-select__menu-footer" }, { children: [isClearable && (jsx(Button, __assign({ onPress: clearTempSelectedItems, size: footerButtonSize[size], style: ButtonStyle.Plain, variant: ButtonVariant.Danger }, { children: translateCommon('reset') }))), jsx("div", __assign({ className: "filter-select__menu-footer-btn-group" }, { children: jsxs(Button, __assign({ isDisabled: !isClearable && tempSelectedCount === 0, onPress: confirmTempSelectedItems, size: footerButtonSize[size], style: ButtonStyle.Fill, variant: ButtonVariant.Accent }, { children: [translateCommon('apply'), tempSelectedCount ? " (".concat(tempSelectedCount, ")") : ''] })) }))] }))] })) })) }))] }));
}

function FilterSelect(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, helpText = _a.helpText, _b = _a.isClearable, isClearable = _b === void 0 ? true : _b, isDisabled = _a.isDisabled, isLoading = _a.isLoading, _c = _a.isSelectable, isSelectable = _c === void 0 ? true : _c, isSkeleton = _a.isSkeleton, itemClassName = _a.itemClassName, items = _a.items, label = _a.label, menuWidth = _a.menuWidth, onBottomLoaderVisible = _a.onBottomLoaderVisible, propsOnInputChange = _a.onInputChange, ref = _a.ref, renderItemContent = _a.renderItemContent, searchPlaceholder = _a.searchPlaceholder, showHelpTextIcon = _a.showHelpTextIcon, _d = _a.size, size = _d === void 0 ? Size.md : _d, startIconName = _a.startIconName, text = _a.text, value = _a.value;
    var translateCommon = useTranslateCommon();
    var localFilter = useFilter({ sensitivity: 'base' });
    var triggerRef = useRef(null);
    var menuRef = useRef(null);
    var _e = useState(value && text ? { value: value, text: text } : null), selectedItem = _e[0], setSelectedItem = _e[1];
    var _f = useState(''), inputValue = _f[0], setInputValue = _f[1];
    var _g = useState(false), isOpen = _g[0], setIsOpen = _g[1];
    var _h = useSelectItemHighlight(), highlightedIndex = _h.highlightedIndex, onHighlightedIndexChange = _h.onHighlightedIndexChange, highlightSource = _h.highlightSource;
    var _j = useState(null), filteredItems = _j[0], setFilteredItems = _j[1];
    var itemsToRender = (filteredItems !== null && filteredItems !== void 0 ? filteredItems : items).slice();
    var flatItems = createFlatSelectItemList(itemsToRender, false, expandedKeys);
    var onInputChange = function (val) {
        setInputValue(val);
        safeCall(propsOnInputChange, val, InputChangeTriggerAction.Input);
        if (!propsOnInputChange) {
            setFilteredItems(val ? filterItems(items, val, localFilter) : null);
        }
    };
    var onSelectionChange = function (newSelectedItem) {
        setSelectedItem(newSelectedItem);
        if (newSelectedItem) {
            safeCall(changeCallback, __assign(__assign({}, changeParams), newSelectedItem));
        }
        else {
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: null }));
        }
    };
    useScrollToSelectedOption({ isLoading: isLoading, isOpen: isOpen, menuRef: menuRef });
    useEffect(function () {
        if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) !== (value !== null && value !== void 0 ? value : undefined) || (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.text) !== text) {
            setSelectedItem(value && text ? { value: value, text: text } : null);
        }
    }, [value, text]);
    useSelectOptionCountAnnouncement({ isOpen: isOpen, itemCount: itemsToRender.length });
    var _k = useCombobox({
        highlightedIndex: highlightedIndex,
        selectedItem: selectedItem,
        inputValue: inputValue,
        isOpen: isOpen,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        onHighlightedIndexChange: onHighlightedIndexChange,
        onSelectedItemChange: function (_a) {
            var newSelectedItem = _a.selectedItem;
            onSelectionChange(newSelectedItem !== null && newSelectedItem !== void 0 ? newSelectedItem : null);
        },
        onIsOpenChange: function (_a) {
            var newIsOpen = _a.isOpen;
            if (!isSelectable) {
                return;
            }
            if (newIsOpen) {
                // Clear filtering on open
                safeCall(propsOnInputChange, '', InputChangeTriggerAction.Focus);
                setInputValue('');
                setFilteredItems(null);
            }
            setIsOpen(newIsOpen);
        },
        stateReducer: function (state, actionAndChanges) {
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            // eslint-disable-next-line sonarjs/no-small-switch
            switch (type) {
                case useCombobox.stateChangeTypes.InputBlur:
                    // Keep the current state on input blur (out-click, Tab etc.)
                    return __assign(__assign({}, changes), { selectedItem: state.selectedItem, inputValue: state.inputValue, highlightedIndex: state.highlightedIndex, isOpen: true });
                default:
                    return changes;
            }
        }
    }), getToggleButtonProps = _k.getToggleButtonProps, getLabelProps = _k.getLabelProps, getMenuProps = _k.getMenuProps, getInputProps = _k.getInputProps, getItemProps = _k.getItemProps, openMenu = _k.openMenu, closeMenu = _k.closeMenu, selectItem = _k.selectItem;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _l = getToggleButtonProps(); _l.onClick; _l.onPress; var toggleButtonProps = __rest(_l, ["onClick", "onPress"]);
    var inputProps = getInputProps({}, { suppressRefError: true });
    var menuProps = getMenuProps({ ref: menuRef }, { suppressRefError: true });
    var labelProps = getLabelProps();
    return (jsxs(Fragment, { children: [jsx(FilterButton, __assign({ className: classNames('filter-select', className), clearButtonProps: { onPress: function () { return selectItem(null); } }, helpText: helpText, isActive: !!selectedItem, isDisabled: isDisabled, isFocusable: isSelectable, isOpen: isOpen, isSkeleton: isSkeleton, label: label, labelProps: __assign(__assign({}, labelProps), { htmlFor: [labelProps.htmlFor, toggleButtonProps.id].join(' ') }), onOpenChange: function (newIsOpen) { return (newIsOpen ? openMenu() : closeMenu()); }, ref: ref, showClearButton: isClearable, showHelpTextIcon: showHelpTextIcon, size: size, startIconName: startIconName, toggleButtonProps: __assign(__assign({}, toggleButtonProps), { ref: triggerRef }) }, { children: jsxs(Fragment, { children: [label, selectedItem && ": ".concat(selectedItem.text)] }) })), jsx(Popover$1, __assign({ className: "filter-select__popover", isOpen: isOpen, maxHeight: 375, onOpenChange: closeMenu, placement: "bottom start", shouldFlip: true, style: { width: menuWidth !== null && menuWidth !== void 0 ? menuWidth : '250px' }, triggerRef: triggerRef }, { children: jsx(Dialog, __assign({ "aria-label": label, className: "filter-select__dialog" }, { children: jsxs("div", __assign({ className: "filter-select__menu" }, { children: [jsx("div", __assign({ className: "filter-select__menu-header" }, { children: jsx(SearchField, __assign({}, inputProps, { "aria-label": translateCommon('search'), autoFocus: true, onChange: onInputChange, placeholder: searchPlaceholder !== null && searchPlaceholder !== void 0 ? searchPlaceholder : translateCommon('search'), size: size })) })), jsxs("div", __assign({}, menuProps, { className: "filter-select__menu-body" }, { children: [itemsToRender.length === 0 && !isLoading && (jsx(SelectOptionsEmptyState, { size: size }, "empty")), renderSelectItems({
                                        createText: '',
                                        disabledKeys: disabledKeys,
                                        expandedKeys: expandedKeys,
                                        getItemProps: getItemProps,
                                        highlightedIndex: highlightedIndex,
                                        highlightSource: highlightSource,
                                        itemClassName: itemClassName,
                                        items: itemsToRender,
                                        renderItemContent: renderItemContent,
                                        selectedItem: selectedItem,
                                        size: size
                                    }), isLoading && jsx(LoadingItem, { size: size }, "loading"), onBottomLoaderVisible && jsx(BottomLoader, { onVisible: onBottomLoaderVisible }, "loader")] }))] })) })) }))] }));
}

var SelectedItemStyle;
(function (SelectedItemStyle) {
    SelectedItemStyle["tag"] = "tag";
    SelectedItemStyle["text"] = "text";
})(SelectedItemStyle || (SelectedItemStyle = {}));
function MultiSelectChip(_a) {
    var children = _a.children, className = _a.className, _b = _a.displayStyle, displayStyle = _b === void 0 ? SelectedItemStyle.text : _b, props = __rest(_a, ["children", "className", "displayStyle"]);
    return (jsx("span", __assign({}, props, { className: classNames("multiselect__chip multiselect__chip--".concat(displayStyle), className) }, { children: children })));
}

function scrollRight(element) {
    if (element) {
        element.scrollLeft = element.scrollWidth;
    }
}

var _a$4, _b$1, _c;
var labelSize = (_a$4 = {},
    _a$4[Size.xs] = Size.sm,
    _a$4[Size.sm] = Size.md,
    _a$4[Size.md] = Size.lg,
    _a$4[Size.lg] = Size.lg,
    _a$4);
var descriptionSize = (_b$1 = {},
    _b$1[Size.xs] = Size.xs,
    _b$1[Size.sm] = Size.xs,
    _b$1[Size.md] = Size.sm,
    _b$1[Size.lg] = Size.sm,
    _b$1);
var iconSize = (_c = {},
    _c[Size.xs] = IconSize.XS,
    _c[Size.sm] = IconSize.SM,
    _c[Size.md] = IconSize.MD,
    _c[Size.lg] = IconSize.LG,
    _c);
function Avatar(props) {
    var alt = props.alt, className = props.className, description = props.description, _a = props.iconName, iconName = _a === void 0 ? iconNames.GhostFilled : _a, isDisabled = props.isDisabled, isInteractive = props.isInteractive, label = props.label, labelMaxWidth = props.labelMaxWidth, onPress = props.onPress, ref = props.ref, _b = props.size, size = _b === void 0 ? Size.md : _b, src = props.src, style = props.style, text = props.text;
    var hasImage = !!src;
    var image;
    if (hasImage) {
        image = jsx("img", { alt: alt, className: "avatar__image", src: src, title: alt });
    }
    else if (text) {
        image = (jsx("span", __assign({ className: "avatar__image", title: alt }, { children: text })));
    }
    else {
        image = (jsx("span", __assign({ className: "avatar__image", title: alt }, { children: jsx(Icon, { className: "avatar__icon", name: iconName, size: iconSize[size] }) })));
    }
    if (isInteractive && !isDisabled) {
        image = (jsxs(TooltipTrigger, { children: [jsx(FocusRing, __assign({ focusRingClass: "avatar__trigger-element--focused" }, { children: jsxs(TriggerElement, __assign({ className: "avatar__trigger-element", onPress: onPress, role: onPress ? 'button' : undefined }, { children: [image, jsx("span", { className: "avatar__scrim" })] })) })), jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: alt }))] }));
    }
    return (jsxs("div", __assign({ className: classNames("avatar avatar--".concat(size), className, {
            'avatar--disabled': isDisabled,
            'avatar--interactive': isInteractive,
            'avatar--pressable': !!onPress
        }), ref: ref, style: style }, { children: [image, (!!label || !!description) && (jsxs("div", __assign({ className: "avatar__label-wrapper", style: { maxWidth: labelMaxWidth } }, { children: [label && (jsx(Label, __assign({ className: "avatar__label", size: labelSize[size] }, { children: label }))), description && (jsx(Label, __assign({ className: "avatar__description", size: descriptionSize[size] }, { children: description })))] })))] })));
}

var AvatarGroupLayout;
(function (AvatarGroupLayout) {
    AvatarGroupLayout["Grid"] = "grid";
    AvatarGroupLayout["Stack"] = "stack";
})(AvatarGroupLayout || (AvatarGroupLayout = {}));
var STACK_MAX_VISIBLE_COUNT = 5;
var GRID_MAX_VISIBLE_COUNT = 10;
function AvatarGroup(_a) {
    var propsChildren = _a.children, className = _a.className, _b = _a.layout, layout = _b === void 0 ? AvatarGroupLayout.Stack : _b, maxVisibleCount = _a.maxVisibleCount, ref = _a.ref, size = _a.size;
    var children = Children.toArray(propsChildren);
    var childCount = children.length;
    var hasStackLayout = layout === AvatarGroupLayout.Stack;
    var maxCount = hasStackLayout ? STACK_MAX_VISIBLE_COUNT : (maxVisibleCount !== null && maxVisibleCount !== void 0 ? maxVisibleCount : GRID_MAX_VISIBLE_COUNT);
    var content = children.slice(0, maxCount).map(function (child, i) {
        return cloneElement(child, {
            // always ignore label and description
            description: undefined,
            isInteractive: true,
            label: undefined,
            size: size,
            style: hasStackLayout ? { zIndex: maxCount - i } : undefined
        });
    });
    if (childCount > maxCount) {
        var menuItems = children.slice(maxCount, childCount).map(function (child, i) {
            var avatarElement = child;
            var item = {
                id: i,
                name: avatarElement.props.alt,
                props: {
                    onAction: avatarElement.props.onPress,
                    prefix: cloneElement(avatarElement, {
                        // always ignore label and description
                        description: undefined,
                        isInteractive: false,
                        label: undefined,
                        onPress: undefined,
                        size: Size.xs
                    })
                }
            };
            return item;
        });
        content.push(jsx(Menu, __assign({ items: menuItems }, { children: jsx(Button$1, __assign({ className: "avatar-group__more-button avatar-group__more-button--".concat(size), style: hasStackLayout ? { zIndex: 0 } : undefined }, { children: jsx(Label, __assign({ size: size === Size.lg ? Size.sm : Size.xs }, { children: "+".concat(childCount - maxCount) })) })) }), "more"));
    }
    return (jsx("div", __assign({ className: classNames("avatar-group avatar-group--".concat(layout, " avatar-group--").concat(size), className), ref: ref }, { children: content })));
}

var MAX_VISIBLE_ELEMENTS_COUNT = 5;
var MORE_ELEMENT_ID = 'more';
var HIDDEN_ELEMENT_CSS_CLASS = 'breadcrumb--hidden';
var TRUNCATED_ELEMENT_CSS_CLASS = 'breadcrumb--truncated';
function adaptElements(wrapperElement, itemsWithMore) {
    var _a, _b, _c;
    var allElements = wrapperElement.children;
    var allElementsLen = allElements.length;
    var hiddenItems = [];
    // Static elements which should be always visible.
    var firstElement, moreElement, currentElement;
    // Reveal all elements and find static elements.
    for (var i = 0; i < allElementsLen; i++) {
        var el = allElements[i];
        el.classList.remove(HIDDEN_ELEMENT_CSS_CLASS, TRUNCATED_ELEMENT_CSS_CLASS);
        if (i === 0) {
            firstElement = el;
        }
        if (el.dataset.id === MORE_ELEMENT_ID) {
            moreElement = el;
        }
        if (el.dataset.current) {
            currentElement = el;
        }
    }
    var wrapperWidth = wrapperElement.offsetWidth;
    var stopWidth = ((_a = firstElement === null || firstElement === void 0 ? void 0 : firstElement.offsetWidth) !== null && _a !== void 0 ? _a : 0) + ((_b = moreElement === null || moreElement === void 0 ? void 0 : moreElement.offsetWidth) !== null && _b !== void 0 ? _b : 0) + ((_c = currentElement === null || currentElement === void 0 ? void 0 : currentElement.offsetWidth) !== null && _c !== void 0 ? _c : 0), hasVisibleNonStaticElements = false;
    // Hide elements which don't fit the wrapper or exceed max visible elements count.
    for (var i = 0; i < allElementsLen; i++) {
        var el = allElements[i];
        // Skip static elements
        if (el === moreElement || el === firstElement || el === currentElement) {
            continue;
        }
        var elementWidth = el.offsetWidth;
        var isWithinMaxVisibleCount = allElementsLen - 1 >= MAX_VISIBLE_ELEMENTS_COUNT ? i < MAX_VISIBLE_ELEMENTS_COUNT - 2 : true;
        if (isWithinMaxVisibleCount && wrapperWidth >= stopWidth + elementWidth) {
            stopWidth += elementWidth;
            hasVisibleNonStaticElements = true;
        }
        else {
            el.classList.add(HIDDEN_ELEMENT_CSS_CLASS);
            hiddenItems.push(itemsWithMore[i]);
        }
    }
    if (hiddenItems.length === 0) {
        // No hidden items --> hide more-element.
        moreElement === null || moreElement === void 0 ? void 0 : moreElement.classList.add(HIDDEN_ELEMENT_CSS_CLASS);
    }
    if (!hasVisibleNonStaticElements) {
        // No visible non-static elements --> allow current element to truncate with ellipsis.
        currentElement === null || currentElement === void 0 ? void 0 : currentElement.classList.add(TRUNCATED_ELEMENT_CSS_CLASS);
    }
    return {
        hiddenItems: hiddenItems,
        currentElement: currentElement
    };
}
function Breadcrumbs(_a) {
    var className = _a.className, items = _a.items, ref = _a.ref, props = __rest(_a, ["className", "items", "ref"]);
    var wrapperRef = useRef(null);
    var itemsWithMore = useMemo(function () {
        var arr = items.slice();
        arr.splice(items.length - 1, 0, { id: MORE_ELEMENT_ID, label: '...' });
        return arr;
    }, [items]);
    var _b = useState([]), hiddenItems = _b[0], setHiddenItems = _b[1];
    var _c = useState(false), currentHasTooltip = _c[0], setCurrentHasTooltip = _c[1];
    useImperativeHandle(ref, function () { return wrapperRef.current; }, []);
    var onAction = function (key) {
        if (key !== MORE_ELEMENT_ID) {
            safeCall(props.onAction, key);
        }
    };
    var onResize = useCallback(function () {
        var wrapperElement = wrapperRef.current;
        if (wrapperElement) {
            var _a = adaptElements(wrapperElement, itemsWithMore), hiddenItemsArr = _a.hiddenItems, currentElement = _a.currentElement;
            setHiddenItems(hiddenItemsArr);
            if (currentElement) {
                var linkElement = currentElement.firstChild;
                setCurrentHasTooltip(linkElement.offsetWidth < linkElement.scrollWidth);
            }
        }
    }, [wrapperRef, itemsWithMore]);
    useResizeObserver({ ref: wrapperRef, onResize: onResize });
    return (jsx(Breadcrumbs$1, __assign({}, props, { className: classNames('breadcrumbs', className), onAction: onAction, ref: wrapperRef }, { children: itemsWithMore.map(function (_a, i) {
            var id = _a.id, label = _a.label, isDisabled = _a.isDisabled;
            var hasTooltip = i === itemsWithMore.length - 1 && currentHasTooltip;
            var link = (jsx(Link$1, __assign({ className: "breadcrumb-link ".concat(LABEL_SIZE_MD_CSS_CLASS), 
                // Link with tooltip should be focusable so cannot disable.
                isDisabled: hasTooltip ? false : isDisabled }, { children: label })));
            if (hasTooltip) {
                link = (jsxs(TooltipTrigger, { children: [link, jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: label }))] }));
            }
            if (id === MORE_ELEMENT_ID) {
                link = (jsx(Menu, __assign({ items: hiddenItems.map(function (item) { return ({ id: item.id, name: item.label }); }), onAction: onAction }, { children: link })));
            }
            return (jsx(Breadcrumb, __assign({ className: "breadcrumb", "data-id": id, id: id }, { children: link }), id));
        }) })));
}

var LinkRole;
(function (LinkRole) {
    LinkRole["Button"] = "button";
    // eslint-disable-next-line @typescript-eslint/no-shadow
    LinkRole["Link"] = "link";
})(LinkRole || (LinkRole = {}));
function Link(_a) {
    var _b;
    var className = _a.className, isVisited = _a.isVisited, ref = _a.ref, _c = _a.role, role = _c === void 0 ? LinkRole.Link : _c, size = _a.size, props = __rest(_a, ["className", "isVisited", "ref", "role", "size"]);
    var cssClassName = classNames('link', className, (_b = {}, _b["link--".concat(size)] = size, _b));
    if (role === LinkRole.Button) {
        return (jsx(Button$1, __assign({}, props, { className: cssClassName, "data-visited": isVisited, ref: ref })));
    }
    return (jsx(Link$1, __assign({}, props, { className: cssClassName, "data-visited": isVisited, ref: ref })));
}

function PageButton(_a) {
    var children = _a.children, className = _a.className, isActive = _a.isActive, props = __rest(_a, ["children", "className", "isActive"]);
    return (jsx(Button$1, __assign({}, props, { className: classNames('page-button', className), "data-active": !!isActive || undefined }, { children: jsx(Label, __assign({ className: "page-button__label", size: Size.md }, { children: jsx("strong", { children: children }) })) })));
}

function PageEllipsis(_a) {
    var items = _a.items, onAction = _a.onAction;
    return (jsx(Menu, __assign({ items: items, onAction: onAction }, { children: jsx(Button$1, __assign({ className: "page-button" }, { children: jsx(Label, __assign({ className: "page-button__label", size: Size.sm }, { children: "..." })) })) })));
}

function useTranslatePager() {
    return useTranslateFn('pager');
}

function range(start, end) {
    var length = end - start + 1;
    return Array.from({ length: length }, function (_, i) { return start + i; });
}
// Same logic as in MUI Pagination component.
function getPageItems(count, page) {
    var boundaryCount = 1; // number of pages to display adjacent to start and end page
    var siblingCount = 1; // number of pages to display either side of current page
    var startPages = range(1, Math.min(boundaryCount, count));
    var endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);
    var siblingsStart = Math.max(Math.min(
    // Natural start
    page - siblingCount, 
    // Lower boundary when page is high
    count - boundaryCount - siblingCount * 2 - 1), 
    // Greater than startPages
    boundaryCount + 2);
    var siblingsEnd = Math.min(Math.max(
    // Natural end
    page + siblingCount, 
    // Upper boundary when page is low
    boundaryCount + siblingCount * 2 + 2), 
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1);
    // example: [1, 'start-ellipsis', 4, 5, 6, 'end-ellipsis', 10]
    return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], startPages, true), (siblingsStart > boundaryCount + 2 ? ['start-ellipsis']
        : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1]
            : []), true), range(siblingsStart, siblingsEnd), true), (siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis']
        : count - boundaryCount > boundaryCount ? [count - boundaryCount]
            : []), true), endPages, true);
}
function getEllipsisItems(ellipsisIdx, pages) {
    var items = [];
    var firstHiddenPage = pages[ellipsisIdx - 1] + 1;
    var lastHiddenPage = pages[ellipsisIdx + 1] - 1;
    for (var i = firstHiddenPage; i <= lastHiddenPage; i++) {
        items.push({
            id: i,
            name: i.toString()
        });
    }
    return items;
}
function getPageCount(count, totalRowCount, rowsPerPage) {
    if (!isNullOrUndefined(count)) {
        return count;
    }
    if (!isNullOrUndefined(totalRowCount) && !isNullOrUndefined(rowsPerPage)) {
        return Math.ceil(totalRowCount / rowsPerPage);
    }
    return 0;
}
function getItemRange(page, pageSize, totalRowCount) {
    return {
        start: totalRowCount === 0 ? 0 : (page - 1) * pageSize + 1,
        end: Math.min(totalRowCount, page * pageSize)
    };
}
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
var DEFAULT_PAGE_SIZES = [25, 50, 100, 200];
var DEFAULT_ITEMS_PER_PAGE_OPTIONS = {
    isVisible: true,
    showLabel: true
};
function createPageSizeItems(pageSizes) {
    return pageSizes.map(function (size) { return ({ value: size, text: size.toString() }); });
}
function Pagination(_a) {
    var className = _a.className, count = _a.count, isMinimized = _a.isMinimized, propsItemsPerPageOptions = _a.itemsPerPageOptions, onPageIndexChange = _a.onPageIndexChange, onPageSizeChange = _a.onPageSizeChange, pageIndex = _a.pageIndex, pageSize = _a.pageSize, pageSizes = _a.pageSizes, ref = _a.ref, showPagesFirst = _a.showPagesFirst, totalRowCount = _a.totalRowCount;
    // pageIndex (from props): indexing starts from 0
    // page (in state): indexing starts from 1
    var itemsPerPageOptions = __assign(__assign({}, DEFAULT_ITEMS_PER_PAGE_OPTIONS), propsItemsPerPageOptions);
    var pageSizeItems = useMemo(function () { return createPageSizeItems(pageSizes !== null && pageSizes !== void 0 ? pageSizes : DEFAULT_PAGE_SIZES); }, [pageSizes]);
    var initialPage = isNullOrUndefined(pageIndex) ? 1 : pageIndex + 1;
    var initialRowsPerPage = pageSize !== null && pageSize !== void 0 ? pageSize : pageSizeItems[0].value;
    var _b = useState(initialPage), page = _b[0], setPage = _b[1];
    var _c = useState(initialRowsPerPage), rowsPerPage = _c[0], setRowsPerPage = _c[1];
    var pageCount = getPageCount(count, totalRowCount, rowsPerPage);
    var itemRange = !isNullOrUndefined(pageSize) && !isNullOrUndefined(totalRowCount) ?
        getItemRange(page, pageSize, totalRowCount)
        : null;
    var translateCommon = useTranslateCommon();
    var translatePager = useTranslatePager();
    var onPageChange = function (newPage) {
        setPage(newPage);
        safeCall(onPageIndexChange, newPage - 1);
    };
    var onRowsPagePageChange = function (val) {
        if (isNumber(val)) {
            setRowsPerPage(val);
            safeCall(onPageSizeChange, val);
        }
    };
    var nextPage = function () {
        if (page < pageCount) {
            onPageChange(page + 1);
        }
    };
    var prevPage = function () {
        if (page > 1) {
            onPageChange(page - 1);
        }
    };
    useEffect(function () {
        setPage(initialPage);
    }, [initialPage]);
    useEffect(function () {
        setRowsPerPage(initialRowsPerPage);
    }, [initialRowsPerPage]);
    var itemsPerPageSelect = isNullOrUndefined(pageSize) || !itemsPerPageOptions.isVisible ?
        null
        : jsxs("div", __assign({ className: "pagination__items-per-page" }, { children: [itemsPerPageOptions.showLabel && jsx(Label, __assign({ size: Size.md }, { children: translateCommon('itemsPerPage') })), jsx(Select, { "aria-label": translateCommon('itemsPerPage'), className: "pagination__select", isPlain: isMinimized, isSearchable: false, items: pageSizeItems, menuWidth: "5rem", onSelectionChange: onRowsPagePageChange, size: isMinimized ? Size.xs : Size.md, text: rowsPerPage.toString(), value: rowsPerPage })] }), "items-per-page");
    var itemRangeLabel = itemRange ?
        jsx(Label, __assign({ className: "pagination__item-range", size: Size.md }, { children: translatePager('resultsOf', { start: itemRange.start, end: itemRange.end, total: totalRowCount }) }), "item-rang")
        : null;
    var pageNavigation = (jsxs("div", __assign({ className: classNames('pagination__pages', {
            'pagination__pages--minimized': isMinimized
        }) }, { children: [jsx(IconButton, { "aria-label": translateCommon('previousPage'), className: "pagination__prev-btn", iconName: iconNames.ChevronLeft, isDisabled: page === 1, onPress: prevPage, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }), isMinimized ? null : (getPageItems(pageCount, page).map(function (value, index, array) {
                if (isString(value) && value.includes('ellipsis')) {
                    return (jsx(PageEllipsis, { items: getEllipsisItems(index, array), onAction: function (pageId) { return onPageChange(pageId); } }, value));
                }
                return (jsx(PageButton, __assign({ isActive: page === value, onPress: function () { return onPageChange(value); } }, { children: value }), value));
            })), jsx(IconButton, { "aria-label": translateCommon('nextPage'), className: "pagination__next-btn", iconName: iconNames.ChevronRight, isDisabled: page === pageCount, onPress: nextPage, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })] }), "pages"));
    return (jsxs("div", __assign({ className: classNames('pagination', className, {
            'pagination--minimized': isMinimized,
            'pagination--reversed': showPagesFirst
        }), ref: ref }, { children: [(!!itemsPerPageSelect || !!itemRangeLabel) && (jsxs("div", __assign({ className: classNames('pagination__row-count-info', {
                    'pagination__row-count-info--minimized': isMinimized
                }) }, { children: [itemsPerPageSelect, itemRangeLabel] }))), pageNavigation] })));
}

var headingIcon = (jsx("svg", __assign({ fill: "none", viewBox: "0 0 18 16" }, { children: jsx("path", { d: "M6.5 7C6.5 6.17157 7.17157 5.5 8 5.5H10C10.8284 5.5 11.5 6.17157 11.5 7V9C11.5 9.82843 10.8284 10.5 10 10.5H8C7.17157 10.5 6.5 9.82843 6.5 9V7Z", stroke: "currentColor" }) })));
function MenuDecorLine(_a) {
    var inverted = _a.inverted, isActive = _a.isActive, isHeading = _a.isHeading, showLine = _a.showLine;
    return (jsx("div", __assign({ className: classNames('menu-decor-line', {
            'menu-decor-line--active': isActive,
            'menu-decor-line--heading': isHeading,
            'menu-decor-line--inverted': inverted,
            'menu-decor-line--visible': showLine
        }) }, { children: isHeading && headingIcon })));
}

function getInvertedIconName(iconName, invert) {
    if (isNullOrUndefined(iconName)) {
        return undefined;
    }
    if (iconName.includes('Filled')) {
        return invert ? iconNames[iconName.replace('Filled', '')] : iconName;
    }
    return invert ? iconNames["".concat(iconName, "Filled")] : iconName;
}

function NavItemBadge(_a) {
    var ariaLabel = _a.ariaLabel, iconName = _a.iconName, isVisible = _a.isVisible;
    return (jsx(Icon, { ariaLabel: ariaLabel, className: classNames('nav-item__badge', { 'nav-item__badge--visible': isVisible }), name: iconName, size: IconSize.XS }));
}

var NavItemType;
(function (NavItemType) {
    NavItemType["Main"] = "main";
    NavItemType["Indented"] = "indented";
    NavItemType["GroupHeading"] = "group-heading";
})(NavItemType || (NavItemType = {}));
function NavItem(_a) {
    var domId = _a.domId, inverted = _a.inverted, isActive = _a.isActive, isExpanded = _a.isExpanded, item = _a.item, _b = _a.level, level = _b === void 0 ? 0 : _b, showExpanderPlaceholder = _a.showExpanderPlaceholder, _c = _a.type, type = _c === void 0 ? NavItemType.Main : _c;
    var items = item.items, id = item.id, label = item.label, icon = item.icon, onPress = item.onPress, showLine = item.showLine, useDecorLine = item.useDecorLine, badge = item.badge;
    var hasChildren = !!items;
    var role = hasChildren ? AriaRole.button : AriaRole.link;
    var isHeading = type === NavItemType.GroupHeading;
    if (isHeading) {
        return (jsxs("div", __assign({ "aria-current": isActive ? 'page' : undefined, className: classNames("nav-item nav-item--type-".concat(type)), id: domId }, { children: [useDecorLine && (jsx(MenuDecorLine, { inverted: inverted, isActive: isActive, isHeading: isHeading, showLine: showLine })), jsx(MenuGroupHeader, __assign({ className: classNames('nav-item__menu-group-header', {
                        'nav-item__menu-group-header--inverted': inverted
                    }) }, { children: label }))] })));
    }
    var suffix = [];
    var expanderIcon;
    if (hasChildren) {
        expanderIcon = isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight;
    }
    if (badge) {
        suffix.push(createElement(NavItemBadge, __assign({}, badge, { key: "badge" })));
    }
    if (!expanderIcon && showExpanderPlaceholder) {
        suffix.push(jsx("div", { className: "nav-item__expander-placeholder" }, "exp-ph"));
    }
    return (jsxs(TriggerElement, __assign({ "aria-current": isActive ? 'page' : undefined, "aria-expanded": hasChildren ? isExpanded : undefined, className: classNames("nav-item nav-item--type-".concat(type), {
            'nav-item--inverted': inverted,
            'nav-item--active': isActive && !hasChildren,
            'nav-item--with-decor-line': useDecorLine
        }), elementType: HTMLElementType.A, id: domId, onPress: function () { return onPress === null || onPress === void 0 ? void 0 : onPress(id); }, role: role }, { children: [useDecorLine && (jsx(MenuDecorLine, { inverted: inverted, isActive: isActive, isHeading: isHeading, showLine: showLine })), jsx("div", __assign({ className: classNames("nav-item__action-item nav-item--indentation-level-".concat(level), {
                    'nav-item__action-item--indented': type === NavItemType.Indented,
                    'nav-item__action-item--inverted': inverted
                }) }, { children: jsx(ActionItemContent, { label: label, leftIconName: hasChildren ? icon : getInvertedIconName(icon, isActive), rightIconName: expanderIcon, suffix: suffix }) }))] })));
}

var SideNavMode;
(function (SideNavMode) {
    SideNavMode["Default"] = "default";
    SideNavMode["Inverted"] = "inverted";
})(SideNavMode || (SideNavMode = {}));
function containsExpandableItems(items) {
    for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i];
        var subItems = item.items, isHeading = item.isHeading;
        if (subItems && (!isHeading || (isHeading && containsExpandableItems(subItems)))) {
            return true;
        }
    }
    return false;
}
function SideNav(_a) {
    var _b = _a.canShrink, canShrink = _b === void 0 ? true : _b, propsExpandedKeys = _a.expandedKeys, header = _a.header, _c = _a.isExpanded, isExpanded = _c === void 0 ? true : _c, items = _a.items, _d = _a.mode, mode = _d === void 0 ? SideNavMode.Default : _d, onExpandedKeysChange = _a.onExpandedKeysChange, ref = _a.ref, toggleCallback = _a.toggleCallback, props = __rest(_a, ["canShrink", "expandedKeys", "header", "isExpanded", "items", "mode", "onExpandedKeysChange", "ref", "toggleCallback"]);
    var domIdPrefix = useId();
    var _e = useState(canShrink ? isExpanded : true), isSideNavExpanded = _e[0], setIsSideNavExpanded = _e[1];
    var translateCommon = useTranslateCommon();
    var _f = useState(propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : new Set()), expandedKeys = _f[0], setExpandedKeys = _f[1];
    var toggleItems = function () {
        setIsSideNavExpanded(!isSideNavExpanded);
        safeCall(toggleCallback, !isSideNavExpanded);
    };
    var getDomId = function (id) { return "".concat(domIdPrefix).concat(id); };
    var hasExpandableItems = useMemo(function () { return containsExpandableItems(items); }, [items]);
    var isItemOrChildrenActive = function (sideNavItem) {
        if (sideNavItem.isActive) {
            return true;
        }
        var sideNavItemChildren = sideNavItem.items;
        if (sideNavItemChildren) {
            for (var i = 0, len = sideNavItemChildren.length; i < len; i++) {
                if (isItemOrChildrenActive(sideNavItemChildren[i])) {
                    return true;
                }
            }
        }
        return false;
    };
    var renderItem = function (item, level) {
        var onPress = item.onPress, id = item.id, isHeading = item.isHeading, badge = item.badge, label = item.label, icon = item.icon;
        var hasChildren = !!item.items;
        var showExpanderPlaceholder = hasExpandableItems && !hasChildren && !!badge;
        var isItemExpanded = expandedKeys.has(id);
        var type;
        if (isHeading) {
            type = NavItemType.GroupHeading;
        }
        else if (level === 0) {
            type = NavItemType.Main;
        }
        else {
            type = NavItemType.Indented;
        }
        if (!isSideNavExpanded && (isHeading || level > 0)) {
            return null;
        }
        // Showing the upper level item as active if any of its children is active. Currently, cannot open sub levels
        // when displaying only IconButtons.
        var isActive = isItemOrChildrenActive(item);
        if (isSideNavExpanded) {
            return (jsx(NavItem, { domId: isHeading ? getDomId(id) : undefined, inverted: mode === SideNavMode.Inverted, isActive: isActive, isExpanded: isItemExpanded, item: item, level: level, showExpanderPlaceholder: showExpanderPlaceholder, type: type }));
        }
        return (jsxs(TooltipTrigger, { children: [jsxs("div", __assign({ className: "side-nav__icon-button-wrapper" }, { children: [jsx(IconButton, { "aria-current": isActive ? 'page' : undefined, "aria-label": label, className: "side-nav__icon-button", iconName: getInvertedIconName(icon, isActive), inverted: mode === SideNavMode.Inverted, onPress: function () { return onPress === null || onPress === void 0 ? void 0 : onPress(id); }, size: Size.sm, style: isActive ? ButtonStyle.Fill : ButtonStyle.Plain, variant: isActive ? ButtonVariant.Accent : ButtonVariant.Neutral }), badge && jsx(NavItemBadge, __assign({}, badge))] })), jsx(Tooltip, __assign({ position: Position.Right, type: TooltipType.Plain }, { children: label }))] }));
    };
    var expandCallback = function (id) {
        var newExpandedKeys = new Set(expandedKeys);
        if (expandedKeys.has(id)) {
            newExpandedKeys.delete(id);
        }
        else {
            newExpandedKeys.add(id);
        }
        setExpandedKeys(newExpandedKeys);
        onExpandedKeysChange === null || onExpandedKeysChange === void 0 ? void 0 : onExpandedKeysChange(newExpandedKeys);
    };
    var renderItems = function (itemArr, level) {
        var itemNodes = [];
        for (var i = 0, len = itemArr.length; i < len; i++) {
            var item = itemArr[i];
            var subItems = item.items;
            var itemToRender = __assign(__assign({}, item), { onPress: isSideNavExpanded && subItems ? expandCallback : item.onPress });
            if (subItems) {
                if (item.isHeading) {
                    itemNodes.push(jsxs("li", __assign({ className: "side-nav__nav-list-item" }, { children: [renderItem(item, level), jsx("ul", __assign({ "aria-labelledby": getDomId(item.id), className: "side-nav__nav-list side-nav__nav-section" }, { children: renderItems(subItems, level) }))] }), item.id));
                }
                else {
                    itemNodes.push(jsxs("li", __assign({ className: "side-nav__nav-list-item" }, { children: [renderItem(itemToRender, level), expandedKeys.has(item.id) && (jsx("ul", __assign({ className: "side-nav__nav-list side-nav__sub-nav-list" }, { children: renderItems(subItems, level + 1) })))] }), item.id));
                }
            }
            else {
                itemNodes.push(jsx("li", __assign({ className: "side-nav__nav-list-item" }, { children: renderItem(item, level) }), item.id));
            }
        }
        return itemNodes;
    };
    useEffect(function () {
        setExpandedKeys(propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : new Set());
    }, [propsExpandedKeys]);
    useEffect(function () {
        setIsSideNavExpanded(canShrink ? isExpanded : true);
    }, [isExpanded]);
    return (jsxs("div", __assign({ className: classNames("side-nav side-nav--mode-".concat(mode), { 'side-nav--expanded': isSideNavExpanded }), ref: ref }, { children: [(canShrink || header) && (jsxs("div", __assign({ className: "side-nav__header" }, { children: [isFunction(header) ? header(isSideNavExpanded) : header, canShrink && (jsx(IconButton, { "aria-expanded": isSideNavExpanded, "aria-label": translateCommon(isSideNavExpanded ? 'collapse' : 'expand'), className: "side-nav__toggle", iconName: iconNames.Menu, inverted: mode === SideNavMode.Inverted, onPress: toggleItems, size: isSideNavExpanded ? Size.md : Size.sm, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })), jsx(Divider, { alignment: Alignment.center, className: "side-nav__divider", size: Size.sm })] }))), jsx("nav", __assign({ "aria-label": props['aria-label'], className: "side-nav__content" }, { children: jsx("ul", __assign({ className: "side-nav__nav-list" }, { children: renderItems(items, 0) })) }))] })));
}

function Steps(_a) {
    var activeStep = _a.activeStep, className = _a.className, children = _a.children, _b = _a.orientation, orientation = _b === void 0 ? Orientation.horizontal : _b, ref = _a.ref, _c = _a.stepAlignment, stepAlignment = _c === void 0 ? Alignment.start : _c;
    var mappedChildren = Children.map(children, function (child, index) {
        return cloneElement(child, {
            alignment: orientation === Orientation.horizontal ? stepAlignment : Alignment.start,
            index: index,
            isActive: activeStep === index,
            orientation: orientation,
            progressValue: index === children.length - 1 ? undefined : child.props.progressValue
        });
    });
    return (jsx("div", __assign({ className: classNames("steps steps--".concat(orientation), className), ref: ref }, { children: mappedChildren })));
}

function StepIndicator(_a) {
    var isActive = _a.isActive, isCompleted = _a.isCompleted, isDisabled = _a.isDisabled, text = _a.text;
    return (jsx("div", __assign({ className: classNames('step-indicator', {
            'step-indicator--completed': isCompleted,
            'step-indicator--active': isActive,
            'step-indicator--disabled': isDisabled
        }) }, { children: isCompleted ?
            jsx(Icon, { name: iconNames.CheckFilled, size: IconSize.SM })
            : jsx(Label, __assign({ size: Size.sm }, { children: jsx("strong", { children: text }) })) })));
}

function StepProgressBar(_a) {
    var _b = _a.orientation, orientation = _b === void 0 ? Orientation.horizontal : _b, value = _a.value;
    var isVertical = orientation === Orientation.vertical;
    var translateProject = useTranslateProject();
    return (jsx(ProgressBar$1, __assign({ "aria-label": translateProject('progress'), className: "step-progress-bar step-progress-bar--".concat(orientation), value: value }, { children: function (_a) {
            var percentage = _a.percentage;
            return (jsx("div", __assign({ className: "step-progress-bar__bar" }, { children: jsx("div", { className: "step-progress-bar__fill", style: {
                        height: isVertical ? "".concat(percentage, "%") : undefined,
                        width: isVertical ? undefined : "".concat(percentage, "%")
                    } }) })));
        } })));
}

function StepItem(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.start : _b, _c = _a.index, index = _c === void 0 ? 0 : _c, isActive = _a.isActive, isCompleted = _a.isCompleted, isDisabled = _a.isDisabled, _d = _a.orientation, orientation = _d === void 0 ? Orientation.horizontal : _d, progressValue = _a.progressValue, ref = _a.ref, supportText = _a.supportText, title = _a.title;
    return (jsxs(Fragment, { children: [jsxs("div", __assign({ className: classNames("step-item step-item--".concat(alignment, "-aligned"), {
                    'step-item--active': isActive,
                    'step-item--completed': isCompleted
                }), ref: ref }, { children: [jsx(StepIndicator, { isActive: isActive, isCompleted: isCompleted, isDisabled: isDisabled, text: index + 1 }), jsxs("div", __assign({ className: "step-item__texts" }, { children: [jsx(BodyText, __assign({ className: "step-item__title", elementType: HTMLElementType.Div, size: Size.sm }, { children: jsx("strong", { children: title }) })), jsx(BodyText, __assign({ className: "step-item__support-text", elementType: HTMLElementType.Div, size: Size.xs }, { children: supportText }))] }))] })), !isNullOrUndefined(progressValue) && jsx(StepProgressBar, { orientation: orientation, value: progressValue })] }));
}

var TabsType;
(function (TabsType) {
    TabsType["Card"] = "card";
    TabsType["Underline"] = "underline";
})(TabsType || (TabsType = {}));
function Tabs(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.center : _b, _c = _a.orientation, orientation = _c === void 0 ? Orientation.horizontal : _c, panelItems = _a.panelItems, tabItems = _a.tabItems, _d = _a.type, type = _d === void 0 ? TabsType.Underline : _d, props = __rest(_a, ["alignment", "orientation", "panelItems", "tabItems", "type"]);
    var disabledKeys = tabItems.filter(function (item) { return item.isDisabled; }).map(function (item) { return item.id; });
    var effectiveOrientation = type === TabsType.Underline ? orientation : Orientation.horizontal;
    return (jsxs(Tabs$1, __assign({}, props, { className: "tabs", disabledKeys: disabledKeys, orientation: effectiveOrientation }, { children: [jsx(TabList, __assign({ className: "tab-list tab-list--".concat(alignment) }, { children: tabItems.map(function (item) { return (jsx(Tab, __assign({ className: "tab tab--".concat(type, " tab--").concat(alignment), "data-orientation": effectiveOrientation, id: item.id }, { children: function (_a) {
                        var isSelected = _a.isSelected;
                        return (jsxs("div", __assign({ className: "tab__container tab__container--".concat(type, " tab__container--").concat(alignment), "data-orientation": effectiveOrientation, "data-selected": isSelected || undefined }, { children: [item.iconName && jsx(Icon, { name: item.iconName, size: IconSize.MD }), jsx(Label, __assign({ size: Size.md }, { children: item.name })), item.badgeText && (jsx(Badge, __assign({ isDisabled: !!props.isDisabled || item.isDisabled, style: BadgeStyle.Outline, variant: BadgeVariant.Neutral }, { children: item.badgeText })))] })));
                    } }), "tab".concat(item.id))); }) })), jsx(Divider, { alignment: Alignment.center, className: "tab__divider tab__divider--".concat(type), orientation: effectiveOrientation, size: type === TabsType.Underline ? Size.md : Size.sm }), panelItems.map(function (item) { return (jsx(TabPanel, __assign({ className: "panel panel--".concat(type), id: item.id }, { children: item.content }), "panel".concat(item.id))); })] })));
}

var TagStyle;
(function (TagStyle) {
    TagStyle["Fill"] = "fill";
    TagStyle["Outline"] = "outline";
})(TagStyle || (TagStyle = {}));
function Tag(_a) {
    var children = _a.children, className = _a.className, iconName = _a.iconName, isDisabled = _a.isDisabled, onPress = _a.onPress, onRemove = _a.onRemove, ref = _a.ref, removeButtonProps = _a.removeButtonProps, role = _a.role, _b = _a.size, size = _b === void 0 ? Size.md : _b, _c = _a.style, style = _c === void 0 ? TagStyle.Outline : _c, triggerRole = _a.triggerRole;
    var labelRef = useRef(null);
    var isTruncated = useIsTextTruncated({ ref: labelRef });
    var translateCommon = useTranslateCommon();
    var isPressable = !!onPress && !isDisabled;
    var isInteractive = isTruncated || isPressable;
    return (jsxs("span", __assign({ className: classNames("tag tag--".concat(size, " ").concat(style, "-tag"), className, {
            'tag--interactive': isInteractive,
            'tag--pressable': isPressable,
            'tag--disabled': isDisabled
        }), ref: ref, role: role }, { children: [jsxs(TooltipTrigger, __assign({ isDisabled: !isTruncated }, { children: [jsxs(TriggerElement, __assign({ className: "tag__content", excludeFromTabOrder: !isInteractive, onPress: onPress, role: triggerRole }, { children: [iconName && jsx(Icon, { className: "tag__icon", name: iconName, size: IconSize.SM }), jsx(Label, __assign({ className: "tag__label", ref: labelRef, size: size === Size.xs ? Size.sm : size }, { children: children }))] })), jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: children }))] })), onRemove && (jsx(IconButton, __assign({ "aria-label": "".concat(isString(children) ? children : '', " ").concat(translateCommon('remove')), className: "tag__remove-button", iconName: iconNames.Close, isDisabled: isDisabled, onPress: onRemove, size: size === Size.xs ? Size.sm : size, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, removeButtonProps)))] })));
}

var HIDDEN_TAG_CSS_CLASS = 'tag--hidden';
var DEFAULT_MAX_VISIBLE_ROWS = 4;
function revealChildren(element) {
    var children = Array.from(element.children);
    children.forEach(function (child) {
        child.classList.remove(HIDDEN_TAG_CSS_CLASS);
    });
}
function adaptChildren(_a) {
    var element = _a.element, isExpanded = _a.isExpanded, maxVisibleRows = _a.maxVisibleRows;
    var children = element.children;
    var len = children.length;
    if (len === 0) {
        return 0;
    }
    revealChildren(element);
    var currentOffsetTop = children[0].offsetTop, currentRow = 1, hiddenCount = 0;
    for (var i = 0; i < len; i++) {
        var child = children[i];
        var offsetTop = currentRow > maxVisibleRows ? currentOffsetTop : child.offsetTop;
        if (offsetTop > currentOffsetTop) {
            currentOffsetTop = offsetTop;
            currentRow++;
        }
        if (currentRow > maxVisibleRows) {
            if (!isExpanded) {
                child.classList.add(HIDDEN_TAG_CSS_CLASS);
            }
            hiddenCount++;
        }
    }
    return hiddenCount;
}
function TagGroup(_a) {
    var propsChildren = _a.children, className = _a.className, _b = _a.maxVisibleRows, maxVisibleRows = _b === void 0 ? DEFAULT_MAX_VISIBLE_ROWS : _b, ref = _a.ref, _c = _a.size, size = _c === void 0 ? Size.md : _c, _d = _a.style, style = _d === void 0 ? TagStyle.Outline : _d;
    var children = Children.toArray(propsChildren);
    var content = children.map(function (child) {
        return cloneElement(child, {
            role: 'listitem',
            size: size,
            style: style
        });
    });
    var tagListRef = useRef(null);
    var _e = useState(0), hiddenCount = _e[0], setHiddenCount = _e[1];
    var _f = useState(false), isExpanded = _f[0], setIsExpanded = _f[1];
    var translateCommon = useTranslateCommon();
    var tagListId = useId();
    var onResize = useCallback(function () {
        var tagList = tagListRef.current;
        if (tagList) {
            var newHiddenCount = adaptChildren({
                element: tagList,
                isExpanded: isExpanded,
                maxVisibleRows: maxVisibleRows
            });
            setHiddenCount(newHiddenCount);
            if (newHiddenCount === 0) {
                setIsExpanded(false);
            }
        }
    }, [tagListRef, maxVisibleRows, isExpanded, children.length]);
    useResizeObserver({ ref: tagListRef, onResize: onResize });
    useEffect(function () {
        document.fonts.ready.then(onResize);
    }, []);
    return (jsxs("div", __assign({ className: classNames("tag-group tag-group--".concat(size), className), ref: ref }, { children: [jsx("div", __assign({ className: "tag-group__tags", id: tagListId, ref: tagListRef, role: "list" }, { children: content })), hiddenCount > 0 && (jsx(Button, __assign({ "aria-controls": tagListId, "aria-expanded": isExpanded, onPress: function () { return setIsExpanded(!isExpanded); }, size: size === Size.xs ? Size.sm : size, style: style === TagStyle.Outline ? ButtonStyle.Fill : ButtonStyle.Outline, variant: ButtonVariant.Neutral }, { children: isExpanded ? translateCommon('showLess') : "".concat(translateCommon('show'), " +").concat(hiddenCount) })))] })));
}

function TopNav(_a) {
    var ariaLabel = _a["aria-label"], className = _a.className, leftItems = _a.leftItems, rightItems = _a.rightItems, ref = _a.ref, showLoadingIndicator = _a.showLoadingIndicator;
    var renderItems = function (items) {
        return items.map(function (_a) {
            var ariaHidden = _a.ariaHidden, itemChildren = _a.children, itemClassName = _a.className, id = _a.id, style = _a.style;
            return (jsx("li", __assign({ "aria-hidden": ariaHidden, className: classNames('top-nav__item', itemClassName), style: style }, { children: itemChildren }), id));
        });
    };
    return (jsxs("nav", __assign({ "aria-label": ariaLabel, className: classNames('top-nav', className), ref: ref }, { children: [jsx("ul", __assign({ className: "top-nav__left-list" }, { children: renderItems(leftItems) })), jsx("ul", __assign({ className: "top-nav__right-list" }, { children: renderItems(rightItems) })), showLoadingIndicator && jsx(LoadingIndicatorProgressBar, {})] })));
}

var HIDDEN_CHIP_CSS_CLASS = 'multiselect__chip--hidden';
// eslint-disable-next-line complexity,max-statements
function MultiSelect(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, createOptions = _a.createOptions, dataState = _a.dataState, disabledKeys = _a.disabledKeys, expandedKeys = _a.expandedKeys, helpText = _a.helpText, isLoading = _a.isLoading, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, itemClassName = _a.itemClassName, items = _a.items, label = _a.label, menuWidth = _a.menuWidth, onBottomLoaderVisible = _a.onBottomLoaderVisible, onOpenChange = _a.onOpenChange, ref = _a.ref, renderItemContent = _a.renderItemContent, _b = _a.selectedItemStyle, selectedItemStyle = _b === void 0 ? SelectedItemStyle.text : _b, showHelpTextIcon = _a.showHelpTextIcon, _c = _a.size, size = _c === void 0 ? Size.md : _c, tooltipContent = _a.tooltipContent, props = __rest(_a, ["changeCallback", "changeParams", "className", "createOptions", "dataState", "disabledKeys", "expandedKeys", "helpText", "isLoading", "isRequired", "isSkeleton", "itemClassName", "items", "label", "menuWidth", "onBottomLoaderVisible", "onOpenChange", "ref", "renderItemContent", "selectedItemStyle", "showHelpTextIcon", "size", "tooltipContent"]);
    var _d = useFocusRing({ within: true, isTextInput: false }), focusProps = _d.focusProps, isFocused = _d.isFocused, isFocusVisible = _d.isFocusVisible;
    var _e = useHover(props), hoverProps = _e.hoverProps, isHovered = _e.isHovered;
    var isDisabled = props.isDisabled;
    var selectedItemsFromProps = props.selectedItems;
    var _f = useSelectItemHighlight(), highlightedIndex = _f.highlightedIndex, onHighlightedIndexChange = _f.onHighlightedIndexChange, highlightSource = _f.highlightSource;
    var _g = useState(0), dynamicMenuWidth = _g[0], setDynamicMenuWidth = _g[1];
    var _h = useState(''), inputValue = _h[0], setInputValue = _h[1];
    var _j = useState(selectedItemsFromProps ? __spreadArray([], selectedItemsFromProps, true) : []), selectedItems = _j[0], setSelectedItems = _j[1];
    var _k = useState(0), hiddenSelectedItemsCount = _k[0], setHiddenSelectedItemsCount = _k[1];
    var _l = useDataState(dataState, false, props.isReadOnly), hasError = _l.hasError, isReadOnly = _l.isReadOnly, errorMessage = _l.errorMessage;
    var _m = useFieldHelpText({ dataState: dataState, helpText: helpText }), fieldProps = _m.fieldProps, helpTextProps = _m.helpTextProps;
    var prevSelectedCountRef = useRef(selectedItems.length);
    var listBoxRef = useRef(null);
    var boxRef = useRef(null);
    var chipsRef = useRef(null);
    var otherSelectCountRef = useRef(null);
    var inputRef = useRef(null);
    var popoverRef = useRef(null);
    var localFilter = useFilter({ sensitivity: 'base' });
    var translateCommon = useTranslateCommon();
    var _o = useState(null), filteredItems = _o[0], setFilteredItems = _o[1];
    var itemsToRender = (filteredItems !== null && filteredItems !== void 0 ? filteredItems : items).slice();
    if (inputValue &&
        createOptions &&
        (isFunction(createOptions.isAllowed) ? createOptions.isAllowed(inputValue) : createOptions.isAllowed) &&
        !hasItemWithText(selectedItems, inputValue) &&
        !hasItemWithText(items, inputValue)) {
        itemsToRender.push({ value: SpecialSelectItemKey.CREATABLE, text: inputValue });
    }
    var flatItems = createFlatSelectItemList(itemsToRender, true, expandedKeys);
    // Create map of selected items for quick lookup
    var selectedItemsMap = useSelectedItemsMap(selectedItems);
    var triggerChange = function (newSelectedItems) {
        if (isItemsChanged(newSelectedItems, selectedItemsFromProps)) {
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: newSelectedItems.slice() }));
        }
    };
    var clearSelectedItems = function () {
        var _a;
        var newSelectedItems = [];
        setSelectedItems(newSelectedItems);
        triggerChange(newSelectedItems);
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    var onInputChange = function (val, inputChangeTrigger) {
        setInputValue(val);
        if (props.onInputChange) {
            props.onInputChange(val, inputChangeTrigger);
        }
        else {
            // use local filtering
            setFilteredItems(val ? filterItems(items, val, localFilter) : null);
        }
    };
    var adjustHiddenSelectedItems = function () {
        var chipsElement = chipsRef.current;
        var otherSelectCountElement = otherSelectCountRef.current;
        if (!chipsElement) {
            return;
        }
        var chipElements = Array.from(chipsElement.children);
        chipElements.forEach(function (chip) {
            chip.classList.remove(HIDDEN_CHIP_CSS_CLASS);
        });
        if (otherSelectCountElement) {
            otherSelectCountElement.textContent = '';
        }
        var hideCount = 0;
        if (!isFocused || isReadOnly) {
            for (var i = chipElements.length - 1; i >= 0; i--) {
                var scrollWidth = chipsElement.scrollWidth, offsetWidth = chipsElement.offsetWidth;
                var chip = chipElements[i];
                if (scrollWidth > offsetWidth) {
                    chip.classList.add(HIDDEN_CHIP_CSS_CLASS);
                    hideCount++;
                    if (otherSelectCountElement) {
                        otherSelectCountElement.textContent = "+".concat(hideCount);
                    }
                }
                else {
                    break;
                }
            }
        }
        setHiddenSelectedItemsCount(hideCount);
    };
    var updateMenuWidth = function () {
        var box = boxRef.current;
        if (box) {
            var width = box.getBoundingClientRect().width;
            if (width !== dynamicMenuWidth) {
                setDynamicMenuWidth(width);
            }
        }
    };
    var _p = useMultipleSelection({
        selectedItems: selectedItems,
        onStateChange: function (changes) {
            var _a, _b, _c;
            var newSelectedItems = (_a = changes.selectedItems) !== null && _a !== void 0 ? _a : [];
            var activeIndex = changes.activeIndex, type = changes.type;
            switch (type) {
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
                case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
                    setSelectedItems(newSelectedItems);
                    if (type === useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem) {
                        triggerChange(newSelectedItems);
                    }
                    break;
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownNavigationPrevious:
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownNavigationNext:
                    if (!isNullOrUndefined(activeIndex) && activeIndex >= 0) {
                        (_c = (_b = chipsRef.current) === null || _b === void 0 ? void 0 : _b.children[activeIndex]) === null || _c === void 0 ? void 0 : _c.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                    }
                    break;
            }
        }
    }), getSelectedItemProps = _p.getSelectedItemProps, getDropdownProps = _p.getDropdownProps, removeSelectedItem = _p.removeSelectedItem;
    var _q = useCombobox({
        highlightedIndex: highlightedIndex,
        items: flatItems,
        itemToString: function (item) { return (item ? item.text : ''); },
        isItemDisabled: function (item) { return (item ? !!(disabledKeys === null || disabledKeys === void 0 ? void 0 : disabledKeys.includes(item.value)) : false); },
        selectedItem: null,
        inputValue: inputValue,
        onHighlightedIndexChange: onHighlightedIndexChange,
        stateReducer: function (state, actionAndChanges) {
            var _a;
            var changes = actionAndChanges.changes, type = actionAndChanges.type;
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    if ((_a = changes.selectedItem) === null || _a === void 0 ? void 0 : _a.isReadOnly) {
                        return __assign(__assign({}, changes), { isOpen: true, selectedItem: state.selectedItem, inputValue: state.inputValue, highlightedIndex: state.highlightedIndex });
                    }
                    return __assign(__assign({}, changes), { isOpen: true, highlightedIndex: state.highlightedIndex // ...with same option highlighted
                     });
                default:
                    return changes;
            }
        },
        onStateChange: function (changes) {
            var _a;
            var newSelectedItem = changes.selectedItem;
            var newInputValue = (_a = changes.inputValue) !== null && _a !== void 0 ? _a : '';
            var changeType = changes.type;
            switch (changeType) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                    if (newSelectedItem) {
                        updateSelectedItems(selectedItems, newSelectedItem);
                        setSelectedItems(__spreadArray([], selectedItems, true));
                        if (newSelectedItem.value === SpecialSelectItemKey.CREATABLE) {
                            onInputChange('', InputChangeTriggerAction.Input);
                            safeCall(createOptions === null || createOptions === void 0 ? void 0 : createOptions.onCreate, newSelectedItem);
                        }
                    }
                    break;
                case useCombobox.stateChangeTypes.InputChange:
                    onInputChange(newInputValue, InputChangeTriggerAction.Input);
                    break;
                case useCombobox.stateChangeTypes.InputKeyDownEscape:
                case useCombobox.stateChangeTypes.InputBlur:
                    scrollRight(chipsRef.current);
                    break;
                case useCombobox.stateChangeTypes.InputKeyDownArrowUp:
                case useCombobox.stateChangeTypes.InputKeyDownArrowDown:
                    if (changes.highlightedIndex === flatItems.length - 1) {
                        // scroll at the bottom when last item is highlighted to make sure loader is visible
                        scrollBottom(listBoxRef.current);
                    }
                    break;
            }
        },
        onIsOpenChange: function (changes) {
            var isMenuOpen = changes.isOpen;
            safeCall(onOpenChange, isMenuOpen);
            if (isMenuOpen) {
                onInputChange('', InputChangeTriggerAction.Focus);
                updateMenuWidth();
            }
            else {
                setFilteredItems(null);
            }
        }
    }), isOpen = _q.isOpen, getToggleButtonProps = _q.getToggleButtonProps, getLabelProps = _q.getLabelProps, getMenuProps = _q.getMenuProps, getInputProps = _q.getInputProps, getItemProps = _q.getItemProps;
    var selectedItemNodes = [];
    var selectedItemsLen = selectedItems.length;
    var _loop_1 = function (i) {
        var item = selectedItems[i];
        var content = void 0;
        if (selectedItemStyle === SelectedItemStyle.tag) {
            content = (jsx(Tag, __assign({ isDisabled: isReadOnly || isDisabled, onRemove: function () {
                    removeSelectedItem(item);
                }, removeButtonProps: {
                    excludeFromTabOrder: true,
                    onPressStart: function (e) {
                        e.continuePropagation();
                    }
                }, size: size === Size.md ? Size.sm : size, style: TagStyle.Fill }, { children: item.text })));
        }
        else {
            content = jsx(Label, __assign({ size: size === Size.xs ? Size.md : Size.lg }, { children: item.text }));
        }
        var chipProps = getSelectedItemProps({ selectedItem: item, index: i });
        if (isDisabled || isReadOnly) {
            chipProps.onClick = emptyFn;
            chipProps.onKeyDown = emptyFn;
        }
        selectedItemNodes.push(createElement(MultiSelectChip, __assign({}, chipProps, { displayStyle: selectedItemStyle, key: item.value }), content));
    };
    for (var i = 0; i < selectedItemsLen; i++) {
        _loop_1(i);
    }
    var onResize = useCallback(function () {
        adjustHiddenSelectedItems();
    }, [isFocused, isReadOnly, isOpen, isSkeleton]);
    useResizeObserver({ ref: boxRef, onResize: onResize });
    useNonModalPopoverInModalFix(isOpen, boxRef, popoverRef);
    useEffect(function () {
        if (!isFocused) {
            adjustHiddenSelectedItems();
        }
        var selectedCount = selectedItems.length;
        if (selectedCount > prevSelectedCountRef.current) {
            scrollRight(chipsRef.current);
        }
        prevSelectedCountRef.current = selectedCount;
    }, [selectedItems]);
    useEffect(function () {
        adjustHiddenSelectedItems();
        if (isFocused) {
            scrollRight(chipsRef.current);
        }
        else {
            setInputValue('');
            triggerChange(selectedItems);
        }
    }, [isFocused]);
    useEffect(function () {
        setSelectedItems(selectedItemsFromProps ? __spreadArray([], selectedItemsFromProps, true) : []);
    }, [selectedItemsFromProps]);
    useSelectOptionCountAnnouncement({ isOpen: isOpen, itemCount: itemsToRender.length });
    var labelProps = getLabelProps();
    var inputProps = getInputProps(__assign(__assign({}, getDropdownProps({ preventKeyAction: false, ref: inputRef }, { suppressRefError: true })), { disabled: isReadOnly || isDisabled, 
        // Workaround to cursor jump issue: https://github.com/downshift-js/downshift/issues/1108
        onChange: function (e) {
            onInputChange(e.target.value, InputChangeTriggerAction.Input);
        } }), { suppressRefError: true });
    var toggleButtonProps = getToggleButtonProps({ disabled: isReadOnly || isDisabled });
    var listBoxProps = getMenuProps({ ref: listBoxRef }, { suppressRefError: true });
    var placeholder;
    if (selectedItemsLen === 0) {
        if (isFocused && !isReadOnly) {
            placeholder = translateCommon('search');
        }
        else {
            placeholder = props.placeholder;
        }
    }
    var onKeyDown = function (e) {
        var continueFlow = safeCall(props.onKeyDown, e, highlightedIndex >= 0 ? flatItems[highlightedIndex] : undefined);
        if (continueFlow !== false && inputProps.onKeyDown) {
            inputProps.onKeyDown(e);
        }
    };
    // eslint-disable-next-line sonarjs/function-return-type
    var renderCreateText = function (itemText) {
        var getTextNode = createOptions === null || createOptions === void 0 ? void 0 : createOptions.getTextNode;
        return getTextNode ?
            getTextNode(itemText)
            : jsxs(Fragment, { children: ["".concat(translateCommon('create'), " "), "\"", jsx("strong", { children: itemText }), "\""] });
    };
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-multiselect", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (jsx(Provider, __assign({ values: [
            [LabelContext, __assign({}, labelProps)],
            [TextContext, { slots: { description: helpTextProps } }]
        ] }, { children: jsxs("div", __assign({ className: classNames('multiselect', className), ref: ref }, { children: [jsx(Field, __assign({ dataState: dataState, helpText: helpText, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: jsxs("div", __assign({}, hoverProps, { className: "multiselect__box multiselect__box--".concat(size), "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined, "data-invalid": hasError || undefined, "data-readonly": isReadOnly || undefined, ref: boxRef }, { children: [jsxs("div", __assign({ className: "multiselect__box-start" }, { children: [isFocused && !isReadOnly && (jsx(Icon, { className: "multiselect__search-icon", name: iconNames.MagnifyingGlass })), selectedItemsLen > 0 && (jsx("div", __assign({}, (isFocused && focusProps), { className: "multiselect__chips", ref: chipsRef }, { children: selectedItemNodes }))), (!isFocused || isReadOnly) && (jsx(Label, __assign({ className: "multiselect__other-selected-count", ref: otherSelectCountRef, size: size === Size.xs ? Size.md : Size.lg }, { children: hiddenSelectedItemsCount > 0 && "+".concat(hiddenSelectedItemsCount) }))), jsx("input", __assign({}, focusProps, inputProps, fieldProps, { "aria-label": props['aria-label'], className: classNames('multiselect__input', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS), disabled: isDisabled, onBlur: chain(focusProps.onBlur, inputProps.onBlur), onKeyDown: onKeyDown, placeholder: placeholder, readOnly: isReadOnly, size: 2 }))] })), jsxs("div", __assign({ className: "multiselect__action-buttons" }, { children: [!isOpen && !isDisabled && !isReadOnly && selectedItemsLen > 0 && (jsx(ClearButton, __assign({}, focusProps, { className: "multiselect__clear-button", onPress: clearSelectedItems }))), jsx("button", __assign({}, toggleButtonProps, { "aria-label": translateCommon('toggleMenu'), className: "multiselect__button" }, { children: jsx(Icon, { className: "multiselect__button-icon", name: isOpen ? iconNames.ExpandLessFilled : iconNames.ExpandMoreFilled }) }))] }))] })) })), jsx(Popover$1, __assign({ className: "multiselect__popover", isNonModal: true, isOpen: isOpen, maxHeight: 280, placement: "bottom left", ref: popoverRef, shouldFlip: true, style: { width: menuWidth !== null && menuWidth !== void 0 ? menuWidth : dynamicMenuWidth }, triggerRef: boxRef }, { children: jsxs("div", __assign({}, listBoxProps, { className: "multiselect__listbox" }, { children: [(itemsToRender.length === 0 || itemsToRender[0].value === SpecialSelectItemKey.CREATABLE) &&
                                !isLoading && jsx(SelectOptionsEmptyState, { size: size }, "empty"), renderMultiSelectItems({
                                createText: renderCreateText,
                                disabledKeys: disabledKeys,
                                expandedKeys: expandedKeys,
                                getItemProps: getItemProps,
                                highlightedIndex: highlightedIndex,
                                highlightSource: highlightSource,
                                itemClassName: itemClassName,
                                items: itemsToRender,
                                renderItemContent: renderItemContent,
                                selectedItemsMap: selectedItemsMap,
                                size: size
                            }), isLoading && jsx(LoadingItem, { size: size }, "loading"), onBottomLoaderVisible && jsx(BottomLoader, { onVisible: onBottomLoaderVisible }, "loader")] })) }))] })) })));
}

function TextFieldUnit(_a) {
    var children = _a.children, id = _a.id, ref = _a.ref, _b = _a.size, size = _b === void 0 ? Size.lg : _b;
    return (jsx(Label, __assign({ className: "text-field__unit", id: id, ref: ref, size: size }, { children: children })));
}

// eslint-disable-next-line sonarjs/function-return-type
function Part(_a) {
    var content = _a.content, id = _a.id, inputRef = _a.inputRef, isDisabled = _a.isDisabled, isReadOnly = _a.isReadOnly, size = _a.size;
    if (isFunction(content)) {
        return content({ inputRef: inputRef, isDisabled: isDisabled, isReadOnly: isReadOnly, size: size });
    }
    else if (isString(content)) {
        return (jsx(TextFieldUnit, __assign({ id: id, size: size === Size.xs ? Size.md : Size.lg }, { children: content })));
    }
    return null;
}
function TextField(_a) {
    var className = _a.className, changeParams = _a.changeParams, changeCallback = _a.changeCallback, dataState = _a.dataState, dataTestId = _a.dataTestId, endIconName = _a.endIconName, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, inputSize = _a.inputSize, isControlled = _a.isControlled, isInvalid = _a.isInvalid, isPlain = _a.isPlain, isSkeleton = _a.isSkeleton, label = _a.label, maxValue = _a.maxValue, minValue = _a.minValue, onBlur = _a.onBlur, onChange = _a.onChange, placeholder = _a.placeholder, prefix = _a.prefix, showHelpTextIcon = _a.showHelpTextIcon, _b = _a.size, size = _b === void 0 ? Size.md : _b, startIconName = _a.startIconName, suffix = _a.suffix, _c = _a.textAlign, textAlign = _c === void 0 ? Alignment.start : _c, tooltipContent = _a.tooltipContent, _d = _a.value, value = _d === void 0 ? '' : _d, props = __rest(_a, ["className", "changeParams", "changeCallback", "dataState", "dataTestId", "endIconName", "helpText", "helpTextSuccess", "inputSize", "isControlled", "isInvalid", "isPlain", "isSkeleton", "label", "maxValue", "minValue", "onBlur", "onChange", "placeholder", "prefix", "showHelpTextIcon", "size", "startIconName", "suffix", "textAlign", "tooltipContent", "value"]);
    var _e = useFocusRing({ within: true, isTextInput: false }), focusProps = _e.focusProps, isFocused = _e.isFocused, isFocusVisible = _e.isFocusVisible;
    var _f = useHover(props), hoverProps = _f.hoverProps, isHovered = _f.isHovered;
    var isDisabled = props.isDisabled, isRequired = props.isRequired;
    var _g = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _g.hasError, isReadOnly = _g.isReadOnly, errorMessage = _g.errorMessage;
    var inputRef = useRef(null);
    var _h = useState(value), stateValue = _h[0], setStateValue = _h[1];
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var currentValue = isControlled ? value : stateValue;
    var prefixId = useId();
    var suffixId = useId();
    var ariaLabelledBy = props['aria-labelledby'];
    if (!ariaLabelledBy) {
        var labelledBy = [];
        // If prefix/suffix is function, aria-labelledby should be used.
        if (isString(prefix)) {
            labelledBy.push(prefixId);
        }
        if (isString(suffix)) {
            labelledBy.push(suffixId);
        }
        ariaLabelledBy = labelledBy.join(' ');
    }
    var onChangeInner = function (val) {
        if (!isControlled) {
            setStateValue(val);
        }
        safeCall(onChange, val);
    };
    useEffect(function () {
        if (!isControlled) {
            setStateValue(value);
        }
    }, [value, isControlled]);
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-text-field", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (jsx(TextField$1, __assign({}, props, { "aria-labelledby": ariaLabelledBy, className: classNames('text-field', className), isInvalid: hasError, isReadOnly: isReadOnly, onBlur: chain(onBlur, changeParamsCb), onChange: onChangeInner, value: currentValue }, { children: jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: size === Size.xs ? Size.sm : Size.md, tooltipContent: tooltipContent }, { children: jsxs("div", __assign({}, hoverProps, { className: classNames("text-field__content text-field__content--".concat(size), {
                    'text-field__content--filled': !isEmptyString(currentValue),
                    'text-field__content--plain': isPlain
                }), "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined }, { children: [jsx(Part, { content: prefix, id: prefixId, inputRef: inputRef, isDisabled: isDisabled, isReadOnly: isReadOnly, size: size }), jsxs("div", __assign({ className: "text-field__input" }, { children: [startIconName && jsx(Icon, { className: "text-field__icon", name: startIconName }), jsx(Input, __assign({}, focusProps, { className: classNames('text-field__input-field', size === Size.xs ? LABEL_SIZE_MD_CSS_CLASS : LABEL_SIZE_LG_CSS_CLASS, {
                                    'text-field__input-field--right-aligned': textAlign === Alignment.end
                                }, {
                                    'text-field__input-field--center-aligned': textAlign === Alignment.center
                                }), "data-testid": dataTestId, max: maxValue, min: minValue, placeholder: placeholder, ref: inputRef, size: inputSize })), endIconName && jsx(Icon, { className: "text-field__icon", name: endIconName })] })), jsx(Part, { content: suffix, id: suffixId, inputRef: inputRef, isDisabled: isDisabled, isReadOnly: isReadOnly, size: size })] })) })) })));
}

function getCountryCallingCodeItems(favoriteItems) {
    var items = [];
    var _loop_1 = function (code) {
        var country = code.country, countryCodes = code.countryCodes, isoCode2 = code.isoCode2;
        var _loop_2 = function (countryCode) {
            if (items.findIndex(function (item) { return item.value === "".concat(isoCode2, "|+").concat(countryCode); }) === -1) {
                items.push({
                    text: "".concat(country, " +").concat(countryCode),
                    value: "".concat(isoCode2, "|+").concat(countryCode)
                });
            }
        };
        for (var _b = 0, countryCodes_1 = countryCodes; _b < countryCodes_1.length; _b++) {
            var countryCode = countryCodes_1[_b];
            _loop_2(countryCode);
        }
    };
    for (var _i = 0, codes_1 = codes; _i < codes_1.length; _i++) {
        var code = codes_1[_i];
        _loop_1(code);
    }
    if (!favoriteItems) {
        return items;
    }
    var favoriteItemsArr = [];
    for (var _a = 0, favoriteItems_1 = favoriteItems; _a < favoriteItems_1.length; _a++) {
        var favoriteItem = favoriteItems_1[_a];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemValue = item.value;
            if (itemValue.split('|')[0].startsWith(favoriteItem)) {
                favoriteItemsArr.push(item);
                items.splice(i, 1);
                break;
            }
        }
    }
    return favoriteItemsArr.concat(items);
}
function PhoneNumberField(_a) {
    var changeCallback = _a.changeCallback, _b = _a.changeParams, changeParams = _b === void 0 ? {} : _b, dataState = _a.dataState, favoriteCountryCodes = _a.favoriteCountryCodes, isDisabled = _a.isDisabled, isReadOnly = _a.isReadOnly, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, label = _a.label, prefixLabel = _a.prefixLabel, ref = _a.ref, _c = _a.value, value = _c === void 0 ? '' : _c;
    var items = useMemo(function () { return getCountryCallingCodeItems(favoriteCountryCodes); }, [favoriteCountryCodes]);
    var _d = useMemo(function () {
        var pref = '', selectText = '', selectValue = '', phoneNumberVal = value;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var itemValue = item.value;
            var countryCallingCode = itemValue.split('|')[1];
            if (value.startsWith(countryCallingCode)) {
                selectValue = itemValue;
                pref = countryCallingCode;
                selectText = item.text;
                phoneNumberVal = value.slice(countryCallingCode.length);
                break;
            }
        }
        return { prefix: pref, text: selectText, phoneNumberValue: phoneNumberVal, val: selectValue };
    }, [items, value]), prefix = _d.prefix, text = _d.text, phoneNumberValue = _d.phoneNumberValue, val = _d.val;
    var onPrefixChange = useCallback(function (changedValue) {
        changeCallback(__assign(__assign({}, changeParams), { value: "".concat(changedValue.split('|')[1]).concat(phoneNumberValue) }));
    }, [changeParams, phoneNumberValue]);
    var onPhoneNumberChange = useCallback(function (args) {
        changeCallback(__assign(__assign({}, args), { value: prefix + args.value }));
    }, [prefix]);
    return (jsxs("div", __assign({ className: "phone-number-field", ref: ref }, { children: [jsx(Select, { dataState: dataState, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, isSkeleton: isSkeleton, items: items, label: prefixLabel, onSelectionChange: onPrefixChange, text: text, value: val }), jsx(TextField, { changeCallback: onPhoneNumberChange, changeParams: changeParams, dataState: dataState, isDisabled: isDisabled, isReadOnly: isReadOnly, isRequired: isRequired, isSkeleton: isSkeleton, label: label, size: Size.md, type: "tel", value: phoneNumberValue })] })));
}

function Radio(_a) {
    var className = _a.className, helpText = _a.helpText, isSkeleton = _a.isSkeleton, label = _a.label, _b = _a.labelPlacement, labelPlacement = _b === void 0 ? LabelPlacement.End : _b, _c = _a.size, size = _c === void 0 ? Size.sm : _c, props = __rest(_a, ["className", "helpText", "isSkeleton", "label", "labelPlacement", "size"]);
    var radioGroupState = useContext(RadioGroupStateContext);
    var labelSize = size === Size.md ? Size.lg : Size.md;
    if (isSkeleton) {
        return jsx(SkeletonCheckbox, { className: "skeleton-radio", hasHelpText: !!helpText, size: size });
    }
    var content = [];
    var button = jsx("div", { className: "radio__button radio__button--".concat(size) }, "button");
    if (label) {
        var buttonAndLabels = [];
        var labelNode = (jsx(Label, __assign({ className: "radio__label", size: labelSize }, { children: label }), "label"));
        var wrapperClass = 'radio__button-and-label';
        if (labelPlacement === LabelPlacement.Start) {
            buttonAndLabels.push(labelNode, button);
            wrapperClass = 'radio__label-and-button';
        }
        else {
            buttonAndLabels.push(button, labelNode);
        }
        if (helpText) {
            var _d = getHelpContentAndVariant({
                hasError: radioGroupState === null || radioGroupState === void 0 ? void 0 : radioGroupState.isInvalid,
                helpText: helpText,
                isDisabled: !!props.isDisabled || (radioGroupState === null || radioGroupState === void 0 ? void 0 : radioGroupState.isDisabled)
            }), helpContent = _d.helpContent, helpVariant = _d.helpVariant;
            if (labelPlacement === LabelPlacement.End) {
                // needed to align the label and helpText in grid
                buttonAndLabels.push(jsx("div", {}, "buttonPlaceholder"));
            }
            buttonAndLabels.push(jsx(HelpText, __assign({ variant: helpVariant }, { children: helpContent }), "helpText"));
        }
        content.push(jsx("div", __assign({ className: wrapperClass }, { children: buttonAndLabels }), "buttonAndLabel"));
    }
    else {
        content.push(button);
    }
    return (jsx(Radio$1, __assign({}, props, { className: classNames('radio', className, {
            'radio--labeled': !!label,
            'radio--reversed': !!label && labelPlacement === LabelPlacement.Start
        }) }, { children: content })));
}

function RadioGroup(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, children = _a.children, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, label = _a.label, onChange = _a.onChange, showHelpTextIcon = _a.showHelpTextIcon, size = _a.size, tooltipContent = _a.tooltipContent, props = __rest(_a, ["changeCallback", "changeParams", "children", "className", "dataState", "helpText", "helpTextSuccess", "isDisabled", "isInvalid", "isRequired", "isSkeleton", "label", "onChange", "showHelpTextIcon", "size", "tooltipContent"]);
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var mappedChildren = Children.map(children, function (child) { return cloneElement(child, { size: size }); });
    var _b = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _b.hasError, isReadOnly = _b.isReadOnly, errorMessage = _b.errorMessage;
    var fieldSize = Size.md;
    if (size === Size.md) {
        fieldSize = Size.lg;
    }
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-radio-group", hasHelpText: hasAnyHelpText, hasLabel: !!label, inputRectHeight: size === Size.md ? '5.5rem' : '4.75rem', size: fieldSize }));
    }
    return (jsx(RadioGroup$1, __assign({}, props, { className: classNames('radio-group', className), isDisabled: isDisabled, isInvalid: hasError, isReadOnly: isReadOnly, isRequired: isRequired, onChange: onChange !== null && onChange !== void 0 ? onChange : changeParamsCb }, { children: jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: isInvalid, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: fieldSize, tooltipContent: tooltipContent }, { children: mappedChildren })) })));
}

var headingExtensionClasses = {
    1: HEADING_SIZE_SM_CSS_CLASS,
    2: HEADING_SIZE_XS_CSS_CLASS,
    3: LABEL_SIZE_SM_CSS_CLASS
};
var HeadingExtension = BaseHeading.configure({
    levels: [1, 2, 3]
}).extend({
    renderHTML: function (_a) {
        var node = _a.node, HTMLAttributes = _a.HTMLAttributes;
        var hasLevel = this.options.levels.includes(node.attrs.level);
        var level = hasLevel ? node.attrs.level : this.options.levels[0];
        return ["h".concat(level), mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
    }
});

function useTranslateFormatting() {
    return useTranslateFn('formatting');
}

function TextFieldVisibilityToggle(_a) {
    var isVisible = _a.isVisible, onPress = _a.onPress, outerRef = _a.ref;
    var translateCommon = useTranslateCommon();
    var ref = useRef(null);
    var buttonProps = useButton({
        onPress: onPress,
        elementType: 'div'
    }, ref).buttonProps;
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    return (jsxs("div", __assign({}, buttonProps, { className: "text-field__action", ref: ref }, { children: [jsx(Icon, { name: isVisible ? iconNames.VisibilityOff : iconNames.Visibility }), jsx(Label, __assign({ size: Size.lg }, { children: translateCommon(isVisible ? 'hide' : 'show') }))] })));
}

function PasswordField(_a) {
    var showVisibilityToggle = _a.showVisibilityToggle, props = __rest(_a, ["showVisibilityToggle"]);
    var _b = useState(InputType.password), type = _b[0], setType = _b[1];
    var onToggle = function () {
        setType(type === InputType.password ? InputType.text : InputType.password);
    };
    var suffix = showVisibilityToggle ?
        function () { return jsx(TextFieldVisibilityToggle, { isVisible: type !== InputType.password, onPress: onToggle }); }
        : undefined;
    return jsx(TextField, __assign({}, props, { suffix: suffix, type: type }));
}

function useCopyToClipboard(_a) {
    var _this = this;
    var text = _a.text, tooltipDuration = _a.tooltipDuration;
    var timeoutId = useRef(null);
    var _b = useState(false), showTooltip = _b[0], setShowTooltip = _b[1];
    var onPress = function () { return __awaiter(_this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (timeoutId.current) {
                        window.clearTimeout(timeoutId.current);
                        timeoutId.current = null;
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.clipboard.writeText(text)];
                case 2:
                    _a.sent();
                    setShowTooltip(true);
                    timeoutId.current = window.setTimeout(function () {
                        setShowTooltip(false);
                    }, tooltipDuration);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    // eslint-disable-next-line no-console
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return {
        onPress: onPress,
        showTooltip: showTooltip
    };
}

var TOOLTIP_TIMEOUT_IN_MS = 3000;
function TextFieldCopy(_a) {
    var _b, _c;
    var inputRef = _a.inputRef, prefix = _a.prefix, ref = _a.ref, suffix = _a.suffix;
    var translateCommon = useTranslateCommon();
    var _d = useCopyToClipboard({
        text: "".concat(prefix !== null && prefix !== void 0 ? prefix : '').concat((_c = (_b = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _b === void 0 ? void 0 : _b.value) !== null && _c !== void 0 ? _c : '').concat(suffix !== null && suffix !== void 0 ? suffix : ''),
        tooltipDuration: TOOLTIP_TIMEOUT_IN_MS
    }), onPress = _d.onPress, showTooltip = _d.showTooltip;
    return (jsxs(TooltipTrigger, __assign({ isOpen: showTooltip }, { children: [jsxs(TriggerElement, __assign({ className: "text-field__action", elementType: HTMLElementType.Div, onPress: onPress, ref: ref }, { children: [jsx(Icon, { name: iconNames.CopyAll }), jsx(Label, __assign({ size: Size.lg }, { children: translateCommon('copy') }))] })), jsx(Tooltip, __assign({ position: Position.Bottom, showArrow: false, type: TooltipType.Plain }, { children: translateCommon('copied') }))] })));
}

function TextFieldSelect(props) {
    return jsx(Select, __assign({}, props, { className: "text-field__select", isPlain: true, isSearchable: false, menuWidth: "auto" }));
}

function InlineTextField(_a) {
    var dataState = _a.dataState, outerRef = _a.ref, _b = _a.size, size = _b === void 0 ? Size.xs : _b, validate = _a.validate, value = _a.value, props = __rest(_a, ["dataState", "ref", "size", "validate", "value"]);
    var _c = useDataState(dataState, props.isInvalid, props.isReadOnly), hasError = _c.hasError, errorMessage = _c.errorMessage, isReadOnly = _c.isReadOnly;
    var _d = useState(value), stateValue = _d[0], setStateValue = _d[1];
    var _e = useState(false), isFocused = _e[0], setIsFocused = _e[1];
    var _f = useState({ isInvalid: hasError, errorText: errorMessage }), validationState = _f[0], setValidationState = _f[1];
    var isInvalid = validationState.isInvalid, errorText = validationState.errorText;
    var ref = useRef(null);
    var translateCommon = useTranslateCommon();
    useImperativeHandle(outerRef, function () { return ref.current; }, []);
    var onChange = function (newValue) {
        var _a, _b;
        var validationErrorMsg = (_a = validate === null || validate === void 0 ? void 0 : validate(newValue)) !== null && _a !== void 0 ? _a : '';
        setStateValue(newValue);
        setValidationState({ isInvalid: !!validationErrorMsg, errorText: validationErrorMsg });
        (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, newValue);
    };
    useEffect(function () {
        setStateValue(value);
    }, [value]);
    useEffect(function () {
        setValidationState({ isInvalid: hasError, errorText: errorMessage });
    }, [hasError, errorMessage]);
    return (jsxs(TooltipTrigger, __assign({ isOpen: isInvalid && isFocused }, { children: [jsx(TextField, __assign({}, props, { className: classNames(props.className, 'inline-text-field'), helpText: errorText, isInvalid: isInvalid, isPlain: true, isReadOnly: isReadOnly, onChange: onChange, onFocusChange: chain(setIsFocused, props.onFocusChange), ref: ref, size: size, value: stateValue })), jsx(Tooltip, __assign({ className: "inline-text-field__error-tooltip", headerIconName: iconNames.EmergencyHomeFilled, headerText: translateCommon('error'), offset: 2, position: Position.Left, triggerRef: ref, type: TooltipType.Rich }, { children: errorText }))] })));
}

function RichTextEditorLinkDialog(_a) {
    var children = _a.children, onOpenChange = _a.onOpenChange;
    var editor = useCurrentEditor().editor;
    var _b = useState(''), selectedLinkText = _b[0], setSelectedLinkText = _b[1];
    var _c = useState(''), selectedLinkUrl = _c[0], setSelectedLinkUrl = _c[1];
    var translateCommon = useTranslateCommon();
    if (!editor) {
        return null;
    }
    return (jsxs(DialogTrigger, __assign({ onOpenChange: function (isOpen) {
            if (isOpen) {
                var currentUrl = editor.getAttributes('link').href;
                if (currentUrl) {
                    setSelectedLinkUrl(currentUrl);
                    editor.commands.extendMarkRange('link');
                }
                var view = editor.view, state = editor.state;
                var _a = view.state.selection, from = _a.from, to = _a.to;
                var selectedText = state.doc.textBetween(from, to);
                if (selectedText !== currentUrl) {
                    setSelectedLinkText(selectedText);
                }
            }
            else {
                setSelectedLinkText('');
                setSelectedLinkUrl('');
                editor.chain().focus(editor.view.state.selection.to).run();
            }
            safeCall(onOpenChange, isOpen);
        } }, { children: [children, jsx(AlertModal, __assign({ primaryAction: {
                    onPress: function (closeCallback) {
                        var commands = editor.chain().focus().extendMarkRange('link');
                        if (selectedLinkUrl) {
                            commands = commands
                                .deleteSelection()
                                .setLink({ href: selectedLinkUrl })
                                .command(function (_a) {
                                var tr = _a.tr;
                                tr.insertText(selectedLinkText || selectedLinkUrl);
                                return true;
                            });
                        }
                        else {
                            commands = commands.unsetLink();
                        }
                        commands.run();
                        closeCallback();
                    },
                    label: translateCommon('save')
                }, secondaryAction: {
                    onPress: function (closeCallback) {
                        closeCallback();
                    },
                    label: translateCommon('cancel')
                }, size: Size.sm, title: translateCommon('addLink') }, { children: jsxs("div", __assign({ className: "link-modal__body" }, { children: [jsx(TextField, { autoFocus: !selectedLinkText, label: translateCommon('textToDisplay'), onChange: setSelectedLinkText, placeholder: translateCommon('enterDisplayText'), value: selectedLinkText }), jsx(TextField, { autoFocus: !!selectedLinkText, label: "URL", onChange: setSelectedLinkUrl, placeholder: "https://example.com/", value: selectedLinkUrl })] })) }))] })));
}

function ToolbarButton(_a) {
    var iconName = _a.iconName, isActive = _a.isActive, isDisabled = _a.isDisabled, label = _a.label, onPress = _a.onPress;
    return (jsxs(TooltipTrigger, { children: [jsx(IconButton, { "aria-label": label, iconName: iconName, isDisabled: isDisabled, onPress: onPress, size: Size.sm, style: isActive ? ButtonStyle.Fill : ButtonStyle.Plain, variant: ButtonVariant.Neutral }), jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: label }))] }));
}
// eslint-disable-next-line max-statements,complexity
function RichTextEditorToolbar(_a) {
    var _b;
    var isDisabled = _a.isDisabled, onModalOpenChange = _a.onModalOpenChange, props = __rest(_a, ["isDisabled", "onModalOpenChange"]);
    var editor = useCurrentEditor().editor;
    var translateFormatting = useTranslateFormatting();
    var translateCommon = useTranslateCommon();
    var _c = (_b = props.config) !== null && _b !== void 0 ? _b : {}, heading = _c.heading, bold = _c.bold, italic = _c.italic, underline = _c.underline, orderedList = _c.orderedList, bulletList = _c.bulletList, link = _c.link, variables = _c.variables;
    var variableMenuItems = useMemo(function () { return (variables ? variables.map(function (_a) {
        var id = _a.id, label = _a.label;
        return ({ id: id, name: label });
    }) : []); }, [variables]);
    if (!editor) {
        return null;
    }
    var actionNodes = [];
    if (heading) {
        var headingItems = [
            { value: 1, text: translateFormatting('heading1') },
            { value: 2, text: translateFormatting('heading2') },
            { value: -1, text: translateFormatting('normalText') },
            { value: 3, text: translateFormatting('smallText') }
        ];
        var activeHeadingItem_1 = headingItems[2];
        for (var i = 0, len = headingItems.length; i < len; i++) {
            var headingItem = headingItems[i];
            if (editor.isActive('heading', { level: headingItem.value })) {
                activeHeadingItem_1 = headingItem;
                break;
            }
        }
        actionNodes.push(jsx(Select, { "aria-label": translateFormatting('textStyle'), className: "text-editor-toolbar__heading-select", isDisabled: isDisabled, isPlain: true, isSearchable: false, items: headingItems, menuWidth: '14rem', onSelectionChange: function (value) {
                if (!value) {
                    return;
                }
                editor
                    .chain()
                    .focus()
                    .toggleHeading({
                    level: (value === -1 ? activeHeadingItem_1.value : value)
                })
                    .run();
            }, renderItemContent: function (optionContentProps) {
                var _a = optionContentProps.item, value = _a.value, text = _a.text;
                var headingClass = headingExtensionClasses[value];
                return (jsx(SelectOptionContent, __assign({}, optionContentProps, { label: jsx("span", __assign({ className: headingClass ? headingClass : LABEL_SIZE_LG_CSS_CLASS }, { children: text })) })));
            }, size: Size.xs, text: activeHeadingItem_1.text, value: activeHeadingItem_1.value }, "h"));
    }
    if (actionNodes.length > 0 && (bold || italic || underline)) {
        actionNodes.push(jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }, "d1"));
    }
    if (bold) {
        actionNodes.push(jsx(ToolbarButton, { iconName: iconNames.TextB, isActive: editor.isActive('bold'), isDisabled: isDisabled, label: translateFormatting('bold'), onPress: function () { return editor.chain().focus().toggleBold().run(); } }, "b"));
    }
    if (italic) {
        actionNodes.push(jsx(ToolbarButton, { iconName: iconNames.TextItalic, isActive: editor.isActive('italic'), isDisabled: isDisabled, label: translateFormatting('italic'), onPress: function () { return editor.chain().focus().toggleItalic().run(); } }, "i"));
    }
    if (underline) {
        actionNodes.push(jsx(ToolbarButton, { iconName: iconNames.TextUnderline, isActive: editor.isActive('underline'), isDisabled: isDisabled, label: translateFormatting('underline'), onPress: function () { return editor.chain().focus().toggleUnderline().run(); } }, "u"));
    }
    if (actionNodes.length > 0 && (orderedList || bulletList)) {
        actionNodes.push(jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }, "d2"));
    }
    if (orderedList) {
        actionNodes.push(jsx(ToolbarButton, { iconName: iconNames.FormatListNumbers, isActive: editor.isActive('orderedList'), isDisabled: isDisabled, label: translateFormatting('numberedList'), onPress: function () { return editor.chain().focus().toggleOrderedList().run(); } }, "ol"));
    }
    if (bulletList) {
        actionNodes.push(jsx(ToolbarButton, { iconName: iconNames.FormatListBullets, isActive: editor.isActive('bulletList'), isDisabled: isDisabled, label: translateFormatting('bulletList'), onPress: function () { return editor.chain().focus().toggleBulletList().run(); } }, "ul"));
    }
    if (actionNodes.length > 0 && link) {
        actionNodes.push(jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }, "d3"));
    }
    if (link) {
        actionNodes.push(jsx(RichTextEditorLinkDialog, __assign({ onOpenChange: onModalOpenChange }, { children: jsx(ToolbarButton, { iconName: iconNames.LinkAlt, isActive: editor.isActive('link'), isDisabled: isDisabled, label: translateFormatting('link') }) }), "a"));
    }
    if (actionNodes.length > 0 && (variableMenuItems === null || variableMenuItems === void 0 ? void 0 : variableMenuItems.length)) {
        actionNodes.push(jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }, "d4"));
    }
    if (variableMenuItems === null || variableMenuItems === void 0 ? void 0 : variableMenuItems.length) {
        actionNodes.push(jsx(Menu, __assign({ items: variableMenuItems, onAction: function (key) {
                var itemIdx = getIndexWithPropertyValue('id', key, variableMenuItems);
                if (itemIdx !== -1) {
                    var _a = variableMenuItems[itemIdx], id = _a.id, name_1 = _a.name;
                    editor
                        .chain()
                        .focus()
                        .setVariable({ id: id, label: name_1 })
                        .run();
                }
            } }, { children: jsx(ToolbarButton, { iconName: iconNames.Variables, isDisabled: isDisabled, label: translateCommon('variable') }) }), "var"));
    }
    return (jsx("div", __assign({ "aria-controls": editor.view.dom.id, "aria-label": translateFormatting('textFormatting'), className: "text-editor-toolbar", role: "toolbar" }, { children: actionNodes })));
}

function RichTextEditorLinkPreview(_a) {
    var onOpenChange = _a.onOpenChange;
    var editor = useCurrentEditor().editor;
    var translateCommon = useTranslateCommon();
    if (!editor) {
        return null;
    }
    var url = editor.getAttributes('link').href;
    return (jsxs("div", __assign({ className: "text-editor__link-preview" }, { children: [jsx(Label, __assign({ size: Size.md }, { children: translateCommon('visitURL') })), jsx("a", __assign({ className: "text-editor__link ".concat(LABEL_SIZE_MD_CSS_CLASS), href: url, rel: "noopener noreferrer nofollow", target: "_blank", title: url }, { children: url })), jsx(RichTextEditorLinkDialog, __assign({ onOpenChange: onOpenChange }, { children: jsx(Button, __assign({ size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: translateCommon('edit') })) })), jsx(Divider, { orientation: Orientation.vertical, size: Size.sm }), jsx(Button, __assign({ onPress: function () {
                    editor.chain().focus().extendMarkRange('link').unsetLink().run();
                }, size: Size.md, style: ButtonStyle.Plain, variant: ButtonVariant.Danger }, { children: translateCommon('remove') }))] })));
}

function Variable(props) {
    return (jsxs(NodeViewWrapper, __assign({ as: HTMLElementType.Span, className: "text-editor-variable" }, { children: [jsx(Icon, { name: iconNames.Variables, size: IconSize.SM }), jsx(Label, __assign({ size: Size.sm }, { children: jsx("strong", { children: props.node.attrs['data-label'] }) }))] })));
}

var VariableExtension = Node.create({
    name: 'variable',
    addNodeView: function () {
        // eslint-disable-next-line new-cap
        return ReactNodeViewRenderer(Variable, { className: 'text-editor-variable-wrapper' });
    },
    addOptions: function () {
        return {
            HTMLAttributes: {}
        };
    },
    group: 'inline',
    inline: true,
    selectable: false,
    atom: true,
    addAttributes: function () {
        return {
            'data-id': {
                default: null
            },
            'data-label': {
                default: null
            }
        };
    },
    parseHTML: function () {
        return [{ tag: "span[data-type=\"".concat(this.name, "\"]") }];
    },
    renderHTML: function (_a) {
        var HTMLAttributes = _a.HTMLAttributes;
        return ['span', mergeAttributes$1({ 'data-type': this.name }, this.options.HTMLAttributes, HTMLAttributes)];
    },
    renderText: function (_a) {
        var node = _a.node;
        return node.attrs['data-label'];
    },
    addCommands: function () {
        var _this = this;
        return {
            setVariable: function (_a) {
                var id = _a.id, label = _a.label;
                return function (_a) {
                    var commands = _a.commands, state = _a.state;
                    return commands.insertContent({
                        marks: state.selection.$from.marks().map(function (mark) { return ({
                            type: mark.type.name
                        }); }),
                        type: _this.name,
                        attrs: {
                            'data-id': id,
                            'data-label': label
                        }
                    });
                };
            }
        };
    }
});

var DEFAULT_TOOLBAR_CONFIG = {
    bold: true,
    bulletList: true,
    heading: true,
    italic: true,
    link: true,
    orderedList: true,
    underline: true,
    variables: []
};

var EnabledCheckExtension = {
    addOptions: function () {
        var _a;
        return __assign(__assign({}, (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this)), { isEnabled: true });
    },
    addKeyboardShortcuts: function () {
        var _a;
        var out;
        if (this.options.isEnabled) {
            out = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this);
        }
        return out !== null && out !== void 0 ? out : {};
    },
    addInputRules: function () {
        var _a;
        var out;
        if (this.options.isEnabled) {
            out = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.call(this);
        }
        return out !== null && out !== void 0 ? out : [];
    }
};

function createEditorContent(value, variableToHtmlOptions) {
    var content = value !== null && value !== void 0 ? value : '';
    if (variableToHtmlOptions) {
        content = content.replace(variableToHtmlOptions.regExp, function (substring) {
            var _a = variableToHtmlOptions.getItem(substring), id = _a.id, label = _a.label;
            return "<span data-type=\"variable\" data-id=\"".concat(id, "\" data-label=\"").concat(label, "\"></span>");
        });
    }
    return content;
}
function replaceVariablesWithText(value, variableToTextOptions) {
    return value.replace(/<span data-type="variable"(.*?)><\/span>/gim, function (match) {
        var idMatches = match.match(/data-id="(.*?)"/gim);
        var labelMatches = match.match(/data-label="(.*?)"/gim);
        if ((idMatches === null || idMatches === void 0 ? void 0 : idMatches.length) && (labelMatches === null || labelMatches === void 0 ? void 0 : labelMatches.length)) {
            var id = idMatches[0].split('"')[1];
            var lbl = labelMatches[0].split('"')[1];
            return variableToTextOptions.getText({ id: id, label: lbl });
        }
        return match;
    });
}
function isToolbarVisible(toolbarConfig) {
    for (var key in toolbarConfig) {
        var value = toolbarConfig[key];
        if (isArray(value) ? value.length > 0 : value) {
            return true;
        }
    }
    return false;
}
function RichTextEditor(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, label = _a.label, placeholder = _a.placeholder, ref = _a.ref, showHelpTextIcon = _a.showHelpTextIcon, tooltipContent = _a.tooltipContent, value = _a.value, variableToHtmlOptions = _a.variableToHtmlOptions, variableToTextOptions = _a.variableToTextOptions, props = __rest(_a, ["changeCallback", "changeParams", "className", "dataState", "helpText", "helpTextSuccess", "isDisabled", "isInvalid", "isRequired", "isSkeleton", "label", "placeholder", "ref", "showHelpTextIcon", "tooltipContent", "value", "variableToHtmlOptions", "variableToTextOptions"]);
    var _b = useFocusRing({ within: true, isTextInput: false }), focusProps = _b.focusProps, isFocused = _b.isFocused, isFocusVisible = _b.isFocusVisible;
    var prevIsFocusedRef = useRef(false);
    var editorRef = useRef(null);
    var _c = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _c.hasError, isReadOnly = _c.isReadOnly, errorMessage = _c.errorMessage;
    var isEditable = !isDisabled && !isReadOnly;
    var _d = useState(false), isModalOpen = _d[0], setIsModalOpen = _d[1];
    var propsToolbarConfig = props.toolbarConfig;
    var toolbarConfig = useMemo(function () { return (__assign(__assign({}, DEFAULT_TOOLBAR_CONFIG), propsToolbarConfig)); }, [propsToolbarConfig]);
    var showToolbar = useMemo(function () { return isToolbarVisible(toolbarConfig); }, [toolbarConfig]);
    var _e = useLabel({ label: label, 'aria-label': props['aria-label'] }), fieldProps = _e.fieldProps, labelProps = _e.labelProps;
    var _f = useFieldHelpText({
        dataState: dataState,
        helpText: helpText,
        helpTextSuccess: helpTextSuccess,
        isInvalid: isInvalid
    }), fieldProps2 = _f.fieldProps, helpTextProps = _f.helpTextProps;
    var onCreate = function (_a) {
        var editor = _a.editor;
        editorRef.current = editor;
        editor.commands.setContent(createEditorContent(value, variableToHtmlOptions));
    };
    var onModalOpenChange = function (isOpen) {
        setIsModalOpen(isOpen);
    };
    useEffect(function () {
        var editor = editorRef.current;
        if (editor) {
            // Workaround for flushSync issue with Node views: https://github.com/ueberdosis/tiptap/issues/3764
            queueMicrotask(function () {
                editor.commands.setContent(createEditorContent(value, variableToHtmlOptions));
            });
        }
    }, [value]);
    useEffect(function () {
        var _a;
        (_a = editorRef.current) === null || _a === void 0 ? void 0 : _a.setEditable(isEditable);
    }, [isEditable]);
    useEffect(function () {
        var editor = editorRef.current;
        if (editor && isFocused !== prevIsFocusedRef.current && !isFocused && !isModalOpen) {
            var outputValue = editor.getHTML();
            if (variableToTextOptions) {
                outputValue = replaceVariablesWithText(outputValue, variableToTextOptions);
            }
            if (outputValue === '<p></p>') {
                outputValue = '';
            }
            safeCall(changeCallback, __assign(__assign({}, changeParams), { value: outputValue }));
        }
        prevIsFocusedRef.current = isFocused;
    }, [isFocused]);
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-text-editor", hasHelpText: hasAnyHelpText, hasLabel: !!label, inputRectHeight: 148, size: Size.md, style: { minWidth: '21rem' } }));
    }
    return (jsx(Provider, __assign({ values: [
            [LabelContext, labelProps],
            [TextContext, { slots: { description: helpTextProps } }]
        ] }, { children: jsx("div", __assign({ className: classNames('text-editor-field', className), ref: ref }, { children: jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: Size.md, tooltipContent: tooltipContent }, { children: jsx("div", __assign({}, focusProps, { className: "text-editor-wrapper", "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined }, { children: jsx(EditorProvider, __assign({ editable: isEditable, editorProps: {
                            attributes: Object.entries(__assign(__assign(__assign({}, fieldProps), fieldProps2), { 'aria-disabled': isDisabled, 'aria-invalid': hasError, 'aria-multiline': true, 'aria-readonly': isReadOnly, 'aria-required': isRequired, class: 'text-editor', role: 'textbox' }))
                                .filter(function (_a) {
                                var val = _a[1];
                                return !!val;
                            })
                                .reduce(function (obj, _a) {
                                var key = _a[0], val = _a[1];
                                obj[key] = val;
                                return obj;
                            }, {})
                        }, extensions: [
                            Document,
                            Paragraph,
                            Text$1,
                            Placeholder.configure({
                                placeholder: placeholder,
                                showOnlyWhenEditable: false
                            }),
                            HeadingExtension.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.heading
                            }),
                            Bold.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.bold
                            }),
                            Italic.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.italic
                            }),
                            Underline.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.underline
                            }),
                            ListItem$1,
                            OrderedList.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.orderedList
                            }),
                            BulletList.extend(EnabledCheckExtension).configure({
                                isEnabled: toolbarConfig.bulletList
                            }),
                            Link$2.extend({ inclusive: false }).configure({
                                openOnClick: false,
                                autolink: toolbarConfig.link,
                                defaultProtocol: 'https'
                            }),
                            VariableExtension
                        ], onCreate: onCreate, slotBefore: showToolbar ?
                            jsxs("div", __assign({ className: "text-editor-toolbar-wrapper" }, { children: [jsx(RichTextEditorToolbar, { config: toolbarConfig, isDisabled: !isEditable, onModalOpenChange: onModalOpenChange }), jsx(Divider, { size: Size.sm })] }))
                            : null }, { children: jsx(BubbleMenu, __assign({ className: "text-editor__link-menu", editor: null, shouldShow: function (_a) {
                                var editor = _a.editor;
                                return !!editor.getAttributes('link').href && editor.isFocused;
                            }, tippyOptions: {
                                maxWidth: 400,
                                placement: 'bottom'
                            }, updateDelay: 50 }, { children: jsx(RichTextEditorLinkPreview, { onOpenChange: onModalOpenChange }) })) })) })) })) })) })));
}

var SliderValueDisplayMode;
(function (SliderValueDisplayMode) {
    SliderValueDisplayMode["Label"] = "label";
    SliderValueDisplayMode["TextField"] = "text-field";
    SliderValueDisplayMode["Tooltip"] = "tooltip";
})(SliderValueDisplayMode || (SliderValueDisplayMode = {}));

var DEFAULT_MAX_VALUE = 100;
var DEFAULT_MIN_DISTANCE = 10;
var DEFAULT_MIN_VALUE = 0;
var DEFAULT_TEXT_FIELD_WIDTH = 60;
function Slider(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, helpText = _a.helpText, isDisabled = _a.isDisabled, isSkeleton = _a.isSkeleton, label = _a.label, _b = _a.labelPosition, labelPosition = _b === void 0 ? Position.Top : _b, _c = _a.maxValue, maxValue = _c === void 0 ? DEFAULT_MAX_VALUE : _c, _d = _a.minDistance, minDistance = _d === void 0 ? DEFAULT_MIN_DISTANCE : _d, _e = _a.minValue, minValue = _e === void 0 ? DEFAULT_MIN_VALUE : _e, onChange = _a.onChange, showFill = _a.showFill, showHelpTextIcon = _a.showHelpTextIcon, textFieldAriaLabels = _a.textFieldAriaLabels, _f = _a.tooltipPosition, tooltipPosition = _f === void 0 ? Position.Top : _f, value = _a.value, _g = _a.valueDisplayMode, valueDisplayMode = _g === void 0 ? SliderValueDisplayMode.Label : _g, _h = _a.valueTextFieldWidth, valueTextFieldWidth = _h === void 0 ? DEFAULT_TEXT_FIELD_WIDTH : _h, props = __rest(_a, ["changeCallback", "changeParams", "className", "helpText", "isDisabled", "isSkeleton", "label", "labelPosition", "maxValue", "minDistance", "minValue", "onChange", "showFill", "showHelpTextIcon", "textFieldAriaLabels", "tooltipPosition", "value", "valueDisplayMode", "valueTextFieldWidth"]);
    var _j = useState({
        focusedIndex: -1,
        focusedValue: ''
    }), focusedTextFieldValueAndIndex = _j[0], setFocusedTextFieldValueAndIndex = _j[1];
    var _k = useState(false), hasSliderTrackHover = _k[0], setHasSliderTrackHover = _k[1];
    var _l = useState(false), hasSliderThumbHoverOrFocus = _l[0], setHasSliderThumbHoverOrFocus = _l[1];
    var _m = useState(value !== null && value !== void 0 ? value : 0), sliderValue = _m[0], setSliderValue = _m[1];
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var onChangeEnd = chain(props.onChangeEnd, changeParamsCb);
    var higherValueThumbRef = useRef(null);
    var lowerValueThumbRef = useRef(null);
    var sliderTrackRef = useRef(null);
    var isRangeSlider = isArray(sliderValue);
    var hasValueRight = valueDisplayMode === SliderValueDisplayMode.TextField ||
        (labelPosition === Position.Left && valueDisplayMode === SliderValueDisplayMode.Label);
    useEffect(function () {
        setSliderValue(value);
    }, [value]);
    var resetFocusedTextFieldValueAndIndex = function () {
        setFocusedTextFieldValueAndIndex({
            focusedIndex: -1,
            focusedValue: ''
        });
    };
    var validateHigherValueInput = function (inputValue) {
        // Higher value must be between maxValue and minValue + minDistance
        return Math.min(maxValue, Math.max(inputValue, minValue + minDistance));
    };
    var validateLowerValueInput = function (inputValue) {
        // Lower value must be between minValue and maxValue - minDistance
        return Math.max(minValue, Math.min(inputValue, maxValue - minDistance));
    };
    var validateNewValueRange = function (values, changedIndex) {
        var distance = values[1] - values[0];
        if (distance >= minDistance) {
            return values;
        }
        if (changedIndex === 0) {
            var lowerValue = validateLowerValueInput(values[0]);
            return [lowerValue, lowerValue + minDistance];
        }
        var higherValue = validateHigherValueInput(values[1]);
        return [higherValue - minDistance, higherValue];
    };
    var setValueAndTriggerChange = function (newValue, isChangeEnd) {
        setSliderValue(newValue);
        safeCall(onChange, newValue);
        if (isChangeEnd) {
            onChangeEnd(newValue);
        }
    };
    var onSliderThumbValueChange = function (newValue) {
        var _a, _b;
        var val = newValue;
        var isLowerValueThumbFocused = (_a = lowerValueThumbRef.current) === null || _a === void 0 ? void 0 : _a.hasAttribute('data-focused');
        var isHigherValueThumbFocused = (_b = higherValueThumbRef.current) === null || _b === void 0 ? void 0 : _b.hasAttribute('data-focused');
        if (isArray(newValue) && (isLowerValueThumbFocused || isHigherValueThumbFocused)) {
            var valueRange = isRangeSlider ? __spreadArray([], sliderValue, true) : [sliderValue, sliderValue];
            var changedValueIndex = isLowerValueThumbFocused ? 0 : 1;
            valueRange[changedValueIndex] = newValue[changedValueIndex];
            val = validateNewValueRange(valueRange, changedValueIndex);
        }
        setValueAndTriggerChange(val);
    };
    var onTextFieldValueChange = function (index, changeArgs, shouldUpdateValue, isChangeEnd) {
        setFocusedTextFieldValueAndIndex({
            focusedIndex: index,
            focusedValue: changeArgs.value
        });
        if (!shouldUpdateValue) {
            return;
        }
        var newValue = +changeArgs.value;
        if (isRangeSlider) {
            var newRange = __spreadArray([], sliderValue, true);
            newRange[index] = index === 0 ? validateLowerValueInput(newValue) : validateHigherValueInput(newValue);
            setValueAndTriggerChange(validateNewValueRange(newRange, index), isChangeEnd);
        }
        else {
            var validatedValue = Math.min(Math.max(newValue, minValue), maxValue);
            setValueAndTriggerChange(validatedValue, isChangeEnd);
        }
    };
    var onTextFieldKeyUp = function (index, event) {
        if (event.key === KeyboardEventKey.Enter) {
            onTextFieldValueChange(index, { value: event.currentTarget.value }, true);
            resetFocusedTextFieldValueAndIndex();
        }
    };
    // To make sure user does not get stuck when thumbs are over each other
    var getThumbZIndexStyle = function (state, index) {
        var isThumbOverHalfway = state.getThumbPercent(index) > 1 / 2;
        return {
            zIndex: isThumbOverHalfway ? state.values.length - index : index
        };
    };
    var getTrackFillWidthAndPositionStyle = function (state) {
        if (showFill === false) {
            return {};
        }
        var values = state.values;
        if (values.length > 1) {
            return {
                left: "".concat(state.getThumbPercent(0) * 100, "%"),
                width: "".concat((state.getThumbPercent(values.length - 1) - state.getThumbPercent(0)) * 100, "%")
            };
        }
        return { width: "".concat(state.getThumbPercent(0) * 100, "%") };
    };
    var getValueLabel = function (state) {
        var valueLabelText = '';
        state.values.forEach(function (val, index) {
            var txt = state.getFormattedValue(val);
            if (index === 0) {
                valueLabelText += txt;
            }
            else {
                valueLabelText += " - ".concat(txt);
            }
        });
        return valueLabelText;
    };
    var onTextFieldFocused = function (focusedIndex, event) {
        setFocusedTextFieldValueAndIndex({
            focusedIndex: focusedIndex,
            focusedValue: event.target.value
        });
    };
    var renderTextFields = function (state) {
        var values = state.values;
        var ariaLabels = textFieldAriaLabels !== null && textFieldAriaLabels !== void 0 ? textFieldAriaLabels : [];
        var focusedIndex = focusedTextFieldValueAndIndex.focusedIndex, focusedValue = focusedTextFieldValueAndIndex.focusedValue;
        return values.map(function (_, index) { return (jsx(TextField, { "aria-label": ariaLabels.length > index ? ariaLabels[index] : props['aria-label'], changeCallback: function (changeArgs) {
                onTextFieldValueChange(index, changeArgs, true, true);
                resetFocusedTextFieldValueAndIndex();
            }, className: classNames('slider__text-field', { 'slider__second-text-input-label': index !== 0 }), isControlled: true, isDisabled: isDisabled, onChange: function (val) { return onTextFieldValueChange(index, { value: val }, !isRangeSlider); }, onFocus: function (event) { return onTextFieldFocused(index, event); }, onKeyUp: function (event) { return onTextFieldKeyUp(index, event); }, size: Size.xs, style: { width: valueTextFieldWidth }, textAlign: Alignment.center, type: InputType.number, value: focusedIndex === index ? focusedValue : (state.getFormattedValue(state.getThumbValue(index)).replace(',', '')) }, index)); });
    };
    var renderValue = function () {
        if (valueDisplayMode === SliderValueDisplayMode.TextField) {
            return (jsx(SliderOutput, { children: function (_a) {
                    var state = _a.state;
                    return (jsx("div", __assign({ className: "slider__value_label_container" }, { children: renderTextFields(state) })));
                } }));
        }
        return (jsx(SliderOutput, __assign({ className: "slider__value-label" }, { children: function (_a) {
                var state = _a.state;
                return jsx(Label, __assign({ size: Size.md }, { children: getValueLabel(state) }));
            } })));
    };
    if (isSkeleton) {
        return (jsx(SkeletonField, { className: "skeleton-slider", hasHelpText: !!helpText, hasLabel: !!label, inputRectHeight: 20, size: Size.md }));
    }
    return (jsxs(Slider$1, __assign({}, props, { className: classNames('slider', className), isDisabled: isDisabled, maxValue: maxValue, minValue: minValue, onChange: onSliderThumbValueChange, onChangeEnd: onChangeEnd, orientation: "horizontal", value: sliderValue }, { children: [labelPosition === Position.Top && (jsxs("div", __assign({ className: "slider__top-content" }, { children: [jsx(Label, __assign({ className: "slider__label", size: Size.md }, { children: jsx("strong", { children: label }) })), valueDisplayMode === SliderValueDisplayMode.Label && renderValue()] }))), jsxs("div", __assign({ className: "slider__content" }, { children: [labelPosition === Position.Left && (jsx(Label, __assign({ className: "slider__label", size: Size.md }, { children: jsx("strong", { children: label }) }))), jsx("div", __assign({ className: "slider__track-wrapper" }, { children: jsx(SliderTrack, __assign({ className: "slider__track-content", onHoverChange: setHasSliderTrackHover, ref: sliderTrackRef }, { children: function (_a) {
                                var state = _a.state;
                                return (jsxs("div", __assign({ className: "slider__track-container" }, { children: [jsx("div", { className: "slider__track" }), jsx("div", { className: "slider__track-fill", style: getTrackFillWidthAndPositionStyle(state) }), state.values.map(function (_, index) { return (jsxs(TooltipTrigger, __assign({ isOpen: hasSliderTrackHover ||
                                                hasSliderThumbHoverOrFocus ||
                                                state.values.some(function (__, i) { return state.isThumbDragging(i); }) }, { children: [jsx(SliderThumb, __assign({ className: "slider__track-thumb", index: index, onFocusChange: setHasSliderThumbHoverOrFocus, onHoverChange: setHasSliderThumbHoverOrFocus, ref: index === 0 ? lowerValueThumbRef : higherValueThumbRef, style: getThumbZIndexStyle(state, index) }, { children: jsx("div", { className: "slider__track-thumb-inner-circle" }) }), index), valueDisplayMode === SliderValueDisplayMode.Tooltip && (jsx(Tooltip, __assign({ position: tooltipPosition, triggerRef: index === 0 ? lowerValueThumbRef : higherValueThumbRef, type: TooltipType.Plain }, { children: jsx(Label, __assign({ size: Size.sm }, { children: jsx("strong", { children: state.getThumbValue(index) }) })) })))] }), index)); })] })));
                            } })) })), hasValueRight && renderValue()] })), helpText && (jsx(HelpText, __assign({ showIcon: showHelpTextIcon, variant: isDisabled ? HelpTextVariant.Disabled : undefined }, { children: helpText })))] })));
}

function TextArea(_a) {
    var className = _a.className, changeParams = _a.changeParams, changeCallback = _a.changeCallback, dataState = _a.dataState, dataTestId = _a.dataTestId, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isControlled = _a.isControlled, isInvalid = _a.isInvalid, isSkeleton = _a.isSkeleton, label = _a.label, minHeight = _a.minHeight, onChange = _a.onChange, onBlur = _a.onBlur, placeholder = _a.placeholder, rows = _a.rows, showHelpTextIcon = _a.showHelpTextIcon, tooltipContent = _a.tooltipContent, _b = _a.value, value = _b === void 0 ? '' : _b, props = __rest(_a, ["className", "changeParams", "changeCallback", "dataState", "dataTestId", "helpText", "helpTextSuccess", "isControlled", "isInvalid", "isSkeleton", "label", "minHeight", "onChange", "onBlur", "placeholder", "rows", "showHelpTextIcon", "tooltipContent", "value"]);
    var _c = useFocusRing({ within: true, isTextInput: false }), focusProps = _c.focusProps, isFocused = _c.isFocused, isFocusVisible = _c.isFocusVisible;
    var _d = useHover(props), hoverProps = _d.hoverProps, isHovered = _d.isHovered;
    var isDisabled = props.isDisabled, isRequired = props.isRequired, maxLength = props.maxLength;
    var _e = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _e.hasError, isReadOnly = _e.isReadOnly, errorMessage = _e.errorMessage;
    var _f = useState(value), stateValue = _f[0], setStateValue = _f[1];
    var inputRef = useRef(null);
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var currentValue = isControlled ? value : stateValue;
    var onChangeInner = function (val) {
        if (!isControlled) {
            setStateValue(val);
        }
        var input = inputRef.current;
        if (input) {
            // Handle autogrow
            var prevOverflow = input.style.overflow;
            var isFirefox = 'MozAppearance' in input.style;
            if (!isFirefox) {
                input.style.overflow = 'hidden';
            }
            input.style.height = 'auto';
            input.style.height = "".concat(input.scrollHeight + (input.offsetHeight - input.clientHeight), "px");
            input.style.overflow = prevOverflow;
        }
        safeCall(onChange, val);
    };
    useEffect(function () {
        if (!isControlled) {
            setStateValue(value);
        }
    }, [value, isControlled]);
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-textarea-field", hasHelpText: hasAnyHelpText, hasLabel: !!label, inputRectHeight: minHeight !== null && minHeight !== void 0 ? minHeight : '134px', size: Size.md, style: { minWidth: '225px' } }));
    }
    return (jsx(TextField$1, __assign({}, props, { className: classNames('textarea-field', className), "data-testid": dataTestId, isInvalid: hasError, isReadOnly: isReadOnly, onBlur: chain(onBlur, changeParamsCb), onChange: onChangeInner, value: currentValue }, { children: jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: hasError, isRequired: isRequired, label: label, labelSuffix: isNullOrUndefined(maxLength) ? null : (jsx(BodyText, __assign({ className: "textarea-field__letter-count", size: Size.xs }, { children: "".concat(currentValue.length, "/").concat(maxLength) }))), showHelpTextIcon: showHelpTextIcon, size: Size.md, tooltipContent: tooltipContent }, { children: jsx("div", __assign({}, hoverProps, { className: "textarea-field__content", "data-disabled": !!isDisabled || undefined, "data-focus-visible": isFocusVisible || undefined, "data-focused": isFocused || undefined, "data-hovered": isHovered || undefined, "data-invalid": !!hasError || undefined, "data-readonly": !!isReadOnly || undefined }, { children: jsx("div", __assign({ className: "textarea-field__textarea-wrap" }, { children: jsx(TextArea$1, __assign({}, focusProps, { className: classNames('textarea-field__textarea', LABEL_SIZE_LG_CSS_CLASS), placeholder: placeholder, ref: inputRef, rows: rows, style: { minHeight: minHeight } })) })) })) })) })));
}

function ToggleButton(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, helpText = _a.helpText, helpTextSuccess = _a.helpTextSuccess, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSkeleton = _a.isSkeleton, items = _a.items, label = _a.label, onChange = _a.onChange, showHelpTextIcon = _a.showHelpTextIcon, _b = _a.size, size = _b === void 0 ? Size.sm : _b, tooltipContent = _a.tooltipContent, props = __rest(_a, ["changeCallback", "changeParams", "className", "dataState", "helpText", "helpTextSuccess", "isDisabled", "isInvalid", "isRequired", "isSkeleton", "items", "label", "onChange", "showHelpTextIcon", "size", "tooltipContent"]);
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var _c = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _c.hasError, isReadOnly = _c.isReadOnly, errorMessage = _c.errorMessage;
    var labelSize = size === Size.xs ? Size.sm : Size.md;
    if (isSkeleton) {
        var hasAnyHelpText = !!errorMessage || !!helpTextSuccess || !!helpText;
        return (jsx(SkeletonField, { className: "skeleton-toggle-button", hasHelpText: hasAnyHelpText, hasLabel: !!label, size: size }));
    }
    return (jsx(RadioGroup$1, __assign({}, props, { className: classNames("toggle-button toggle-button--".concat(size), className), isDisabled: isDisabled, isInvalid: hasError, isReadOnly: isReadOnly, isRequired: isRequired, onChange: chain(onChange, changeParamsCb) }, { children: jsx(Field, __assign({ dataState: dataState, helpText: helpText, helpTextSuccess: helpTextSuccess, isDisabled: isDisabled, isInvalid: isInvalid, isRequired: isRequired, label: label, showHelpTextIcon: showHelpTextIcon, size: labelSize, tooltipContent: tooltipContent }, { children: jsx("div", __assign({ className: "toggle-button__options" }, { children: items.map(function (_a) {
                    var isItemDisabled = _a.isDisabled, value = _a.value, text = _a.text;
                    return (jsx(Radio$1, __assign({ className: "toggle-button__option", isDisabled: isItemDisabled, value: value }, { children: jsx(Label, __assign({ size: labelSize }, { children: text })) }), value));
                }) })) })) })));
}

var SM_SIZE = 8;
var MD_SIZE = 12;
function SwitchNob(_a) {
    var className = _a.className, size = _a.size;
    var iconSize = size === Size.sm ? SM_SIZE : MD_SIZE;
    return (jsx("svg", __assign({ "aria-hidden": true, className: className, fill: "none", height: iconSize, viewBox: "0 0 ".concat(iconSize, " ").concat(iconSize), width: iconSize }, { children: jsx("circle", { cx: iconSize / 2, cy: iconSize / 2, fill: "currentColor", r: iconSize / 2 }) })));
}

function ToggleSwitch(_a) {
    var changeCallback = _a.changeCallback, changeParams = _a.changeParams, className = _a.className, dataState = _a.dataState, dataTestId = _a.dataTestId, helpText = _a.helpText, isDisabled = _a.isDisabled, isInvalid = _a.isInvalid, isRequired = _a.isRequired, isSelected = _a.isSelected, isSkeleton = _a.isSkeleton, label = _a.label, _b = _a.labelPlacement, labelPlacement = _b === void 0 ? LabelPlacement.End : _b, onChange = _a.onChange, _c = _a.size, size = _c === void 0 ? Size.sm : _c, props = __rest(_a, ["changeCallback", "changeParams", "className", "dataState", "dataTestId", "helpText", "isDisabled", "isInvalid", "isRequired", "isSelected", "isSkeleton", "label", "labelPlacement", "onChange", "size"]);
    var _d = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _d.hasError, isReadOnly = _d.isReadOnly, errorMessage = _d.errorMessage;
    var changeParamsCb = useChangeParamsCallback(changeParams, changeCallback);
    var helpTextId = useId();
    var labelSize = Size.md;
    if (size === Size.md) {
        labelSize = Size.lg;
    }
    if (isSkeleton) {
        return (jsx(SkeletonCheckbox, { className: "skeleton-toggle-switch", hasHelpText: !!helpText || !!errorMessage, size: size }));
    }
    var content = [];
    if (isRequired) {
        content.push(jsx(RequiredIndicator, {}, "required"));
    }
    var toggleItem = (jsxs("div", __assign({ className: classNames("toggle-switch__toggle-item toggle-switch__toggle-item--".concat(size)) }, { children: [jsx(Icon, { "aria-hidden": true, className: "toggle-switch__check-icon", name: iconNames.InputCheck }), jsx(SwitchNob, { className: "toggle-switch__switch-nob-icon", size: size })] }), "toggleItem"));
    if (label) {
        var toggleItemAndLabels = [];
        var labelNode = (jsx(Label, __assign({ className: "toggle-switch__label", size: labelSize }, { children: label }), "label"));
        var wrapperClass = 'toggle-switch__toggle-item-and-label';
        if (labelPlacement === LabelPlacement.Start) {
            toggleItemAndLabels.push(labelNode, toggleItem);
            wrapperClass = 'toggle-switch__label-and-toggle-item';
        }
        else {
            toggleItemAndLabels.push(toggleItem, labelNode);
        }
        if (helpText || errorMessage) {
            var _e = getHelpContentAndVariant({
                errorMessage: errorMessage,
                hasError: hasError,
                helpText: helpText,
                isDisabled: isDisabled
            }), helpContent = _e.helpContent, helpVariant = _e.helpVariant;
            if (labelPlacement === LabelPlacement.End) {
                // needed to align the label and helpText in grid
                toggleItemAndLabels.push(jsx("div", {}, "toggleItemPlaceholder"));
            }
            toggleItemAndLabels.push(jsx(HelpText, __assign({ id: helpTextId, variant: helpVariant }, { children: helpContent }), "helpText"));
        }
        content.push(jsx("div", __assign({ className: wrapperClass }, { children: toggleItemAndLabels }), "toggleItemAndLabel"));
    }
    else {
        content.push(toggleItem);
    }
    return (jsx(Switch, __assign({}, props, { "aria-describedby": mergeStrings(' ', helpTextId, props['aria-describedby']), className: classNames('toggle-switch', className, {
            'toggle-switch--invalid': hasError,
            'toggle-switch--labeled': !!label,
            'toggle-switch--reversed': !!label && labelPlacement === LabelPlacement.Start
        }), "data-testid": dataTestId, isDisabled: isDisabled, isReadOnly: isReadOnly, isSelected: isSelected, onChange: onChange !== null && onChange !== void 0 ? onChange : changeParamsCb }, { children: content })));
}

function expandAll(items, expandedKeys) {
    for (var i = 0, len = items.length; i < len; i++) {
        var _a = items[i], value = _a.value, children = _a.children;
        if (children) {
            expandedKeys.add(value);
            expandAll(children, expandedKeys);
        }
    }
    return expandedKeys;
}

function useTreeSelect(_a) {
    var _b;
    var defaultExpandedKeys = _a.defaultExpandedKeys, propsExpandedKeys = _a.expandedKeys, items = _a.items, propsOnExpandedChange = _a.onExpandedChange, onLoadChildren = _a.onLoadChildren, options = __rest(_a, ["defaultExpandedKeys", "expandedKeys", "items", "onExpandedChange", "onLoadChildren"]);
    var _c = useState((_b = propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : defaultExpandedKeys) !== null && _b !== void 0 ? _b : new Set()), expandedKeys = _c[0], setExpandedKeys = _c[1];
    var _d = useState(new Set()), loadingKeys = _d[0], setLoadingKeys = _d[1];
    var _e = useState(null), filteredItems = _e[0], setFilteredItems = _e[1];
    var currentItems = filteredItems !== null && filteredItems !== void 0 ? filteredItems : items;
    var localFilter = useFilter({ sensitivity: 'base' });
    var onExpandedChange = function (newExpandedKeys) {
        setExpandedKeys(newExpandedKeys);
        safeCall(propsOnExpandedChange, newExpandedKeys);
    };
    var onToggleItem = useCallback(function (item) {
        var _a;
        var value = item.value;
        var newExpandedKeys = new Set(expandedKeys);
        if (newExpandedKeys.has(value)) {
            newExpandedKeys.delete(value);
        }
        else {
            newExpandedKeys.add(value);
        }
        onExpandedChange(newExpandedKeys);
        if (onLoadChildren && !loadingKeys.has(value) && ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            setLoadingKeys(new Set(loadingKeys).add(value));
            onLoadChildren(item).finally(function () {
                setLoadingKeys(function (prevLoadingKeys) {
                    var newLoadingKeys = new Set(prevLoadingKeys);
                    newLoadingKeys.delete(value);
                    return newLoadingKeys;
                });
            });
        }
    }, [loadingKeys, expandedKeys, items]);
    var onKeyDown = useCallback(function (e, highlightedItem) {
        var continueFlow = safeCall(options.onKeyDown, e, highlightedItem);
        if (continueFlow === false) {
            return false;
        }
        switch (e.key) {
            case KeyboardEventKey.ArrowLeft:
                if (highlightedItem) {
                    e.preventDefault();
                }
                if ((highlightedItem === null || highlightedItem === void 0 ? void 0 : highlightedItem.children) && expandedKeys.has(highlightedItem.value)) {
                    onToggleItem(highlightedItem);
                }
                return false;
            case KeyboardEventKey.ArrowRight:
                if (highlightedItem) {
                    e.preventDefault();
                }
                if ((highlightedItem === null || highlightedItem === void 0 ? void 0 : highlightedItem.children) && !expandedKeys.has(highlightedItem.value)) {
                    onToggleItem(highlightedItem);
                }
                return false;
            default:
                return true;
        }
    }, [expandedKeys, onToggleItem]);
    var onInputChange = useCallback(function (inputValue, inputChangeTrigger) {
        safeCall(options.onInputChange, inputValue, inputChangeTrigger);
        if (!options.onInputChange) {
            var newFilteredItems = inputValue ? filterItems(items, inputValue, localFilter) : null;
            setFilteredItems(newFilteredItems);
            if (inputChangeTrigger === InputChangeTriggerAction.Input) {
                onExpandedChange(newFilteredItems ? expandAll(newFilteredItems, new Set()) : new Set());
            }
        }
    }, [items]);
    useEffect(function () {
        var _a;
        setExpandedKeys((_a = propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : defaultExpandedKeys) !== null && _a !== void 0 ? _a : new Set());
    }, [propsExpandedKeys]);
    return {
        items: currentItems,
        onInputChange: onInputChange,
        onToggleItem: onToggleItem,
        onKeyDown: onKeyDown,
        expandedKeys: expandedKeys,
        loadingKeys: loadingKeys
    };
}

function TreeMultiSelect(_a) {
    var defaultExpandedKeys = _a.defaultExpandedKeys, onExpandedChange = _a.onExpandedChange, onLoadChildren = _a.onLoadChildren, propsRenderItemContent = _a.renderItemContent, props = __rest(_a, ["defaultExpandedKeys", "onExpandedChange", "onLoadChildren", "renderItemContent"]);
    var _b = useTreeSelect({
        defaultExpandedKeys: defaultExpandedKeys,
        expandedKeys: props.expandedKeys,
        items: props.items,
        onExpandedChange: onExpandedChange,
        onInputChange: props.onInputChange,
        onKeyDown: props.onKeyDown,
        onLoadChildren: onLoadChildren
    }), items = _b.items, onKeyDown = _b.onKeyDown, onInputChange = _b.onInputChange, expandedKeys = _b.expandedKeys, loadingKeys = _b.loadingKeys, onToggleItem = _b.onToggleItem;
    // eslint-disable-next-line sonarjs/function-return-type
    var renderItemContent = function (optionContentProps) {
        var item = optionContentProps.item;
        var value = item.value;
        var treeOptionContentProps = __assign(__assign({}, optionContentProps), { isExpanded: expandedKeys.has(value), isLoading: loadingKeys.has(value), onToggleItem: onToggleItem });
        if (propsRenderItemContent) {
            return propsRenderItemContent(treeOptionContentProps);
        }
        return jsx(SelectOptionContent, __assign({}, treeOptionContentProps));
    };
    return (jsx(MultiSelect, __assign({}, props, { expandedKeys: expandedKeys, items: items, onInputChange: onInputChange, onKeyDown: onKeyDown, renderItemContent: renderItemContent })));
}

function expandToSelected(items, expandedKeys, selectedKey, parentKeys) {
    if (!selectedKey || expandedKeys.has(selectedKey)) {
        return expandedKeys;
    }
    for (var i = 0, len = items.length; i < len; i++) {
        var _a = items[i], value = _a.value, children = _a.children;
        if (value === selectedKey) {
            if (parentKeys) {
                parentKeys.forEach(function (k) { return expandedKeys.add(k); });
            }
            break;
        }
        if (children) {
            var parentKeySet = parentKeys !== null && parentKeys !== void 0 ? parentKeys : new Set();
            parentKeySet.add(value);
            expandToSelected(children, expandedKeys, selectedKey, parentKeySet);
            if (expandedKeys.has(value)) {
                break;
            }
        }
    }
    return expandedKeys;
}

function TreeSelect(_a) {
    var _b;
    var defaultExpandedKeys = _a.defaultExpandedKeys, onExpandedChange = _a.onExpandedChange, onLoadChildren = _a.onLoadChildren, propsRenderItemContent = _a.renderItemContent, props = __rest(_a, ["defaultExpandedKeys", "onExpandedChange", "onLoadChildren", "renderItemContent"]);
    var propsItems = props.items;
    var propsExpandedKeys = props.expandedKeys;
    var _c = useTreeSelect({
        defaultExpandedKeys: (_b = propsExpandedKeys !== null && propsExpandedKeys !== void 0 ? propsExpandedKeys : defaultExpandedKeys) !== null && _b !== void 0 ? _b : expandToSelected(propsItems, new Set(), props.value),
        expandedKeys: propsExpandedKeys,
        items: propsItems,
        onExpandedChange: onExpandedChange,
        onInputChange: props.onInputChange,
        onKeyDown: props.onKeyDown,
        onLoadChildren: onLoadChildren
    }), items = _c.items, onKeyDown = _c.onKeyDown, onInputChange = _c.onInputChange, expandedKeys = _c.expandedKeys, loadingKeys = _c.loadingKeys, onToggleItem = _c.onToggleItem;
    // eslint-disable-next-line sonarjs/function-return-type
    var renderItemContent = function (optionContentProps) {
        var item = optionContentProps.item;
        var value = item.value;
        var treeOptionContentProps = __assign(__assign({}, optionContentProps), { isExpanded: expandedKeys.has(value), isLoading: loadingKeys.has(value), onToggleItem: onToggleItem });
        if (propsRenderItemContent) {
            return propsRenderItemContent(treeOptionContentProps);
        }
        return jsx(SelectOptionContent, __assign({}, treeOptionContentProps));
    };
    return (jsx(Select, __assign({}, props, { expandedKeys: expandedKeys, items: items, onInputChange: onInputChange, onKeyDown: onKeyDown, renderItemContent: renderItemContent })));
}

var UploadItemStyle;
(function (UploadItemStyle) {
    UploadItemStyle["Card"] = "card";
    UploadItemStyle["Plain"] = "plain";
})(UploadItemStyle || (UploadItemStyle = {}));
function UploadItem(props) {
    var actions = props.actions, className = props.className, dataState = props.dataState, description = props.description, iconName = props.iconName, isDisabled = props.isDisabled, isInvalid = props.isInvalid, onNamePress = props.onNamePress, name = props.name, ref = props.ref, style = props.style, tooltipText = props.tooltipText, uploadProgress = props.uploadProgress;
    var _a = useDataState(dataState, isInvalid, props.isReadOnly), hasError = _a.hasError, errorMessage = _a.errorMessage;
    var errorMsg = errorMessage || props.errorMessage;
    var showErrorMessage = hasError && !!errorMsg;
    var translateProject = useTranslateProject();
    return (jsxs("div", __assign({ className: classNames("upload-item upload-item--".concat(style), className, {
            'upload-item--invalid': hasError,
            'upload-item--disabled': isDisabled
        }), ref: ref }, { children: [jsxs("div", __assign({ className: "upload-item__top" }, { children: [jsx(Icon, { className: "upload-item__icon", name: iconName, size: IconSize.LG }), jsxs("div", __assign({ className: "upload-item__content" }, { children: [jsxs("div", __assign({ className: "upload-item__heading" }, { children: [jsxs("div", __assign({ className: "upload-item__texts" }, { children: [jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipText }, { children: [jsx(Button, __assign({ className: "upload-item__name", isDisabled: isDisabled, onPress: onNamePress, size: Size.md, style: ButtonStyle.Link, variant: hasError ? ButtonVariant.Danger : ButtonVariant.Neutral }, { children: name })), jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: tooltipText }))] })), jsx(BodyText, __assign({ className: "upload-item__description", elementType: HTMLElementType.Div, size: Size.xs }, { children: description }))] })), isFunction(actions) ? actions(props) : actions] })), !isNullOrUndefined(uploadProgress) && (jsx(ProgressBar, { "aria-label": translateProject('progress'), value: uploadProgress, valueLabelPosition: Position.Right }))] }))] })), showErrorMessage && (jsxs(Fragment, { children: [jsx(Divider, { size: Size.sm }), jsx(HelpText, __assign({ variant: HelpTextVariant.Danger }, { children: errorMsg }))] }))] })));
}

function DragHandle(_a) {
    var ariaLabel = _a["aria-label"], className = _a.className, props = __rest(_a, ['aria-label', "className"]);
    var translateCommon = useTranslateCommon();
    return (jsx("button", __assign({}, props, { "aria-label": ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : translateCommon('move'), className: classNames('drag-handle', className) }, { children: jsx(Icon, { name: iconNames.DragIndicator, size: IconSize.LG }) })));
}

function ColumnItem(_a) {
    var isDraggable = _a.isDraggable, isSelected = _a.isSelected, item = _a.item, onSelectedChange = _a.onSelectedChange;
    var id = item.id, name = item.name, isSelectable = item.isSelectable;
    var _b = useSortable({
        id: id,
        disabled: !isDraggable
    }), transform = _b.transform, transition = _b.transition, setNodeRef = _b.setNodeRef, isDragging = _b.isDragging, attributes = _b.attributes, listeners = _b.listeners;
    var translateCommon = useTranslateCommon();
    var style = {
        transform: CSS.Transform.toString(transform),
        transition: transition,
        zIndex: isDragging ? 1 : 0,
        position: 'relative'
    };
    return (jsxs("div", __assign({ className: "column-item", ref: setNodeRef, style: style }, { children: [jsx(DragHandle, __assign({}, attributes, listeners, { disabled: !isDraggable })), jsx(Checkbox, { "aria-label": translateCommon('show'), isDisabled: isSelectable === false, isSelected: isSelected, onChange: onSelectedChange }), jsx(Label, __assign({ className: "column-item__label", size: Size.sm }, { children: jsx("strong", { children: name }) }))] })));
}

function useTranslateRowDragAndDrop() {
    return useTranslateFn('rowDragAndDrop');
}

function useTranslateColumnDragAndDrop() {
    return useTranslateFn('columnDragAndDrop');
}

var EmptyStateLayoutVariant;
(function (EmptyStateLayoutVariant) {
    EmptyStateLayoutVariant["Centered"] = "centered";
    EmptyStateLayoutVariant["LeftAligned"] = "left-aligned";
    EmptyStateLayoutVariant["SideBySide"] = "side-by-side";
})(EmptyStateLayoutVariant || (EmptyStateLayoutVariant = {}));
function EmptyState(_a) {
    var bodyText = _a.bodyText, buttonProps = _a.buttonProps, className = _a.className, iconName = _a.iconName, _b = _a.iconSize, iconSize = _b === void 0 ? IconSize.XXL : _b, _c = _a.layout, layout = _c === void 0 ? EmptyStateLayoutVariant.SideBySide : _c, ref = _a.ref, title = _a.title;
    var isLayoutCentered = layout === EmptyStateLayoutVariant.Centered;
    var isLayoutSideBySide = layout === EmptyStateLayoutVariant.SideBySide;
    return (jsxs("div", __assign({ className: classNames('empty-state', className), ref: ref }, { children: [iconName && isLayoutSideBySide && (jsx(Icon, { className: "empty-state__icon empty-state__icon--side-by-side", name: iconName, size: iconSize })), jsxs("div", __assign({ className: classNames('empty-state__main-content', {
                    'empty-state__main-content--centered': isLayoutCentered
                }) }, { children: [iconName && !isLayoutSideBySide && (jsx(Icon, { className: "empty-state__icon", name: iconName, size: iconSize })), jsxs("div", __assign({ className: classNames('empty-state__text-content', {
                            'empty-state__text-content--centered': isLayoutCentered
                        }) }, { children: [jsx(Label, __assign({ className: "empty-state__title-text", size: Size.lg }, { children: jsx("strong", { children: title }) })), jsx(BodyText, __assign({ className: classNames('empty-state__body-text', {
                                    'empty-state__body-text--centered': isLayoutCentered
                                }), size: Size.sm }, { children: bodyText }))] })), (buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.onPress) && (buttonProps === null || buttonProps === void 0 ? void 0 : buttonProps.children) && (jsx(Button, __assign({}, buttonProps, { size: Size.md }, { children: buttonProps.children })))] }))] })));
}

var ColumnConfiguratorVariant;
(function (ColumnConfiguratorVariant) {
    ColumnConfiguratorVariant["Basic"] = "basic";
    ColumnConfiguratorVariant["Extended"] = "extended";
})(ColumnConfiguratorVariant || (ColumnConfiguratorVariant = {}));
function isColumnSelected(id, columnVisibility) {
    var visibility = columnVisibility[id];
    return isUndefined(visibility) ? true : visibility;
}
var SEARCH_DELAY = 300;
function ColumnConfigurator(_a) {
    var actions = _a.actions, columns = _a.columns, propsColumnOrder = _a.columnOrder, propsColumnVisibility = _a.columnVisibility, children = _a.children, onColumnOrderChange = _a.onColumnOrderChange, onColumnVisibilityChange = _a.onColumnVisibilityChange, _b = _a.variant, variant = _b === void 0 ? ColumnConfiguratorVariant.Basic : _b;
    var _c = useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = useState(function () { return propsColumnOrder !== null && propsColumnOrder !== void 0 ? propsColumnOrder : columns.map(function (col) { return col.id; }); }), columnOrder = _d[0], setColumnOrder = _d[1];
    var _e = useState(propsColumnVisibility !== null && propsColumnVisibility !== void 0 ? propsColumnVisibility : {}), columnVisibility = _e[0], setColumnVisibility = _e[1];
    var columnsById = useMemo(function () {
        return columns.reduce(function (map, col) {
            map[col.id] = col;
            return map;
        }, {});
    }, [columns]);
    var selectedCount = useMemo(function () { return columnOrder.reduce(function (count, id) { return count + (isColumnSelected(id, columnVisibility) ? 1 : 0); }, 0); }, [columnVisibility, columnOrder]);
    var hiddenCount = useMemo(function () { return columns.reduce(function (count, col) { return count + (col.isHidden ? 1 : 0); }, 0); }, [columns]);
    var _f = useState(''), searchText = _f[0], setSearchText = _f[1];
    var filter = useFilter({ sensitivity: 'base' });
    var translateCommon = useTranslateCommon();
    var translateRowDragAndDrop = useTranslateRowDragAndDrop();
    var translateColumnDragAndDrop = useTranslateColumnDragAndDrop();
    var onDragEnd = function (event) {
        var active = event.active, over = event.over;
        var activeId = active === null || active === void 0 ? void 0 : active.id;
        var overId = over === null || over === void 0 ? void 0 : over.id;
        if (activeId && overId && activeId !== overId) {
            var oldIndex = columnOrder.indexOf(activeId);
            var newIndex = columnOrder.indexOf(overId);
            var newColumnOrder = arrayMove(columnOrder, oldIndex, newIndex);
            setColumnOrder(newColumnOrder);
            safeCall(onColumnOrderChange, newColumnOrder);
        }
    };
    var onSearch = useCallback(debounce(setSearchText, SEARCH_DELAY), []);
    var sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    }));
    var filteredColumnOrder = useMemo(function () {
        return columnOrder.filter(function (id) {
            var item = columnsById[id];
            return !item.isHidden && (!searchText || filter.contains(item.name, searchText));
        });
    }, [columnOrder, filter, searchText]);
    var filteredColumnCount = filteredColumnOrder.length;
    var renderItems = function () {
        var columnItems = filteredColumnOrder.map(function (id) {
            var item = columnsById[id];
            return (jsx(ColumnItem, { isDraggable: !searchText, isSelected: isColumnSelected(id, columnVisibility), item: item, onSelectedChange: function (isSelected) {
                    var _a;
                    var newColumnVisibility = __assign(__assign({}, columnVisibility), (_a = {}, _a[id] = isSelected, _a));
                    setColumnVisibility(newColumnVisibility);
                    safeCall(onColumnVisibilityChange, newColumnVisibility);
                } }, id));
        });
        if (columnItems.length === 0) {
            return (jsx(EmptyState, { bodyText: translateCommon('noColumnsFoundInfo'), title: translateCommon('noColumnsFound') }));
        }
        return (jsx(DndContext, __assign({ accessibility: {
                announcements: {
                    onDragStart: function (_a) {
                        var active = _a.active;
                        return translateColumnDragAndDrop('onDragStart', {
                            title: columnsById[active.id].name
                        });
                    },
                    onDragOver: function (_a) {
                        var active = _a.active, over = _a.over;
                        if (over) {
                            return translateColumnDragAndDrop('onDragOver', {
                                activeTitle: columnsById[active.id].name,
                                overTitle: columnsById[over.id].name
                            });
                        }
                        return translateColumnDragAndDrop('onDragOverEnd', {
                            title: columnsById[active.id].name
                        });
                    },
                    onDragEnd: function (_a) {
                        var active = _a.active, over = _a.over;
                        if (over) {
                            return translateColumnDragAndDrop('onDragEndOver', {
                                activeTitle: columnsById[active.id].name,
                                overTitle: columnsById[over.id].name
                            });
                        }
                        return translateColumnDragAndDrop('onDragEnd', {
                            title: columnsById[active.id].name
                        });
                    },
                    onDragCancel: function (_a) {
                        var active = _a.active;
                        return translateColumnDragAndDrop('onDragCancel', {
                            title: columnsById[active.id].name
                        });
                    }
                },
                screenReaderInstructions: {
                    draggable: translateRowDragAndDrop('instructions')
                }
            }, collisionDetection: closestCenter, modifiers: [restrictToParentElement, restrictToVerticalAxis], onDragEnd: onDragEnd, sensors: sensors }, { children: jsx(SortableContext, __assign({ items: columnOrder, strategy: verticalListSortingStrategy }, { children: columnItems })) })));
    };
    useEffect(function () {
        setColumnOrder(propsColumnOrder !== null && propsColumnOrder !== void 0 ? propsColumnOrder : columns.map(function (col) { return col.id; }));
    }, [propsColumnOrder]);
    useEffect(function () {
        setColumnVisibility(propsColumnVisibility !== null && propsColumnVisibility !== void 0 ? propsColumnVisibility : {});
    }, [propsColumnVisibility]);
    useEffect(function () {
        if (isOpen) {
            announce(translateCommon('columnsAvailable', { count: filteredColumnCount }));
        }
    }, [isOpen, filteredColumnCount]);
    var visibilityStatusText = "".concat(translateCommon('showColumns'), " (").concat(selectedCount - hiddenCount, "/").concat(columnOrder.length - hiddenCount, ")");
    var overlay;
    if (variant === ColumnConfiguratorVariant.Extended) {
        overlay = (jsxs(Drawer, __assign({}, actions, { className: "column-configurator-drawer", headerDetails: jsx(Label, __assign({ size: Size.md }, { children: visibilityStatusText })), title: translateCommon('customizeColumns') }, { children: [jsx(SearchField, { "aria-label": translateCommon('searchColumnTitle'), autoFocus: true, onChange: onSearch, placeholder: translateCommon('searchColumnTitle'), size: Size.sm }), jsx("div", __assign({ className: "column-configurator-drawer__items" }, { children: renderItems() }))] })));
    }
    else {
        overlay = (jsx(Popover, __assign({ className: "column-configurator-popover", maxHeight: 280, padding: 0, placement: "bottom left" }, { children: jsxs("div", __assign({ className: "column-configurator-dialog-content" }, { children: [jsx(Header, __assign({ className: "column-configurator-dialog__header" }, { children: jsx(Label, __assign({ size: Size.md }, { children: jsx("strong", { children: visibilityStatusText }) })) })), jsx("div", __assign({ className: "column-configurator-dialog__body" }, { children: renderItems() }))] })) })));
    }
    return (jsxs(DialogTrigger, __assign({ onOpenChange: setIsOpen }, { children: [children, overlay] })));
}

var DataCardStyle;
(function (DataCardStyle) {
    DataCardStyle["Card"] = "card";
    DataCardStyle["Plain"] = "plain";
})(DataCardStyle || (DataCardStyle = {}));
var DataCardActionElement;
(function (DataCardActionElement) {
    DataCardActionElement[DataCardActionElement["Button"] = 0] = "Button";
    DataCardActionElement[DataCardActionElement["Self"] = 1] = "Self";
})(DataCardActionElement || (DataCardActionElement = {}));
var DataCardAlertLevel;
(function (DataCardAlertLevel) {
    DataCardAlertLevel["Warning"] = "warning";
    DataCardAlertLevel["Danger"] = "danger";
})(DataCardAlertLevel || (DataCardAlertLevel = {}));

var _a$3;
var valueSize$1 = (_a$3 = {},
    _a$3[Size.sm] = Size.xs,
    _a$3[Size.md] = Size.sm,
    _a$3[Size.lg] = Size.md,
    _a$3);
function SkeletonDataCard(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, hasHeaderIcon = _a.hasHeaderIcon, hasHeaderText = _a.hasHeaderText, hasVisualization = _a.hasVisualization, minWidth = _a.minWidth, size = _a.size, style = _a.style, ref = _a.ref;
    return (jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames("skeleton-data-card skeleton-data-card--".concat(style, " skeleton-data-card--").concat(size), className), ref: ref, style: { minWidth: minWidth } }, { children: [hasHeaderText && (jsxs("div", __assign({ className: "skeleton-data-card__header" }, { children: [hasHeaderIcon && (jsx(Skeleton, { "aria-hidden": false, height: 16, shape: SkeletonShape.Rectangle, style: { flexShrink: 0 }, width: 16 })), jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "60%" })] }))), jsxs("div", __assign({ className: "skeleton-data-card__body" }, { children: [jsx(SkeletonText, { "aria-hidden": false, size: valueSize$1[size], type: SkeletonTextType.Title }), jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "50%" })] })), hasVisualization && (jsx(Skeleton, { "aria-hidden": false, height: 128, shape: SkeletonShape.Rectangle, width: "100%" }))] }), "".concat(hasHeaderText, "-").concat(hasHeaderIcon, "-").concat(hasVisualization)));
}

var _a$2, _b;
var valueSize = (_a$2 = {},
    _a$2[Size.sm] = Size.xs,
    _a$2[Size.md] = Size.sm,
    _a$2[Size.lg] = Size.md,
    _a$2);
var headerIconSize = (_b = {},
    _b[Size.sm] = IconSize.XS,
    _b[Size.md] = IconSize.SM,
    _b[Size.lg] = IconSize.MD,
    _b);
function DataCard(_a) {
    var _b;
    var action = _a.action, alert = _a.alert, badgeProps = _a.badgeProps, className = _a.className, description = _a.description, headerIconName = _a.headerIconName, headerText = _a.headerText, isDisabled = _a.isDisabled, isSkeleton = _a.isSkeleton, minWidth = _a.minWidth, ref = _a.ref, size = _a.size, style = _a.style, value = _a.value, visualization = _a.visualization;
    var translateCommon = useTranslateCommon();
    if (isSkeleton) {
        return (jsx(SkeletonDataCard, { hasHeaderIcon: !!headerIconName, hasHeaderText: !!headerText, hasVisualization: !!visualization, minWidth: minWidth, size: size, style: style }));
    }
    var showHeader = !!headerText || !!badgeProps;
    var alertLevel = alert === null || alert === void 0 ? void 0 : alert.level;
    var content = (jsxs(Fragment, { children: [showHeader && (jsxs("div", __assign({ className: "data-card__header" }, { children: [headerText && (jsxs("div", __assign({ className: "data-card__header-left" }, { children: [headerIconName && (jsx(Icon, { className: "data-card__header-icon", name: headerIconName, size: headerIconSize[size] })), jsx(Label, __assign({ className: "data-card__header-text", size: Size.md }, { children: headerText }))] }))), badgeProps && (jsx(Badge, __assign({ className: "data-card__badge", isDisabled: isDisabled && style === DataCardStyle.Card }, badgeProps)))] }))), jsxs("div", __assign({ className: "data-card__body" }, { children: [jsxs("div", __assign({ className: "data-card__value-wrapper" }, { children: [jsx(Title, __assign({ className: "data-card__value", size: valueSize[size] }, { children: jsx("strong", { children: value }) }), "value"), alert && alertLevel && (jsx(Icon, { ariaLabel: (_b = alert.ariaLabel) !== null && _b !== void 0 ? _b : translateCommon(alertLevel), className: "data-card__alert-icon--".concat(alertLevel), name: alertLevel === DataCardAlertLevel.Danger ?
                                    iconNames.EmergencyHomeFilled
                                    : iconNames.MinusCircleFilled, size: IconSize.SM }))] })), jsx(Label, __assign({ className: "data-card__description", size: Size.md }, { children: description }))] })), action && action.element === DataCardActionElement.Button && (jsx(Button, __assign({ isDisabled: isDisabled, size: Size.sm, style: ButtonStyle.Fill, variant: ButtonVariant.Neutral }, { children: action.text }))), visualization && jsx("div", __assign({ className: "data-card__visualization" }, { children: visualization }))] }));
    var cssClassName = classNames("data-card data-card--".concat(style, " data-card--").concat(size), className, {
        'data-card--disabled': isDisabled
    });
    // Self-action is only allowed for Card variation.
    if (style === DataCardStyle.Card && action && action.element === DataCardActionElement.Self && !isDisabled) {
        return (jsx(FocusRing, __assign({ focusRingClass: "data-card--focused" }, { children: jsx(TriggerElement, __assign({ className: cssClassName, elementType: HTMLElementType.Div, onPress: action.onPress, ref: ref }, { children: content })) })));
    }
    return (jsx("div", __assign({ className: cssClassName, ref: ref, style: { minWidth: minWidth } }, { children: content })));
}

function DayOfMonth(_a) {
    var children = _a.children, className = _a.className, customContent = _a.customContent, isCompleted = _a.isCompleted, isDisabled = _a.isDisabled, isFocused = _a.isFocused, isInteractive = _a.isInteractive, isSelected = _a.isSelected, isToday = _a.isToday, isUnavailable = _a.isUnavailable, props = __rest(_a, ["children", "className", "customContent", "isCompleted", "isDisabled", "isFocused", "isInteractive", "isSelected", "isToday", "isUnavailable"]);
    return (jsxs("div", __assign({ className: classNames('day-of-month', className), "data-completed": !!isCompleted || undefined, "data-disabled": !!isDisabled || undefined, "data-focused": !!isFocused || undefined, "data-interactive": !!isInteractive || undefined, "data-selected": !!isSelected || undefined, "data-today": !!isToday || undefined, "data-unavailable": !!isUnavailable || undefined }, props, { children: [customContent, jsx(Label, __assign({ size: Size.md }, { children: children }))] })));
}

function DateTile(_a) {
    var _b;
    var propsAriaLabel = _a.ariaLabel, className = _a.className, _c = _a.completedIconName, completedIconName = _c === void 0 ? iconNames.CheckFilled : _c, date = _a.date, isCompleted = _a.isCompleted, isLocked = _a.isLocked, isSelected = _a.isSelected, isToday$1 = _a.isToday, menuProps = _a.menuProps, onPress = _a.onPress, propsRenderDayOfMonth = _a.renderDayOfMonth, secondaryText = _a.secondaryText, tooltipProps = _a.tooltipProps;
    var timeZone = useLocales().timeZone;
    var languageDay = useLanguageDay();
    var translateCommon = useTranslateCommon();
    var dayObj = languageDay(date);
    var isDateToday = isToday$1 !== null && isToday$1 !== void 0 ? isToday$1 : isToday(parseDate(dayObj.format('YYYY-MM-DD')), timeZone);
    var isFocusable = !!tooltipProps || !!onPress || !!isLocked || !!isCompleted;
    var ariaLabel = '', tooltipContent = '';
    var getDefaultAriaLabel = function () {
        var text = dayObj.format('dddd, LL');
        if (isDateToday) {
            text += ", ".concat(translateCommon('today'));
        }
        if (isSelected) {
            text += ", ".concat(translateCommon('selected'));
        }
        return text;
    };
    // eslint-disable-next-line sonarjs/function-return-type
    var renderDayOfMonth = function (_a) {
        var isFocusVisible = _a.isFocusVisible;
        var dayOfMonthProps = {
            children: dayObj.date(),
            isCompleted: isCompleted,
            isFocused: isFocusVisible,
            isInteractive: !!onPress,
            isSelected: isSelected,
            isToday: isDateToday
        };
        if (propsRenderDayOfMonth) {
            return propsRenderDayOfMonth(dayOfMonthProps);
        }
        return jsx(DayOfMonth, __assign({}, dayOfMonthProps));
    };
    if (isFunction(propsAriaLabel)) {
        ariaLabel = propsAriaLabel(getDefaultAriaLabel());
    }
    else if (propsAriaLabel) {
        ariaLabel = propsAriaLabel;
    }
    else {
        ariaLabel = getDefaultAriaLabel();
    }
    if (tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.content) {
        tooltipContent = tooltipProps.content;
    }
    else {
        var parts = [];
        if (isCompleted) {
            parts.push(translateCommon('completed'));
        }
        if (isLocked) {
            parts.push(translateCommon('locked'));
        }
        tooltipContent = capitalizeFirstLetter(parts.join(', ').toLowerCase());
    }
    return (jsxs("div", __assign({ className: classNames('date-tile', className), "data-completed": !!isCompleted || undefined, "data-interactive": !!onPress || undefined, "data-locked": !!isLocked || undefined, "data-selected": !!isSelected || undefined, "data-today": isDateToday || undefined }, { children: [jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipContent }, { children: [jsx(TriggerElement, __assign({ "aria-label": ariaLabel, className: "date-tile__start", excludeFromTabOrder: !isFocusable, onPress: function () {
                            safeCall(onPress, date);
                        } }, { children: function (renderProps) { return (jsxs(Fragment, { children: [jsx("div", __assign({ className: "date-tile__date-area" }, { children: renderDayOfMonth(renderProps) })), jsxs("div", __assign({ className: "date-tile__texts" }, { children: [jsxs("div", __assign({ className: "date-tile__primary-text-row" }, { children: [jsx(Label, __assign({ className: "date-tile__weekday", size: Size.sm }, { children: capitalizeFirstLetter(dayObj.format('ddd')) })), isCompleted && (jsx(Icon, { className: "date-tile__primary-icon", name: completedIconName, size: IconSize.SM }))] })), (!!secondaryText || !!isLocked) && (jsxs("div", __assign({ className: "date-tile__secondary-text-row" }, { children: [secondaryText && (jsx(Label, __assign({ className: "date-tile__secondary-text", size: Size.sm }, { children: secondaryText }))), isLocked && (jsx(Icon, { className: "date-tile__secondary-icon", name: iconNames.Lock, size: IconSize.XS }))] })))] }))] })); } })), jsx(Tooltip, __assign({ headerText: tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.headerText, type: (_b = tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.type) !== null && _b !== void 0 ? _b : TooltipType.Plain }, { children: tooltipContent }))] })), menuProps && (jsx(Menu, __assign({}, menuProps, { children: jsx(IconButton, { "aria-label": translateCommon('actions'), iconName: iconNames.MoreVert, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }) }))), isSelected && jsx(Divider, { className: "date-tile__divider", size: Size.md })] })));
}

function DataTableCellContent(_a) {
    var _b = _a.alignment, alignment = _b === void 0 ? Alignment.start : _b, children = _a.children, className = _a.className;
    return (jsx("div", __assign({ className: classNames('data-table__cell-content', "data-table__cell-content--align-".concat(alignment), className) }, { children: children })));
}

function getIndexOfChangedColumnSort(newSorting, oldSorting) {
    var newLen = newSorting.length;
    var oldLen = oldSorting.length;
    if (newLen === oldLen) {
        for (var i = 0, len = newLen; i < len; i++) {
            if (newSorting[i].desc !== oldSorting[i].desc) {
                return i;
            }
        }
    }
    else if (newLen > oldLen) {
        return newLen - 1;
    }
    return -1;
}

function getColumnPinningStyles(column) {
    var _a;
    var _b, _c, _d, _e;
    var pinSide = column.getIsPinned();
    var options = (_b = column.columnDef.meta) === null || _b === void 0 ? void 0 : _b.columnPinningOptions;
    if (pinSide && ((_c = options === null || options === void 0 ? void 0 : options[pinSide]) === null || _c === void 0 ? void 0 : _c.isSticky)) {
        return _a = {},
            _a[pinSide] = "".concat((_e = (_d = options === null || options === void 0 ? void 0 : options[pinSide]) === null || _d === void 0 ? void 0 : _d.offset) !== null && _e !== void 0 ? _e : 0, "px"),
            _a.position = 'sticky',
            _a.zIndex = 1,
            _a;
    }
    return undefined;
}

var DataTableRowDragMode;
(function (DataTableRowDragMode) {
    DataTableRowDragMode["Flat"] = "flat";
    DataTableRowDragMode["Nested"] = "nested";
})(DataTableRowDragMode || (DataTableRowDragMode = {}));
var DropPosition;
(function (DropPosition) {
    DropPosition["After"] = "after";
    DropPosition["Before"] = "before";
    DropPosition["Inside"] = "inside";
})(DropPosition || (DropPosition = {}));

function getRowDropCSSClass(rowId, draggedRowData) {
    if (!draggedRowData) {
        return '';
    }
    var active = draggedRowData.active, over = draggedRowData.over, dropPosition = draggedRowData.dropPosition;
    var activeId = active.id;
    var overId = over === null || over === void 0 ? void 0 : over.id;
    if (dropPosition && overId && activeId !== overId && overId === rowId) {
        return "data-table__row--drop-".concat(dropPosition);
    }
    return '';
}
function DataTableRow(_a) {
    var _b, _c;
    var draggedRowData = _a.draggedRowData, isDraggable = _a.isDraggable, row = _a.row, _d = _a.rowDragMode, rowDragMode = _d === void 0 ? DataTableRowDragMode.Flat : _d, table = _a.table;
    var rowId = row.id;
    var _e = useSortable({
        id: rowId,
        data: {
            row: row
        }
    }), transform = _e.transform, transition = _e.transition, setNodeRef = _e.setNodeRef, isDragging = _e.isDragging;
    var tableMeta = table.options.meta;
    var isSelected = row.getIsSelected();
    var isDisabled = (_b = tableMeta === null || tableMeta === void 0 ? void 0 : tableMeta.isRowDisabled) === null || _b === void 0 ? void 0 : _b.call(tableMeta, row);
    var rowProps = (_c = tableMeta === null || tableMeta === void 0 ? void 0 : tableMeta.getRowProps) === null || _c === void 0 ? void 0 : _c.call(tableMeta, row);
    var isGhost = isDragging && rowDragMode === DataTableRowDragMode.Nested;
    var rowDropCSSClass = getRowDropCSSClass(rowId, draggedRowData);
    var style;
    if (isDraggable && rowDragMode === DataTableRowDragMode.Flat) {
        style = {
            transform: CSS.Translate.toString(transform),
            transition: transition,
            zIndex: isDragging ? 1 : 0,
            position: 'relative'
        };
    }
    return (jsx("tr", __assign({}, rowProps, { "aria-disabled": isDisabled, "aria-selected": isSelected, className: classNames('data-table__row', rowDropCSSClass, rowProps === null || rowProps === void 0 ? void 0 : rowProps.className, {
            'data-table__row--selected': isSelected,
            'data-table__row--disabled': isDisabled,
            'data-table__row--ghost': isGhost
        }), ref: setNodeRef, style: __assign(__assign({}, rowProps === null || rowProps === void 0 ? void 0 : rowProps.style), style) }, { children: row.getVisibleCells().map(function (cell) {
            var _a, _b, _c, _d;
            var columnDef = cell.column.columnDef;
            var context = cell.getContext();
            var _e = (_c = (_b = (_a = columnDef.meta) === null || _a === void 0 ? void 0 : _a.getCellProps) === null || _b === void 0 ? void 0 : _b.call(_a, context)) !== null && _c !== void 0 ? _c : {}, colSpan = _e.colSpan, cellClassName = _e.className, cellStyle = _e.style, cellProps = __rest(_e, ["colSpan", "className", "style"]);
            if (colSpan === 0) {
                return null;
            }
            return (jsx("td", __assign({ className: classNames('data-table__cell', cellClassName), colSpan: colSpan, style: __assign(__assign({}, getColumnPinningStyles(cell.column)), cellStyle) }, cellProps, { children: jsx(DataTableCellContent, __assign({ alignment: (_d = columnDef.meta) === null || _d === void 0 ? void 0 : _d.alignment }, { children: flexRender(columnDef.cell, context) })) }), cell.id));
        }) })));
}

function DataTableHeaderCell(_a) {
    var _b;
    var _c;
    var className = _a.className, header = _a.header, rowSpan = _a.rowSpan, _d = _a.showContent, showContent = _d === void 0 ? true : _d, props = __rest(_a, ["className", "header", "rowSpan", "showContent"]);
    var column = header.column, colSpan = header.colSpan;
    var isSortable = showContent && column.getCanSort();
    var _e = (_c = column.columnDef.meta) !== null && _c !== void 0 ? _c : {}, _f = _e.alignment, alignment = _f === void 0 ? Alignment.start : _f, isEditable = _e.isEditable, headerStyle = _e.headerStyle;
    var sortHandler = isSortable ? column.getToggleSortingHandler() : undefined;
    var content = showContent ? flexRender(column.columnDef.header, header.getContext()) : null, sortIcon = null;
    if (isString(content)) {
        content = (jsx(Label, __assign({ size: Size.sm }, { children: jsx("strong", { children: content }) })));
    }
    if (isSortable) {
        var sortDirection = column.getIsSorted();
        var iconName = void 0;
        switch (sortDirection) {
            case SortDirection.Ascending:
                iconName = iconNames.ArrowUpward;
                break;
            case SortDirection.Descending:
                iconName = iconNames.ArrowDownward;
                break;
            default:
                iconName = iconNames.UnfoldMore;
                break;
        }
        sortIcon = jsx(Icon, { className: "data-table__sort-icon", name: iconName, size: IconSize.MD });
    }
    return (jsx("th", __assign({}, props, { className: classNames('data-table__header-cell', className, (_b = {
                'data-table__header-cell--sortable': isSortable
            },
            _b["data-table__header-cell--editable-".concat(alignment)] = isEditable,
            _b)), colSpan: colSpan, onClick: sortHandler, onKeyDown: sortHandler ?
            function (e) {
                var key = e.key;
                if (key === KeyboardEventKey.Enter || key === KeyboardEventKey.Space) {
                    sortHandler(e);
                }
            }
            : undefined, role: "columnheader", rowSpan: rowSpan, scope: "col", style: __assign(__assign({}, getColumnPinningStyles(header.column)), headerStyle), tabIndex: isSortable ? 0 : undefined }, { children: jsxs(DataTableCellContent, __assign({ alignment: alignment }, { children: [content, sortIcon] })) })));
}

var DataTableDisplayColumnID;
(function (DataTableDisplayColumnID) {
    DataTableDisplayColumnID["Checkbox"] = "checkbox";
    DataTableDisplayColumnID["DragHandle"] = "drag-handle";
})(DataTableDisplayColumnID || (DataTableDisplayColumnID = {}));

var DEFAULT_COLUMN_COUNT = 5;
var DEFAULT_ROW_COUNT = 5;
function SkeletonDataTable(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, _b = _a.columnCount, columnCount = _b === void 0 ? DEFAULT_COLUMN_COUNT : _b, hasRowSelection = _a.hasRowSelection, ref = _a.ref, _c = _a.rowCount, rowCount = _c === void 0 ? DEFAULT_ROW_COUNT : _c;
    var templateRows = "repeat(".concat(rowCount, ", auto)");
    var templateCols = hasRowSelection ? "auto repeat(".concat(columnCount - 1, ", 1fr)") : "repeat(".concat(columnCount, ", 1fr)");
    return (jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-data-table', className), ref: ref, style: { gridTemplate: "".concat(templateRows, " / ").concat(templateCols) } }, { children: [Array.from({ length: columnCount }, function (_, colIdx) { return (jsx("div", __assign({ className: "skeleton-data-table__th" }, { children: colIdx === 0 && hasRowSelection ?
                    jsx(Skeleton, { "aria-hidden": false, height: 16, shape: SkeletonShape.Rectangle, width: 16 })
                    : jsx(SkeletonText, { "aria-hidden": false, size: Size.sm, type: SkeletonTextType.Label }) }), "th".concat(colIdx))); }), Array.from({ length: rowCount }, function (_x, rowIdx) {
                return Array.from({ length: columnCount }, function (_y, colIdx) { return (jsx("div", __assign({ className: "skeleton-data-table__td" }, { children: colIdx === 0 && hasRowSelection ?
                        jsx(Skeleton, { "aria-hidden": false, height: 16, shape: SkeletonShape.Rectangle, width: 16 })
                        : jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label }) }), "td".concat(rowIdx, "-").concat(colIdx))); });
            })] }), "".concat(rowCount, "-").concat(columnCount, "-").concat(hasRowSelection)));
}

function DataTableRowDragOverlay(_a) {
    var _b, _c, _d, _e, _f, _g;
    var draggedRowData = _a.draggedRowData;
    var active = draggedRowData.active;
    var row = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.row;
    if (!row) {
        return null;
    }
    var cells = row.getVisibleCells();
    var cellsToRender = [];
    for (var i = 0, len = cells.length; i < len; i++) {
        var cell = cells[i];
        var column = cell.column;
        var context = cell.getContext();
        var columnDef = column.columnDef;
        var isDragHandle = column.id === DataTableDisplayColumnID.DragHandle;
        var isRowTitle = (_c = columnDef.meta) === null || _c === void 0 ? void 0 : _c.isRowTitle;
        var _h = (_f = (_e = (_d = columnDef.meta) === null || _d === void 0 ? void 0 : _d.getCellProps) === null || _e === void 0 ? void 0 : _e.call(_d, context)) !== null && _f !== void 0 ? _f : {}, cellClassName = _h.className, cellStyle = _h.style, cellProps = __rest(_h, ["className", "style"]);
        if (isDragHandle || isRowTitle) {
            var cellNode = (jsx("td", __assign({ className: classNames('data-table__cell', cellClassName), style: cellStyle }, cellProps, { children: jsx(DataTableCellContent, __assign({ alignment: (_g = columnDef.meta) === null || _g === void 0 ? void 0 : _g.alignment }, { children: flexRender(columnDef.cell, context) })) }), cell.id));
            if (isDragHandle) {
                cellsToRender.unshift(cellNode);
            }
            else {
                cellsToRender.push(cellNode);
            }
        }
        if (cellsToRender.length === 2) {
            break;
        }
    }
    return (jsx("table", __assign({ className: "data-table__row-drag-overlay" }, { children: jsx("tbody", { children: jsx("tr", __assign({ className: "data-table__row" }, { children: cellsToRender })) }) })));
}

var eventKeys$1 = [KeyboardEventKey.ArrowDown, KeyboardEventKey.ArrowUp];
var Direction$1;
(function (Direction) {
    Direction[Direction["Up"] = -1] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
})(Direction$1 || (Direction$1 = {}));
var X_OFFSET = 30;
var nestedDataTableKeyboardCoordinateGetter = function (event, args) {
    event.preventDefault();
    var eventKey = event.key;
    var _a = args.context, active = _a.active, collisionRect = _a.collisionRect, droppableContainers = _a.droppableContainers, droppableRects = _a.droppableRects;
    if (!eventKeys$1.includes(eventKey) || !active || !collisionRect) {
        return;
    }
    var filteredContainers = [];
    var activeId = active.id;
    var heightPercentage = 0.25;
    var direction;
    droppableContainers.getEnabled().forEach(function (entry) {
        if (!entry || (entry === null || entry === void 0 ? void 0 : entry.disabled)) {
            return;
        }
        var entryId = entry.id;
        var rect = droppableRects.get(entryId);
        if (!rect) {
            return;
        }
        switch (eventKey) {
            case KeyboardEventKey.ArrowDown:
                if (entryId !== activeId && collisionRect.top < rect.top + rect.height * heightPercentage) {
                    filteredContainers.push(entry);
                }
                direction = Direction$1.Down;
                break;
            case KeyboardEventKey.ArrowUp:
                if (entryId !== activeId && collisionRect.top > rect.top - rect.height * heightPercentage) {
                    filteredContainers.push(entry);
                }
                direction = Direction$1.Up;
                break;
        }
    });
    var collisions = closestCorners({
        active: active,
        collisionRect: collisionRect,
        droppableRects: droppableRects,
        droppableContainers: filteredContainers,
        pointerCoordinates: null
    });
    var closestId = getFirstCollision(collisions, 'id');
    if (closestId !== null) {
        var newDroppable = droppableContainers.get(closestId);
        var newRect = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.rect.current;
        if (newRect && direction) {
            var activeTop = collisionRect.top;
            var newRectTop = newRect.top, newRectHeight = newRect.height;
            var afterThreshold = newRectTop + newRectHeight * heightPercentage;
            var beforeThreshold = newRectTop - newRectHeight * heightPercentage;
            var y = void 0;
            if (direction === Direction$1.Up) {
                if (activeTop > afterThreshold + 1) {
                    y = afterThreshold + 1;
                }
                else if (activeTop > newRectTop) {
                    y = newRectTop;
                }
                else {
                    y = beforeThreshold - 1;
                }
            }
            else if (direction === Direction$1.Down) {
                if (activeTop < beforeThreshold - 1) {
                    y = beforeThreshold - 1;
                }
                else if (activeTop < newRectTop) {
                    y = newRectTop;
                }
                else {
                    y = afterThreshold + 1;
                }
            }
            if (y !== undefined) {
                return {
                    x: newRect.left + X_OFFSET,
                    y: y
                };
            }
        }
    }
};

function detectTableFeatures(table) {
    var allColumns = table.getAllFlatColumns();
    var features = {
        hasFooter: false,
        hasDraggableRows: false
    };
    for (var i = 0, len = allColumns.length; i < len; i++) {
        var col = allColumns[i];
        if (col.columnDef.footer) {
            features.hasFooter = true;
        }
        if (col.id === DataTableDisplayColumnID.DragHandle) {
            features.hasDraggableRows = true;
        }
    }
    return features;
}
function getRowTitle(rowId, table, getFn) {
    return getFn ? getFn(table.getRow(rowId).original) : rowId;
}
function getColumnTitle(columnId, table) {
    var _a, _b, _c, _d;
    return (_d = (_c = (_b = (_a = table.getColumn(columnId)) === null || _a === void 0 ? void 0 : _a.columnDef) === null || _b === void 0 ? void 0 : _b.meta) === null || _c === void 0 ? void 0 : _c.title) !== null && _d !== void 0 ? _d : columnId;
}
var SYNC_SCROLL_DELAY_MS = 15;
// eslint-disable-next-line max-statements
function DataTable(_a) {
    var bottomPaginationProps = _a.bottomPaginationProps, className = _a.className, columnConfiguratorOptions = _a.columnConfiguratorOptions, initialColumnOrder = _a.columnOrder, initialColumnPinning = _a.columnPinning, columns = _a.columns, initialColumnVisibility = _a.columnVisibility, data = _a.data, enableParentRowSelectionSync = _a.enableParentRowSelectionSync, _b = _a.enableRowSelection, enableRowSelection = _b === void 0 ? true : _b, initialExpanded = _a.expanded, getRowCanExpand = _a.getRowCanExpand, getRowId = _a.getRowId, getRowProps = _a.getRowProps, getRowTitleFn = _a.getRowTitle, getSubRows = _a.getSubRows, initialGrouping = _a.grouping, isRowDisabled = _a.isRowDisabled, isRowLoading = _a.isRowLoading, isSkeleton = _a.isSkeleton, onColumnOrderChange = _a.onColumnOrderChange, onColumnVisibilityChange = _a.onColumnVisibilityChange, onExpandedChange = _a.onExpandedChange, onDataEdit = _a.onDataEdit, onPaginationChange = _a.onPaginationChange, onRowSelectionChange = _a.onRowSelectionChange, onSortingChange = _a.onSortingChange, pageSizes = _a.pageSizes, initialPagination = _a.pagination, initialRowSelection = _a.rowSelection, ref = _a.ref, reorderableColumns = _a.reorderableColumns, _c = _a.rowDragMode, rowDragMode = _c === void 0 ? DataTableRowDragMode.Flat : _c, skeletonProps = _a.skeletonProps, initialSorting = _a.sorting, sortingColumnSelectionPriority = _a.sortingColumnSelectionPriority, sortingStrategy = _a.sortingStrategy, topPaginationProps = _a.topPaginationProps, totalRowCount = _a.totalRowCount, wrapperClassName = _a.wrapperClassName, props = __rest(_a, ["bottomPaginationProps", "className", "columnConfiguratorOptions", "columnOrder", "columnPinning", "columns", "columnVisibility", "data", "enableParentRowSelectionSync", "enableRowSelection", "expanded", "getRowCanExpand", "getRowId", "getRowProps", "getRowTitle", "getSubRows", "grouping", "isRowDisabled", "isRowLoading", "isSkeleton", "onColumnOrderChange", "onColumnVisibilityChange", "onExpandedChange", "onDataEdit", "onPaginationChange", "onRowSelectionChange", "onSortingChange", "pageSizes", "pagination", "rowSelection", "ref", "reorderableColumns", "rowDragMode", "skeletonProps", "sorting", "sortingColumnSelectionPriority", "sortingStrategy", "topPaginationProps", "totalRowCount", "wrapperClassName"]);
    var _d = useState(initialSorting !== null && initialSorting !== void 0 ? initialSorting : []), sorting = _d[0], setSorting = _d[1];
    var _e = useState(initialRowSelection !== null && initialRowSelection !== void 0 ? initialRowSelection : {}), rowSelection = _e[0], setRowSelection = _e[1];
    var _f = useState(initialPagination !== null && initialPagination !== void 0 ? initialPagination : { pageIndex: 0, pageSize: 0 }), pagination = _f[0], setPagination = _f[1];
    var _g = useState(initialExpanded !== null && initialExpanded !== void 0 ? initialExpanded : {}), expanded = _g[0], setExpanded = _g[1];
    var grouping = useMemo(function () { return initialGrouping !== null && initialGrouping !== void 0 ? initialGrouping : []; }, [initialGrouping]);
    var columnPinning = useMemo(function () { return initialColumnPinning !== null && initialColumnPinning !== void 0 ? initialColumnPinning : {}; }, [initialColumnPinning]);
    var _h = useState(initialColumnOrder !== null && initialColumnOrder !== void 0 ? initialColumnOrder : []), columnOrder = _h[0], setColumnOrder = _h[1];
    var _j = useState(initialColumnVisibility !== null && initialColumnVisibility !== void 0 ? initialColumnVisibility : {}), columnVisibility = _j[0], setColumnVisibility = _j[1];
    var _k = useState(null), draggedRowData = _k[0], setDraggedRowData = _k[1];
    var rowDropPositionRef = useRef(null);
    var a11yContainerRef = useRef(null);
    var stickyContainerRef = useRef(null);
    var scrollableContainerRef = useRef(null);
    var translateCommon = useTranslateCommon();
    var translateRowDragAndDrop = useTranslateRowDragAndDrop();
    var table = useReactTable({
        autoResetExpanded: false,
        columns: columns,
        data: data,
        enableRowSelection: function (row) {
            return !((isFunction(enableRowSelection) ? !enableRowSelection(row) : !enableRowSelection) ||
                (isFunction(isRowDisabled) && isRowDisabled(row)));
        },
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
        getRowCanExpand: getRowCanExpand,
        getRowId: getRowId,
        getSubRows: getSubRows,
        isMultiSortEvent: function () { return true; },
        manualPagination: true,
        manualSorting: true,
        rowCount: totalRowCount,
        state: {
            columnOrder: columnOrder,
            columnPinning: columnPinning,
            columnVisibility: columnVisibility,
            expanded: expanded,
            grouping: grouping,
            pagination: pagination,
            rowSelection: rowSelection,
            sorting: sorting
        },
        onColumnOrderChange: function (updaterOrValue) {
            var newColumnOrder = isFunction(updaterOrValue) ? updaterOrValue(columnOrder) : updaterOrValue;
            setColumnOrder(newColumnOrder);
            safeCall(onColumnOrderChange, newColumnOrder);
        },
        onColumnVisibilityChange: function (updaterOrValue) {
            var newColumnVisibility = isFunction(updaterOrValue) ? updaterOrValue(columnVisibility) : updaterOrValue;
            setColumnVisibility(newColumnVisibility);
            safeCall(onColumnVisibilityChange, newColumnVisibility);
        },
        onExpandedChange: function (updaterOrValue) {
            var newExpanded = isFunction(updaterOrValue) ? updaterOrValue(expanded) : updaterOrValue;
            setExpanded(newExpanded);
            safeCall(onExpandedChange, newExpanded);
        },
        onPaginationChange: function (updaterOrValue) {
            var newPagination = isFunction(updaterOrValue) ? updaterOrValue(pagination) : updaterOrValue;
            setPagination(newPagination);
            safeCall(onPaginationChange, newPagination);
        },
        onRowSelectionChange: function (updaterOrValue) {
            var newRowSelection = isFunction(updaterOrValue) ? updaterOrValue(rowSelection) : updaterOrValue;
            setRowSelection(newRowSelection);
            safeCall(onRowSelectionChange, newRowSelection);
        },
        onSortingChange: function (updaterOrValue) {
            var newSorting = isFunction(updaterOrValue) ? updaterOrValue(sorting) : updaterOrValue;
            var idx = getIndexOfChangedColumnSort(newSorting, sorting);
            if (idx !== -1 && sortingColumnSelectionPriority) {
                newSorting[sortingColumnSelectionPriority === 'Last' ? 'unshift' : 'push'](newSorting.splice(idx, 1)[0]);
            }
            setSorting(newSorting);
            safeCall(onSortingChange, newSorting);
        },
        meta: {
            enableParentRowSelectionSync: enableParentRowSelectionSync,
            getRowProps: getRowProps,
            isRowDisabled: isRowDisabled,
            isRowLoading: isRowLoading,
            onDataEdit: onDataEdit
        }
    });
    var _l = detectTableFeatures(table), hasFooter = _l.hasFooter, hasDraggableRows = _l.hasDraggableRows;
    var showPagination = !!initialPagination;
    var _m = table.getState().pagination, pageIndex = _m.pageIndex, pageSize = _m.pageSize;
    var rowIds = [];
    var columnConfiguratorColumns = useMemo(function () {
        if (reorderableColumns) {
            return columnOrder.map(function (id) {
                var isDragHandleColumn = id === DataTableDisplayColumnID.DragHandle;
                return {
                    id: id,
                    name: getColumnTitle(id, table),
                    isHidden: isDragHandleColumn,
                    isSelectable: !isDragHandleColumn
                };
            });
        }
        return [];
    }, [columnOrder, reorderableColumns]);
    var hasNestedRowDrag = rowDragMode === DataTableRowDragMode.Nested;
    var onRowDragCancel = function () {
        var _a;
        if (draggedRowData) {
            setDraggedRowData(null);
            setExpanded((_a = draggedRowData.expanded) !== null && _a !== void 0 ? _a : {});
        }
    };
    var onRowDragEnd = function (event) {
        var _a, _b, _c;
        if (hasNestedRowDrag) {
            var _d = draggedRowData !== null && draggedRowData !== void 0 ? draggedRowData : {}, active = _d.active, over = _d.over, dropPosition = _d.dropPosition, expandedState = _d.expanded;
            if (active && over && dropPosition) {
                var activeId = active.id;
                var overId = over.id;
                var activeRow = table.getRow(activeId);
                var overRow = table.getRow(overId);
                var oldParentId = activeRow.parentId;
                var oldIndex = activeRow.index;
                var overIndex = overRow.index;
                var newIndex = void 0, newParentId = void 0;
                if (dropPosition === DropPosition.Before) {
                    newParentId = overRow.parentId;
                    newIndex = overIndex - (newParentId === oldParentId && overIndex > oldIndex ? 1 : 0);
                }
                else if (dropPosition === DropPosition.After) {
                    newParentId = overRow.parentId;
                    newIndex = overIndex + (newParentId === oldParentId && overIndex > oldIndex ? 0 : 1);
                }
                else if (activeId === overId) {
                    newParentId = oldParentId;
                    newIndex = oldIndex;
                }
                else {
                    newParentId = activeId === overId ? oldParentId : overId;
                    newIndex = (_b = (_a = overRow.subRows) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
                }
                (_c = props.onRowDragEnd) === null || _c === void 0 ? void 0 : _c.call(props, {
                    rowId: activeId,
                    newIndex: newIndex,
                    oldIndex: oldIndex,
                    newParentId: newParentId,
                    oldParentId: oldParentId
                });
            }
            setDraggedRowData(null);
            setExpanded(expandedState !== null && expandedState !== void 0 ? expandedState : {});
        }
        else {
            var active = event.active, over = event.over;
            var activeId = active === null || active === void 0 ? void 0 : active.id;
            var overId = over === null || over === void 0 ? void 0 : over.id;
            if (activeId && overId && rowIds.includes(activeId)) {
                safeCall(props.onRowDragEnd, {
                    rowId: activeId,
                    oldIndex: rowIds.indexOf(activeId),
                    newIndex: rowIds.indexOf(overId)
                });
            }
        }
    };
    var onRowDragMove = function (event) {
        var _a, _b;
        var active = event.active, over = event.over;
        var activeTop = (_a = active.rect.current.translated) === null || _a === void 0 ? void 0 : _a.top;
        if (draggedRowData && activeTop !== undefined && over) {
            var _c = over.rect, overTop = _c.top, overHeight = _c.height;
            var heightPercentage = 0.25;
            var afterThreshold = overTop + overHeight * heightPercentage;
            var beforeThreshold = overTop - overHeight * heightPercentage;
            var dropPosition = DropPosition.Inside;
            if (activeTop < beforeThreshold) {
                dropPosition = DropPosition.Before;
            }
            else if (activeTop > afterThreshold) {
                dropPosition = DropPosition.After;
            }
            if (over.id !== ((_b = draggedRowData.over) === null || _b === void 0 ? void 0 : _b.id) || dropPosition !== draggedRowData.dropPosition) {
                setDraggedRowData(__assign(__assign({}, draggedRowData), { active: active, dropPosition: dropPosition, over: over }));
                // Setting state is async so it's not immediately readable in dnd a11y announcements.
                // Thus, we set it to ref for quick access.
                rowDropPositionRef.current = dropPosition;
            }
        }
    };
    var onRowDragOver = function (event) {
        // We need to handle drag over events for keyboard because onDragMove is triggered only once after key press and
        // at that point event.over has not updated yet.
        if (event.activatorEvent instanceof KeyboardEvent) {
            onRowDragMove(event);
        }
    };
    var onRowDragStart = function (event) {
        var _a;
        var _b;
        (_b = props.onRowDragStart) === null || _b === void 0 ? void 0 : _b.call(props, event);
        if (hasNestedRowDrag) {
            var active = event.active;
            var activeId = active.id;
            var isExpanded = isObject(expanded) ? expanded[activeId] : expanded;
            setDraggedRowData({ active: active, expanded: expanded });
            if (isExpanded) {
                setExpanded(__assign(__assign({}, (isObject(expanded) ? expanded : (table.getRowModel().rows.reduce(function (currentValue, row) {
                    if (row.subRows) {
                        currentValue[row.id] = true;
                    }
                    return currentValue;
                }, {})))), (_a = {}, _a[activeId] = false, _a)));
            }
        }
    };
    var onPageIndexChange = function (newPageIndex) {
        table.setPageIndex(newPageIndex);
    };
    var onPageSizeChange = function (newPageSize) {
        table.setPageSize(newPageSize);
    };
    var syncScroll = useCallback(throttle(function () {
        var scrollContainer = scrollableContainerRef.current;
        var stickyContainer = stickyContainerRef.current;
        if (scrollContainer && stickyContainer) {
            stickyContainer.scrollLeft = scrollContainer.scrollLeft;
        }
    }, SYNC_SCROLL_DELAY_MS), []);
    var rowDragSensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {
        coordinateGetter: hasNestedRowDrag ? nestedDataTableKeyboardCoordinateGetter : sortableKeyboardCoordinates
    }));
    useEffect(function () {
        setExpanded(initialExpanded !== null && initialExpanded !== void 0 ? initialExpanded : {});
    }, [initialExpanded]);
    useEffect(function () {
        setPagination(initialPagination !== null && initialPagination !== void 0 ? initialPagination : { pageIndex: 0, pageSize: 0 });
    }, [initialPagination]);
    useEffect(function () {
        setRowSelection(initialRowSelection !== null && initialRowSelection !== void 0 ? initialRowSelection : {});
    }, [initialRowSelection]);
    useEffect(function () {
        setSorting(initialSorting !== null && initialSorting !== void 0 ? initialSorting : []);
    }, [initialSorting]);
    useEffect(function () {
        setColumnOrder(initialColumnOrder !== null && initialColumnOrder !== void 0 ? initialColumnOrder : []);
    }, [initialColumnOrder]);
    if (isSkeleton) {
        return jsx(SkeletonDataTable, __assign({}, skeletonProps));
    }
    var visitedHeaderPlaceholderColumns = new Set();
    var headerRows = table.getHeaderGroups().map(function (headerGroup, idx, headerGroups) { return (jsx("tr", __assign({ className: classNames('data-table__header-row', {
            'data-table__header-row--first': idx === 0,
            'data-table__header-row--last': idx === headerGroups.length - 1
        }) }, { children: headerGroup.headers.map(function (header) {
            var _a;
            var column = header.column, id = header.id, isPlaceholder = header.isPlaceholder;
            var useHeaderRowSpan = (_a = column.columnDef.meta) === null || _a === void 0 ? void 0 : _a.useHeaderRowSpan;
            var showContent, rowSpan;
            if (isPlaceholder) {
                visitedHeaderPlaceholderColumns.add(column.id);
                if (useHeaderRowSpan) {
                    rowSpan = header.getLeafHeaders().length;
                }
                showContent = true;
            }
            else {
                showContent = !visitedHeaderPlaceholderColumns.has(column.id);
                if (useHeaderRowSpan && !showContent) {
                    return null;
                }
            }
            return jsx(DataTableHeaderCell, { header: header, rowSpan: rowSpan, showContent: showContent }, id);
        }) }), headerGroup.id)); });
    var bodyRows = table.getRowModel().rows.map(function (row) {
        var rowId = row.id;
        rowIds.push(rowId);
        return (jsx(DataTableRow, { draggedRowData: draggedRowData, isDraggable: hasDraggableRows, row: row, rowDragMode: rowDragMode, table: table }, rowId));
    });
    var footerRows = hasFooter ?
        table.getFooterGroups().map(function (footerGroup) { return (jsx("tr", __assign({ className: "data-table__footer-row" }, { children: footerGroup.headers.map(function (header) {
                var _a;
                var content = header.isPlaceholder ? null : (flexRender(header.column.columnDef.footer, header.getContext()));
                if (isString(content)) {
                    content = (jsx(Label, __assign({ size: Size.sm }, { children: jsx("strong", { children: content }) })));
                }
                return (jsx("td", __assign({ className: "data-table__footer-cell" }, { children: jsx(DataTableCellContent, __assign({ alignment: (_a = header.column.columnDef.meta) === null || _a === void 0 ? void 0 : _a.alignment }, { children: content })) }), header.id));
            }) }), footerGroup.id)); })
        : null;
    var renderTable = function (hasRowDrag) { return (jsxs("table", __assign({ className: classNames('data-table', className) }, { children: [jsx("thead", __assign({ className: "data-table__header" }, { children: headerRows })), jsx("tbody", __assign({ className: "data-table__body" }, { children: hasRowDrag ?
                    jsxs(DndContext, __assign({ accessibility: {
                            container: a11yContainerRef.current,
                            screenReaderInstructions: {
                                draggable: translateRowDragAndDrop('instructions')
                            },
                            announcements: {
                                onDragStart: function (_a) {
                                    var active = _a.active;
                                    return translateRowDragAndDrop('onDragStart', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                },
                                onDragMove: function (_a) {
                                    var active = _a.active, over = _a.over;
                                    if (hasNestedRowDrag && over) {
                                        var keys = {
                                            activeTitle: getRowTitle(active.id, table, getRowTitleFn),
                                            overTitle: getRowTitle(over.id, table, getRowTitleFn)
                                        };
                                        var dragOverMsg = translateRowDragAndDrop('onDragOver', keys);
                                        var dropPos = rowDropPositionRef.current;
                                        if (dropPos === DropPosition.Before) {
                                            return translateRowDragAndDrop('onDragOverBefore', keys);
                                        }
                                        else if (dropPos === DropPosition.After) {
                                            return translateRowDragAndDrop('onDragOverAfter', keys);
                                        }
                                        return dragOverMsg;
                                    }
                                    return '';
                                },
                                onDragOver: function (_a) {
                                    var active = _a.active, over = _a.over;
                                    if (over) {
                                        var keys = {
                                            activeTitle: getRowTitle(active.id, table, getRowTitleFn),
                                            overTitle: getRowTitle(over.id, table, getRowTitleFn)
                                        };
                                        var dragOverMsg = translateRowDragAndDrop('onDragOver', keys);
                                        if (hasNestedRowDrag) {
                                            var dropPos = rowDropPositionRef.current;
                                            if (dropPos === DropPosition.Before) {
                                                return translateRowDragAndDrop('onDragOverBefore', keys);
                                            }
                                            else if (dropPos === DropPosition.After) {
                                                return translateRowDragAndDrop('onDragOverAfter', keys);
                                            }
                                            return dragOverMsg;
                                        }
                                        return dragOverMsg;
                                    }
                                    return translateRowDragAndDrop('onDragOverEnd', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                },
                                onDragEnd: function (_a) {
                                    var active = _a.active, over = _a.over;
                                    var dropPos = rowDropPositionRef.current;
                                    rowDropPositionRef.current = null;
                                    if (over) {
                                        var keys = {
                                            activeTitle: getRowTitle(active.id, table, getRowTitleFn),
                                            overTitle: getRowTitle(over.id, table, getRowTitleFn)
                                        };
                                        if (hasNestedRowDrag) {
                                            if (dropPos === DropPosition.Before) {
                                                return translateRowDragAndDrop('onDragEndBefore', keys);
                                            }
                                            else if (dropPos === DropPosition.After) {
                                                return translateRowDragAndDrop('onDragEndAfter', keys);
                                            }
                                            return translateRowDragAndDrop('onDragEndInside', keys);
                                        }
                                        return translateRowDragAndDrop('onDragEndOver', keys);
                                    }
                                    return translateRowDragAndDrop('onDragEnd', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                },
                                onDragCancel: function (_a) {
                                    var active = _a.active;
                                    rowDropPositionRef.current = null;
                                    return translateRowDragAndDrop('onDragCancel', {
                                        title: getRowTitle(active.id, table, getRowTitleFn)
                                    });
                                }
                            }
                        }, collisionDetection: closestCenter, modifiers: hasNestedRowDrag ? undefined : [restrictToParentElement], onDragCancel: onRowDragCancel, onDragEnd: onRowDragEnd, onDragMove: hasNestedRowDrag ? onRowDragMove : undefined, onDragOver: hasNestedRowDrag ? onRowDragOver : undefined, onDragStart: onRowDragStart, sensors: rowDragSensors }, { children: [jsx(SortableContext, __assign({ items: rowIds, strategy: sortingStrategy !== null && sortingStrategy !== void 0 ? sortingStrategy : verticalListSortingStrategy }, { children: bodyRows })), hasNestedRowDrag &&
                                createPortal(jsx(DragOverlay, { children: draggedRowData && jsx(DataTableRowDragOverlay, { draggedRowData: draggedRowData }) }), document.body)] }))
                    : bodyRows })), footerRows && jsx("tfoot", __assign({ className: "data-table__footer" }, { children: footerRows }))] }))); };
    var renderBefore = function () {
        var customContent = safeCall(props.renderBefore);
        var pager, columnConfigurator;
        if (showPagination) {
            pager = (jsx(Pagination, __assign({}, topPaginationProps, { className: "data-table__top-pagination", isMinimized: true, onPageIndexChange: onPageIndexChange, onPageSizeChange: onPageSizeChange, pageIndex: pageIndex, pageSize: pageSize, pageSizes: pageSizes, totalRowCount: totalRowCount })));
        }
        if (reorderableColumns) {
            var _a = columnConfiguratorOptions !== null && columnConfiguratorOptions !== void 0 ? columnConfiguratorOptions : {}, isMinimized = _a.isMinimized, configuratorProps = __rest(_a, ["isMinimized"]);
            columnConfigurator = (jsx(ColumnConfigurator, __assign({ columnOrder: columnOrder, columnVisibility: columnVisibility, columns: columnConfiguratorColumns, onColumnOrderChange: function (colOrder) {
                    table.setColumnOrder(function () { return colOrder; });
                }, onColumnVisibilityChange: function (colVisibility) {
                    table.setColumnVisibility(function () { return colVisibility; });
                } }, configuratorProps, { children: isMinimized ?
                    jsx(IconButton, { "aria-label": translateCommon('customizeColumns'), iconName: iconNames.ViewKanban, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral })
                    : jsx(Button, __assign({ size: Size.md, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }, { children: translateCommon('customizeColumns') })) })));
        }
        if (pager || columnConfigurator || customContent) {
            return (jsxs("div", __assign({ className: "data-table-before" }, { children: [customContent, jsxs("div", __assign({ className: "data-table-before__right" }, { children: [pager, columnConfigurator] }))] })));
        }
        return null;
    };
    return (jsxs("div", __assign({ className: classNames('data-table-wrapper', wrapperClassName), ref: ref }, { children: [jsx("div", { className: "data-table-a11y-container", ref: a11yContainerRef }), renderBefore(), jsx("div", __assign({ className: "data-table-sticky-container", ref: stickyContainerRef }, { children: renderTable() })), jsx("div", __assign({ className: "data-table-scrollable-container", onScroll: syncScroll, ref: scrollableContainerRef, tabIndex: -1 }, { children: renderTable(hasDraggableRows) })), showPagination && (jsx(Pagination, __assign({}, bottomPaginationProps, { className: "data-table__bottom-pagination", onPageIndexChange: onPageIndexChange, onPageSizeChange: onPageSizeChange, pageIndex: pageIndex, pageSize: pageSize, pageSizes: pageSizes, totalRowCount: totalRowCount })))] })));
}

function DataTableCheckboxHeader(_a) {
    var _b;
    var table = _a.table, props = __rest(_a, ["table"]);
    var translateCommon = useTranslateCommon();
    return (jsx(Checkbox, __assign({}, props, { "aria-label": (_b = props['aria-label']) !== null && _b !== void 0 ? _b : translateCommon('selectAllRows'), isIndeterminate: table.getIsSomeRowsSelected(), isSelected: table.getIsAllRowsSelected(), onChange: function (val) { return table.toggleAllRowsSelected(val); } })));
}

function mutateRowIsSelected(selectedRowIds, id, value, includeChildren, table) {
    var _a;
    var row = table.getRow(id, true);
    if (value) {
        if (!row.getCanMultiSelect()) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            Object.keys(selectedRowIds).forEach(function (key) { return delete selectedRowIds[key]; });
        }
        if (row.getCanSelect()) {
            selectedRowIds[id] = true;
        }
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete selectedRowIds[id];
    }
    if (includeChildren && ((_a = row.subRows) === null || _a === void 0 ? void 0 : _a.length) && row.getCanSelectSubRows()) {
        row.subRows.forEach(function (subRow) { return mutateRowIsSelected(selectedRowIds, subRow.id, value, includeChildren, table); });
    }
}
function syncParentRowSelection(row, selection, table) {
    var parentRow = row.getParentRow();
    if (!parentRow) {
        return selection;
    }
    var selected = isRowSelected(parentRow, selection);
    var isAllSubRowsSelected = isSubRowSelected(parentRow, selection, table) === 'all';
    if (isAllSubRowsSelected && !selected) {
        mutateRowIsSelected(selection, parentRow.id, true, false, table);
    }
    else if (!isAllSubRowsSelected && selected) {
        mutateRowIsSelected(selection, parentRow.id, false, false, table);
    }
    return syncParentRowSelection(parentRow, selection, table);
}
function toggleSelectedRow(value, row, table) {
    var _a;
    var canSelect = row.getCanSelect();
    if (!canSelect) {
        return;
    }
    if (!((_a = table.options.meta) === null || _a === void 0 ? void 0 : _a.enableParentRowSelectionSync)) {
        row.toggleSelected(value);
        return;
    }
    var isSelected = row.getIsSelected();
    table.setRowSelection(function (old) {
        var val = isUndefined(value) ? !isSelected : value;
        if (canSelect && isSelected === val) {
            return old;
        }
        var selectedRowIds = __assign({}, old);
        mutateRowIsSelected(selectedRowIds, row.id, val, true, table);
        return syncParentRowSelection(row, selectedRowIds, table);
    });
}

function DataTableCheckboxCell(_a) {
    var _b, _c;
    var row = _a.row, table = _a.table, props = __rest(_a, ["row", "table"]);
    var translateCommon = useTranslateCommon();
    var enableParentRowSelectionSync = (_b = table.options.meta) === null || _b === void 0 ? void 0 : _b.enableParentRowSelectionSync;
    return (jsx(Checkbox, __assign({}, props, { "aria-label": (_c = props['aria-label']) !== null && _c !== void 0 ? _c : translateCommon('selectRow'), isDisabled: !row.getCanSelect(), isIndeterminate: enableParentRowSelectionSync ? row.getIsSomeSelected() : undefined, isSelected: row.getIsSelected(), onChange: function (isSelected) { return toggleSelectedRow(isSelected, row, table); } })));
}

function DataTableTextCell(_a) {
    var _b, _c;
    var children = _a.children, className = _a.className, getValue = _a.getValue, ref = _a.ref, style = _a.style, table = _a.table, row = _a.row;
    return (jsx(Label, __assign({ className: classNames('data-table__text-cell', className, {
            'data-table__text-cell--disabled': (_c = (_b = table.options.meta) === null || _b === void 0 ? void 0 : _b.isRowDisabled) === null || _c === void 0 ? void 0 : _c.call(_b, row)
        }), ref: ref, size: Size.md, style: style }, { children: children !== null && children !== void 0 ? children : getValue() })));
}

function DataTableTextFieldCell(_a) {
    var _b, _c, _d;
    var column = _a.column, getValue = _a.getValue, row = _a.row, table = _a.table, props = __rest(_a, ["column", "getValue", "row", "table"]);
    return (jsx(InlineTextField, __assign({}, props, { changeCallback: function (args) { var _a, _b; return (_b = (_a = table.options.meta) === null || _a === void 0 ? void 0 : _a.onDataEdit) === null || _b === void 0 ? void 0 : _b.call(_a, row.index, column.id, args); }, isDisabled: (_b = props.isDisabled) !== null && _b !== void 0 ? _b : (_d = (_c = table.options.meta) === null || _c === void 0 ? void 0 : _c.isRowDisabled) === null || _d === void 0 ? void 0 : _d.call(_c, row), value: getValue().toString() })));
}

var INDENT_SIZE_REM = 0.75;
function DataTableExpanderCell(_a) {
    var _b, _c;
    var prefix = _a.prefix, ref = _a.ref, row = _a.row, suffix = _a.suffix, table = _a.table, _d = _a.useIndentation, useIndentation = _d === void 0 ? true : _d;
    var canExpand = row.getCanExpand();
    var style = useIndentation ? { paddingLeft: "".concat(row.depth * INDENT_SIZE_REM, "rem") } : undefined;
    var isExpanded = row.getIsExpanded();
    var isLoading = (_c = (_b = table.options.meta) === null || _b === void 0 ? void 0 : _b.isRowLoading) === null || _c === void 0 ? void 0 : _c.call(_b, row);
    var translateCommon = useTranslateCommon();
    return (jsxs("div", __assign({ className: "data-table__indent-wrapper", ref: ref, style: style }, { children: [prefix, jsx(Pressable, __assign({ onPress: !isLoading && canExpand ? row.getToggleExpandedHandler() : undefined }, { children: jsx("div", __assign({ "aria-expanded": isExpanded, "aria-label": translateCommon(isExpanded ? 'collapse' : 'expand'), className: classNames('data-table__expander', {
                        'data-table__expander--hidden': !canExpand,
                        'data-table__expander--loading': isLoading
                    }), role: "button", tabIndex: canExpand ? 0 : -1 }, { children: isLoading ?
                        jsx(Spinner, { size: Size.md, variant: SpinnerVariant.Neutral })
                        : jsx(Icon, { name: isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight, size: IconSize.LG }) })) })), suffix] })));
}

function DataTableDragHandleCell(_a) {
    var ref = _a.ref, row = _a.row;
    var _b = useSortable({
        id: row.id
    }), attributes = _b.attributes, listeners = _b.listeners;
    return jsx(DragHandle, __assign({}, attributes, listeners, { ref: ref }));
}

function DataTableSelectCell(_a) {
    var _b, _c, _d;
    var column = _a.column, row = _a.row, table = _a.table, props = __rest(_a, ["column", "row", "table"]);
    return (jsx(InlineSelect, __assign({}, props, { changeCallback: function (args) { var _a, _b; return (_b = (_a = table.options.meta) === null || _a === void 0 ? void 0 : _a.onDataEdit) === null || _b === void 0 ? void 0 : _b.call(_a, row.index, column.id, args); }, isDisabled: (_b = props.isDisabled) !== null && _b !== void 0 ? _b : (_d = (_c = table.options.meta) === null || _c === void 0 ? void 0 : _c.isRowDisabled) === null || _d === void 0 ? void 0 : _d.call(_c, row) })));
}

function DataTableToolbar(_a) {
    var actions = _a.actions, className = _a.className, ref = _a.ref, selectedCount = _a.selectedCount, selectedTextMinWidth = _a.selectedTextMinWidth;
    var translateCommon = useTranslateCommon();
    return (jsxs("div", __assign({ "aria-label": translateCommon('actionsForSelectedRows'), className: classNames('data-table-toolbar', className), ref: ref, role: "toolbar" }, { children: [jsx(Label, __assign({ className: "data-table-toolbar__selected-text", size: Size.sm, style: { minWidth: selectedTextMinWidth } }, { children: "".concat(selectedCount, " ").concat(translateCommon('selected').toLowerCase()) })), jsx(Provider, __assign({ values: [[ButtonContext, { isDisabled: !selectedCount }]] }, { children: actions }))] })));
}

var isTouchDevice = Boolean('ontouchstart' in window && navigator.maxTouchPoints > 0);

function stopPropagation(event) {
    event.stopPropagation();
}

function DataTableActionButtonCell(_a) {
    var _b = _a.buttonComponent, ActionButton = _b === void 0 ? Button : _b, buttonProps = _a.buttonProps, children = _a.children, className = _a.className, ref = _a.ref, stopChildrenClickPropagation = _a.stopChildrenClickPropagation, tooltipProps = _a.tooltipProps;
    return (jsxs("div", __assign({ className: classNames('data-table__action-button-cell', className), ref: ref }, { children: [jsx("div", __assign({ className: "data-table__action-button-cell-content", onClick: stopChildrenClickPropagation ? stopPropagation : undefined }, { children: children })), jsxs(TooltipTrigger, __assign({ isDisabled: !tooltipProps }, { children: [jsx(ActionButton, __assign({ className: classNames('data-table__action-button', {
                            'data-table__action-button--visible': isTouchDevice
                        }), size: Size.md, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }, buttonProps)), tooltipProps && jsx(Tooltip, __assign({ type: TooltipType.Plain }, tooltipProps))] }))] })));
}

var KanbanElementType;
(function (KanbanElementType) {
    KanbanElementType["Card"] = "card";
    KanbanElementType["Column"] = "column";
    KanbanElementType["ColumnBody"] = "column-body";
})(KanbanElementType || (KanbanElementType = {}));
var KanbanColumnHeightMode;
(function (KanbanColumnHeightMode) {
    KanbanColumnHeightMode["Auto"] = "auto";
    KanbanColumnHeightMode["Full"] = "full";
})(KanbanColumnHeightMode || (KanbanColumnHeightMode = {}));

function useKanbanDroppableColumnBody(_a) {
    var column = _a.column, isDisabled = _a.isDisabled;
    var id = column.id;
    var _b = useDroppable({
        id: "".concat(id, "-body"),
        disabled: isDisabled,
        data: {
            column: column,
            columnId: id,
            type: KanbanElementType.ColumnBody
        }
    }), active = _b.active, isOver = _b.isOver, setNodeRef = _b.setNodeRef;
    var activeData = active === null || active === void 0 ? void 0 : active.data.current;
    var isDroppableOver = isOver && !!activeData && activeData.type === KanbanElementType.Card && activeData.columnId !== id;
    return {
        isDroppableOver: isDroppableOver,
        bodyProps: {
            ref: setNodeRef
        }
    };
}

function KanbanColumnBody(_a) {
    var children = _a.children, column = _a.column, isDisabled = _a.isDisabled, ref = _a.ref;
    var _b = useKanbanDroppableColumnBody({ column: column, isDisabled: isDisabled }), isDroppableOver = _b.isDroppableOver, bodyProps = _b.bodyProps;
    return (jsx("div", __assign({ className: classNames('kanban-column__body', {
            'kanban-column__body--droppable-over': isDroppableOver
        }), ref: mergeRefs(bodyProps.ref, ref), role: "list" }, { children: children })));
}

function KanbanColumn(_a) {
    var _b, _c, _d, _e;
    var addCardOptions = _a.addCardOptions, data = _a.data, isDraggable = _a.isDraggable, isCollapsed = _a.isCollapsed, isOverlay = _a.isOverlay, onCollapsedChange = _a.onCollapsedChange, onMenuAction = _a.onMenuAction, onMenuSelectionChange = _a.onMenuSelectionChange, onShowMoreCards = _a.onShowMoreCards, ref = _a.ref, renderCard = _a.renderCard, width = _a.width;
    var _f = useState(false), isLoadingMoreCards = _f[0], setIsLoadingMoreCards = _f[1];
    var cards = data.cards, description = data.description, hasMoreCards = data.hasMoreCards, id = data.id, menuProps = data.menuProps, title = data.title, total = data.total;
    var _g = useSortable({
        id: id,
        data: {
            column: data,
            type: KanbanElementType.Column
        }
    }), active = _g.active, attributes = _g.attributes, isDragging = _g.isDragging, listeners = _g.listeners, setNodeRef = _g.setNodeRef, transition = _g.transition, transform = _g.transform;
    var translateCommon = useTranslateCommon();
    var titleRef = useRef(null);
    var isTruncated = useIsTextTruncated({
        ref: titleRef,
        overflowDirection: isCollapsed ? Orientation.vertical : Orientation.horizontal
    });
    var titleId = useId();
    var style = {
        flex: !isCollapsed && !!width ? "0 0 ".concat(width).concat(isNumber(width) ? 'px' : '') : undefined,
        transform: CSS.Translate.toString(transform),
        transition: transition
    };
    var onShowMore = function () {
        var _a;
        setIsLoadingMoreCards(true);
        (_a = onShowMoreCards === null || onShowMoreCards === void 0 ? void 0 : onShowMoreCards(data)) === null || _a === void 0 ? void 0 : _a.finally(function () {
            setIsLoadingMoreCards(false);
        });
    };
    return (jsxs("div", __assign({ "aria-labelledby": titleId, className: classNames('kanban-column', {
            'kanban-column--overlay': isOverlay,
            'kanban-column--dragging': isDragging,
            'kanban-column--collapsed': isCollapsed
        }), ref: mergeRefs(setNodeRef, ref), role: "region", style: style }, { children: [jsxs("div", __assign({ className: "kanban-column__header" }, { children: [jsxs("div", __assign({ className: "kanban-column__header-start" }, { children: [isDraggable && jsx(DragHandle, __assign({}, attributes, listeners)), jsxs("div", __assign({ className: "kanban-column__title-wrapper" }, { children: [jsx(IconButton, { "aria-expanded": !isCollapsed, "aria-label": translateCommon(isCollapsed ? 'expand' : 'collapse'), iconName: isCollapsed ? iconNames.ChevronRight : iconNames.ExpandMore, onPress: function () { return onCollapsedChange === null || onCollapsedChange === void 0 ? void 0 : onCollapsedChange({ id: id, isCollapsed: !isCollapsed }); }, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }), jsxs("div", __assign({ className: "kanban-column__title-texts", id: titleId }, { children: [jsxs(TooltipTrigger, __assign({ isDisabled: !isTruncated }, { children: [jsx(TriggerElement, __assign({ className: "kanban-column__title-trigger", excludeFromTabOrder: !isTruncated }, { children: jsx(Label, __assign({ className: "kanban-column__title", ref: titleRef, size: Size.md }, { children: jsx("strong", { children: title }) })) })), jsx(Tooltip, __assign({ position: isCollapsed ? Position.Right : undefined, type: TooltipType.Plain }, { children: title }))] })), !isCollapsed && description && (jsx(Label, __assign({ className: "kanban-column__description", size: Size.sm }, { children: description })))] }))] }))] })), jsxs("div", __assign({ className: "kanban-column__header-end" }, { children: [!isCollapsed && (jsxs(TooltipTrigger, { children: [jsx(TriggerElement, __assign({ className: "kanban-colum__total" }, { children: jsx(Label, __assign({ size: Size.sm }, { children: (_b = total === null || total === void 0 ? void 0 : total.value) !== null && _b !== void 0 ? _b : cards.length })) })), jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: (_c = total === null || total === void 0 ? void 0 : total.tooltipContent) !== null && _c !== void 0 ? _c : translateCommon('itemsInList', { count: (_d = total === null || total === void 0 ? void 0 : total.value) !== null && _d !== void 0 ? _d : cards.length }) }))] })), menuProps && (jsx(Menu, __assign({}, menuProps, { onAction: function (actionKey) { return onMenuAction === null || onMenuAction === void 0 ? void 0 : onMenuAction({ actionKey: actionKey, columnId: id }); }, onSelectionChange: function (selectedKeys) { return onMenuSelectionChange === null || onMenuSelectionChange === void 0 ? void 0 : onMenuSelectionChange({ columnId: id, selectedKeys: selectedKeys }); }, placement: "bottom right" }, { children: jsxs(TooltipTrigger, { children: [jsx(IconButton, { "aria-label": translateCommon('moreActions'), iconName: iconNames.MoreVert, size: Size.sm, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }), jsx(Tooltip, __assign({ type: TooltipType.Plain }, { children: translateCommon('moreActions') }))] }) })))] }))] })), !isCollapsed && (jsxs(KanbanColumnBody, __assign({ column: data, isDisabled: ((_e = active === null || active === void 0 ? void 0 : active.data.current) === null || _e === void 0 ? void 0 : _e.type) === KanbanElementType.Column }, { children: [cards.map(function (card) { return renderCard({ columnId: id, data: card }); }), hasMoreCards && (jsx(Button, __assign({ className: "kanban-column__show-more-button", isLoading: isLoadingMoreCards, isPending: isLoadingMoreCards, onPress: onShowMore, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: translateCommon('showMore') })))] }))), !isCollapsed && (jsx("div", __assign({ className: "kanban-column__footer" }, { children: addCardOptions && (jsx(Button, __assign({ onPress: function () { var _a; return (_a = addCardOptions === null || addCardOptions === void 0 ? void 0 : addCardOptions.onAdd) === null || _a === void 0 ? void 0 : _a.call(addCardOptions, { columnId: id }); }, startIconName: iconNames.Add, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: addCardOptions.label }))) })))] })));
}

var COLUMN_OVERLAY_X_OFFSET = 12;
var COLUMN_OVERLAY_Y_OFFSET = 40;
var CARD_OVERLAY_X_OFFSET = 8;
var CARD_OVERLAY_Y_OFFSET = 8;
var eventKeys = [
    KeyboardEventKey.ArrowDown,
    KeyboardEventKey.ArrowUp,
    KeyboardEventKey.ArrowLeft,
    KeyboardEventKey.ArrowRight
];
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = -1] = "Left";
    Direction[Direction["Right"] = 1] = "Right";
})(Direction || (Direction = {}));
var kanbanCardKeyboardCoordinateGetter = function (event, args) {
    var _a, _b;
    var context = args.context;
    var active = context.active, collisionRect = context.collisionRect, droppableContainers = context.droppableContainers, droppableRects = context.droppableRects;
    if (!(active === null || active === void 0 ? void 0 : active.data.current) || !collisionRect) {
        return;
    }
    var filteredContainers = [];
    droppableContainers.getEnabled().forEach(function (entry) {
        if (!entry || (entry === null || entry === void 0 ? void 0 : entry.disabled)) {
            return;
        }
        var rect = droppableRects.get(entry.id);
        if (!rect) {
            return;
        }
        var data = entry.data.current;
        if (data && data.type !== KanbanElementType.ColumnBody) {
            return;
        }
        switch (event.key) {
            case KeyboardEventKey.ArrowDown:
                if (collisionRect.top < rect.top) {
                    filteredContainers.push(entry);
                }
                break;
            case KeyboardEventKey.ArrowUp:
                if (collisionRect.top > rect.top + CARD_OVERLAY_Y_OFFSET) {
                    filteredContainers.push(entry);
                }
                break;
            case KeyboardEventKey.ArrowLeft:
                if (collisionRect.left >= rect.left + rect.width) {
                    filteredContainers.push(entry);
                }
                break;
            case KeyboardEventKey.ArrowRight:
                if (collisionRect.left + collisionRect.width <= rect.left) {
                    filteredContainers.push(entry);
                }
                break;
        }
    });
    var collisions = closestCorners({
        active: active,
        collisionRect: collisionRect,
        droppableRects: droppableRects,
        droppableContainers: filteredContainers,
        pointerCoordinates: null
    });
    var closestId = getFirstCollision(collisions, 'id');
    if (closestId !== null) {
        var newDroppable = droppableContainers.get(closestId);
        var newNode = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.node.current;
        var newRect = newDroppable === null || newDroppable === void 0 ? void 0 : newDroppable.rect.current;
        if (newNode && newRect) {
            if (((_a = newDroppable.data.current) === null || _a === void 0 ? void 0 : _a.columnId) === ((_b = active.data.current) === null || _b === void 0 ? void 0 : _b.columnId)) {
                // Moving back to initial position...
                var initialRect = active.rect.current.initial;
                if (initialRect) {
                    return {
                        x: newRect.left + CARD_OVERLAY_X_OFFSET,
                        y: initialRect.top
                    };
                }
            }
            return {
                x: newRect.left + CARD_OVERLAY_X_OFFSET,
                y: newRect.top + CARD_OVERLAY_Y_OFFSET
            };
        }
    }
};
var kanbanColumnKeyboardCoordinateGetter = function (event, args) {
    var _a, _b, _c;
    var context = args.context;
    var active = context.active, over = context.over, droppableContainers = context.droppableContainers, collisionRect = context.collisionRect;
    if (!collisionRect || !(active === null || active === void 0 ? void 0 : active.data.current)) {
        return;
    }
    var activeId = active.id;
    var overId = ((_a = over === null || over === void 0 ? void 0 : over.id) !== null && _a !== void 0 ? _a : activeId);
    var items = active.data.current.sortable.items;
    var overIdx = items.indexOf(overId);
    var activeIdx = items.indexOf(activeId);
    var nextIdx = overIdx, direction = Direction.Right, nextId;
    switch (event.key) {
        case KeyboardEventKey.ArrowRight:
            nextIdx = Math.min(overIdx + 1, items.length - 1);
            break;
        case KeyboardEventKey.ArrowLeft:
            nextIdx = Math.max(0, overIdx - 1);
            direction = Direction.Left;
            break;
    }
    if (overIdx !== nextIdx) {
        nextId = items[nextIdx];
    }
    if (nextId) {
        var activeNode = (_b = droppableContainers.get(activeId)) === null || _b === void 0 ? void 0 : _b.node.current;
        var sortedItems = arrayMove(items, activeIdx, overIdx);
        var currentNodeIdAtNextIndex = sortedItems[nextIdx];
        var newNode = (_c = droppableContainers.get(currentNodeIdAtNextIndex)) === null || _c === void 0 ? void 0 : _c.node.current;
        if (newNode && activeNode) {
            var activeRect = activeNode.getBoundingClientRect();
            var newRect = newNode.getBoundingClientRect();
            var gapBetweenColumns = direction === Direction.Right ? newRect.left - activeRect.right : activeRect.left - newRect.right;
            return {
                x: activeRect.left + direction * (newRect.width + gapBetweenColumns) + COLUMN_OVERLAY_X_OFFSET,
                y: activeRect.top + COLUMN_OVERLAY_Y_OFFSET
            };
        }
    }
};
var kanbanKeyboardCoordinateGetter = function (event, args) {
    var _a;
    event.preventDefault();
    var eventKey = event.key;
    var active = args.context.active;
    if (!eventKeys.includes(eventKey) || !active) {
        return;
    }
    var activeElementType = (_a = active.data.current) === null || _a === void 0 ? void 0 : _a.type;
    if (activeElementType === KanbanElementType.Column) {
        return kanbanColumnKeyboardCoordinateGetter(event, args);
    }
    else if (activeElementType === KanbanElementType.Card) {
        return kanbanCardKeyboardCoordinateGetter(event, args);
    }
};

function useTranslateKanbanDragAndDrop() {
    return useTranslateFn('kanbanDragAndDrop');
}

var collision = function (droppableContainer) {
    var _a;
    return ({
        id: (_a = droppableContainer === null || droppableContainer === void 0 ? void 0 : droppableContainer.id) !== null && _a !== void 0 ? _a : '',
        value: droppableContainer
    });
};
var HALF = 0.5;
var leftmostDroppableContainerMajorityCovered = function (_a) {
    var droppableContainers = _a.droppableContainers, collisionRect = _a.collisionRect;
    var ascendingDroppableContainers = sortBy(droppableContainers, function (c) { var _a; return (_a = c === null || c === void 0 ? void 0 : c.rect.current) === null || _a === void 0 ? void 0 : _a.left; });
    for (var _i = 0, ascendingDroppableContainers_1 = ascendingDroppableContainers; _i < ascendingDroppableContainers_1.length; _i++) {
        var droppableContainer = ascendingDroppableContainers_1[_i];
        var droppableRect = droppableContainer.rect.current;
        if (droppableRect) {
            var coveredPercentage = (droppableRect.left + droppableRect.width - collisionRect.left) / droppableRect.width;
            if (coveredPercentage > HALF) {
                return [collision(droppableContainer)];
            }
        }
    }
    return [collision(ascendingDroppableContainers[0])];
};
var rightmostDroppableContainerMajorityCovered = function (_a) {
    var droppableContainers = _a.droppableContainers, collisionRect = _a.collisionRect;
    var descendingDroppableContainers = sortBy(droppableContainers, function (c) { var _a; return (_a = c === null || c === void 0 ? void 0 : c.rect.current) === null || _a === void 0 ? void 0 : _a.left; }).reverse();
    for (var _i = 0, descendingDroppableContainers_1 = descendingDroppableContainers; _i < descendingDroppableContainers_1.length; _i++) {
        var droppableContainer = descendingDroppableContainers_1[_i];
        var droppableRect = droppableContainer.rect.current;
        if (droppableRect) {
            var coveredPercentage = (collisionRect.right - droppableRect.left) / droppableRect.width;
            if (coveredPercentage > HALF) {
                return [collision(droppableContainer)];
            }
        }
    }
    return [collision(descendingDroppableContainers[0])];
};
var horizontalSortableListCollisionDetection = function (args) {
    var _a, _b, _c;
    if (args.collisionRect.left < ((_c = (_b = (_a = args.active.rect.current) === null || _a === void 0 ? void 0 : _a.initial) === null || _b === void 0 ? void 0 : _b.left) !== null && _c !== void 0 ? _c : 0)) {
        return leftmostDroppableContainerMajorityCovered(args);
    }
    return rightmostDroppableContainerMajorityCovered(args);
};

function Kanban(_a) {
    var addCardOptions = _a.addCardOptions, addColumnOptions = _a.addColumnOptions, ariaLabel = _a["aria-label"], cardNameAccessor = _a.cardNameAccessor, className = _a.className, propsCollapsedColumnKeys = _a.collapsedColumnKeys, _b = _a.columnHeightMode, columnHeightMode = _b === void 0 ? KanbanColumnHeightMode.Full : _b, columnWidth = _a.columnWidth, data = _a.data, enableColumnReordering = _a.enableColumnReordering, height = _a.height, onCardDragEnd = _a.onCardDragEnd, onColumnDragEnd = _a.onColumnDragEnd, propsOnColumnCollapsedChange = _a.onColumnCollapsedChange, onColumnMenuAction = _a.onColumnMenuAction, onColumnMenuSelectionChange = _a.onColumnMenuSelectionChange, onShowMoreCards = _a.onShowMoreCards, ref = _a.ref, renderAfterColumns = _a.renderAfterColumns, renderCard = _a.renderCard;
    var _c = useState(propsCollapsedColumnKeys !== null && propsCollapsedColumnKeys !== void 0 ? propsCollapsedColumnKeys : new Set()), collapsedColumnKeys = _c[0], setCollapsedColumnKeys = _c[1];
    var columnIds = useMemo(function () { return data.map(function (col) { return col.id; }); }, [data]);
    var _d = useState(null), activeColumnDragData = _d[0], setActiveColumnDragData = _d[1];
    var _e = useState(null), activeCardDragData = _e[0], setActiveCardDragData = _e[1];
    var translateKanbanDragAndDrop = useTranslateKanbanDragAndDrop();
    var isFirstAnnouncementRef = useRef(true);
    var sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {
        coordinateGetter: kanbanKeyboardCoordinateGetter
    }));
    var onDragStart = function (event) {
        var eventData = event.active.data.current;
        if ((eventData === null || eventData === void 0 ? void 0 : eventData.type) === KanbanElementType.Column) {
            setActiveColumnDragData(eventData);
        }
        if ((eventData === null || eventData === void 0 ? void 0 : eventData.type) === KanbanElementType.Card) {
            setActiveCardDragData(eventData);
        }
    };
    var onDragEnd = function (event) {
        var _a;
        var active = event.active, over = event.over;
        var activeId = active.id;
        var overId = over === null || over === void 0 ? void 0 : over.id;
        if (activeColumnDragData) {
            setActiveColumnDragData(null);
            if (activeId && overId) {
                onColumnDragEnd === null || onColumnDragEnd === void 0 ? void 0 : onColumnDragEnd({
                    columnId: activeId,
                    oldIndex: columnIds.indexOf(activeId),
                    newIndex: columnIds.indexOf(overId)
                });
            }
        }
        if (activeCardDragData) {
            var columnId = activeCardDragData.columnId;
            var _b = (_a = over === null || over === void 0 ? void 0 : over.data.current) !== null && _a !== void 0 ? _a : {}, overColId = _b.columnId, overElementType = _b.type;
            setActiveCardDragData(null);
            if (overElementType === KanbanElementType.ColumnBody && activeId && overColId) {
                onCardDragEnd === null || onCardDragEnd === void 0 ? void 0 : onCardDragEnd({
                    cardId: activeId,
                    oldColumnId: columnId,
                    oldColumnIndex: columnIds.indexOf(columnId),
                    newColumnId: overColId,
                    newColumnIndex: columnIds.indexOf(overColId)
                });
            }
        }
        isFirstAnnouncementRef.current = true;
    };
    var onDragCancel = function () {
        setActiveCardDragData(null);
        setActiveColumnDragData(null);
        isFirstAnnouncementRef.current = true;
    };
    var onColumnCollapsedChange = function (_a) {
        var id = _a.id, isCollapsed = _a.isCollapsed;
        var newCollapsedKeys = new Set(collapsedColumnKeys);
        if (isCollapsed) {
            newCollapsedKeys.add(id);
        }
        else {
            newCollapsedKeys.delete(id);
        }
        setCollapsedColumnKeys(newCollapsedKeys);
        propsOnColumnCollapsedChange === null || propsOnColumnCollapsedChange === void 0 ? void 0 : propsOnColumnCollapsedChange(newCollapsedKeys);
    };
    useEffect(function () {
        if (propsCollapsedColumnKeys !== undefined) {
            setCollapsedColumnKeys(propsCollapsedColumnKeys);
        }
    }, [propsCollapsedColumnKeys]);
    return (jsxs(DndContext, __assign({ accessibility: {
            screenReaderInstructions: {
                draggable: translateKanbanDragAndDrop('instructions')
            },
            announcements: {
                onDragStart: function (_a) {
                    var _b, _c, _d;
                    var active = _a.active;
                    var type = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type;
                    if (type === KanbanElementType.Column) {
                        var column = (_c = active.data.current) === null || _c === void 0 ? void 0 : _c.column;
                        return translateKanbanDragAndDrop('onColumnDragStart', {
                            title: column.title
                        });
                    }
                    if (type === KanbanElementType.Card) {
                        var card = (_d = active.data.current) === null || _d === void 0 ? void 0 : _d.card;
                        return translateKanbanDragAndDrop('onCardDragStart', {
                            title: card[isFunction(cardNameAccessor) ? cardNameAccessor(card) : cardNameAccessor]
                        });
                    }
                },
                onDragOver: function (_a) {
                    var _b, _c, _d, _e, _f, _g;
                    var active = _a.active, over = _a.over;
                    // Workaround for dnd-kit skipping the start announcement: https://github.com/clauderic/dnd-kit/issues/424
                    if (isFirstAnnouncementRef.current) {
                        isFirstAnnouncementRef.current = false;
                        return;
                    }
                    var type = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type;
                    if (over && type === KanbanElementType.Column) {
                        var activeColumn = (_c = active.data.current) === null || _c === void 0 ? void 0 : _c.column;
                        var overColumn = (_d = over.data.current) === null || _d === void 0 ? void 0 : _d.column;
                        return translateKanbanDragAndDrop('onColumnDragOver', {
                            activeTitle: activeColumn.title,
                            overTitle: overColumn.title
                        });
                    }
                    if (over && ((_e = over.data.current) === null || _e === void 0 ? void 0 : _e.type) === KanbanElementType.ColumnBody) {
                        var activeCard = (_f = active.data.current) === null || _f === void 0 ? void 0 : _f.card;
                        var overColumnBody = (_g = over.data.current) === null || _g === void 0 ? void 0 : _g.column;
                        return translateKanbanDragAndDrop('onCardDragOver', {
                            activeTitle: activeCard[isFunction(cardNameAccessor) ? cardNameAccessor(activeCard) : cardNameAccessor],
                            overTitle: overColumnBody.title
                        });
                    }
                },
                onDragEnd: function (_a) {
                    var _b, _c, _d, _e, _f, _g;
                    var active = _a.active, over = _a.over;
                    var type = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type;
                    if (over && type === KanbanElementType.Column) {
                        var activeColumn = (_c = active.data.current) === null || _c === void 0 ? void 0 : _c.column;
                        var overColumn = (_d = over.data.current) === null || _d === void 0 ? void 0 : _d.column;
                        return translateKanbanDragAndDrop('onColumnDragEndOver', {
                            activeTitle: activeColumn.title,
                            overTitle: overColumn.title
                        });
                    }
                    if (over && ((_e = over.data.current) === null || _e === void 0 ? void 0 : _e.type) === KanbanElementType.ColumnBody) {
                        var activeCard = (_f = active.data.current) === null || _f === void 0 ? void 0 : _f.card;
                        var overColumnBody = (_g = over.data.current) === null || _g === void 0 ? void 0 : _g.column;
                        return translateKanbanDragAndDrop('onCardDragEndOver', {
                            activeTitle: activeCard[isFunction(cardNameAccessor) ? cardNameAccessor(activeCard) : cardNameAccessor],
                            overTitle: overColumnBody.title
                        });
                    }
                },
                onDragCancel: function (_a) {
                    var _b, _c, _d;
                    var active = _a.active;
                    var type = (_b = active.data.current) === null || _b === void 0 ? void 0 : _b.type;
                    if (type === KanbanElementType.Column) {
                        var column = (_c = active.data.current) === null || _c === void 0 ? void 0 : _c.column;
                        return translateKanbanDragAndDrop('onColumnDragCancel', {
                            title: column.title
                        });
                    }
                    if (type === KanbanElementType.Card) {
                        var card = (_d = active.data.current) === null || _d === void 0 ? void 0 : _d.card;
                        return translateKanbanDragAndDrop('onCardDragCancel', {
                            title: card[isFunction(cardNameAccessor) ? cardNameAccessor(card) : cardNameAccessor]
                        });
                    }
                }
            }
        }, collisionDetection: activeColumnDragData ? horizontalSortableListCollisionDetection : closestCorners, measuring: {
            droppable: {
                strategy: MeasuringStrategy.Always
            }
        }, onDragCancel: onDragCancel, onDragEnd: onDragEnd, onDragStart: onDragStart, sensors: sensors }, { children: [jsxs("div", __assign({ "aria-label": ariaLabel, className: classNames('kanban', className), ref: ref, role: "region", style: {
                    alignItems: columnHeightMode === KanbanColumnHeightMode.Auto ? 'flex-start' : undefined,
                    height: height
                } }, { children: [jsx(SortableContext, __assign({ items: columnIds, strategy: horizontalListSortingStrategy }, { children: data.map(function (col) { return (jsx(KanbanColumn, { addCardOptions: addCardOptions, data: col, isCollapsed: collapsedColumnKeys.has(col.id), isDraggable: enableColumnReordering, onCollapsedChange: onColumnCollapsedChange, onMenuAction: onColumnMenuAction, onMenuSelectionChange: onColumnMenuSelectionChange, onShowMoreCards: onShowMoreCards, renderCard: renderCard, width: columnWidth }, col.id)); }) })), renderAfterColumns === null || renderAfterColumns === void 0 ? void 0 : renderAfterColumns({ isDraggingColumn: !!activeColumnDragData }), addColumnOptions && (
                    // Button will handle the press events and focus.
                    // eslint-disable-next-line
                    jsx("li", __assign({ className: "kanban__new-column", onClick: addColumnOptions.onAdd }, { children: addColumnOptions.showIconOnly ?
                            jsx(IconButton, { "aria-label": addColumnOptions.label, iconName: iconNames.Add, onPress: addColumnOptions.onAdd, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral })
                            : jsx(Button, __assign({ onPress: addColumnOptions.onAdd, startIconName: iconNames.Add, style: ButtonStyle.Plain, variant: ButtonVariant.Neutral }, { children: addColumnOptions.label })) })))] })), createPortal(jsxs(DragOverlay, { children: [activeColumnDragData && (jsx(KanbanColumn, { addCardOptions: addCardOptions, data: activeColumnDragData.column, isCollapsed: collapsedColumnKeys === null || collapsedColumnKeys === void 0 ? void 0 : collapsedColumnKeys.has(activeColumnDragData.column.id), isDraggable: true, isOverlay: true, renderCard: renderCard })), activeCardDragData &&
                        renderCard({
                            columnId: activeCardDragData.columnId,
                            data: activeCardDragData.card,
                            isOverlay: true
                        })] }), document.body)] })));
}

var _a$1;
var KanbanCardFooterAlertLevel;
(function (KanbanCardFooterAlertLevel) {
    KanbanCardFooterAlertLevel[KanbanCardFooterAlertLevel["Success"] = 1] = "Success";
    KanbanCardFooterAlertLevel[KanbanCardFooterAlertLevel["Warning"] = 2] = "Warning";
    KanbanCardFooterAlertLevel[KanbanCardFooterAlertLevel["Danger"] = 3] = "Danger";
})(KanbanCardFooterAlertLevel || (KanbanCardFooterAlertLevel = {}));
var ALERT_ICON_CSS_CLASS = 'kanban-card__alert-icon';
var alertLevelIconProps = (_a$1 = {},
    _a$1[KanbanCardFooterAlertLevel.Success] = {
        className: "".concat(ALERT_ICON_CSS_CLASS, " ").concat(ALERT_ICON_CSS_CLASS, "--success"),
        name: iconNames.ErrorFilled
    },
    _a$1[KanbanCardFooterAlertLevel.Warning] = {
        className: "".concat(ALERT_ICON_CSS_CLASS, " ").concat(ALERT_ICON_CSS_CLASS, "--warning"),
        name: iconNames.WarningFilled
    },
    _a$1[KanbanCardFooterAlertLevel.Danger] = {
        className: "".concat(ALERT_ICON_CSS_CLASS, " ").concat(ALERT_ICON_CSS_CLASS, "--danger"),
        name: iconNames.EmergencyHomeFilled
    },
    _a$1);
function KanbanCardFooter(_a) {
    var alertLevel = _a.alertLevel, children = _a.children, title = _a.title, props = __rest(_a, ["alertLevel", "children", "title"]);
    var state = useDisclosureState(props);
    var panelRef = useRef(null);
    var triggerRef = useRef(null);
    var _b = useDisclosure(props, state, panelRef), triggerProps = _b.buttonProps, panelProps = _b.panelProps;
    var buttonProps = useButton(triggerProps, triggerRef).buttonProps;
    var _c = useFocusRing(), isFocusVisible = _c.isFocusVisible, focusProps = _c.focusProps;
    var isExpanded = state.isExpanded;
    var _d = useAutoHeightAnimation({ isExpanded: isExpanded, ref: panelRef }), isLoaded = _d.isLoaded, panelProps2 = _d.props;
    return (jsxs("div", __assign({ className: "kanban-card__footer" }, { children: [jsx(Divider, { size: Size.sm }), jsxs("div", __assign({ className: "kanban-card__disclosure" }, { children: [jsxs("button", __assign({}, mergeProps(buttonProps, focusProps), { className: "kanban-card__disclosure-btn", "data-focus-visible": isFocusVisible || undefined, ref: triggerRef }, { children: [jsx("div", __assign({ className: "kanban-card__disclosure-icon" }, { children: jsx(Icon, { name: isExpanded ? iconNames.ExpandMore : iconNames.ChevronRight, size: IconSize.SM }) })), jsx(Label, __assign({ className: "kanban-card__disclosure-title", size: Size.md }, { children: title })), alertLevel && jsx(Icon, __assign({}, alertLevelIconProps[alertLevel], { size: IconSize.MD }))] })), jsx("div", __assign({}, mergeProps(panelProps, panelProps2), { className: "kanban-card__disclosure-panel", ref: panelRef }, { children: (isExpanded || isLoaded) && (jsx("div", __assign({ className: "kanban-card__disclosure-panel-content" }, { children: children }))) }))] }))] })));
}

var KANBAN_CARD_HOVER_BUTTON_CSS_CLASS = 'kanban-card__hover-button';
function KanbanCard(_a) {
    var bodyContent = _a.bodyContent, className = _a.className, columnId = _a.columnId, data = _a.data, detailsContent = _a.detailsContent, footerProps = _a.footerProps, headerContent = _a.headerContent, _b = _a.idAccessor, idAccessor = _b === void 0 ? 'id' : _b, isOverlay = _a.isOverlay, menuProps = _a.menuProps, ref = _a.ref, subTitle = _a.subTitle, title = _a.title;
    var _c = useDraggable({
        id: data[idAccessor],
        data: {
            card: data,
            columnId: columnId,
            type: KanbanElementType.Card
        }
    }), isDragging = _c.isDragging, setNodeRef = _c.setNodeRef, listeners = _c.listeners, attributes = _c.attributes;
    var translateCommon = useTranslateCommon();
    var titleId = useId();
    return (jsxs("div", __assign({ className: classNames('kanban-card', className, {
            'kanban-card--overlay': isOverlay,
            'kanban-card--dragging': isDragging
        }), ref: mergeRefs(setNodeRef, ref), role: "listitem" }, { children: [jsxs("div", __assign({ className: "kanban-card__header" }, { children: [jsx(DragHandle, __assign({}, attributes, listeners, { "aria-labelledby": titleId })), (!!menuProps || !!headerContent) && (jsxs("div", __assign({ className: "kanban-card__header-right" }, { children: [headerContent, menuProps && (jsx(Menu, __assign({}, menuProps, { placement: "bottom right" }, { children: jsx(IconButton, { "aria-label": translateCommon('moreActions'), iconName: iconNames.MoreVert, isDisabled: menuProps.isDisabled, size: Size.sm, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }) })))] })))] })), jsxs("div", __assign({ className: "kanban-card__body" }, { children: [jsxs("div", __assign({ className: "kanban-card__title-wrapper", id: titleId }, { children: [jsx(Title, __assign({ size: Size.xxs }, { children: jsx("strong", { children: title }) })), subTitle && jsx(Label, __assign({ size: Size.md }, { children: subTitle }))] })), bodyContent] })), detailsContent && jsx("div", __assign({ className: "kanban-card__details" }, { children: detailsContent })), footerProps && jsx(KanbanCardFooter, __assign({}, footerProps))] })));
}

var ListItemStyle;
(function (ListItemStyle) {
    ListItemStyle["Card"] = "card";
    ListItemStyle["Dash"] = "dash";
    ListItemStyle["Plain"] = "plain";
})(ListItemStyle || (ListItemStyle = {}));
function ListItem(_a) {
    var children = _a.children, className = _a.className, footer = _a.footer, ref = _a.ref, showFooterSeparator = _a.showFooterSeparator, _b = _a.style, style = _b === void 0 ? ListItemStyle.Card : _b;
    return (jsxs("li", __assign({ className: classNames("list-item list-item--".concat(style), className), ref: ref }, { children: [children, footer && (jsxs(Fragment, { children: [showFooterSeparator && jsx(Divider, { className: "list-item__divider", size: Size.sm }), footer] }))] })));
}

function List(_a) {
    var children = _a.children, className = _a.className, data = _a.data, idAccessor = _a.idAccessor, ref = _a.ref, showItemFooterSeparator = _a.showItemFooterSeparator, spacing = _a.spacing, _b = _a.style, style = _b === void 0 ? ListItemStyle.Card : _b;
    var defaultSpacing = style === ListItemStyle.Plain ? 0 : coreTokens.dimension.spaceSm.value;
    var commonListItemProps = {
        showFooterSeparator: showItemFooterSeparator,
        style: style
    };
    var listItems;
    if (isFunction(children)) {
        if (!data) {
            throw new Error('Must provide data prop for dynamic children.');
        }
        if (!idAccessor) {
            throw new Error('Must provide idAccessor prop for dynamic children.');
        }
        listItems = data.map(function (item) {
            var element = children(item);
            var key = isFunction(idAccessor) ? idAccessor(item) : item[idAccessor];
            if (isValidElement(element) && element.type === ListItem) {
                return cloneElement(element, __assign({ key: key }, commonListItemProps));
            }
            return (jsx(ListItem, __assign({}, commonListItemProps, { children: element }), key));
        });
    }
    else {
        var childrenArr = Children.toArray(children);
        listItems = childrenArr.map(function (child) {
            return cloneElement(child, __assign({}, commonListItemProps));
        });
    }
    return (jsx("ul", __assign({ className: classNames('list', className), ref: ref, style: { gap: spacing !== null && spacing !== void 0 ? spacing : defaultSpacing } }, { children: listItems })));
}

/*
Max precise number in JS is Number.MAX_SAFE_INTEGER = 2^53 which is about 9 x 10^15, until this number our calculations will be precise
We have max 4 fractional digits when showing qty, price values which is 10^-4. If we make precision 10^-6 that should give us adequate
results (1/100th per last digit). Maximum safe number is thus 10^15 * 10^-6 = 10^9, so we can calculate 1 billion with 4 digits rather precisely.
 */
var precision = 1e6;
function multiply(a, b) {
    return Math.round(a * b * precision) / precision;
}

var ROOT_FONT_SIZE = 16; // browser default, should sync with CSS
function emToPx(em, fontSize) {
    return multiply(em, fontSize);
}
function remToPx(rem) {
    return multiply(rem, ROOT_FONT_SIZE);
}
function parsePixelValue(value, fontSize) {
    var numericValue = parseFloat(value);
    if (value.endsWith('rem')) {
        return remToPx(numericValue);
    }
    else if (value.endsWith('em') && fontSize) {
        return emToPx(numericValue, parsePixelValue(fontSize));
    }
    return numericValue;
}

function getChartTokenValues(size) {
    var tokenValues = {
        seriesLabelFontSize: '',
        seriesLabelGap: '',
        legendGap: '',
        verticalGap: '',
        axisLabelGap: '',
        barRadius: ''
    };
    var _a = coreTokens.dimension, 
    // Series label font size
    chartSeriesLabelXsFontSize = _a.chartSeriesLabelXsFontSize, chartSeriesLabelSmFontSize = _a.chartSeriesLabelSmFontSize, chartSeriesLabelMdFontSize = _a.chartSeriesLabelMdFontSize, chartSeriesLabelLgFontSize = _a.chartSeriesLabelLgFontSize, 
    // Series label gap
    chartSpaceSeriesLabelGapXs = _a.chartSpaceSeriesLabelGapXs, chartSpaceSeriesLabelGapSm = _a.chartSpaceSeriesLabelGapSm, chartSpaceSeriesLabelGapMd = _a.chartSpaceSeriesLabelGapMd, chartSpaceSeriesLabelGapLg = _a.chartSpaceSeriesLabelGapLg, 
    // Legend gap
    chartSpaceLegendGapXs = _a.chartSpaceLegendGapXs, chartSpaceLegendGapSm = _a.chartSpaceLegendGapSm, chartSpaceLegendGapMd = _a.chartSpaceLegendGapMd, chartSpaceLegendGapLg = _a.chartSpaceLegendGapLg, 
    // Vertical gap
    chartSpaceChartVerticalGapXs = _a.chartSpaceChartVerticalGapXs, chartSpaceChartVerticalGapSm = _a.chartSpaceChartVerticalGapSm, chartSpaceChartVerticalGapMd = _a.chartSpaceChartVerticalGapMd, chartSpaceChartVerticalGapLg = _a.chartSpaceChartVerticalGapLg, 
    // Axis label ap
    chartSpaceAxisLabelGapXs = _a.chartSpaceAxisLabelGapXs, chartSpaceAxisLabelGapSm = _a.chartSpaceAxisLabelGapSm, chartSpaceAxisLabelGapMd = _a.chartSpaceAxisLabelGapMd, chartSpaceAxisLabelGapLg = _a.chartSpaceAxisLabelGapLg, 
    // Bar radius
    chartRadiusBarChartXs = _a.chartRadiusBarChartXs, chartRadiusBarChartSm = _a.chartRadiusBarChartSm, chartRadiusBarChartMd = _a.chartRadiusBarChartMd, chartRadiusBarChartLg = _a.chartRadiusBarChartLg;
    switch (size) {
        case Size.xs:
            tokenValues.seriesLabelFontSize = chartSeriesLabelXsFontSize.value;
            tokenValues.seriesLabelGap = chartSpaceSeriesLabelGapXs.value;
            tokenValues.legendGap = chartSpaceLegendGapXs.value;
            tokenValues.verticalGap = chartSpaceChartVerticalGapXs.value;
            tokenValues.axisLabelGap = chartSpaceAxisLabelGapXs.value;
            tokenValues.barRadius = chartRadiusBarChartXs.value;
            break;
        case Size.sm:
            tokenValues.seriesLabelFontSize = chartSeriesLabelSmFontSize.value;
            tokenValues.seriesLabelGap = chartSpaceSeriesLabelGapSm.value;
            tokenValues.legendGap = chartSpaceLegendGapSm.value;
            tokenValues.verticalGap = chartSpaceChartVerticalGapSm.value;
            tokenValues.axisLabelGap = chartSpaceAxisLabelGapSm.value;
            tokenValues.barRadius = chartRadiusBarChartSm.value;
            break;
        case Size.md:
            tokenValues.seriesLabelFontSize = chartSeriesLabelMdFontSize.value;
            tokenValues.seriesLabelGap = chartSpaceSeriesLabelGapMd.value;
            tokenValues.legendGap = chartSpaceLegendGapMd.value;
            tokenValues.verticalGap = chartSpaceChartVerticalGapMd.value;
            tokenValues.axisLabelGap = chartSpaceAxisLabelGapMd.value;
            tokenValues.barRadius = chartRadiusBarChartMd.value;
            break;
        case Size.lg:
            tokenValues.seriesLabelFontSize = chartSeriesLabelLgFontSize.value;
            tokenValues.seriesLabelGap = chartSpaceSeriesLabelGapLg.value;
            tokenValues.legendGap = chartSpaceLegendGapLg.value;
            tokenValues.verticalGap = chartSpaceChartVerticalGapLg.value;
            tokenValues.axisLabelGap = chartSpaceAxisLabelGapLg.value;
            tokenValues.barRadius = chartRadiusBarChartLg.value;
            break;
    }
    return tokenValues;
}

var ChartType;
(function (ChartType) {
    ChartType["Area"] = "area";
    ChartType["Areaspline"] = "areaspline";
    ChartType["Bar"] = "bar";
    ChartType["Column"] = "column";
    ChartType["Donut"] = "donut";
    ChartType["Line"] = "line";
    ChartType["Pie"] = "pie";
})(ChartType || (ChartType = {}));

var _a;
var chartMinWidth = (_a = {},
    _a[Size.xxs] = 0,
    _a[Size.xs] = 150,
    _a[Size.sm] = 384,
    _a[Size.md] = 768,
    _a[Size.lg] = 1250,
    _a);

var PIE_SERIES_DATA_MAX_LEN = 10;
function getSizeRelatedOptions(size) {
    var commonOptions = {
        chart: {
            className: "chart chart--".concat(size)
        }
    };
    if (size === Size.xxs) {
        return __assign(__assign({}, commonOptions), { legend: {
                enabled: false
            }, plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false
                    }
                }
            }, xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            }, yAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                }
            } });
    }
    var _a = getChartTokenValues(size), seriesLabelFontSize = _a.seriesLabelFontSize, seriesLabelGap = _a.seriesLabelGap, legendGap = _a.legendGap, verticalGap = _a.verticalGap, axisLabelGap = _a.axisLabelGap, barRadius = _a.barRadius;
    return __assign(__assign({}, commonOptions), { legend: {
            enabled: true,
            itemDistance: parsePixelValue(legendGap),
            margin: parsePixelValue(verticalGap),
            symbolPadding: parsePixelValue(seriesLabelGap, seriesLabelFontSize)
        }, plotOptions: {
            column: {
                borderRadius: parsePixelValue(barRadius)
            }
        }, xAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: parsePixelValue(verticalGap)
            }
        }, yAxis: {
            labels: {
                enabled: true
            },
            title: {
                margin: parsePixelValue(axisLabelGap)
            }
        } });
}
function getChartBaseOptions(_a) {
    var locale = _a.locale, options = _a.options, translateChartFn = _a.translateChartFn;
    var out = {
        lang: {
            accessibility: {
                axis: {
                    rangeFromTo: translateChartFn('rangeFromTo'),
                    xAxisDescriptionSingular: translateChartFn('xAxisDescriptionSingular'),
                    yAxisDescriptionSingular: translateChartFn('yAxisDescriptionSingular')
                },
                chartTypes: {
                    barMultiple: translateChartFn('type.barMultiple'),
                    barSingle: translateChartFn('type.barSingle'),
                    columnMultiple: translateChartFn('type.barMultiple'),
                    columnSingle: translateChartFn('type.barSingle'),
                    defaultMultiple: translateChartFn('type.defaultMultiple'),
                    defaultSingle: translateChartFn('type.defaultSingle'),
                    emptyChart: translateChartFn('type.emptyChart'),
                    lineMultiple: translateChartFn('type.lineMultiple'),
                    lineSingle: translateChartFn('type.lineSingle'),
                    pieMultiple: translateChartFn('type.pieMultiple'),
                    pieSingle: translateChartFn('type.pieSingle')
                },
                chartContainerLabel: translateChartFn('chartContainerLabel'),
                defaultChartTitle: translateChartFn('defaultChartTitle'),
                legend: {
                    legendItem: translateChartFn('legendItem'),
                    legendLabelNoTitle: translateChartFn('legendLabelNoTitle')
                },
                screenReaderSection: {
                    endOfChartMarker: translateChartFn('endOfChartMarker')
                },
                series: {
                    nullPointValue: translateChartFn('nullPointValue'),
                    summary: {
                        bar: translateChartFn('seriesSummary.bar'),
                        barCombination: translateChartFn('seriesSummary.barCombination'),
                        column: translateChartFn('seriesSummary.bar'),
                        columnCombination: translateChartFn('seriesSummary.barCombination'),
                        default: translateChartFn('default'),
                        defaultCombination: translateChartFn('default'),
                        line: translateChartFn('seriesSummary.line'),
                        lineCombination: translateChartFn('seriesSummary.lineCombination'),
                        pie: translateChartFn('seriesSummary.pie'),
                        pieCombination: translateChartFn('seriesSummary.pieCombination')
                    }
                },
                svgContainerLabel: translateChartFn('svgContainerLabel'),
                zoom: {
                    resetZoomButton: translateChartFn('resetZoom')
                }
            },
            locale: locale,
            resetZoom: translateChartFn('resetZoom'),
            resetZoomTitle: translateChartFn('resetZoom')
        }
    };
    var series = (options !== null && options !== void 0 ? options : {}).series;
    if (series && series.length > 0) {
        var firstSeries = series[0];
        if (firstSeries.type === ChartType.Pie) {
            out = __assign(__assign({}, out), { legend: {
                    align: 'center',
                    verticalAlign: 'bottom'
                } });
        }
    }
    return out;
}
function getChartForcedOptions(_a) {
    var options = _a.options, size = _a.size;
    var series = (options !== null && options !== void 0 ? options : {}).series;
    var out = {};
    if (size) {
        out = merge(out, getSizeRelatedOptions(size));
    }
    else {
        var sizes = [Size.xxs, Size.xs, Size.sm, Size.md, Size.lg];
        out = merge(out, {
            responsive: {
                rules: sizes.map(function (chartSize) { return ({
                    condition: { minWidth: chartMinWidth[chartSize] },
                    chartOptions: getSizeRelatedOptions(chartSize)
                }); })
            }
        });
    }
    if (series && series.length > 0) {
        var firstSeries = series[0];
        if (firstSeries.type === ChartType.Pie &&
            firstSeries.data &&
            firstSeries.data.length > PIE_SERIES_DATA_MAX_LEN) {
            // Don't show data labels to avoid label connector line rendering issue.
            out = merge(out, {
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false
                        }
                    }
                }
            });
        }
    }
    return out;
}
function getChartOptions(_a) {
    var locale = _a.locale, options = _a.options, size = _a.size, translateChartFn = _a.translateChartFn;
    var baseOptions = getChartBaseOptions({ locale: locale, options: options, translateChartFn: translateChartFn });
    var forcedOptions = getChartForcedOptions({ options: options, size: size });
    return merge(baseOptions, options, forcedOptions);
}

function useTranslateChart() {
    return useTranslateFn('chart');
}

function formatChartValue(options, value) {
    var _a = options.valueDecimals, valueDecimals = _a === void 0 ? 0 : _a, _b = options.valuePrefix, valuePrefix = _b === void 0 ? '' : _b, _c = options.valueSuffix, valueSuffix = _c === void 0 ? '' : _c;
    if (isNullOrUndefined(value)) {
        return '';
    }
    return "".concat(valuePrefix).concat(Highcharts.numberFormat(value, valueDecimals)).concat(valueSuffix);
}

// Global options
Highcharts.setOptions({
    chart: {
        colorCount: 21,
        events: {
            render: function () {
                var _a, _b;
                var chartType = (_a = this.options.chart) === null || _a === void 0 ? void 0 : _a.type;
                if (chartType === ChartType.Donut) {
                    var series = this.series[0];
                    var total = series.data.reduce(function (sum, seriesItem) { var _a; return sum + ((_a = seriesItem.y) !== null && _a !== void 0 ? _a : 0); }, 0);
                    var totalText = formatChartValue(this.tooltip.options, total);
                    (_b = this._totalLabel) !== null && _b !== void 0 ? _b : (this._totalLabel = this.renderer
                        .label(totalText, 0)
                        .css({
                        textAnchor: 'middle'
                    })
                        .addClass('chart-total-label')
                        .add());
                    var x = series.center[0] + this.plotLeft;
                    var y = series.center[1] + this.plotTop - this._totalLabel.attr('height') / 2;
                    this._totalLabel.attr({
                        text: totalText,
                        x: x,
                        y: y
                    });
                }
            }
        },
        styledMode: true // positioning related styling must still be handled in TS
    },
    credits: {
        enabled: false
    },
    legend: {
        align: 'right',
        verticalAlign: 'top'
    },
    plotOptions: {
        series: {
            showInLegend: true
        }
    },
    title: {
        text: undefined
    },
    tooltip: {
        className: 'chart-tooltip-container',
        formatter: function (tooltip) {
            var formattedValue = formatChartValue(tooltip.options, this.y);
            return "\n                <div class=\"chart-tooltip\">\n                    <div class=\"chart-tooltip__line\">".concat(this.key, "</div>\n                    <div class=\"chart-tooltip__line\">\n                        <svg class=\"chart-tooltip__legend-symbol\"><rect/></svg>\n                        ").concat(this.series.name, ": <span class=\"chart-tooltip__value\"><b>").concat(formattedValue, "</b></span>\n                    </div>\n                </div>\n            ");
        },
        outside: true,
        padding: 0,
        shadow: false,
        useHTML: true
    }
});
function Chart(props) {
    var _a;
    var aspectRatio = props.aspectRatio, className = props.className, containerProps = props.containerProps, fullHeight = props.fullHeight, propsOptions = props.options, size = props.size, otherProps = __rest(props, ["aspectRatio", "className", "containerProps", "fullHeight", "options", "size"]);
    var cultureLocale = useLocales().cultureLocale;
    var translateChart = useTranslateChart();
    var options = useMemo(function () {
        var chartOptions = getChartOptions({
            options: propsOptions,
            locale: cultureLocale,
            size: size,
            translateChartFn: translateChart
        });
        // Lang options don't change dynamically without calling setOptions().
        Highcharts.setOptions({ lang: chartOptions.lang });
        return chartOptions;
    }, [propsOptions, size, cultureLocale, translateChart]);
    var style = {};
    if (!((_a = options === null || options === void 0 ? void 0 : options.chart) === null || _a === void 0 ? void 0 : _a.height)) {
        if (aspectRatio) {
            style.aspectRatio = aspectRatio;
        }
        else if (fullHeight) {
            style.height = '100%';
        }
    }
    return (createElement(HighchartsReact, __assign({}, otherProps, { containerProps: __assign(__assign({ 
            // HC styled mode forces light/dark theme based on user system preference.
            // We have only light theme for now so must include "highcharts-light" CSS class.
            className: classNames('chart-container highcharts-light', className) }, containerProps), { style: __assign(__assign({}, containerProps === null || containerProps === void 0 ? void 0 : containerProps.style), style) }), highcharts: Highcharts, 
        // Must re-draw chart for certain property changes to take effect
        key: "".concat(cultureLocale, ";").concat(size !== null && size !== void 0 ? size : ''), options: options })));
}

function ContentBlock(_a) {
    var bodyStyle = _a.bodyStyle, children = _a.children, className = _a.className, headerContent = _a.headerContent, headerStyle = _a.headerStyle, isNested = _a.isNested, title = _a.title;
    return (jsxs("div", __assign({ className: classNames('content-block', className, {
            'content-block--nested': isNested
        }) }, { children: [jsxs("div", __assign({ className: "content-block__header", style: headerStyle }, { children: [title, headerContent] })), jsx("div", __assign({ className: "content-block__body", style: bodyStyle }, { children: children }))] })));
}

var LayoutGridColumnSpacing;
(function (LayoutGridColumnSpacing) {
    LayoutGridColumnSpacing["Default"] = "var(--space-md)";
    LayoutGridColumnSpacing["Compact"] = "var(--space-xs)";
    LayoutGridColumnSpacing["Comfy"] = "var(--space-xl)";
    LayoutGridColumnSpacing["None"] = "var(--space-none)";
})(LayoutGridColumnSpacing || (LayoutGridColumnSpacing = {}));
function getGapProperties(dimension, spacing) {
    var cssVariables = {};
    var cssClassNames = [];
    if (isString(spacing)) {
        cssVariables["--layout-grid-".concat(dimension, "-gap")] = spacing;
    }
    else {
        for (var breakpoint in spacing) {
            cssVariables["--layout-grid-".concat(dimension, "-gap-").concat(breakpoint)] = spacing[breakpoint];
            cssClassNames.push("layout-grid--".concat(dimension, "-gap-").concat(breakpoint));
        }
    }
    return {
        cssVariables: cssVariables,
        cssClassNames: cssClassNames
    };
}
function LayoutGrid(_a) {
    var children = _a.children, className = _a.className, _b = _a.columnSpacing, columnSpacing = _b === void 0 ? LayoutGridColumnSpacing.Default : _b, ref = _a.ref, _c = _a.rowSpacing, rowSpacing = _c === void 0 ? coreTokens.dimension.spaceMd.value : _c;
    var rowGapProperties = getGapProperties('row', rowSpacing);
    var columnGapProperties = getGapProperties('column', columnSpacing);
    return (jsx("div", __assign({ className: classNames.apply(void 0, __spreadArray(__spreadArray(__spreadArray(['layout-grid'], rowGapProperties.cssClassNames, false), columnGapProperties.cssClassNames, false), [className], false)), ref: ref, style: __assign(__assign({}, rowGapProperties.cssVariables), columnGapProperties.cssVariables) }, { children: children })));
}

var layoutGridColumnCounts = {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12
};
var LayoutGridItemPresetSize = {
    Full: { xs: layoutGridColumnCounts.xs, sm: layoutGridColumnCounts.sm, lg: layoutGridColumnCounts.lg },
    Half: { xs: layoutGridColumnCounts.xs / 2, sm: layoutGridColumnCounts.sm / 2, lg: layoutGridColumnCounts.lg / 2 }
};
function getPlacementProperties(suffix, placement) {
    var cssVariables = {};
    var cssClassNames = [];
    if (placement) {
        if (isNumber(placement)) {
            cssVariables["--layout-grid-item-".concat(suffix)] = placement;
        }
        else {
            for (var breakpoint in placement) {
                cssVariables["--layout-grid-item-".concat(suffix, "-").concat(breakpoint)] = placement[breakpoint];
                cssClassNames.push("layout-grid-item--".concat(suffix, "-").concat(breakpoint));
            }
        }
    }
    return {
        cssVariables: cssVariables,
        cssClassNames: cssClassNames
    };
}
// eslint-disable-next-line sonarjs/function-return-type
function sanitizeSize(size) {
    var _a;
    var newSize = size;
    if (isNumber(newSize)) {
        if (newSize > layoutGridColumnCounts.xs) {
            newSize = {
                xs: layoutGridColumnCounts.xs,
                sm: Math.min(newSize, layoutGridColumnCounts.sm),
                lg: Math.min(newSize, layoutGridColumnCounts.lg)
            };
        }
    }
    else {
        for (var breakpoint in newSize) {
            newSize[breakpoint] = Math.min((_a = layoutGridColumnCounts[breakpoint]) !== null && _a !== void 0 ? _a : layoutGridColumnCounts.lg, newSize[breakpoint]);
        }
    }
    return newSize;
}
function LayoutGridItem(_a) {
    var children = _a.children, className = _a.className, ref = _a.ref, size = _a.size, start = _a.start;
    var sanitizedSize = useMemo(function () { return sanitizeSize(size); }, [size]);
    var spanProperties = getPlacementProperties('span', sanitizedSize);
    var startProperties = getPlacementProperties('start', start);
    return (jsx("div", __assign({ className: classNames.apply(void 0, __spreadArray(__spreadArray(__spreadArray(['layout-grid-item'], spanProperties.cssClassNames, false), startProperties.cssClassNames, false), [className], false)), ref: ref, style: __assign(__assign({}, spanProperties.cssVariables), startProperties.cssVariables) }, { children: children })));
}

var LEVEL_1_ICON_SIZE = 32;
var LEVEL_2_ICON_SIZE = 24;
function SkeletonPageHeader(_a) {
    var ariaHidden = _a["aria-hidden"], className = _a.className, hasBreadcrumbs = _a.hasBreadcrumbs, hasDetails = _a.hasDetails, hasIcon = _a.hasIcon, level = _a.level, ref = _a.ref;
    var iconSize = level > 1 ? LEVEL_2_ICON_SIZE : LEVEL_1_ICON_SIZE;
    return (jsxs("div", __assign({ "aria-hidden": ariaHidden === false ? undefined : true, className: classNames('skeleton-page-header', className), ref: ref }, { children: [hasBreadcrumbs && (jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "30%" })), jsxs("div", __assign({ className: "skeleton-page-header__title" }, { children: [hasIcon && (jsx(Skeleton, { "aria-hidden": false, height: iconSize, shape: SkeletonShape.Rectangle, style: { flexShrink: 0 }, width: iconSize })), jsx(SkeletonText, { "aria-hidden": false, size: level > 1 ? Size.sm : Size.md, type: SkeletonTextType.Heading, width: "35%" })] })), hasDetails && (jsx(SkeletonText, { "aria-hidden": false, size: Size.md, type: SkeletonTextType.Label, width: "30%" }))] }), "".concat(hasBreadcrumbs, "-").concat(hasDetails, "-").concat(hasIcon, "-").concat(level)));
}

function PageHeader(_a) {
    var badge = _a.badge, buttons = _a.buttons, breadcrumbItems = _a.breadcrumbItems, className = _a.className, details = _a.details, iconName = _a.iconName, isSkeleton = _a.isSkeleton, level = _a.level, onBackPress = _a.onBackPress, ref = _a.ref, showBackButton = _a.showBackButton, style = _a.style, title = _a.title;
    var translateCommon = useTranslateCommon();
    var hasBreadcrumbs = breadcrumbItems && breadcrumbItems.length > 0;
    var hasDetails = details && details.length > 0;
    if (isSkeleton) {
        return (jsx(SkeletonPageHeader, { hasBreadcrumbs: hasBreadcrumbs, hasDetails: hasDetails, hasIcon: !!iconName, level: level }));
    }
    return (jsxs("div", __assign({ className: classNames('page-header', className), ref: ref, style: style }, { children: [showBackButton && (jsx(Button, __assign({ onPress: onBackPress, size: Size.sm, startIconName: iconNames.ArrowBack, style: ButtonStyle.Outline, variant: ButtonVariant.Neutral }, { children: translateCommon('back') }))), jsxs("div", __assign({ className: "page-header__content" }, { children: [hasBreadcrumbs && jsx(Breadcrumbs, { className: "page-header__breadcrumbs", items: breadcrumbItems }), jsxs("div", __assign({ className: "page-header__head" }, { children: [jsxs("div", __assign({ className: "page-header__title" }, { children: [iconName && (jsx(Icon, { className: "page-header__icon", name: iconName, size: level > 1 ? IconSize.LG : IconSize.XL })), jsx(Heading, __assign({ className: "page-header__title-text", level: 1, size: level > 1 ? Size.sm : Size.md }, { children: title })), badge] })), buttons && buttons.length > 0 && jsx("div", __assign({ className: "page-header__button-group" }, { children: buttons }))] })), hasDetails && jsx("div", __assign({ className: "page-header__details" }, { children: details }))] }))] })));
}

function PageLayout(_a) {
    var children = _a.children, className = _a.className, ref = _a.ref;
    return (jsx("div", __assign({ className: classNames('page-layout', className), ref: ref }, { children: children })));
}

export { ACTION_ITEM_CSS_CLASS, ActionItemContent, AlertBanner, AlertBannerVariant, AlertModal, Alignment, AriaRole, Avatar, AvatarGroup, AvatarGroupLayout, Badge, BadgeStyle, BadgeVariant, BodyText, Breadcrumbs, Button, ButtonRole, ButtonStyle, ButtonVariant, CTRL_MODIFIER_KEY, Calendar, Callout, Chart, ChartType, Checkbox, CheckboxGroup, ClearButton, Collapsible, CollapsibleItem, CollapsibleItemStyle, ColorSelect, ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem, ColumnConfigurator, ColumnConfiguratorVariant, ContentBlock, DEFAULT_TOOLBAR_CONFIG, DataCard, DataCardActionElement, DataCardAlertLevel, DataCardStyle, DataTable, DataTableActionButtonCell, DataTableCheckboxCell, DataTableCheckboxHeader, DataTableDisplayColumnID, DataTableDragHandleCell, DataTableExpanderCell, DataTableRowDragMode, DataTableSelectCell, DataTableTextCell, DataTableTextFieldCell, DataTableToolbar, DatePicker, DateTile, DateTimeFieldType, DateTimeRangeFields, DayOfMonth, DialogTrigger, Divider, Drawer, DrawerHeaderStyle, DrawerVariant, DrawerWidth, DueDateButton, DueDateButtonVariant, EmptyState, EmptyStateLayoutVariant, FieldLabel, FileTrigger, FileUploadArea, FilterBar, FilterBarStyle, FilterButton, FilterMultiSelect, FilterSelect, GlobalToastRegion, HEADING_SIZE_LG_CSS_CLASS, HEADING_SIZE_MD_CSS_CLASS, HEADING_SIZE_SM_CSS_CLASS, HEADING_SIZE_XS_CSS_CLASS, HEADING_SIZE_XXS_CSS_CLASS, HTMLElementType, Heading, HelpText, HelpTextVariant, I18nContext, I18nProvider, Icon, IconButton, IconSize, InlineAlert, InlineAlertVariant, InlineSelect, InlineTextField, InputChangeTriggerAction, InputType, KANBAN_CARD_HOVER_BUTTON_CSS_CLASS, Kanban, KanbanCard, KanbanCardFooterAlertLevel, KeyboardEventKey, LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS, LABEL_SIZE_SM_CSS_CLASS, LABEL_SIZE_XS_CSS_CLASS, Label, LabelPlacement, LayoutGrid, LayoutGridColumnSpacing, LayoutGridItem, LayoutGridItemPresetSize, Link, LinkRole, List, ListItem, ListItemStyle, Menu, MenuOption, MultiSelect, Orientation, OverlayFooter, OverlayHeader, OverlayHeaderVariant, PageHeader, PageLayout, Pagination, PasswordField, PhoneNumberField, Popover, Position, ProgressBar, Radio, RadioGroup, RequiredIndicator, RichTextEditor, SearchField, SegmentedControl, Select, SelectOptionContent, SelectOptionsEmptyState, SelectedItemStyle, SelectionMode, SideNav, SideNavMode, Size, Skeleton, SkeletonShape, SkeletonText, SkeletonTextMultiline, SkeletonTextType, Slider, SliderValueDisplayMode, SortDirection, SpecialSelectItemKey, Spinner, SpinnerVariant, StepItem, Steps, SubmenuBehavior, Tabs, TabsType, Tag, TagGroup, TagStyle, TextArea, TextField, TextFieldCopy, TextFieldSelect, TextFieldUnit, TextFieldVisibilityToggle, TimePicker, Title, ToastQueue, ToggleButton, ToggleSwitch, Tooltip, TooltipTrigger, TooltipType, TopNav, TreeMultiSelect, TreeSelect, TriggerElement, UploadItem, UploadItemStyle, chartMinWidth, closeToast, iconNames, icons, useKanbanDroppableColumnBody, useLocales };
//# sourceMappingURL=index.esm.js.map
