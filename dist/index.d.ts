import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, RefAttributes, CSSProperties, AriaRole as AriaRole$1, Ref, ElementType, HTMLAttributes, ReactElement, ComponentPropsWithoutRef, RefObject, KeyboardEvent } from 'react';
import { ButtonProps as ButtonProps$1, LinkProps as LinkProps$1, MenuItemProps, Key, MenuProps as MenuProps$1, PopoverProps as PopoverProps$1, ModalOverlayProps, ProgressBarProps as ProgressBarProps$1, TooltipProps as TooltipProps$1, LabelProps as LabelProps$1, HeadingProps as HeadingProps$1, TooltipTriggerComponentProps, BreadcrumbsProps as BreadcrumbsProps$1, TabsProps as TabsProps$1, CheckboxProps as CheckboxProps$1, CheckboxGroupProps as CheckboxGroupProps$1, ColorSwatchProps as ColorSwatchProps$1, ColorSwatchPickerItemProps as ColorSwatchPickerItemProps$1, ColorSwatchPickerProps as ColorSwatchPickerProps$1, DatePickerProps as DatePickerProps$1, DateValue as DateValue$1, TimeFieldProps, FileTriggerProps as FileTriggerProps$1, DropZoneProps, RadioProps as RadioProps$1, RadioGroupProps as RadioGroupProps$1, SearchFieldProps as SearchFieldProps$1, SliderProps as SliderProps$1, TextFieldProps as TextFieldProps$1, InputProps, SwitchProps, PressEvent, Selection } from 'react-aria-components';
export { Color, DialogTriggerProps, TooltipTriggerComponentProps } from 'react-aria-components';
import { Placement, AriaButtonOptions, AriaDisclosureProps, AriaCalendarGridProps, DateValue, AriaCalendarProps } from 'react-aria';
import { DisclosureGroupState, DisclosureGroupProps, CalendarState, DisclosureProps } from 'react-stately';
import { RowData, Row, ColumnOrderState, ColumnPinningState, ColumnDef, VisibilityState, ExpandedState, GroupingState, PaginationState, RowSelectionState, SortingState } from '@tanstack/react-table';
export { ColumnOrderState as DataTableColumnOrderState, ColumnPinningState as DataTableColumnPinningState, VisibilityState as DataTableColumnVisibilityState, ExpandedState as DataTableExpandedState, GroupingState as DataTableGroupingState, PaginationState as DataTablePaginationState, RowSelectionState as DataTableRowSelectionState, SortingState as DataTableSortingState, createColumnHelper as createDataTableColumnHelper } from '@tanstack/react-table';
import { DragStartEvent } from '@dnd-kit/core';
import { SortingStrategy } from '@dnd-kit/sortable';
import { CellContext, HeaderContext } from '@tanstack/table-core';
export { CellContext as DataTableCellContext } from '@tanstack/table-core';
import { HighchartsReactProps, HighchartsReactRefObject } from 'highcharts-react-official';
export { HighchartsReactRefObject as ChartRefObject } from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { CalendarDate, CalendarDateTime } from '@internationalized/date';
import { RangeValue } from '@react-types/shared';

declare const iconNames: {
    Add: "Add";
    AccountCircleFilled: "AccountCircleFilled";
    AddCircle: "AddCircle";
    AddCircleFilled: "AddCircleFilled";
    AddFilled: "AddFilled";
    ArrowBack: "ArrowBack";
    ArrowBackFilled: "ArrowBackFilled";
    ArrowCircleDownFilled: "ArrowCircleDownFilled";
    ArrowCircleLeft: "ArrowCircleLeft";
    ArrowCircleLeftFilled: "ArrowCircleLeftFilled";
    ArrowCircleRight: "ArrowCircleRight";
    ArrowCircleRightFilled: "ArrowCircleRightFilled";
    ArrowCircleUp: "ArrowCircleUp";
    ArrowCircleUpFilled: "ArrowCircleUpFilled";
    ArrowDropDown: "ArrowDropDown";
    ArrowDropDownFilled: "ArrowDropDownFilled";
    ArrowDropUp: "ArrowDropUp";
    ArrowDropUpFilled: "ArrowDropUpFilled";
    ArrowForward: "ArrowForward";
    ArrowForwardFilled: "ArrowForwardFilled";
    ArrowLeft: "ArrowLeft";
    ArrowLeftFilled: "ArrowLeftFilled";
    ArrowLineLeft: "ArrowLineLeft";
    ArrowLineLeftFilled: "ArrowLineLeftFilled";
    ArrowLineRight: "ArrowLineRight";
    ArrowLineRightFilled: "ArrowLineRightFilled";
    ArrowOutward: "ArrowOutward";
    ArrowOutwardFilled: "ArrowOutwardFilled";
    ArrowRight: "ArrowRight";
    ArrowRightFilled: "ArrowRightFilled";
    BarChartAlt: "BarChartAlt";
    BarChartAltFilled: "BarChartAltFilled";
    Block: "Block";
    BlockFilled: "BlockFilled";
    BusinessCenter: "BusinessCenter";
    BusinessCenterFilled: "BusinessCenterFilled";
    Calendar: "Calendar";
    CalendarFilled: "CalendarFilled";
    CalendarToday: "CalendarToday";
    CalendarTodayFilled: "CalendarTodayFilled";
    CalendarViewMonth: "CalendarViewMonth";
    CalendarViewMonthFilled: "CalendarViewMonthFilled";
    CalendarViewWeek: "CalendarViewWeek";
    CalendarViewWeekFilled: "CalendarViewWeekFilled";
    Call: "Call";
    CallFilled: "CallFilled";
    Cancel: "Cancel";
    CancelFilled: "CancelFilled";
    Check: "Check";
    CheckCircle: "CheckCircle";
    CheckCircleFilled: "CheckCircleFilled";
    CheckFilled: "CheckFilled";
    ChevronLeft: "ChevronLeft";
    ChevronLeftFilled: "ChevronLeftFilled";
    ChevronRight: "ChevronRight";
    ChevronRightFilled: "ChevronRightFilled";
    ClockClockwise: "ClockClockwise";
    ClockClockwiseFilled: "ClockClockwiseFilled";
    Close: "Close";
    CloseFilled: "CloseFilled";
    Cloud: "Cloud";
    CloudDone: "CloudDone";
    CloudDoneFilled: "CloudDoneFilled";
    CloudFilled: "CloudFilled";
    CloudOff: "CloudOff";
    CloudOffFilled: "CloudOffFilled";
    Comment: "Comment";
    CommentFilled: "CommentFilled";
    ContactSupport: "ContactSupport";
    ContactSupportFilled: "ContactSupportFilled";
    ContentPaste: "ContentPaste";
    ContentPasteFilled: "ContentPasteFilled";
    CopyAll: "CopyAll";
    CopyAllFilled: "CopyAllFilled";
    CorporateFare: "CorporateFare";
    CorporateFareFilled: "CorporateFareFilled";
    Cycle: "Cycle";
    CycleFilled: "CycleFilled";
    DarkModeFilled: "DarkModeFilled";
    Delete: "Delete";
    DeleteFilled: "DeleteFilled";
    Description: "Description";
    DescriptionFilled: "DescriptionFilled";
    DockToRight: "DockToRight";
    DockToRightFilled: "DockToRightFilled";
    Dollar: "Dollar";
    DollarFilled: "DollarFilled";
    Draft: "Draft";
    DraftFilled: "DraftFilled";
    DragHandle: "DragHandle";
    DragHandleFilled: "DragHandleFilled";
    DragIndicator: "DragIndicator";
    DragIndicatorFilled: "DragIndicatorFilled";
    Edit: "Edit";
    EditFilled: "EditFilled";
    EmergencyHome: "EmergencyHome";
    EmergencyHomeFilled: "EmergencyHomeFilled";
    Error: "Error";
    ErrorFilled: "ErrorFilled";
    Euro: "Euro";
    EuroFilled: "EuroFilled";
    ExpandLess: "ExpandLess";
    ExpandLessFilled: "ExpandLessFilled";
    ExpandMore: "ExpandMore";
    ExpandMoreFilled: "ExpandMoreFilled";
    Favorite: "Favorite";
    FavoriteFilled: "FavoriteFilled";
    FilePresent: "FilePresent";
    FilePresentFilled: "FilePresentFilled";
    Fingerprint: "Fingerprint";
    FingerprintFilled: "FingerprintFilled";
    FlightsMode: "FlightsMode";
    FlightsModeFilled: "FlightsModeFilled";
    FormatListBullets: "FormatListBullets";
    FormatListBulletsFilled: "FormatListBulletsFilled";
    FormatListNumbers: "FormatListNumbers";
    FormatListNumbersFilled: "FormatListNumbersFilled";
    Gear: "Gear";
    GearFilled: "GearFilled";
    Globe: "Globe";
    GlobeFilled: "GlobeFilled";
    Group: "Group";
    GroupFilled: "GroupFilled";
    HeadsetMic: "HeadsetMic";
    HeadsetMicFilled: "HeadsetMicFilled";
    Help: "Help";
    HelpFilled: "HelpFilled";
    History: "History";
    HistoryFilled: "HistoryFilled";
    House: "House";
    HouseFilled: "HouseFilled";
    Imagesmode: "Imagesmode";
    ImagesmodeFilled: "ImagesmodeFilled";
    Info: "Info";
    InfoFilled: "InfoFilled";
    InputCheck: "InputCheck";
    Key: "Key";
    KeyFilled: "KeyFilled";
    Language: "Language";
    LanguageFilled: "LanguageFilled";
    LightMode: "LightMode";
    LightModeFilled: "LightModeFilled";
    Link: "Link";
    LinkFilled: "LinkFilled";
    Lists: "Lists";
    ListsFilled: "ListsFilled";
    LocationOn: "LocationOn";
    LocationOnFilled: "LocationOnFilled";
    Lock: "Lock";
    LockFilled: "LockFilled";
    LockOpen: "LockOpen";
    LockOpenFilled: "LockOpenFilled";
    LockPerson: "LockPerson";
    LockPersonFilled: "LockPersonFilled";
    Login: "Login";
    LoginFilled: "LoginFilled";
    Logout: "Logout";
    LogoutFilled: "LogoutFilled";
    MagnifyingGlass: "MagnifyingGlass";
    MagnifyingGlassFilled: "MagnifyingGlassFilled";
    Mail: "Mail";
    MailFilled: "MailFilled";
    ManageSearch: "ManageSearch";
    ManageSearchFilled: "ManageSearchFilled";
    Menu: "Menu";
    MenuFilled: "MenuFilled";
    Mimo: "Mimo";
    MimoFilled: "MimoFilled";
    MinusCircle: "MinusCircle";
    MinusCircleFilled: "MinusCircleFilled";
    MoreVert: "MoreVert";
    MoreVertFilled: "MoreVertFilled";
    Notifications: "Notifications";
    NotificationsFilled: "NotificationsFilled";
    Online: "Online";
    OnlineFilled: "OnlineFilled";
    OpenInNew: "OpenInNew";
    OpenInNewFilled: "OpenInNewFilled";
    Pace: "Pace";
    PaceFilled: "PaceFilled";
    PanZoom: "PanZoom";
    PanZoomFilled: "PanZoomFilled";
    Pause: "Pause";
    PauseFilled: "PauseFilled";
    Person: "Person";
    PersonalPlaces: "PersonalPlaces";
    PersonalPlacesFilled: "PersonalPlacesFilled";
    PersonFilled: "PersonFilled";
    PhotoCamera: "PhotoCamera";
    PhotoCameraFilled: "PhotoCameraFilled";
    Placeholder: "Placeholder";
    PlaceholderFilled: "PlaceholderFilled";
    PlayArrow: "PlayArrow";
    PlayArrowFilled: "PlayArrowFilled";
    Remove: "Remove";
    RemoveFilled: "RemoveFilled";
    RequestPage: "RequestPage";
    RequestPageFilled: "RequestPageFilled";
    Schedule: "Schedule";
    ScheduleFilled: "ScheduleFilled";
    Sell: "Sell";
    SellFilled: "SellFilled";
    Send: "Send";
    SendFilled: "SendFilled";
    SignalCellularAlt: "SignalCellularAlt";
    SignalCellularAltFilled: "SignalCellularAltFilled";
    Star: "Star";
    StarFilled: "StarFilled";
    StatusLight: "StatusLight";
    StatusLightFilled: "StatusLightFilled";
    Stop: "Stop";
    StopFilled: "StopFilled";
    TextB: "TextB";
    TextBFilled: "TextBFilled";
    TextItalic: "TextItalic";
    TextItalicFilled: "TextItalicFilled";
    TextUnderline: "TextUnderline";
    TextUnderlineFilled: "TextUnderlineFilled";
    Timer: "Timer";
    TimerFilled: "TimerFilled";
    Tune: "Tune";
    TuneFilled: "TuneFilled";
    UnfoldLess: "UnfoldLess";
    UnfoldLessFilled: "UnfoldLessFilled";
    UnfoldMore: "UnfoldMore";
    UnfoldMoreFilled: "UnfoldMoreFilled";
    Verified: "Verified";
    VerifiedFilled: "VerifiedFilled";
    ViewComfy: "ViewComfy";
    ViewComfyFilled: "ViewComfyFilled";
    ViewKanban: "ViewKanban";
    ViewKanbanFilled: "ViewKanbanFilled";
    ViewTimeline: "ViewTimeline";
    ViewTimelineFilled: "ViewTimelineFilled";
    Visibility: "Visibility";
    VisibilityFilled: "VisibilityFilled";
    VisibilityOff: "VisibilityOff";
    VisibilityOffFilled: "VisibilityOffFilled";
    Warning: "Warning";
    WarningFilled: "WarningFilled";
    WifiOff: "WifiOff";
    WifiOffFilled: "WifiOffFilled";
    ZoomOutMap: "ZoomOutMap";
    ZoomOutMapFilled: "ZoomOutMapFilled";
    ArrowDownward: "ArrowDownward";
    ArrowDownwardFilled: "ArrowDownwardFilled";
    ArrowUpward: "ArrowUpward";
    ArrowUpwardFilled: "ArrowUpwardFilled";
    DoubleArrowDown: "DoubleArrowDown";
    DoubleArrowDownFilled: "DoubleArrowDownFilled";
    DoubleArrowLeft: "DoubleArrowLeft";
    DoubleArrowLeftFilled: "DoubleArrowLeftFilled";
    DoubleArrowRight: "DoubleArrowRight";
    DoubleArrowRightFilled: "DoubleArrowRightFilled";
    DoubleArrowUp: "DoubleArrowUp";
    DoubleArrowUpFilled: "DoubleArrowUpFilled";
    FilterAlt: "FilterAlt";
    FilterAltFilled: "FilterAltFilled";
    FilterAltOff: "FilterAltOff";
    FilterAltOffFilled: "FilterAltOffFilled";
    FilterList: "FilterList";
    FilterListFilled: "FilterListFilled";
    FilterListOff: "FilterListOff";
    FilterListOffFilled: "FilterListOffFilled";
    Sparkle: "Sparkle";
    SparkleFilled: "SparkleFilled";
    AccountBalance: "AccountBalance";
    AccountBalanceFilled: "AccountBalanceFilled";
    AccountTree: "AccountTree";
    AccountTreeFilled: "AccountTreeFilled";
    AttachFile: "AttachFile";
    AttachFileFilled: "AttachFileFilled";
    Attachment: "Attachment";
    AttachmentFilled: "AttachmentFilled";
    BarChart: "BarChart";
    BarChartFilled: "BarChartFilled";
    Build: "Build";
    BuildFilled: "BuildFilled";
    Cached: "Cached";
    CachedFilled: "CachedFilled";
    Dashboard: "Dashboard";
    DashboardFilled: "DashboardFilled";
    DataTable: "DataTable";
    DataTableFilled: "DataTableFilled";
    DetachFile: "DetachFile";
    DetachFileFilled: "DetachFileFilled";
    Download: "Download";
    DownloadFilled: "DownloadFilled";
    EditOff: "EditOff";
    EditOffFilled: "EditOffFilled";
    Flag: "Flag";
    FlagFilled: "FlagFilled";
    FolderOpen: "FolderOpen";
    FolderOpenFilled: "FolderOpenFilled";
    GridView: "GridView";
    GridViewFilled: "GridViewFilled";
    Layers: "Layers";
    LayersFilled: "LayersFilled";
    LinkAlt: "LinkAlt";
    LinkAltFilled: "LinkAltFilled";
    LinkOff: "LinkOff";
    LinkOffFilled: "LinkOffFilled";
    MoreHoriz: "MoreHoriz";
    MoreHorizFilled: "MoreHorizFilled";
    Number: "Number";
    NumberFilled: "NumberFilled";
    Percentage: "Percentage";
    PercentageFilled: "PercentageFilled";
    PieChart: "PieChart";
    PieChartFilled: "PieChartFilled";
    QuickReferenceAll: "QuickReferenceAll";
    QuickReferenceAllFilled: "QuickReferenceAllFilled";
    Redo: "Redo";
    RedoFilled: "RedoFilled";
    Share: "Share";
    ShareFilled: "ShareFilled";
    SwapHorizontal: "SwapHorizontal";
    SwapHorizontalFilled: "SwapHorizontalFilled";
    Text: "Text";
    TextAlt: "TextAlt";
    TextAltFilled: "TextAltFilled";
    TextFilled: "TextFilled";
    TrendingDown: "TrendingDown";
    TrendingDownFilled: "TrendingDownFilled";
    TrendingUp: "TrendingUp";
    TrendingUpFilled: "TrendingUpFilled";
    Undo: "Undo";
    UndoFilled: "UndoFilled";
    Upload: "Upload";
    UploadFilled: "UploadFilled";
    Variables: "Variables";
    VariablesFilled: "VariablesFilled";
    ZoomIn: "ZoomIn";
    ZoomInFilled: "ZoomInFilled";
    ZoomOut: "ZoomOut";
    ZoomOutFilled: "ZoomOutFilled";
    AccountBalanceWallet: "AccountBalanceWallet";
    AccountBalanceWalletFilled: "AccountBalanceWalletFilled";
    AssignmentAdd: "AssignmentAdd";
    AssignmentAddFilled: "AssignmentAddFilled";
    Bank: "Bank";
    BankFilled: "BankFilled";
    BeachAccess: "BeachAccess";
    BeachAccessFilled: "BeachAccessFilled";
    Calculate: "Calculate";
    CalculateFilled: "CalculateFilled";
    Category: "Category";
    CategoryFilled: "CategoryFilled";
    CollectionsBookmark: "CollectionsBookmark";
    CollectionsBookmarkFilled: "CollectionsBookmarkFilled";
    Compress: "Compress";
    CompressFilled: "CompressFilled";
    ConversionPath: "ConversionPath";
    ConversionPathFilled: "ConversionPathFilled";
    DateTime: "DateTime";
    DateTimeFilled: "DateTimeFilled";
    DeployedCode: "DeployedCode";
    DeployedCodeFilled: "DeployedCodeFilled";
    Enable: "Enable";
    EnableFilled: "EnableFilled";
    Expand: "Expand";
    ExpandFilled: "ExpandFilled";
    FileCSS: "FileCSS";
    FileCSSFilled: "FileCSSFilled";
    FileCSV: "FileCSV";
    FileCSVFilled: "FileCSVFilled";
    FileDOC: "FileDOC";
    FileDOCFilled: "FileDOCFilled";
    FileHTML: "FileHTML";
    FileHTMLFilled: "FileHTMLFilled";
    FileJPG: "FileJPG";
    FileJPGFilled: "FileJPGFilled";
    FileJS: "FileJS";
    FileJSFilled: "FileJSFilled";
    FileJSX: "FileJSX";
    FileJSXFilled: "FileJSXFilled";
    FilePDF: "FilePDF";
    FilePDFFilled: "FilePDFFilled";
    FilePNG: "FilePNG";
    FilePNGFilled: "FilePNGFilled";
    FilePPT: "FilePPT";
    FilePPTFilled: "FilePPTFilled";
    FileRS: "FileRS";
    FileRSFilled: "FileRSFilled";
    FileSQL: "FileSQL";
    FileSQLFilled: "FileSQLFilled";
    FileSVG: "FileSVG";
    FileSVGFilled: "FileSVGFilled";
    FileTS: "FileTS";
    FileTSFilled: "FileTSFilled";
    FileTSX: "FileTSX";
    FileTSXFilled: "FileTSXFilled";
    FileVUE: "FileVUE";
    FileVUEFilled: "FileVUEFilled";
    FileVideo: "FileVideo";
    FileVideoFilled: "FileVideoFilled";
    FileXLS: "FileXLS";
    FileXLSFilled: "FileXLSFilled";
    FileZIP: "FileZIP";
    FileZIPFilled: "FileZIPFilled";
    Forum: "Forum";
    ForumFilled: "ForumFilled";
    Homework: "Homework";
    HomeworkFilled: "HomeworkFilled";
    HourglassDisabled: "HourglassDisabled";
    HourglassDisabledFilled: "HourglassDisabledFilled";
    Inventory: "Inventory";
    InventoryFilled: "InventoryFilled";
    MoveToUser: "MoveToUser";
    MoveToUserFilled: "MoveToUserFilled";
    OtherAdmission: "OtherAdmission";
    OtherAdmissionFilled: "OtherAdmissionFilled";
    Palette: "Palette";
    PaletteFilled: "PaletteFilled";
    Payments: "Payments";
    PaymentsFilled: "PaymentsFilled";
    PlaylistAddCheck: "PlaylistAddCheck";
    PlaylistAddCheckFilled: "PlaylistAddCheckFilled";
    Receipt: "Receipt";
    ReceiptFilled: "ReceiptFilled";
    RotateRight: "RotateRight";
    RotateRightFilled: "RotateRightFilled";
    ShoppingCart: "ShoppingCart";
    ShoppingCartFilled: "ShoppingCartFilled";
    SmartToy: "SmartToy";
    SmartToyFilled: "SmartToyFilled";
    Split: "Split";
    SplitFilled: "SplitFilled";
    Store: "Store";
    StoreFilled: "StoreFilled";
    TagSimple: "TagSimple";
    TagSimpleFilled: "TagSimpleFilled";
    ViewDay: "ViewDay";
    ViewDayFilled: "ViewDayFilled";
    AreaChart: "AreaChart";
    AreaChartFilled: "AreaChartFilled";
    AreaChartFull: "AreaChartFull";
    AreaChartFullFilled: "AreaChartFullFilled";
    BarChartStacked: "BarChartStacked";
    BarChartStackedFilled: "BarChartStackedFilled";
    BarChartStackedFull: "BarChartStackedFull";
    BarChartStackedFullFilled: "BarChartStackedFullFilled";
    CandlestickChart: "CandlestickChart";
    CandlestickChartFilled: "CandlestickChartFilled";
    ColumnChart: "ColumnChart";
    ColumnChartFilled: "ColumnChartFilled";
    ColumnChartStacked: "ColumnChartStacked";
    ColumnChartStackedFilled: "ColumnChartStackedFilled";
    ColumnChartStackedFull: "ColumnChartStackedFull";
    ColumnChartStackedFullFilled: "ColumnChartStackedFullFilled";
    CombinationChart: "CombinationChart";
    CombinationChartFilled: "CombinationChartFilled";
    Currency: "Currency";
    CurrencyFilled: "CurrencyFilled";
    DonutChart: "DonutChart";
    DonutChartFilled: "DonutChartFilled";
    GenericChart: "GenericChart";
    GenericChartFilled: "GenericChartFilled";
    KpiPin: "KpiPin";
    KpiPinFilled: "KpiPinFilled";
    LineChart: "LineChart";
    LineChartFilled: "LineChartFilled";
    MatrixChart: "MatrixChart";
    MatrixChartFilled: "MatrixChartFilled";
    PivotTableChart: "PivotTableChart";
    PivotTableChartFilled: "PivotTableChartFilled";
    ScatterChart: "ScatterChart";
    ScatterChartFilled: "ScatterChartFilled";
    Speed: "Speed";
    SpeedFilled: "SpeedFilled";
    TableChart: "TableChart";
    ToggleOn: "ToggleOn";
    ToggleOnFilled: "ToggleOnFilled";
    Above: "Above";
    AboveFilled: "AboveFilled";
    Addition: "Addition";
    AdditionFilled: "AdditionFilled";
    AstrophotographyAuto: "AstrophotographyAuto";
    AstrophotographyAutoFilled: "AstrophotographyAutoFilled";
    Below: "Below";
    BelowFilled: "BelowFilled";
    Between: "Between";
    BetweenFilled: "BetweenFilled";
    Division: "Division";
    DivisionAlt: "DivisionAlt";
    DivisionAltFilled: "DivisionAltFilled";
    DivisionFilled: "DivisionFilled";
    DoneAll: "DoneAll";
    DoneAllFilled: "DoneAllFilled";
    EditCalendar: "EditCalendar";
    EditCalendarFilled: "EditCalendarFilled";
    ElectricalServices: "ElectricalServices";
    ElectricalServicesFilled: "ElectricalServicesFilled";
    Equals: "Equals";
    EqualsFilled: "EqualsFilled";
    EventAvailable: "EventAvailable";
    EventAvailableFilled: "EventAvailableFilled";
    Formula: "Formula";
    FormulaFilled: "FormulaFilled";
    LeftParenthesis: "LeftParenthesis";
    LeftParenthesisFilled: "LeftParenthesisFilled";
    MenuOpen: "MenuOpen";
    MenuOpenFilled: "MenuOpenFilled";
    Multiplication: "Multiplication";
    MultiplicationFilled: "MultiplicationFilled";
    PersonCancel: "PersonCancel";
    PersonCancelFilled: "PersonCancelFilled";
    RightParenthesis: "RightParenthesis";
    RightParenthesisFilled: "RightParenthesisFilled";
    ScaleIndicator: "ScaleIndicator";
    ScaleIndicatorAlt: "ScaleIndicatorAlt";
    ScaleIndicatorAltFilled: "ScaleIndicatorAltFilled";
    ScaleIndicatorFilled: "ScaleIndicatorFilled";
    SignPost: "SignPost";
    SignPostFilled: "SignPostFilled";
    Subtraction: "Subtraction";
    SubtractionFilled: "SubtractionFilled";
    Swatch: "Swatch";
    SwatchFilled: "SwatchFilled";
    Target: "Target";
    TargetFilled: "TargetFilled";
    TaskAlt: "TaskAlt";
    TaskAltFilled: "TaskAltFilled";
    Ghost: "Ghost";
    GhostFilled: "GhostFilled";
    DockToLeft: "DockToLeft";
    DockToLeftFilled: "DockToLeftFilled";
    Notepad: "Notepad";
    NotepadFilled: "NotepadFilled";
    DirectionsCar: "DirectionsCar";
    DirectionsCarFilled: "DirectionsCarFilled";
    Book: "Book";
    BookFilled: "BookFilled";
    Subdirectory: "Subdirectory";
    SubdirectoryFilled: "SubdirectoryFilled";
    ThumbDown: "ThumbDown";
    ThumbDownFilled: "ThumbDownFilled";
    ThumbUp: "ThumbUp";
    ThumbUpFilled: "ThumbUpFilled";
};
declare const icons: {
    Add: string;
    AccountCircleFilled: string;
    AddCircle: string;
    AddCircleFilled: string;
    AddFilled: string;
    ArrowBack: string;
    ArrowBackFilled: string;
    ArrowCircleDownFilled: string;
    ArrowCircleLeft: string;
    ArrowCircleLeftFilled: string;
    ArrowCircleRight: string;
    ArrowCircleRightFilled: string;
    ArrowCircleUp: string;
    ArrowCircleUpFilled: string;
    ArrowDropDown: string;
    ArrowDropDownFilled: string;
    ArrowDropUp: string;
    ArrowDropUpFilled: string;
    ArrowForward: string;
    ArrowForwardFilled: string;
    ArrowLeft: string;
    ArrowLeftFilled: string;
    ArrowLineLeft: string;
    ArrowLineLeftFilled: string;
    ArrowLineRight: string;
    ArrowLineRightFilled: string;
    ArrowOutward: string;
    ArrowOutwardFilled: string;
    ArrowRight: string;
    ArrowRightFilled: string;
    BarChartAlt: string;
    BarChartAltFilled: string;
    Block: string;
    BlockFilled: string;
    BusinessCenter: string;
    BusinessCenterFilled: string;
    Calendar: string;
    CalendarFilled: string;
    CalendarToday: string;
    CalendarTodayFilled: string;
    CalendarViewMonth: string;
    CalendarViewMonthFilled: string;
    CalendarViewWeek: string;
    CalendarViewWeekFilled: string;
    Call: string;
    CallFilled: string;
    Cancel: string;
    CancelFilled: string;
    Check: string;
    CheckCircle: string;
    CheckCircleFilled: string;
    CheckFilled: string;
    ChevronLeft: string;
    ChevronLeftFilled: string;
    ChevronRight: string;
    ChevronRightFilled: string;
    ClockClockwise: string;
    ClockClockwiseFilled: string;
    Close: string;
    CloseFilled: string;
    Cloud: string;
    CloudDone: string;
    CloudDoneFilled: string;
    CloudFilled: string;
    CloudOff: string;
    CloudOffFilled: string;
    Comment: string;
    CommentFilled: string;
    ContactSupport: string;
    ContactSupportFilled: string;
    ContentPaste: string;
    ContentPasteFilled: string;
    CopyAll: string;
    CopyAllFilled: string;
    CorporateFare: string;
    CorporateFareFilled: string;
    Cycle: string;
    CycleFilled: string;
    DarkModeFilled: string;
    Delete: string;
    DeleteFilled: string;
    Description: string;
    DescriptionFilled: string;
    DockToRight: string;
    DockToRightFilled: string;
    Dollar: string;
    DollarFilled: string;
    Draft: string;
    DraftFilled: string;
    DragHandle: string;
    DragHandleFilled: string;
    DragIndicator: string;
    DragIndicatorFilled: string;
    Edit: string;
    EditFilled: string;
    EmergencyHome: string;
    EmergencyHomeFilled: string;
    Error: string;
    ErrorFilled: string;
    Euro: string;
    EuroFilled: string;
    ExpandLess: string;
    ExpandLessFilled: string;
    ExpandMore: string;
    ExpandMoreFilled: string;
    Favorite: string;
    FavoriteFilled: string;
    FilePresent: string;
    FilePresentFilled: string;
    Fingerprint: string;
    FingerprintFilled: string;
    FlightsMode: string;
    FlightsModeFilled: string;
    FormatListBullets: string;
    FormatListBulletsFilled: string;
    FormatListNumbers: string;
    FormatListNumbersFilled: string;
    Gear: string;
    GearFilled: string;
    Globe: string;
    GlobeFilled: string;
    Group: string;
    GroupFilled: string;
    HeadsetMic: string;
    HeadsetMicFilled: string;
    Help: string;
    HelpFilled: string;
    History: string;
    HistoryFilled: string;
    House: string;
    HouseFilled: string;
    Imagesmode: string;
    ImagesmodeFilled: string;
    Info: string;
    InfoFilled: string;
    InputCheck: string;
    Key: string;
    KeyFilled: string;
    Language: string;
    LanguageFilled: string;
    LightMode: string;
    LightModeFilled: string;
    Link: string;
    LinkFilled: string;
    Lists: string;
    ListsFilled: string;
    LocationOn: string;
    LocationOnFilled: string;
    Lock: string;
    LockFilled: string;
    LockOpen: string;
    LockOpenFilled: string;
    LockPerson: string;
    LockPersonFilled: string;
    Login: string;
    LoginFilled: string;
    Logout: string;
    LogoutFilled: string;
    MagnifyingGlass: string;
    MagnifyingGlassFilled: string;
    Mail: string;
    MailFilled: string;
    ManageSearch: string;
    ManageSearchFilled: string;
    Menu: string;
    MenuFilled: string;
    Mimo: string;
    MimoFilled: string;
    MinusCircle: string;
    MinusCircleFilled: string;
    MoreVert: string;
    MoreVertFilled: string;
    Notifications: string;
    NotificationsFilled: string;
    Online: string;
    OnlineFilled: string;
    OpenInNew: string;
    OpenInNewFilled: string;
    Pace: string;
    PaceFilled: string;
    PanZoom: string;
    PanZoomFilled: string;
    Pause: string;
    PauseFilled: string;
    Person: string;
    PersonalPlaces: string;
    PersonalPlacesFilled: string;
    PersonFilled: string;
    PhotoCamera: string;
    PhotoCameraFilled: string;
    Placeholder: string;
    PlaceholderFilled: string;
    PlayArrow: string;
    PlayArrowFilled: string;
    Remove: string;
    RemoveFilled: string;
    RequestPage: string;
    RequestPageFilled: string;
    Schedule: string;
    ScheduleFilled: string;
    Sell: string;
    SellFilled: string;
    Send: string;
    SendFilled: string;
    SignalCellularAlt: string;
    SignalCellularAltFilled: string;
    Star: string;
    StarFilled: string;
    StatusLight: string;
    StatusLightFilled: string;
    Stop: string;
    StopFilled: string;
    TextB: string;
    TextBFilled: string;
    TextItalic: string;
    TextItalicFilled: string;
    TextUnderline: string;
    TextUnderlineFilled: string;
    Timer: string;
    TimerFilled: string;
    Tune: string;
    TuneFilled: string;
    UnfoldLess: string;
    UnfoldLessFilled: string;
    UnfoldMore: string;
    UnfoldMoreFilled: string;
    Verified: string;
    VerifiedFilled: string;
    ViewComfy: string;
    ViewComfyFilled: string;
    ViewKanban: string;
    ViewKanbanFilled: string;
    ViewTimeline: string;
    ViewTimelineFilled: string;
    Visibility: string;
    VisibilityFilled: string;
    VisibilityOff: string;
    VisibilityOffFilled: string;
    Warning: string;
    WarningFilled: string;
    WifiOff: string;
    WifiOffFilled: string;
    ZoomOutMap: string;
    ZoomOutMapFilled: string;
    ArrowDownward: string;
    ArrowDownwardFilled: string;
    ArrowUpward: string;
    ArrowUpwardFilled: string;
    DoubleArrowDown: string;
    DoubleArrowDownFilled: string;
    DoubleArrowLeft: string;
    DoubleArrowLeftFilled: string;
    DoubleArrowRight: string;
    DoubleArrowRightFilled: string;
    DoubleArrowUp: string;
    DoubleArrowUpFilled: string;
    FilterAlt: string;
    FilterAltFilled: string;
    FilterAltOff: string;
    FilterAltOffFilled: string;
    FilterList: string;
    FilterListFilled: string;
    FilterListOff: string;
    FilterListOffFilled: string;
    Sparkle: string;
    SparkleFilled: string;
    AccountBalance: string;
    AccountBalanceFilled: string;
    AccountTree: string;
    AccountTreeFilled: string;
    AttachFile: string;
    AttachFileFilled: string;
    Attachment: string;
    AttachmentFilled: string;
    BarChart: string;
    BarChartFilled: string;
    Build: string;
    BuildFilled: string;
    Cached: string;
    CachedFilled: string;
    Dashboard: string;
    DashboardFilled: string;
    DataTable: string;
    DataTableFilled: string;
    DetachFile: string;
    DetachFileFilled: string;
    Download: string;
    DownloadFilled: string;
    EditOff: string;
    EditOffFilled: string;
    Flag: string;
    FlagFilled: string;
    FolderOpen: string;
    FolderOpenFilled: string;
    GridView: string;
    GridViewFilled: string;
    Layers: string;
    LayersFilled: string;
    LinkAlt: string;
    LinkAltFilled: string;
    LinkOff: string;
    LinkOffFilled: string;
    MoreHoriz: string;
    MoreHorizFilled: string;
    Number: string;
    NumberFilled: string;
    Percentage: string;
    PercentageFilled: string;
    PieChart: string;
    PieChartFilled: string;
    QuickReferenceAll: string;
    QuickReferenceAllFilled: string;
    Redo: string;
    RedoFilled: string;
    Share: string;
    ShareFilled: string;
    SwapHorizontal: string;
    SwapHorizontalFilled: string;
    Text: string;
    TextAlt: string;
    TextAltFilled: string;
    TextFilled: string;
    TrendingDown: string;
    TrendingDownFilled: string;
    TrendingUp: string;
    TrendingUpFilled: string;
    Undo: string;
    UndoFilled: string;
    Upload: string;
    UploadFilled: string;
    Variables: string;
    VariablesFilled: string;
    ZoomIn: string;
    ZoomInFilled: string;
    ZoomOut: string;
    ZoomOutFilled: string;
    AccountBalanceWallet: string;
    AccountBalanceWalletFilled: string;
    AssignmentAdd: string;
    AssignmentAddFilled: string;
    Bank: string;
    BankFilled: string;
    BeachAccess: string;
    BeachAccessFilled: string;
    Calculate: string;
    CalculateFilled: string;
    Category: string;
    CategoryFilled: string;
    CollectionsBookmark: string;
    CollectionsBookmarkFilled: string;
    Compress: string;
    CompressFilled: string;
    ConversionPath: string;
    ConversionPathFilled: string;
    DateTime: string;
    DateTimeFilled: string;
    DeployedCode: string;
    DeployedCodeFilled: string;
    Enable: string;
    EnableFilled: string;
    Expand: string;
    ExpandFilled: string;
    FileCSS: string;
    FileCSSFilled: string;
    FileCSV: string;
    FileCSVFilled: string;
    FileDOC: string;
    FileDOCFilled: string;
    FileHTML: string;
    FileHTMLFilled: string;
    FileJPG: string;
    FileJPGFilled: string;
    FileJS: string;
    FileJSFilled: string;
    FileJSX: string;
    FileJSXFilled: string;
    FilePDF: string;
    FilePDFFilled: string;
    FilePNG: string;
    FilePNGFilled: string;
    FilePPT: string;
    FilePPTFilled: string;
    FileRS: string;
    FileRSFilled: string;
    FileSQL: string;
    FileSQLFilled: string;
    FileSVG: string;
    FileSVGFilled: string;
    FileTS: string;
    FileTSFilled: string;
    FileTSX: string;
    FileTSXFilled: string;
    FileVUE: string;
    FileVUEFilled: string;
    FileVideo: string;
    FileVideoFilled: string;
    FileXLS: string;
    FileXLSFilled: string;
    FileZIP: string;
    FileZIPFilled: string;
    Forum: string;
    ForumFilled: string;
    Homework: string;
    HomeworkFilled: string;
    HourglassDisabled: string;
    HourglassDisabledFilled: string;
    Inventory: string;
    InventoryFilled: string;
    MoveToUser: string;
    MoveToUserFilled: string;
    OtherAdmission: string;
    OtherAdmissionFilled: string;
    Palette: string;
    PaletteFilled: string;
    Payments: string;
    PaymentsFilled: string;
    PlaylistAddCheck: string;
    PlaylistAddCheckFilled: string;
    Receipt: string;
    ReceiptFilled: string;
    RotateRight: string;
    RotateRightFilled: string;
    ShoppingCart: string;
    ShoppingCartFilled: string;
    SmartToy: string;
    SmartToyFilled: string;
    Split: string;
    SplitFilled: string;
    Store: string;
    StoreFilled: string;
    TagSimple: string;
    TagSimpleFilled: string;
    ViewDay: string;
    ViewDayFilled: string;
    AreaChart: string;
    AreaChartFilled: string;
    AreaChartFull: string;
    AreaChartFullFilled: string;
    BarChartStacked: string;
    BarChartStackedFilled: string;
    BarChartStackedFull: string;
    BarChartStackedFullFilled: string;
    CandlestickChart: string;
    CandlestickChartFilled: string;
    ColumnChart: string;
    ColumnChartFilled: string;
    ColumnChartStacked: string;
    ColumnChartStackedFilled: string;
    ColumnChartStackedFull: string;
    ColumnChartStackedFullFilled: string;
    CombinationChart: string;
    CombinationChartFilled: string;
    Currency: string;
    CurrencyFilled: string;
    DonutChart: string;
    DonutChartFilled: string;
    GenericChart: string;
    GenericChartFilled: string;
    KpiPin: string;
    KpiPinFilled: string;
    LineChart: string;
    LineChartFilled: string;
    MatrixChart: string;
    MatrixChartFilled: string;
    PivotTableChart: string;
    PivotTableChartFilled: string;
    ScatterChart: string;
    ScatterChartFilled: string;
    Speed: string;
    SpeedFilled: string;
    TableChart: string;
    ToggleOn: string;
    ToggleOnFilled: string;
    Above: string;
    AboveFilled: string;
    Addition: string;
    AdditionFilled: string;
    AstrophotographyAuto: string;
    AstrophotographyAutoFilled: string;
    Below: string;
    BelowFilled: string;
    Between: string;
    BetweenFilled: string;
    Division: string;
    DivisionAlt: string;
    DivisionAltFilled: string;
    DivisionFilled: string;
    DoneAll: string;
    DoneAllFilled: string;
    EditCalendar: string;
    EditCalendarFilled: string;
    ElectricalServices: string;
    ElectricalServicesFilled: string;
    Equals: string;
    EqualsFilled: string;
    EventAvailable: string;
    EventAvailableFilled: string;
    Formula: string;
    FormulaFilled: string;
    LeftParenthesis: string;
    LeftParenthesisFilled: string;
    MenuOpen: string;
    MenuOpenFilled: string;
    Multiplication: string;
    MultiplicationFilled: string;
    PersonCancel: string;
    PersonCancelFilled: string;
    RightParenthesis: string;
    RightParenthesisFilled: string;
    ScaleIndicator: string;
    ScaleIndicatorAlt: string;
    ScaleIndicatorAltFilled: string;
    ScaleIndicatorFilled: string;
    SignPost: string;
    SignPostFilled: string;
    Subtraction: string;
    SubtractionFilled: string;
    Swatch: string;
    SwatchFilled: string;
    Target: string;
    TargetFilled: string;
    TaskAlt: string;
    TaskAltFilled: string;
    Ghost: string;
    GhostFilled: string;
    DockToLeft: string;
    DockToLeftFilled: string;
    Notepad: string;
    NotepadFilled: string;
    DirectionsCar: string;
    DirectionsCarFilled: string;
    Book: string;
    BookFilled: string;
    Subdirectory: string;
    SubdirectoryFilled: string;
    ThumbDown: string;
    ThumbDownFilled: string;
    ThumbUp: string;
    ThumbUpFilled: string;
};
type IconName = (typeof iconNames)[keyof typeof iconNames];

interface ActionItemContentProps {
    actionLabel?: ReactNode;
    description?: string;
    label: ReactNode;
    leftIconName?: IconName;
    prefix?: ReactNode;
    rightIconName?: IconName;
    suffix?: ReactNode;
}
declare const ACTION_ITEM_CSS_CLASS = "action-item";
declare function ActionItemContent({ actionLabel, description, label, leftIconName, prefix, rightIconName, suffix }: ActionItemContentProps): react_jsx_runtime.JSX.Element;

declare const enum Size {
    xxs = "xxs",
    xs = "xs",
    sm = "sm",
    md = "md",
    lg = "lg",
    xl = "xl",
    xxl = "xxl"
}

declare const enum ButtonVariant {
    Neutral = "neutral",
    Accent = "accent",
    Danger = "danger",
    Success = "success"
}

declare const enum ButtonStyle {
    Fill = "fill",
    Outline = "outline",
    Dash = "dash",
    Plain = "plain",
    Link = "link"
}
declare const enum ButtonRole {
    Button = "button",
    Link = "link"
}
interface ButtonProps extends Omit<ButtonProps$1, 'style'>, Omit<LinkProps$1, 'className' | 'style'>, RefAttributes<HTMLButtonElement | HTMLAnchorElement> {
    children: ReactNode;
    /**
     * WalkMe id for the Button
     */
    ['data-walkmeid']?: string;
    /**
     * Icon that will be rendered at the end of the Button
     */
    endIconName?: IconName;
    /**
     * Indicating if the Button is in a loading state
     */
    isLoading?: boolean;
    /**
     * Use inverted color tokens in the Button, only available for Neutral variant and Outlined and Plain style
     */
    inverted?: boolean;
    /**
     * Button can act as a link or button. Default: button.
     */
    role?: ButtonRole;
    /**
     * Size of the Button
     */
    size?: Size.sm | Size.md | Size.lg;
    /**
     * Icon that will be rendered at the start of the Button
     */
    startIconName?: IconName;
    /**
     * Style of the Button
     */
    style: ButtonStyle;
    /**
     * Variant of the Button
     */
    variant: ButtonVariant;
}
declare function Button({ 'aria-label': ariaLabel, className, children, endIconName, inverted, isLoading, ref, role, size, startIconName, style, variant, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

interface ClearButtonProps extends ButtonProps$1, RefAttributes<HTMLButtonElement> {
}
declare function ClearButton({ className, ...props }: ClearButtonProps): react_jsx_runtime.JSX.Element;

declare const enum DueDateButtonVariant {
    Neutral = "neutral",
    Danger = "danger",
    Warning = "warning"
}
interface DueDateButtonProps extends Omit<ButtonProps, 'children' | 'size' | 'style' | 'variant'> {
    /**
     * Date value. Should be provided in ISO 8601 date string format (YYYY-MM-DD).
     */
    date: string;
    /**
     * Text to display in the tooltip.
     */
    tooltipContent?: string;
    /**
     * Variant of the button.
     */
    variant?: DueDateButtonVariant;
}
declare function DueDateButton({ date, tooltipContent, variant, ...props }: DueDateButtonProps): react_jsx_runtime.JSX.Element;

interface IconButtonProps extends Omit<ButtonProps$1, 'children' | 'style'>, Omit<LinkProps$1, 'children' | 'className' | 'style'>, RefAttributes<HTMLButtonElement | HTMLAnchorElement> {
    ['aria-label']: string;
    /**
     * WalkMe id for the Button
     */
    ['data-walkmeid']?: string;
    /**
     * Icon that will be rendered inside the IconButton
     */
    iconName: IconName;
    /**
     * Use inverted color tokens in the IconButton, only available for Neutral variant and Outlined and Plain style
     */
    inverted?: boolean;
    /**
     * Indicating if the IconButton is in a loading state
     */
    isLoading?: boolean;
    /**
     * Button can act as a link or button. Default: button.
     */
    role?: ButtonRole;
    /**
     * Size of the IconButton
     */
    size?: Size.sm | Size.md | Size.lg;
    /**
     * Style of the IconButton
     */
    style: ButtonStyle.Fill | ButtonStyle.Outline | ButtonStyle.Dash | ButtonStyle.Plain;
    /**
     * Variant of the IconButton
     */
    variant: ButtonVariant;
}
declare function IconButton({ className, iconName, inverted, isLoading, ref, role, size, style, variant, ...props }: IconButtonProps): react_jsx_runtime.JSX.Element;

interface MenuOptionProps extends MenuItemProps, RefAttributes<HTMLDivElement> {
    actionLabel?: ReactNode;
    description?: string;
    isDestructive?: boolean;
    isReadOnly?: boolean;
    label?: ReactNode;
    leftIconName?: IconName;
    prefix?: ReactNode;
    rightIconName?: IconName;
    tooltip?: {
        content: ReactNode;
    };
}
declare function MenuOption({ actionLabel, className, description, isDestructive, isReadOnly, label, leftIconName, prefix, rightIconName, ref: outerRef, tooltip, ...props }: MenuOptionProps): react_jsx_runtime.JSX.Element;

declare const enum SubmenuBehavior {
    Separate = "separate",
    InPlace = "in-place"
}
declare const enum SelectionMode {
    Single = "single",
    Multiple = "multiple"
}
interface MenuItem {
    id: Key;
    name: string;
    props?: MenuOptionProps;
    children?: MenuItem[];
    hasSeparator?: boolean;
    isSubmenuTrigger?: boolean;
    submenuBehavior?: SubmenuBehavior;
    selectionMode?: SelectionMode;
}
interface MenuFooterItem {
    id: Key;
    name: string;
    onPress?: () => void;
    role?: ButtonRole;
}
interface MenuProps<T> extends Omit<MenuProps$1<T>, 'children' | 'items'>, RefAttributes<HTMLDivElement> {
    /**
     * Menu trigger element.
     */
    children: ReactNode;
    /**
     * Header content.
     */
    header?: ReactNode;
    /**
     * List of footer items.
     */
    footerItems?: MenuFooterItem[];
    /**
     * List of menu items.
     */
    items: MenuItem[];
    /**
     * Minimum width for the menu in pixels.
     */
    minWidth?: number;
    /**
     * Handler that is called when open state changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Placement of the menu in relation to its trigger element.
     */
    placement?: Placement;
}
declare function Menu<T extends MenuItem>({ className, children, footerItems, header, minWidth, onOpenChange: propsOnOpenChange, placement, ref, ...props }: MenuProps<T>): react_jsx_runtime.JSX.Element;

declare const DialogTrigger: any;

interface PopoverPadding {
    top?: CSSProperties['paddingTop'];
    bottom?: CSSProperties['paddingBottom'];
    left?: CSSProperties['paddingLeft'];
    right?: CSSProperties['paddingRight'];
}
interface PopoverProps extends Omit<PopoverProps$1, 'children'>, RefAttributes<HTMLDivElement> {
    /**
     * Aria label for the dialog.
     */
    ['aria-label']?: string;
    /**
     * Id of the element which labels the dialog.
     */
    ['aria-labelledby']?: string;
    /**
     * Popover content.
     */
    children: ReactNode;
    /**
     * Maximum width for the popover.
     */
    maxWidth?: CSSProperties['maxWidth'];
    /**
     * Padding for the popover content.
     */
    padding?: CSSProperties['padding'] | PopoverPadding;
}
declare function Popover({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, children, className, maxWidth, padding, style, ...props }: PopoverProps): react_jsx_runtime.JSX.Element;

declare const enum IconSize {
    XS = 12,
    SM = 16,
    MD = 20,
    LG = 24,
    XL = 32,
    XXL = 48
}
interface IconProps extends RefAttributes<SVGSVGElement> {
    ariaHidden?: boolean;
    ariaLabel?: string;
    className?: string;
    color?: string;
    name: IconName;
    size?: IconSize;
}
declare function Icon({ ariaHidden, ariaLabel, className, color, name, ref, size }: IconProps): react_jsx_runtime.JSX.Element;

interface ISegmentedControlItemBase<TSegmentId extends string = string> {
    id: TSegmentId;
    isDisabled?: boolean;
    startIconName?: IconName;
}
interface ISegmentedControlItemLabel<TSegmentId extends string = string> extends ISegmentedControlItemBase<TSegmentId> {
    ariaLabel?: string;
    label: string;
}
interface ISegmentedControlItemAriaLabel<TSegmentId extends string = string> extends ISegmentedControlItemBase<TSegmentId> {
    ariaLabel: string;
    label?: string;
}
type ISegmentedControlItem<TSegmentId extends string = string> = ISegmentedControlItemLabel<TSegmentId> | ISegmentedControlItemAriaLabel<TSegmentId>;
interface SegmentedControlProps<TSegmentId extends string = string> extends RefAttributes<HTMLDivElement> {
    /**
     * CSS class for the element
     */
    className?: string;
    /**
     * Segmented control items.
     */
    items: Array<ISegmentedControlItem<TSegmentId>>;
    /**
     * Selection change callback.
     */
    onSelectionChange?: (id: TSegmentId) => void;
    /**
     * Currently selected item key/id.
     */
    selectedKey?: TSegmentId;
}
declare function SegmentedControl<TSegmentId extends string = string>({ className, items, onSelectionChange, ref, ...props }: SegmentedControlProps<TSegmentId>): react_jsx_runtime.JSX.Element;

declare const enum HTMLElementType {
    A = "a",
    Button = "button",
    Div = "div",
    Label = "label",
    P = "p",
    Span = "span"
}

type AllowedHTMLElementType = HTMLElementType.Span | HTMLElementType.Div | HTMLElementType.Button | HTMLElementType.A;
interface TriggerElementRenderProps {
    isFocused: boolean;
    isFocusVisible: boolean;
}
interface TriggerElementProps extends AriaButtonOptions<AllowedHTMLElementType>, RefAttributes<any> {
    children: ReactNode | ((renderProps: TriggerElementRenderProps) => ReactNode);
    className?: string;
    elementType?: AllowedHTMLElementType;
    role?: AriaRole$1;
    style?: CSSProperties;
}
declare function TriggerElement({ children, className, elementType, ref: outerRef, role, style, ...props }: TriggerElementProps): react_jsx_runtime.JSX.Element;

declare const enum Alignment {
    center = "center",
    end = "end",
    start = "start"
}

declare const enum AriaRole {
    button = "button",
    link = "link",
    none = "none",
    separator = "separator",
    status = "status"
}

declare const enum InputType {
    number = "number",
    password = "password",
    text = "text"
}

declare const enum KeyboardEventKey {
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    ArrowUp = "ArrowUp",
    Enter = "Enter",
    Escape = "Escape",
    l = "l",
    Space = " ",
    Tab = "Tab"
}
declare const CTRL_MODIFIER_KEY: string;

declare const enum LabelPlacement {
    Start = "start",
    End = "end"
}

declare const enum Orientation {
    horizontal = "horizontal",
    vertical = "vertical"
}

declare const enum Position {
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    Left = "left"
}

declare const enum SortDirection {
    Ascending = "asc",
    Descending = "desc"
}

declare const enum CollapsibleItemStyle {
    Card = "card",
    Plain = "plain"
}
interface CollapsibleItemObject {
    children: ReactNode;
    id: Key;
    title: ReactNode;
    tooltipContent?: ReactNode;
}
interface CollapsibleItemProps extends AriaDisclosureProps, RefAttributes<HTMLDivElement> {
    arrowPlacement?: Alignment.start | Alignment.end;
    groupState?: DisclosureGroupState;
    item: CollapsibleItemObject;
    style?: CollapsibleItemStyle;
}
declare function CollapsibleItem({ arrowPlacement, groupState, isDisabled, item, ref, style, ...props }: CollapsibleItemProps): react_jsx_runtime.JSX.Element;

interface CollapsibleProps extends DisclosureGroupProps, RefAttributes<HTMLDivElement> {
    /**
     * Placement of the arrow in the collapsible item headers.
     */
    arrowPlacement?: Alignment.start | Alignment.end;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Disabled item keys.
     */
    disabledKeys?: Iterable<Key>;
    /**
     * Collapsible items.
     */
    items: CollapsibleItemObject[];
    /**
     * Display style for the collapsible items.
     */
    style?: CollapsibleItemStyle;
}
declare function Collapsible({ allowsMultipleExpanded, arrowPlacement, className, disabledKeys, items, ref, style, ...props }: CollapsibleProps): react_jsx_runtime.JSX.Element;

interface ColumnConfiguratorItem {
    id: string;
    name: string;
    isHidden?: boolean;
    isSelectable?: boolean;
    [key: string]: any;
}

declare const enum AlertBannerVariant {
    Neutral = "neutral",
    Informative = "informative",
    Success = "success",
    Danger = "danger",
    Warning = "warning"
}
interface AlertBannerProps extends RefAttributes<HTMLDivElement> {
    /**
     * Content of the alert.
     */
    children: ReactNode;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Icon for the alert.
     */
    iconName?: IconName;
    /**
     * Whether alert can be dismissed.
     */
    isDismissible?: boolean;
    /**
     * Handler called when alert is dismissed.
     */
    onDismiss?: () => void;
    /**
     * Aria role for the element.
     */
    role?: AriaRole$1;
    /**
     * Variant of the alert.
     */
    variant: AlertBannerVariant;
}
declare function AlertBanner({ className, children, iconName, isDismissible, ref, role, variant, ...props }: AlertBannerProps): react_jsx_runtime.JSX.Element | null;

declare const enum OverlayHeaderVariant {
    Neutral = "neutral",
    Success = "success",
    Danger = "danger"
}
interface OverlayHeaderProps extends RefAttributes<HTMLDivElement> {
    autoFocusClose?: boolean;
    children: ReactNode;
    className?: string;
    details?: ReactNode;
    iconName?: IconName;
    onClose: () => void;
    onExpand?: () => void;
    showLoadingIndicator?: boolean;
    variant?: OverlayHeaderVariant;
}
declare function OverlayHeader({ autoFocusClose, children, className, details, iconName, onClose, onExpand, ref, showLoadingIndicator, variant }: OverlayHeaderProps): react_jsx_runtime.JSX.Element;

interface OverlayFooterAction {
    autoFocus?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    label: string;
    onPress: (closeCallback: () => void) => void;
    style?: ButtonStyle;
    variant?: ButtonVariant;
}
interface OverlayFooterIconAction extends OverlayFooterAction {
    iconName?: IconName;
}
interface OverlayFooterProps extends RefAttributes<HTMLDivElement> {
    className?: string;
    closeCallback: () => void;
    destructiveAction?: OverlayFooterIconAction;
    primaryAction?: OverlayFooterAction;
    secondaryAction?: OverlayFooterAction;
}
declare function OverlayFooter({ className, closeCallback, destructiveAction, primaryAction, ref, secondaryAction }: OverlayFooterProps): react_jsx_runtime.JSX.Element;

interface AlertModalProps extends Omit<ModalOverlayProps, 'children' | 'isDismissable'>, RefAttributes<HTMLDivElement> {
    /**
     * Whether to focus header close button on initial render.
     */
    autoFocusClose?: boolean;
    /**
     * Modal body content.
     */
    children: ReactNode | ((closeCallback: () => void) => ReactNode);
    /**
     * Destructive action in the footer.
     */
    destructiveAction?: OverlayFooterIconAction;
    /**
     * Icon to display in the header. Appearance depends on the variant.
     */
    headerIcon?: IconName;
    /**
     * Whether modal can be closed by clicking outside it.
     */
    isDismissibleOnOutClick?: boolean;
    /**
     * Primary action in the footer.
     */
    primaryAction?: OverlayFooterAction;
    /**
     * Secondary action in the footer.
     */
    secondaryAction?: OverlayFooterAction;
    /**
     * Whether to scroll window viewport instead of body content if it does not fit the screen.
     */
    shouldScrollInViewport?: boolean;
    /**
     * Size determines the width of the modal.
     */
    size: Size.sm | Size.md | Size.lg | Size.xl | Size.xxl;
    /**
     * Title to display in the header.
     */
    title: ReactNode;
    /**
     * Header variant. Mainly affects the headerIcon.
     */
    variant?: OverlayHeaderVariant;
}
declare function AlertModal({ autoFocusClose, children, className, destructiveAction, headerIcon, isDismissibleOnOutClick, primaryAction, secondaryAction, shouldScrollInViewport, size, title, variant, ...props }: AlertModalProps): react_jsx_runtime.JSX.Element;

declare const enum BadgeStyle {
    Fill = "fill",
    Outline = "outline",
    Plain = "plain"
}
declare const enum BadgeVariant {
    Neutral = "neutral",
    Success = "success",
    Danger = "danger",
    Warning = "warning",
    Informative = "informative"
}
interface BadgeProps extends RefAttributes<HTMLDivElement> {
    /**
     * Aria label for screen readers.
     */
    ['aria-label']?: string;
    /**
     * Content of the badge.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Icon for badge.
     */
    iconName?: IconName;
    /**
     * Whether badge is disabled.
     */
    isDisabled?: boolean;
    /**
     * Aria role for the element.
     */
    role?: AriaRole$1;
    /**
     * Visual style for the badge.
     */
    style: BadgeStyle;
    /**
     * Variant of the badge.
     */
    variant: BadgeVariant;
}
declare function Badge({ 'aria-label': ariaLabel, children, className, iconName, isDisabled, ref, role, style, variant }: BadgeProps): react_jsx_runtime.JSX.Element;

interface CalloutProps extends RefAttributes<HTMLDivElement> {
    /**
     * Callout content.
     */
    children?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Whether elements is expanded by default.
     */
    defaultExpanded?: boolean;
    /**
     * Name of decorative icon displayed in the header.
     */
    iconName: IconName;
    /**
     * Whether element is expanded (controlled).
     */
    isExpanded?: boolean;
    /**
     * Handler called when expanded state changes. Use together with isExpanded to control state from outside.
     */
    onExpandedChange?: (isExpanded: boolean) => void;
    /**
     * Title displayed in the header.
     */
    title: ReactNode;
}
declare function Callout({ children, className, iconName, ref, title, ...props }: CalloutProps): react_jsx_runtime.JSX.Element;

declare const enum DrawerVariant {
    FullOverlay = "full-overlay",
    Standard = "standard"
}
declare const enum DrawerWidth {
    Medium = "medium",
    Wide = "wide"
}
declare const enum DrawerHeaderStyle {
    Emphasized = "emphasized",
    Standard = "standard"
}
interface DrawerRenderProps {
    close: () => void;
}
interface DrawerProps extends ModalOverlayProps, RefAttributes<HTMLDivElement> {
    /**
     * Aria-label for Dialog in case header does not contain Heading element.
     */
    ['aria-label']?: string;
    /**
     * Whether to focus header close button on initial render.
     */
    autoFocusClose?: boolean;
    /**
     * Drawer body content.
     */
    children: ReactNode;
    /**
     * Extra CSS class name of Drawer
     */
    className?: string;
    /**
     * Destructive action in the footer.
     */
    destructiveAction?: OverlayFooterIconAction;
    /**
     * Custom footer content. Overrides the default footer content rendering.
     */
    footer?: ReactNode | ((renderProps: DrawerRenderProps) => ReactNode);
    /**
     * Custom header content. Overrides the default header content rendering.
     */
    header?: ReactNode | ((renderProps: DrawerRenderProps) => ReactNode);
    /**
     * Custom content to display in header below the title.
     */
    headerDetails?: ReactNode;
    /**
     * Determines the background color of the header element.
     */
    headerStyle?: DrawerHeaderStyle;
    /**
     * Primary action in the footer.
     */
    primaryAction?: OverlayFooterAction;
    /**
     * Ref to Drawer content which has the scroll bar.
     */
    scrollRef?: Ref<HTMLDivElement>;
    /**
     * Secondary action in the footer.
     */
    secondaryAction?: OverlayFooterAction;
    /**
     * Whether Drawer entering and exiting should be animated. Slide animation is shown by default.
     */
    shouldAnimate?: boolean;
    /**
     * Whether to show loading indicator in header.
     * Applied only when using the default header rendering (= header prop not set).
     */
    showHeaderLoadingIndicator?: boolean;
    /**
     * Title to display in header.
     * Applied only when using the default header rendering (= header prop not set).
     */
    title?: ReactNode;
    /**
     * Variant of the Drawer. Defines if user can act with the content behind the Drawer.
     */
    variant?: DrawerVariant;
    /**
     * Width of the drawer.
     */
    width?: DrawerWidth;
}
declare function Drawer({ 'aria-label': ariaLabel, autoFocusClose, children, className, destructiveAction, footer, header, headerDetails, headerStyle, isDismissable, primaryAction, scrollRef, secondaryAction, showHeaderLoadingIndicator, shouldAnimate, title, variant, width, ...props }: DrawerProps): react_jsx_runtime.JSX.Element;

declare const enum InlineAlertVariant {
    Neutral = "neutral",
    Informative = "informative",
    Success = "success",
    Danger = "danger",
    Warning = "warning"
}
interface InlineAlertProps extends RefAttributes<HTMLDivElement> {
    /**
     * Label for the action button.
     */
    actionLabel?: string;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Main text content
     */
    content: ReactNode;
    /**
     * Whether alert can be dismissed.
     */
    isDismissible?: boolean;
    /**
     * Callback for the action button.
     */
    onAction?: () => void;
    /**
     * Title text.
     */
    title?: string;
    /**
     * Variant of the alert.
     */
    variant?: InlineAlertVariant;
}
declare function InlineAlert({ actionLabel, className, content, isDismissible, onAction, ref, title, variant }: InlineAlertProps): react_jsx_runtime.JSX.Element | null;

interface ProgressBarProps extends ProgressBarProps$1, RefAttributes<HTMLDivElement> {
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Position of the label. If not given, label will not be shown.
     */
    labelPosition?: Position.Bottom | Position.Top;
    /**
     * Whether to show the help text icon.
     */
    showHelpTextIcon?: boolean;
    /**
     * Position of the tooltip.
     */
    tooltipPosition?: Position.Bottom | Position.Top;
    /**
     * Position of the value label. If not given, value label will not be shown.
     */
    valueLabelPosition?: Position.Bottom | Position.Right;
}
declare function ProgressBar(props: ProgressBarProps): react_jsx_runtime.JSX.Element;

interface RequiredIndicatorProps {
    className?: string;
}
declare function RequiredIndicator({ className }: RequiredIndicatorProps): react_jsx_runtime.JSX.Element;

declare const enum SkeletonShape {
    Circle = "circle",
    Rectangle = "rectangle"
}
interface SkeletonProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Height of the element.
     */
    height?: CSSProperties['height'];
    /**
     * Unique id for the element.
     */
    id?: string;
    /**
     * Shape of the element.
     */
    shape?: SkeletonShape;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Width of the element.
     */
    width?: CSSProperties['width'];
}
declare function Skeleton({ 'aria-hidden': ariaHidden, className, height, shape, style, width, ...props }: SkeletonProps): react_jsx_runtime.JSX.Element;

declare const enum SkeletonTextType {
    Body = "body",
    Heading = "heading",
    Label = "label",
    Title = "title"
}
interface SkeletonTextProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Size of text to mimic.
     */
    size: Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
    /**
     * Type of text to mimic.
     */
    type?: SkeletonTextType;
    /**
     * Width of the element.
     */
    width?: SkeletonProps['width'];
}
declare function SkeletonText({ 'aria-hidden': ariaHidden, className, ref, size, type, width }: SkeletonTextProps): react_jsx_runtime.JSX.Element;
interface SkeletonTextMultilineProps extends SkeletonTextProps {
    /**
     * Number of lines.
     */
    lineCount?: number;
}
declare function SkeletonTextMultiline({ 'aria-hidden': ariaHidden, className, lineCount, ref, width, ...props }: SkeletonTextMultilineProps): react_jsx_runtime.JSX.Element | null;

interface BodyTextProps extends RefAttributes<any> {
    alignment?: Alignment;
    children: ReactNode | string;
    className?: string;
    elementType?: ElementType;
    size: Size.xs | Size.sm | Size.md | Size.lg;
    style?: CSSProperties;
}
declare function BodyText({ alignment, children, className, elementType, ref, size, style }: BodyTextProps): react_jsx_runtime.JSX.Element;

declare const enum TooltipType {
    Rich = "rich",
    Plain = "plain"
}
interface TooltipProps extends TooltipProps$1, RefAttributes<HTMLDivElement> {
    /**
     * Content of the tooltip.
     */
    children: ReactNode | string;
    /**
     * Content wrapper element type.
     */
    elementType?: ElementType;
    /**
     * Header icon of the tooltip. Only shown for the rich tooltip type.
     */
    headerIconName?: IconName;
    /**
     * Header text of the tooltip. Only shown for the rich tooltip type.
     */
    headerText?: string;
    /**
     * Max width of the tooltip (px).
     */
    maxWidth?: number;
    /**
     * Position of the tooltip.
     */
    position?: Position;
    /**
     * Whether to show the arrow of the tooltip.
     */
    showArrow?: boolean;
    /**
     * Type of the tooltip.
     */
    type: TooltipType;
}
declare function Tooltip({ children, className, elementType, headerIconName, headerText, maxWidth, position, showArrow, type, ...props }: TooltipProps): react_jsx_runtime.JSX.Element;

interface TooltipContent {
    headerIconName?: TooltipProps['headerIconName'];
    headerText?: TooltipProps['headerText'];
    content: TooltipProps['children'];
}
interface FieldLabelProps extends LabelProps$1 {
    isDisabled?: boolean;
    isRequired?: boolean;
    size?: Size.sm | Size.md | Size.lg;
    suffix?: ReactNode;
    tooltipContent?: TooltipContent;
}
declare function FieldLabel({ children, className, isDisabled, isRequired, size, suffix, tooltipContent, ...props }: FieldLabelProps): react_jsx_runtime.JSX.Element;

interface HeadingProps extends HeadingProps$1, RefAttributes<any> {
    /**
     * Text align of the header.
     */
    alignment?: Alignment;
    /**
     * Element type of header.
     */
    elementType?: ElementType;
    /**
     * Size of the element.
     */
    size: Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
}
declare const HEADING_SIZE_XXS_CSS_CLASS = "heading--xxs";
declare const HEADING_SIZE_XS_CSS_CLASS = "heading--xs";
declare const HEADING_SIZE_SM_CSS_CLASS = "heading--sm";
declare const HEADING_SIZE_MD_CSS_CLASS = "heading--md";
declare const HEADING_SIZE_LG_CSS_CLASS = "heading--lg";
declare function Heading({ alignment, children, className, elementType: Element, size, ...props }: HeadingProps): react_jsx_runtime.JSX.Element;

declare const enum HelpTextVariant {
    Neutral = "neutral",
    Danger = "danger",
    Success = "success",
    Disabled = "disabled"
}
interface HelpTextProps {
    children: ReactNode;
    className?: string;
    id?: string;
    showIcon?: boolean;
    variant?: HelpTextVariant;
}
declare function HelpText({ children, className, id, showIcon, variant }: HelpTextProps): react_jsx_runtime.JSX.Element;

interface LabelProps extends HTMLAttributes<HTMLElement>, RefAttributes<any> {
    elementType?: ElementType;
    htmlFor?: string;
    size: Size.xs | Size.sm | Size.md | Size.lg;
}
declare const LABEL_SIZE_XS_CSS_CLASS = "label--xs";
declare const LABEL_SIZE_SM_CSS_CLASS = "label--sm";
declare const LABEL_SIZE_MD_CSS_CLASS = "label--md";
declare const LABEL_SIZE_LG_CSS_CLASS = "label--lg";
declare function Label({ className, elementType, htmlFor, size, ...props }: LabelProps): react_jsx_runtime.JSX.Element;

interface TitleProps extends HeadingProps$1, RefAttributes<any> {
    /**
     * Element type of title.
     */
    elementType?: ElementType;
    /**
     * Size of the element.
     */
    size: Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
}
declare function Title({ children, className, elementType: Element, size, ...props }: TitleProps): react_jsx_runtime.JSX.Element;

declare const enum SpinnerVariant {
    Neutral = "neutral",
    Accent = "accent",
    None = "none"
}
interface SpinnerProps extends RefAttributes<HTMLDivElement> {
    /**
     * Label for screen readers if you don't want to have visible label.
     */
    ['aria-label']?: string;
    /**
     * Id of the label element which labels the spinner.
     */
    ['aria-labelledby']?: string;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Label for the element.
     */
    label?: ReactNode;
    /**
     * Position of the label.
     */
    labelPosition?: Position.Bottom | Position.Right;
    /**
     * Custom size for label. Use only if you need to override default sizing logic.
     */
    labelSize?: LabelProps['size'];
    /**
     * Size of the element.
     */
    size: Size.sm | Size.md | Size.lg | Size.xl;
    /**
     * Spinner color variant.
     * If variant = SpinnerVariant.None, color will be inherited from nearest element where color is set.
     */
    variant?: SpinnerVariant;
}
declare function Spinner({ 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledBy, className, label, labelPosition, labelSize, ref, size, variant }: SpinnerProps): react_jsx_runtime.JSX.Element;

interface ToastOptions {
    actionLabel?: string;
    onAction?: () => void;
    shouldCloseOnAction?: boolean;
    timeout?: number;
}
declare function closeToast(id: string): void;
declare const ToastQueue: {
    neutral(children: ReactNode, options?: ToastOptions): string;
    informative(children: ReactNode, options?: ToastOptions): string;
    success(children: ReactNode, options?: ToastOptions): string;
    danger(children: ReactNode, options?: ToastOptions): string;
    warning(children: ReactNode, options?: ToastOptions): string;
    loading(children: ReactNode, options?: ToastOptions): string;
};
interface GlobalToastRegionProps extends RefAttributes<HTMLDivElement> {
    /**
     * Defines a string value that labels the current element.
     */
    'aria-label'?: string;
    /**
     * Identifies the element (or elements) that labels the current element.
     */
    'aria-labelledby'?: string;
    /**
     * Identifies the element (or elements) that describes the object.
     */
    'aria-describedby'?: string;
    /**
     * Identifies the element (or elements) that provide a detailed, extended description for the object.
     */
    'aria-details'?: string;
}
declare function GlobalToastRegion(props: GlobalToastRegionProps): react_jsx_runtime.JSX.Element;

declare function TooltipTrigger({ children, delay, ...props }: TooltipTriggerComponentProps): react_jsx_runtime.JSX.Element;

declare const enum ColumnConfiguratorVariant {
    Basic = "basic",
    Extended = "extended"
}
interface ColumnConfiguratorProps {
    /**
     * Actions setup for the extended variant.
     */
    actions?: Pick<DrawerProps, 'primaryAction' | 'secondaryAction' | 'destructiveAction'>;
    /**
     * Pressable trigger element.
     */
    children: ReactNode;
    /**
     * List of columns.
     */
    columns: ColumnConfiguratorItem[];
    /**
     * Array of column ids which define the current order.
     */
    columnOrder?: string[];
    /**
     * Column visibility by id.
     */
    columnVisibility?: Record<string, boolean>;
    /**
     * Column order change callback.
     */
    onColumnOrderChange?: (columnOrder: string[]) => void;
    /**
     * Column visibility change callback.
     */
    onColumnVisibilityChange?: (columnVisibility: Record<string, boolean>) => void;
    /**
     * Configurator variant.
     * Basic (default): column items are rendered inside Popover.
     * Extended: column items are rendered inside Drawer with additional functionality.
     */
    variant?: ColumnConfiguratorVariant;
}
declare function ColumnConfigurator({ actions, columns, columnOrder: propsColumnOrder, columnVisibility: propsColumnVisibility, children, onColumnOrderChange, onColumnVisibilityChange, variant }: ColumnConfiguratorProps): react_jsx_runtime.JSX.Element;

declare const enum DataCardStyle {
    Card = "card",
    Plain = "plain"
}
declare const enum DataCardActionElement {
    Button = 0,
    Self = 1
}
declare const enum DataCardAlertLevel {
    Warning = "warning",
    Danger = "danger"
}
interface DataCardAction {
    element: DataCardActionElement;
    onPress: () => void;
    text?: string;
}
interface DataCardAlert {
    ariaLabel?: string;
    level: DataCardAlertLevel;
}

interface DataCardProps extends RefAttributes<HTMLDivElement> {
    /**
     * CTA for the element. Action element can be the whole card (Self) or Button.
     * Note: Self-option is applied only when Card-style is used.
     */
    action?: DataCardAction;
    /**
     * Options for alert icon to show after value.
     */
    alert?: DataCardAlert;
    /**
     * Props for Badge element displayed in the header area.
     */
    badgeProps?: BadgeProps;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Description text for the value.
     */
    description: string;
    /**
     * Header icon name.
     */
    headerIconName?: IconName;
    /**
     * Header text.
     */
    headerText?: string;
    /**
     * Whether element is disabled. Given actions will be disabled if set.
     */
    isDisabled?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Minimum width for the card.
     */
    minWidth?: CSSProperties['minWidth'];
    /**
     * Size of the element.
     */
    size: Size.sm | Size.md | Size.lg;
    /**
     * Display style of the element.
     */
    style: DataCardStyle;
    /**
     * Main display value.
     */
    value: string | number;
    /**
     * Slot to provide data visualization.
     */
    visualization?: ReactNode;
}
declare function DataCard({ action, alert, badgeProps, className, description, headerIconName, headerText, isDisabled, isSkeleton, minWidth, ref, size, style, value, visualization }: DataCardProps): react_jsx_runtime.JSX.Element;

interface DayOfMonthProps extends RefAttributes<HTMLDivElement>, HTMLAttributes<HTMLDivElement> {
    /**
     * Custom content to display.
     */
    customContent?: ReactNode;
    /**
     * Whether to use completed style.
     */
    isCompleted?: boolean;
    /**
     * Whether to use disabled style.
     */
    isDisabled?: boolean;
    /**
     * Whether to display focus ring.
     */
    isFocused?: boolean;
    /**
     * Whether to interactive style on hover.
     */
    isInteractive?: boolean;
    /**
     * Whether to use selected style.
     */
    isSelected?: boolean;
    /**
     * Whether to use "today" style.
     */
    isToday?: boolean;
    /**
     * Whether to use "unavailable" style.
     */
    isUnavailable?: boolean;
}
declare function DayOfMonth({ children, className, customContent, isCompleted, isDisabled, isFocused, isInteractive, isSelected, isToday, isUnavailable, ...props }: DayOfMonthProps): react_jsx_runtime.JSX.Element;

type DateLike = string | number | Date;
interface DateTileProps<TMenuItem extends MenuItem, TDate extends DateLike> {
    /**
     * Aria-label for the element.
     * Overrides default aria-label if given as string.
     * Can be used to extend or override default aria-label if provided as function.
     */
    ariaLabel?: string | ((defaultAriaLabel: string) => string);
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Name of icon to display next to weekday name when isCompleted = true.
     * Defaults to "CheckFilled" if not given.
     */
    completedIconName?: IconName;
    /**
     * Whether to show completed indicator.
     */
    isCompleted?: boolean;
    /**
     * Whether to show locked indicator.
     */
    isLocked?: boolean;
    /**
     * Whether date is selected.
     */
    isSelected?: boolean;
    /**
     * Whether date is today.
     * If not given, date and I18nContext timeZone are used to determine it.
     */
    isToday?: boolean;
    /**
     * Date to display.
     * Can be given as ISO 8601 date string (YYYY-MM-DD), number of milliseconds or Date object.
     */
    date: TDate;
    /**
     * Props for menu.
     */
    menuProps?: Omit<MenuProps<TMenuItem>, 'children'>;
    /**
     * Handler that is called when the press is released over the target.
     */
    onPress?: (date: TDate) => void;
    /**
     * Custom renderer for day of month.
     */
    renderDayOfMonth?: (dayOfMonthProps: DayOfMonthProps) => ReactNode;
    /**
     * WAI-ARIA role of the element. Should be given if interactive.
     */
    role?: AriaRole$1;
    /**
     * Secondary text to display under weekday name.
     */
    secondaryText?: ReactNode;
    /**
     * Tooltip props.
     */
    tooltipProps?: {
        headerText?: TooltipProps['headerText'];
        content: TooltipProps['children'];
        type?: TooltipProps['type'];
    };
}
declare function DateTile<TMenuItem extends MenuItem, TDate extends DateLike>({ ariaLabel: propsAriaLabel, className, completedIconName, date, isCompleted, isLocked, isSelected, isToday, menuProps, onPress, renderDayOfMonth: propsRenderDayOfMonth, secondaryText, tooltipProps }: DateTileProps<TMenuItem, TDate>): react_jsx_runtime.JSX.Element;

interface DividerProps extends RefAttributes<HTMLDivElement> {
    /**
     * Alignment of the Divider text label
     */
    alignment?: Alignment;
    /**
     * Additional class names to be applied to the Divider
     */
    className?: string;
    /**
     * Orientation of the Divider
     */
    orientation?: Orientation;
    /**
     * Size of the Divider
     */
    size: Size.sm | Size.md | Size.lg;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Text to be displayed in the Divider. If not given, displays only divider line.
     */
    text?: string;
}
declare function Divider({ alignment, className, orientation, ref, size, style, text }: DividerProps): react_jsx_runtime.JSX.Element;

type AvatarSize = Size.xs | Size.sm | Size.md | Size.lg;
interface AvatarProps extends RefAttributes<HTMLDivElement> {
    /**
     * Textual replacement for the image. Required for accessibility.
     */
    alt: string;
    /**
     * CSS class for the element.
     */
    className?: string;
    /**
     * Description to show below label.
     */
    description?: string;
    /**
     * Icon to show as avatar when image src or text is not provided.
     */
    iconName?: IconName;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether avatar is navigable with keyboard.
     */
    isInteractive?: boolean;
    /**
     * Label to display next to the image.
     */
    label?: ReactNode;
    /**
     * Max width label container can take.
     */
    labelMaxWidth?: CSSProperties['maxWidth'];
    /**
     * Handler that is called when avatar is pressed.
     */
    onPress?: () => void;
    /**
     * Size of the Avatar
     */
    size?: AvatarSize;
    /**
     * Path to the image to show as avatar.
     */
    src?: string;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Text to show as avatar when image src is not provided, f.e. user initials.
     */
    text?: string;
}
declare function Avatar(props: AvatarProps): react_jsx_runtime.JSX.Element;

declare const enum AvatarGroupLayout {
    Grid = "grid",
    Stack = "stack"
}
interface AvatarGroupProps extends RefAttributes<HTMLDivElement> {
    /**
     * Avatar element or list of Avatar elements.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Avatars can be displayed with stack or grid layout.
     */
    layout?: AvatarGroupLayout;
    /**
     * Max visible avatar count. Applied only for the grid layout.
     */
    maxVisibleCount?: number;
    /**
     * Size of the avatars.
     */
    size?: Size.sm | Size.md | Size.lg;
}
declare function AvatarGroup({ children: propsChildren, className, layout, maxVisibleCount, ref, size }: AvatarGroupProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    id: string;
    label: string;
    isDisabled?: boolean;
}
interface BreadcrumbsProps<T extends BreadcrumbItem> extends Omit<BreadcrumbsProps$1<T>, 'onAction'>, RefAttributes<HTMLOListElement> {
    items: T[];
    /**
     * Handler that is called when a breadcrumb is clicked.
     */
    onAction?: (id: string) => void;
}
declare function Breadcrumbs<T extends BreadcrumbItem>({ className, items, ref, ...props }: BreadcrumbsProps<T>): react_jsx_runtime.JSX.Element;

declare const enum LinkRole {
    Button = "button",
    Link = "link"
}
interface LinkProps extends Omit<LinkProps$1, 'children' | 'className' | 'style'>, Omit<ButtonProps$1, 'children' | 'className' | 'style'>, RefAttributes<HTMLAnchorElement | HTMLButtonElement> {
    /**
     * Children for the element.
     */
    children?: ReactNode;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Whether link has been visited by the user.
     * Determined by browser history for href-links if not given.
     */
    isVisited?: boolean;
    /**
     * Link can act as a link or button. Default: link.
     */
    role?: LinkRole;
    /**
     * Size of the element.
     * If not provided, style of the surrounding text is used.
     */
    size?: Size.sm | Size.md | Size.lg;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
}
declare function Link({ className, isVisited, ref, role, size, ...props }: LinkProps): react_jsx_runtime.JSX.Element;

interface PaginationItemsPerPageOptions {
    isVisible?: boolean;
    showLabel?: boolean;
}
interface PaginationProps extends RefAttributes<HTMLDivElement> {
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of pages. If not set, page count is calculated based on totalRowCount and pageSize.
     */
    count?: number;
    /**
     * Show pagination without the page items.
     */
    isMinimized?: boolean;
    /**
     * Options for items per page selection.
     */
    itemsPerPageOptions?: PaginationItemsPerPageOptions;
    /**
     * Callback called when selected page is changed.
     */
    onPageIndexChange?: (pageIndex: number) => void;
    /**
     * Callback called when page size is changed.
     */
    onPageSizeChange?: (pageSize: number) => void;
    /**
     * Index of the currently selected page. Indexing starts from 0.
     */
    pageIndex?: number;
    /**
     * Number of rows on a page. Used for calculating page count when count prop is not set.
     */
    pageSize?: number;
    /**
     * Selectable page sizes. If not given, defaults to 25, 50, 100, 200.
     */
    pageSizes?: number[];
    /**
     * Whether to show page items before row count info.
     */
    showPagesFirst?: boolean;
    /**
     * Total number of rows. Used for calculating page count when count prop is not set.
     */
    totalRowCount?: number;
}
declare function Pagination({ className, count, isMinimized, itemsPerPageOptions: propsItemsPerPageOptions, onPageIndexChange, onPageSizeChange, pageIndex, pageSize, pageSizes, ref, showPagesFirst, totalRowCount }: PaginationProps): react_jsx_runtime.JSX.Element;

interface SideNavItem {
    /**
     * Element to indicate something that needs user's attention.
     */
    badge?: {
        ariaLabel?: string;
        iconName: IconName;
        isVisible: boolean;
    };
    /**
     * The unique identifier of the item.
     */
    id: Key;
    /**
     * The name of the icon.
     */
    icon?: IconName;
    /**
     * Whether the item is active.
     */
    isActive?: boolean;
    /**
     * Whether the item is a heading.
     */
    isHeading?: boolean;
    /**
     * The children of the item.
     */
    items?: SideNavItem[];
    /**
     * The label of the item.
     */
    label: string;
    /**
     * Callback that is called when the item is pressed.
     */
    onPress?: (id: Key) => void;
    /**
     * Whether to show the decorator line.
     */
    showLine?: boolean;
    /**
     * Whether to use decorator line.
     */
    useDecorLine?: boolean;
}

declare const enum SideNavMode {
    Default = "default",
    Inverted = "inverted"
}
interface SideNavProps extends RefAttributes<HTMLDivElement> {
    ['aria-label']: string;
    /**
     * Whether the side nav can be collapsed. Items should have icon when this is set to true.
     */
    canShrink?: boolean;
    /**
     * Set of expanded item keys.
     */
    expandedKeys?: Set<Key>;
    /**
     * The header of the side nav.
     */
    header?: ReactNode | ((isExpanded: boolean) => ReactNode);
    /**
     * Whether the side nav is expanded.
     */
    isExpanded?: boolean;
    /**
     * The items to display in the side nav.
     */
    items: SideNavItem[];
    /**
     * The mode of the side nav.
     */
    mode?: SideNavMode;
    /**
     * Handler that is called when items are expanded or collapsed.
     */
    onExpandedKeysChange?: (keys: Set<Key>) => void;
    /**
     * Callback that is called when the side nav is toggled.
     */
    toggleCallback?: (isExpanded: boolean) => void;
}
declare function SideNav({ canShrink, expandedKeys: propsExpandedKeys, header, isExpanded, items, mode, onExpandedKeysChange, ref, toggleCallback, ...props }: SideNavProps): react_jsx_runtime.JSX.Element;

interface StepItemProps extends RefAttributes<HTMLDivElement> {
    alignment?: Alignment.start | Alignment.center;
    index?: number;
    isActive?: boolean;
    isCompleted?: boolean;
    isDisabled?: boolean;
    orientation?: Orientation;
    progressValue?: number;
    supportText?: string;
    title: string;
}
declare function StepItem({ alignment, index, isActive, isCompleted, isDisabled, orientation, progressValue, ref, supportText, title }: StepItemProps): react_jsx_runtime.JSX.Element;

interface StepsProps extends RefAttributes<HTMLDivElement> {
    /**
     * Index of the currently selected step.
     */
    activeStep?: string | number;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * The children of the component.
     */
    children: Array<ReactElement<StepItemProps>>;
    /**
     * The orientation of the element.
     */
    orientation?: Orientation;
    /**
     * Alignment of the step item content.
     */
    stepAlignment?: Alignment.start | Alignment.center;
}
declare function Steps({ activeStep, className, children, orientation, ref, stepAlignment }: StepsProps): react_jsx_runtime.JSX.Element;

interface PanelItem {
    content: ReactNode;
    id: string;
}
interface TabItem {
    badgeText?: string;
    iconName?: IconName;
    id: string;
    isDisabled?: boolean;
    name: string;
}
declare const enum TabsType {
    Card = "card",
    Underline = "underline"
}
interface TabsProps extends TabsProps$1, RefAttributes<HTMLDivElement> {
    /**
     * Alignment of the tabs.
     */
    alignment?: Exclude<Alignment, 'end'>;
    /**
     * Orientation of the tabs. Vertical can only be used with underline.
     */
    orientation?: Orientation;
    /**
     * List of panel items.
     */
    panelItems: PanelItem[];
    /**
     * List of Tab items.
     */
    tabItems: TabItem[];
    /**
     * Type of the tabs
     */
    type?: TabsType;
}
declare function Tabs({ alignment, orientation, panelItems, tabItems, type, ...props }: TabsProps): react_jsx_runtime.JSX.Element;

declare const enum TagStyle {
    Fill = "fill",
    Outline = "outline"
}
interface TagProps extends RefAttributes<HTMLSpanElement> {
    /**
     * Tag content.
     */
    children: ReactNode;
    /**
     * CSS class for the element.
     */
    className?: string;
    /**
     * Icon for the content.
     */
    iconName?: IconName;
    /**
     * Whether tag is disabled.
     */
    isDisabled?: boolean;
    /**
     * Content press callback. Makes the element interactive.
     */
    onPress?: () => void;
    /**
     * Remove callback. If given, remove button will be displayed with this handler attached to it.
     */
    onRemove?: () => void;
    /**
     * Props for remove button. If contains onPress, it will override given onRemove callback.
     */
    removeButtonProps?: Partial<IconButtonProps>;
    /**
     * The ARIA role of the element.
     */
    role?: AriaRole$1;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Style of the Tag.
     */
    style?: TagStyle;
    /**
     * The ARIA role of the trigger element.
     */
    triggerRole?: AriaRole$1;
}
declare function Tag({ children, className, iconName, isDisabled, onPress, onRemove, ref, removeButtonProps, role, size, style, triggerRole }: TagProps): react_jsx_runtime.JSX.Element;

interface TagGroupProps extends RefAttributes<HTMLDivElement> {
    /**
     * Tag element or list of Tag elements.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Maximum number of visible tag rows when in collapsed state.
     */
    maxVisibleRows?: number;
    /**
     * Size of the tags.
     */
    size?: TagProps['size'];
    /**
     * Style of the tags.
     */
    style?: TagProps['style'];
}
declare function TagGroup({ children: propsChildren, className, maxVisibleRows, ref, size, style }: TagGroupProps): react_jsx_runtime.JSX.Element;

interface TopNavItem {
    ariaHidden?: boolean;
    id: string;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
interface TopNavProps extends RefAttributes<HTMLElement> {
    /**
     * Defines a string value that labels the nav element.
     */
    ['aria-label']?: string;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Content on the left side of the top navigation.
     */
    leftItems: TopNavItem[];
    /**
     * Content on the right side of the top navigation.
     */
    rightItems: TopNavItem[];
    /**
     * Whether to show loading indicator.
     */
    showLoadingIndicator?: boolean;
}
declare function TopNav({ 'aria-label': ariaLabel, className, leftItems, rightItems, ref, showLoadingIndicator }: TopNavProps): react_jsx_runtime.JSX.Element;

declare const enum DataTableRowDragMode {
    Flat = "flat",
    Nested = "nested"
}

interface SkeletonDataTableProps extends RefAttributes<HTMLDivElement> {
    /**
     * ARIA hidden attribute.
     */
    ['aria-hidden']?: boolean;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of columns to display. Default is 5.
     */
    columnCount?: number;
    /**
     * Whether to display first column cells as "checkbox" cells.
     */
    hasRowSelection?: boolean;
    /**
     * Number of rows to display. Default is 5.
     */
    rowCount?: number;
}

interface ColumnPinningOptions {
    isSticky?: boolean;
    offset?: number;
}
declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        /**
         * Alignment of the content within column cells.
         */
        alignment?: Alignment;
        /**
         * Options for column pinning for left and right side.
         * isSticky = whether column will stick to given side
         * offset = distance of the sticking column from given side
         */
        columnPinningOptions?: {
            left?: ColumnPinningOptions;
            right?: ColumnPinningOptions;
        };
        /**
         * Whether to align the header text with body cell TextField text.
         */
        isEditable?: boolean;
        /**
         * Whether column is the "title" for the row.
         * Set this for 1 column when using nested rowDragMode to get the correct title for the drag overlay.
         */
        isRowTitle?: boolean;
        /**
         * Provide additional props for cell element.
         */
        getCellProps?: (context: CellContext<TData, TValue>) => ComponentPropsWithoutRef<'td'>;
        /**
         * CSS styles for column header.
         */
        headerStyle?: CSSProperties;
        /**
         * Column title as text. Required when using column drag and drop.
         */
        title?: string;
        /**
         * Whether column header should row-span to eliminate empty cells when using grouped columns.
         */
        useHeaderRowSpan?: boolean;
    }
    interface TableMeta<TData extends RowData> {
        enableParentRowSelectionSync?: boolean;
        getRowProps?: (row: Row<TData>) => ComponentPropsWithoutRef<'tr'>;
        isRowDisabled?: (row: Row<TData>) => boolean;
        isRowLoading?: (row: Row<TData>) => boolean;
        onDataEdit?: (rowIndex: number, columnId: string, value: any) => void;
    }
}
interface DataTableColumnConfiguratorOptions extends Partial<Omit<ColumnConfiguratorProps, 'children'>> {
    /**
     * Whether to use icon-button as column configurator button. By default, normal button is used.
     */
    isMinimized?: boolean;
}
type DataTablePaginationProps = Pick<PaginationProps, 'itemsPerPageOptions' | 'showPagesFirst'>;
interface DataTableProps<TData extends RowData> extends RefAttributes<HTMLDivElement> {
    /**
     * Props for bottom pagination.
     */
    bottomPaginationProps?: DataTablePaginationProps;
    /**
     * The CSS className for the table element.
     */
    className?: string;
    /**
     * Options for column configurator.
     */
    columnConfiguratorOptions?: DataTableColumnConfiguratorOptions;
    /**
     * Order of the columns.
     */
    columnOrder?: ColumnOrderState;
    /**
     * Pinned columns.
     */
    columnPinning?: ColumnPinningState;
    /**
     * Column definitions for the table.
     */
    columns: Array<ColumnDef<TData, any>>;
    /**
     * Visible columns.
     */
    columnVisibility?: VisibilityState;
    /**
     * Data for the table.
     */
    data: TData[];
    /**
     * Whether to select/unselect parent row when its sub-rows are selected/unselected.
     */
    enableParentRowSelectionSync?: boolean;
    /**
     * Whether row(s) can be selected. Can be defined as boolean or callback function.
     */
    enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
    /**
     * Current expanded rows state.
     */
    expanded?: ExpandedState;
    /**
     * Callback for checking whether row is expandable.
     */
    getRowCanExpand?: (row: Row<TData>) => boolean;
    /**
     * Callback for getting unique id for row. If not provided, indexes are used.
     */
    getRowId?: (originalRow: TData, index: number, parent?: Row<TData>) => string;
    /**
     * Callback for getting props for table row.
     */
    getRowProps?: (row: Row<TData>) => ComponentPropsWithoutRef<'tr'>;
    /**
     * Callback for getting title for the row. This is mainly needed for screen reader announcements in drag and drop.
     */
    getRowTitle?: (originalRow: TData) => string;
    /**
     * Callback for getting sub rows for expandable row.
     */
    getSubRows?: (originalRow: TData, index: number) => undefined | TData[];
    /**
     * Row grouping state.
     */
    grouping?: GroupingState;
    /**
     * Callback which determines whether row is disabled.
     */
    isRowDisabled?: (row: Row<TData>) => boolean;
    /**
     * Callback which determines whether row is loading.
     */
    isRowLoading?: (row: Row<TData>) => boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Callback for the column order change.
     */
    onColumnOrderChange?: (columnOrder: ColumnOrderState) => void;
    /**
     * Callback for the column visibility change.
     */
    onColumnVisibilityChange?: (columnVisibility: VisibilityState) => void;
    /**
     * Callback for the pagination change.
     */
    onExpandedChange?: (expanded: ExpandedState) => void;
    /**
     * Callback for data editing.
     */
    onDataEdit?: (rowIndex: number, columnId: string, value: any) => void;
    /**
     * Callback for the pagination change.
     */
    onPaginationChange?: (pagination: PaginationState) => void;
    /**
     * Callback for the row drag ending.
     */
    onRowDragEnd?: (params: {
        rowId: string;
        oldIndex: number;
        newIndex: number;
        oldParentId?: string;
        newParentId?: string;
    }) => void;
    /**
     * Callback for the row drag starting.
     */
    onRowDragStart?: (event: DragStartEvent) => void;
    /**
     * Callback for the row selection change.
     */
    onRowSelectionChange?: (rowSelection: RowSelectionState) => void;
    /**
     * Callback for the column sorting change.
     */
    onSortingChange?: (sorting: SortingState) => void;
    /**
     * Selectable page sizes for pagination.
     */
    pageSizes?: number[];
    /**
     * Current pagination state.
     */
    pagination?: PaginationState;
    /**
     * Content to render before the table. Aligned with top pager.
     */
    renderBefore?: () => ReactNode;
    /**
     * Whether columns can be re-ordered by drag and dropping.
     * Make sure columns have unique ids when using this prop for drag and drop to work correctly.
     */
    reorderableColumns?: boolean;
    /**
     * Determines how row drag and drop is handled.
     */
    rowDragMode?: DataTableRowDragMode;
    /**
     * Current row selection state.
     */
    rowSelection?: RowSelectionState;
    /**
     * Props for skeleton.
     */
    skeletonProps?: Partial<SkeletonDataTableProps>;
    /**
     * Current column sorting state.
     */
    sorting?: SortingState;
    /**
     * Determines the order of sorts in sorting array when adding new or toggling existing sorts.
     * "First" means first selected columns get the priority => sorts are added to end of the array.
     * "Last" means last selected columns get the priority => sorts are added to start of the array.
     * If not set, order is always the selection order.
     */
    sortingColumnSelectionPriority?: 'First' | 'Last';
    /**
     * Custom sorting strategy for the table rows.
     */
    sortingStrategy?: SortingStrategy;
    /**
     * Props for top pagination.
     */
    topPaginationProps?: DataTablePaginationProps;
    /**
     * Total number of rows. Needed for pagination.
     */
    totalRowCount?: number;
    /**
     * The CSS className for the root/wrapper element.
     */
    wrapperClassName?: string;
}
declare function DataTable<TData extends RowData>({ bottomPaginationProps, className, columnConfiguratorOptions, columnOrder: initialColumnOrder, columnPinning: initialColumnPinning, columns, columnVisibility: initialColumnVisibility, data, enableParentRowSelectionSync, enableRowSelection, expanded: initialExpanded, getRowCanExpand, getRowId, getRowProps, getRowTitle: getRowTitleFn, getSubRows, grouping: initialGrouping, isRowDisabled, isRowLoading, isSkeleton, onColumnOrderChange, onColumnVisibilityChange, onExpandedChange, onDataEdit, onPaginationChange, onRowSelectionChange, onSortingChange, pageSizes, pagination: initialPagination, rowSelection: initialRowSelection, ref, reorderableColumns, rowDragMode, skeletonProps, sorting: initialSorting, sortingColumnSelectionPriority, sortingStrategy, topPaginationProps, totalRowCount, wrapperClassName, ...props }: DataTableProps<TData>): react_jsx_runtime.JSX.Element;

interface RenderContentProps {
    date: string;
    dayOfMonthProps: DayOfMonthProps;
}
interface CalendarCellRangeInfo {
    isEndOfRange?: boolean;
    isInRange: boolean;
    isStartOfRange?: boolean;
}
interface CalendarCellProps {
    date: CalendarDate;
    isSelectedAsRelatedValue?: boolean;
    rangeInfo?: CalendarCellRangeInfo;
    renderContent?: (props: RenderContentProps) => ReactNode;
    state: CalendarState;
}

interface CalendarGridProps extends AriaCalendarGridProps {
    highlightSelectedWeek?: boolean;
    relatedValue?: DateValue | string | null;
    renderCellContent?: CalendarCellProps['renderContent'];
    showWeekNumbers?: boolean;
    state: CalendarState;
}

interface CalendarProps extends Omit<AriaCalendarProps<DateValue>, 'onChange' | 'value' | 'defaultValue' | 'focusedValue' | 'defaultFocusedValue' | 'minValue' | 'maxValue'>, RefAttributes<HTMLDivElement> {
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Provide footer to render custom content below the calendar grid.
     */
    footer?: ReactNode;
    /**
     * Whether week of selected date should be highlighted.
     */
    highlightSelectedWeek?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Maximum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    maxValue?: DateValue | string;
    /**
     * Minimum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    minValue?: DateValue | string;
    /**
     * Selected date change callback.
     */
    onChange?: (date: DateValue) => void;
    /**
     * Date related to selected value which will create a range between them.
     */
    relatedValue?: DateValue | string | null;
    /**
     * Custom cell content renderer.
     */
    renderCellContent?: CalendarGridProps['renderCellContent'];
    /**
     * Whether to show week numbers.
     */
    showWeekNumbers?: boolean;
    /**
     * Selected date for the calendar. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    value?: DateValue | string | null;
    /**
     * Range for year select items. By default, year select shows current year +/- 5 years.
     */
    yearSelectionRange?: {
        start: number;
        end: number;
    };
}
declare function Calendar({ className, footer, highlightSelectedWeek, isSkeleton, maxValue: propsMaxValue, minValue: propsMinValue, onFocusChange: propsOnFocusChange, ref, relatedValue, renderCellContent, showWeekNumbers, yearSelectionRange, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;

declare const DataState: {
    LOADING: number;
    ERROR: number;
    UPDATED: number;
    REMOVING: number;
    NOT_ALLOWED: number;
    HIDDEN: number;
    DRAGGING: number;
    COLLAPSED: number;
    PHASETREE_PLACEHOLDER: number;
    UPLOADING: number;
    CREATED: number;
    NO_EDIT: number;
    SEARCH_MATCHES: number;
    SAVED: number;
};
type TDataState = (typeof DataState)[keyof typeof DataState];

interface ValueArgs<T> {
    value: T;
}
interface AnyObject {
    [key: string]: any;
}
type ChangeArgs<P, TValue> = P & ValueArgs<TValue>;

interface CheckboxCommonProps<P extends AnyObject> extends CheckboxProps$1, RefAttributes<HTMLLabelElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, boolean>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Unique id that can be used for unit testing.
     */
    dataTestId?: string;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Whether label should be placed to start or end.
     */
    labelPlacement?: LabelPlacement;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
}
interface CheckboxPropsAriaLabelRequired<P extends AnyObject> extends CheckboxCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label': string;
    /**
     * label don't have be given, use aria-label then.
     */
    label?: ReactNode;
}
interface CheckboxPropsLabelRequired<P extends AnyObject> extends CheckboxCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label'?: string;
    /**
     * Main label for the element.
     */
    label: ReactNode;
}
type CheckboxProps<P extends AnyObject> = CheckboxPropsAriaLabelRequired<P> | CheckboxPropsLabelRequired<P>;
declare function Checkbox<P extends AnyObject>({ className, changeCallback, changeParams, dataState, dataTestId, helpText, isDisabled, isIndeterminate, isInvalid, isRequired, isSelected, isSkeleton, label, labelPlacement, onChange, size, ...props }: CheckboxProps<P>): react_jsx_runtime.JSX.Element;

interface CheckboxGroupProps<P extends AnyObject> extends CheckboxGroupProps$1, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string[]>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    children: Array<ReactElement<CheckboxProps<any>>>;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Help text to provide more information.
     */
    helpText?: ReactNode;
    /**
     * Help text to show in success style.
     */
    helpTextSuccess?: ReactNode;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label for the element.
     */
    label: ReactNode;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
declare function CheckboxGroup<P extends AnyObject>({ changeCallback, changeParams, children, className, dataState, helpText, helpTextSuccess, isDisabled, isInvalid, isRequired, isSkeleton, label, onChange, showHelpTextIcon, size, tooltipContent, ...props }: CheckboxGroupProps<P>): react_jsx_runtime.JSX.Element;

interface SelectItemBase<TItem> {
    /**
     * When provided, item is considered an action which calls the callback on click.
     */
    action?: {
        callback: () => void;
        [key: string]: any;
    };
    /**
     * When provided, item is considered as parent item which has the given children.
     * Should be used for hierarchical lists.
     * Should not be provided at the same time with items property.
     */
    children?: TItem[];
    /**
     * Show separator after item.
     */
    hasSeparator?: boolean;
    /**
     * When provided, item is considered as a group header which has given items under it.
     * Should be used for grouped lists.
     * Should not be provided at the same time with children property.
     */
    items?: TItem[];
    /**
     * When provided, item can be navigated to but cannot be selected.
     */
    isReadOnly?: boolean;
    /**
     * Item's textual value.
     */
    text: string;
    /**
     * Tooltip for item. Shown on hover and keyboard highlight.
     */
    tooltip?: {
        content: ReactNode;
    };
    /**
     * Item's unique identifier.
     */
    value: Key;
    [key: string]: any;
}
interface SelectItem<TValue extends Key = Key> extends SelectItemBase<SelectItem<TValue>> {
    value: TValue;
}

interface SelectOptionContentProps<TItem extends SelectItemBase<TItem>> extends RefAttributes<HTMLDivElement> {
    /**
     * Element to display at start of content body, e.g. icon.
     */
    bodyPrefix?: ReactNode;
    /**
     * Element to display at the end of content body, e.g. number, text, badge.
     */
    bodySuffix?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Description text to display under label.
     */
    description?: string;
    /**
     * Description ref.
     */
    descriptionRef?: RefObject<HTMLElement | null>;
    /**
     * Whether item is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether item is expanded. Affects the expander icon and aria-label.
     */
    isExpanded?: boolean;
    /**
     * Whether item is loading. Will replace expander with spinner.
     */
    isLoading?: boolean;
    /**
     * Whether item is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Select item data.
     */
    item: TItem;
    /**
     * By default, item text is used for label content internally. Can be used to replace that with custom label element.
     */
    label?: ReactNode;
    /**
     * Label ref.
     */
    labelRef?: RefObject<HTMLElement | null>;
    /**
     * Element to display at end of label text line.
     */
    labelSuffix?: ReactNode;
    /**
     * Hierarchical level of item. Affects the indentation. Should be provided as 0 if no indentation is wanted.
     */
    level: number;
    /**
     * Handler to call when expander is clicked. Expander is rendered when this prop is set.
     * Visibility of the expander depends on item children being defined.
     */
    onToggleItem?: (item: TItem) => void;
    /**
     * Size of the element.
     */
    size: Size.xs | Size.sm | Size.md;
    /**
     * Element to display at the end of the element, e.g. icon.
     */
    suffix?: ReactNode;
}

interface SelectOptionsEmptyStateProps extends RefAttributes<HTMLDivElement> {
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Name of decorative icon.
     */
    iconName?: IconName;
    /**
     * Text for the element.
     */
    text?: string;
    /**
     * Size of the element.
     */
    size?: Size.xs | Size.sm | Size.md;
}
declare function SelectOptionsEmptyState({ className, iconName, ref, size, text }: SelectOptionsEmptyStateProps): react_jsx_runtime.JSX.Element;

declare const enum InputChangeTriggerAction {
    Focus = "focus",
    Input = "input"
}
type SelectChangeItem<T> = {
    [K in keyof T]: K extends 'value' ? T[K] | null : K extends 'text' ? T[K] | undefined : T[K];
};
interface SelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends RefAttributes<HTMLDivElement> {
    /**
     * Whether to show creatable option when searched option is not found.
     */
    allowCreate?: boolean;
    /**
     * Label for screen readers if actual label is not provided.
     */
    ['aria-label']?: string;
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: P & SelectChangeItem<TItem>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.
     */
    disabledKeys?: Array<TItem['value']>;
    /**
     * Set of item keys whose children should be visible.
     */
    expandedKeys?: Set<TItem['value']>;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether selected value can be cleared.
     */
    isClearable?: boolean;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether field is in error state.
     */
    isInvalid?: boolean;
    /**
     * Whether loading item should be displayed among options.
     */
    isLoading?: boolean;
    /**
     * Whether popover is open.
     */
    isOpen?: boolean;
    /**
     * Display element with borderless style. isSearchable must be false for this to take effect.
     */
    isPlain?: boolean;
    /**
     * Whether element is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Whether required indicator is visible.
     */
    isRequired?: boolean;
    /**
     * Whether options are searchable or not. True by default.
     */
    isSearchable?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Custom CSS class name for item.
     */
    itemClassName?: string | ((item: TItem) => string);
    /**
     * List of items to show.
     */
    items: TItem[];
    /**
     * Label of the field.
     */
    label?: ReactNode;
    /**
     * Width for the popover.
     * If not given, width will be calculated automatically based on trigger width.
     */
    menuWidth?: CSSProperties['width'];
    /**
     * Handler that is called when bottom loader is reached.
     */
    onBottomLoaderVisible?: (entry: IntersectionObserverEntry) => void;
    /**
     * Handler that is called when focus changes.
     */
    onFocusChange?: (isFocused: boolean) => void;
    /**
     * Handler that is called when something is typed to input field. Local search will not be used if this is set.
     */
    onInputChange?: (value: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    /**
     * Handler that is called on keyboard event in menu toggler.
     * Return value indicates whether handling flow should continue.
     */
    onKeyDown?: (e: KeyboardEvent, highlightedItem?: TItem) => boolean;
    /**
     * Handler that is called when popover open state changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Handler that is called when selection changes.
     */
    onSelectionChange?: (value: TItem['value'] | null) => void;
    /**
     * Placeholder to show when there is no selected value.
     */
    placeholder?: string;
    /**
     * Whether to preserve input value on focus out of the field.
     */
    preserveInputValue?: boolean;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Whether to show search icon when isSearchable = true. Defaults to true.
     */
    showSearchIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Icon that will be rendered at the start of the field.
     */
    startIconName?: IconName;
    /**
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Custom renderer for items empty state.
     */
    renderItemsEmptyState?: (props: SelectOptionsEmptyStateProps) => ReactNode;
    /**
     * Custom renderer to display content at the start of the field.
     */
    renderStartContent?: (selectedItem: TItem | null) => ReactNode;
    /**
     * Text to show when popover is closed and isSearchable.
     */
    text?: string;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
    /**
     * Selected value/key.
     */
    value?: TItem['value'] | null;
}

declare function Select<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ isSearchable, ...props }: SelectProps<P, TItem>): react_jsx_runtime.JSX.Element;

declare const enum SpecialSelectItemKey {
    CREATABLE = "creatable"
}

declare function SelectOptionContent<TItem extends SelectItemBase<TItem>>({ bodyPrefix, bodySuffix, className, description, descriptionRef, isExpanded, isLoading, item, label, labelRef, labelSuffix, level, onToggleItem, ref, size, suffix }: SelectOptionContentProps<TItem>): react_jsx_runtime.JSX.Element;

interface InlineSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends Omit<SelectProps<P, TItem>, 'helpText' | 'showHelpTextIcon' | 'showSearchIcon'> {
}
declare function InlineSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ size, ...props }: InlineSelectProps<P, TItem>): react_jsx_runtime.JSX.Element;

interface ColorSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends SelectProps<P, TItem> {
}
declare function ColorSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>(props: ColorSelectProps<P, TItem>): react_jsx_runtime.JSX.Element;

interface ColorSwatchProps extends ColorSwatchProps$1, RefAttributes<HTMLDivElement> {
    /**
     * Size of the element.
     */
    size: Size.xs | Size.sm | Size.md;
}
declare function ColorSwatch({ className, size, ...props }: ColorSwatchProps): react_jsx_runtime.JSX.Element;

interface ColorSwatchPickerItemProps extends ColorSwatchPickerItemProps$1, RefAttributes<HTMLDivElement> {
    /**
     * Whether element is in error.
     */
    isInvalid?: boolean;
    /**
     * Size of the element.
     */
    size: ColorSwatchProps['size'];
}
declare function ColorSwatchPickerItem({ className, isInvalid, size, ...props }: ColorSwatchPickerItemProps): react_jsx_runtime.JSX.Element;

interface IColorSwatchItem {
    color: string;
    isDisabled?: boolean;
    isInvalid?: boolean;
}
interface ColorSwatchPickerProps extends Omit<ColorSwatchPickerProps$1, 'defaultValue'>, RefAttributes<HTMLDivElement> {
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * List of color items.
     */
    items: IColorSwatchItem[];
    /**
     * Size of the items.
     */
    size: ColorSwatchPickerItemProps['size'];
}

declare function ColorSwatchPicker({ className, isSkeleton, items, size, ...props }: ColorSwatchPickerProps): react_jsx_runtime.JSX.Element;

interface DatePickerProps<P extends AnyObject> extends Omit<DatePickerProps$1<DateValue$1>, 'value' | 'minValue' | 'maxValue' | 'defaultValue'>, RefAttributes<HTMLDivElement> {
    /**
     * Props for Calendar component displayed inside popover.
     */
    calendarProps?: Omit<CalendarProps, 'isDateUnavailable' | 'maxValue' | 'minValue' | 'onChange' | 'relatedValue' | 'value'>;
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string | null>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Additional help text to provide more information.
     */
    helpText?: ReactNode;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: ReactNode;
    /**
     * Whether the field is required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the element.
     */
    label?: string;
    /**
     * Maximum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    maxValue?: DateValue$1 | string;
    /**
     * Minimum date user can select. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    minValue?: DateValue$1 | string;
    /**
     * Change callback
     */
    onChange?: (date: DateValue$1 | null) => void;
    /**
     * Date related to selected value which will create a range between them.
     */
    relatedValue?: DateValue$1 | string | null;
    /**
     * Whether to show clear button when has selected date. True by default.
     */
    showClearButton?: boolean;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.xs | Size.sm | Size.md;
    /**
     * Tooltip content.
     */
    tooltipContent?: TooltipContent;
    /**
     * Selected date. Can be provided as ISO 8601 date string (YYYY-MM-DD) or DateValue object.
     */
    value?: DateValue$1 | string | null;
}
declare function DatePicker<P extends AnyObject>({ calendarProps, changeCallback, changeParams, className, dataState, helpText, helpTextSuccess, isReadOnly: propsIsReadOnly, isRequired, isSkeleton, label, maxValue, minValue, relatedValue, showClearButton, showHelpTextIcon, size, tooltipContent, value, ...props }: DatePickerProps<P>): react_jsx_runtime.JSX.Element;

interface TimePickerProps<P extends AnyObject> extends Omit<TimeFieldProps<CalendarDateTime>, 'value' | 'defaultValue' | 'minValue' | 'maxValue'>, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string | null>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Additional help text to provide more information.
     */
    helpText?: ReactNode;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: ReactNode;
    /**
     * Whether the field is required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the element.
     */
    label?: string;
    /**
     * Change callback
     */
    onChange?: (dateTime: CalendarDateTime | null) => void;
    /**
     * Date-time value related to selected value which will create a duration between them.
     */
    relatedValue?: CalendarDateTime | string | null;
    /**
     * Whether to show clear button when has selected date. True by default.
     */
    showClearButton?: boolean;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.xs | Size.sm | Size.md;
    /**
     * Tooltip content.
     */
    tooltipContent?: TooltipContent;
    /**
     * Selected time. Can be provided as ISO 8601 date-time string (YYYY-MM-DDT:HH:mm) or CalendarDateTime object.
     */
    value?: CalendarDateTime | string | null;
}
declare function TimePicker<P extends AnyObject>({ changeCallback, changeParams, className, dataState, helpText, helpTextSuccess, isReadOnly: propsIsReadOnly, isSkeleton, label, ref, relatedValue, showClearButton, showHelpTextIcon, size, tooltipContent, value, ...props }: TimePickerProps<P>): react_jsx_runtime.JSX.Element;

declare const enum DateTimeFieldType {
    EndDate = 0,
    EndTime = 1,
    StartDate = 2,
    StartTime = 3
}
interface DateField<P extends AnyObject> extends DatePickerProps<P> {
    type: DateTimeFieldType.StartDate | DateTimeFieldType.EndDate;
}
interface TimeField<P extends AnyObject> extends TimePickerProps<P> {
    type: DateTimeFieldType.StartTime | DateTimeFieldType.EndTime;
}
type DateTimeField<P extends AnyObject> = DateField<P> | TimeField<P>;
interface DateTimeRangeFieldsProps<P extends AnyObject> extends RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, RangeValue<string | null> | null>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * CSS class for the element.
     */
    className?: string;
    /**
     * Fields to render. Fields will rendered on 2 rows, 2 items per row in given order.
     */
    fields: Array<DateTimeField<P>>;
    /**
     * Selected value change callback.
     */
    onChange?: (value: RangeValue<CalendarDateTime | null> | null) => void;
    /**
     * Size of the fields.
     */
    size?: Size.xs | Size.sm | Size.md;
    /**
     * Current range containing start and end.
     * Can be provided as ISO 8601 date-time strings without timezone (YYYY-MM-DDT:HH:mm) or CalendarDateTime objects.
     */
    value?: RangeValue<CalendarDateTime | string | null> | null;
}
declare function DateTimeRangeFields<P extends AnyObject>({ className, changeCallback, changeParams, fields, ref, size, value, ...props }: DateTimeRangeFieldsProps<P>): react_jsx_runtime.JSX.Element;

type FileTriggerProps = FileTriggerProps$1;
declare const FileTrigger: any;

interface FileUploadAreaProps extends Omit<DropZoneProps, 'getDropOperation' | 'onDrop'>, RefAttributes<HTMLDivElement> {
    /**
     * Specifies what mime type of files are allowed.
     */
    acceptedFileTypes?: FileTriggerProps['acceptedFileTypes'];
    /**
     * Whether multiple files can be selected.
     */
    allowsMultiple?: FileTriggerProps['allowsMultiple'];
    /**
     * Description text.
     */
    descriptionText: string;
    /**
     * Descriptive icon.
     */
    helpTextProps?: HelpTextProps;
    /**
     * Descriptive icon.
     */
    iconName: IconName;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Main text
     */
    mainText: string;
    /**
     * Handler that is called when a valid drag is dropped on the drop target.
     */
    onDrop?: (files: File[]) => void;
    /**
     * Handler when a user selects a file.
     */
    onSelect?: (files: File[]) => void;
}
declare function FileUploadArea({ acceptedFileTypes, allowsMultiple, className, descriptionText, helpTextProps, iconName, isSkeleton, mainText, onSelect, ref, ...props }: FileUploadAreaProps): react_jsx_runtime.JSX.Element;

declare const enum FilterBarStyle {
    Card = "card",
    Plain = "plain"
}
interface FilterBarProps extends RefAttributes<HTMLDivElement> {
    /**
     * Number of active, visible and non-visible, filters.
     */
    activeFiltersCount?: number;
    /**
     * Visible filters to render.
     */
    children?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of active non-visible filters.
     */
    nonVisibleActiveFiltersCount?: number;
    /**
     * Callback for the "Clear all" action.
     */
    onClearAll?: () => void;
    /**
     * Callback for the "Filters" action.
     */
    onPressFilters?: () => void;
    /**
     * Display style for the element.
     */
    style?: FilterBarStyle;
}
declare function FilterBar({ activeFiltersCount, className, children, nonVisibleActiveFiltersCount, onClearAll, onPressFilters, ref, style }: FilterBarProps): react_jsx_runtime.JSX.Element;

type FilterMultiSelectSize = Size.md | Size.sm | Size.xs;
interface FilterMultiSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: P & {
        value: TItem[];
    }) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.
     */
    disabledKeys?: Array<TItem['value']>;
    /**
     * Set of item keys whose children should be visible.
     */
    expandedKeys?: Set<TItem['value']>;
    /**
     * Help text
     */
    helpText?: string;
    /**
     * Whether selected value can be cleared. True by default.
     */
    isClearable?: boolean;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether loading item should be displayed among options.
     */
    isLoading?: boolean;
    /**
     * Whether menu can be opened for selection.
     */
    isSelectable?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Custom CSS class name for item.
     */
    itemClassName?: string | ((item: TItem) => string);
    /**
     * List of items to show.
     */
    items: TItem[];
    /**
     * Label for the element.
     */
    label: string;
    /**
     * Width for the menu.
     */
    menuWidth?: CSSProperties['width'];
    /**
     * Handler that is called when bottom loader is reached.
     */
    onBottomLoaderVisible?: (entry: IntersectionObserverEntry) => void;
    /**
     * Handler that is called when something is typed to input field. Local search will not be used if this is set.
     */
    onInputChange?: (value: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    /**
     * Handler that is called when menu open status changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Placeholder to show in search field.
     */
    searchPlaceholder?: string;
    /**
     * List of selected items.
     */
    selectedItems?: TItem[];
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: FilterMultiSelectSize;
    /**
     * Icon that will be rendered at the start of toggle button.
     */
    startIconName?: IconName;
}
declare function FilterMultiSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ changeCallback, changeParams, className, disabledKeys, expandedKeys, helpText, isClearable, isDisabled, isLoading, isSelectable, isSkeleton, itemClassName, items, label, menuWidth, onBottomLoaderVisible, onInputChange: propsOnInputChange, onOpenChange: propsOnOpenChange, ref, renderItemContent, searchPlaceholder, selectedItems: propsSelectedItems, showHelpTextIcon, size, startIconName }: FilterMultiSelectProps<P, TItem>): react_jsx_runtime.JSX.Element;

interface FilterButtonProps extends RefAttributes<HTMLDivElement> {
    /**
     * Label for the element.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Props for clear button.
     */
    clearButtonProps?: ClearButtonProps & RefAttributes<HTMLButtonElement>;
    /**
     * Help text
     */
    helpText?: string;
    /**
     * Whether element is active, i.e. it's filtering something.
     */
    isActive?: boolean;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether element is focusable.
     */
    isFocusable?: boolean;
    /**
     * Whether related popover element is open.
     */
    isOpen?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Hidden label for the element.
     */
    label: string;
    /**
     * Props for hidden label.
     */
    labelProps?: Partial<LabelProps>;
    /**
     * Callback for open state change.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Whether to show clear button when isActive = true.
     */
    showClearButton?: boolean;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Icon that will be rendered at the start of toggle button.
     */
    startIconName?: IconName;
    /**
     * Props for toggle button.
     */
    toggleButtonProps?: ButtonProps$1 & RefAttributes<HTMLButtonElement>;
}
declare function FilterButton({ children, className, clearButtonProps, helpText, isActive, isDisabled, isFocusable, isOpen, isSkeleton, label, labelProps, onOpenChange, ref, showClearButton, showHelpTextIcon, size, startIconName, toggleButtonProps }: FilterButtonProps): react_jsx_runtime.JSX.Element;

interface FilterSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: P & SelectChangeItem<TItem>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.
     */
    disabledKeys?: Array<TItem['value']>;
    /**
     * Set of item keys whose children should be visible.
     */
    expandedKeys?: Set<TItem['value']>;
    /**
     * Help text
     */
    helpText?: string;
    /**
     * Whether selected value can be cleared. True by default.
     */
    isClearable?: boolean;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether loading item should be displayed among options.
     */
    isLoading?: boolean;
    /**
     * Whether menu can be opened for selection.
     */
    isSelectable?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Custom CSS class name for item.
     */
    itemClassName?: string | ((item: TItem) => string);
    /**
     * List of items to show.
     */
    items: TItem[];
    /**
     * Label for the element.
     */
    label: string;
    /**
     * Width for the menu.
     */
    menuWidth?: CSSProperties['width'];
    /**
     * Handler that is called when bottom loader is reached.
     */
    onBottomLoaderVisible?: (entry: IntersectionObserverEntry) => void;
    /**
     * Handler that is called when something is typed to input field. Local search will not be used if this is set.
     */
    onInputChange?: (value: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    /**
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Placeholder to show in search field.
     */
    searchPlaceholder?: string;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Icon that will be rendered at the start of toggle button.
     */
    startIconName?: IconName;
    /**
     * Text to show when popover is closed and isSearchable.
     */
    text?: string;
    /**
     * Selected value/key.
     */
    value?: TItem['value'] | null;
}
declare function FilterSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ changeCallback, changeParams, className, disabledKeys, expandedKeys, helpText, isClearable, isDisabled, isLoading, isSelectable, isSkeleton, itemClassName, items, label, menuWidth, onBottomLoaderVisible, onInputChange: propsOnInputChange, ref, renderItemContent, searchPlaceholder, showHelpTextIcon, size, startIconName, text, value }: FilterSelectProps<P, TItem>): react_jsx_runtime.JSX.Element;

declare const enum SelectedItemStyle {
    tag = "tag",
    text = "text"
}

interface CreateOptions<T> {
    /**
     * Handler to get text node for creatable item.
     * Default text will be used if not provided.
     */
    getTextNode?: (text: string) => ReactNode;
    /**
     * Whether creatable item is visible when search text is not found from existing items or selectedItems.
     */
    isAllowed: boolean | ((text: string) => boolean);
    /**
     * Handler to call when creatable item is selected.
     */
    onCreate?: (item: T) => void;
}
interface MultiSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends RefAttributes<HTMLDivElement> {
    /**
     * Label for screen readers if actual label is not provided.
     */
    ['aria-label']?: string;
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: P & {
        value: TItem[];
    }) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * The CSS className for the element.
     */
    className?: string;
    /**
     * Options for item creation.
     */
    createOptions?: CreateOptions<TItem>;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.
     */
    disabledKeys?: Array<TItem['value']>;
    /**
     * Set of item keys whose children should be visible.
     */
    expandedKeys?: Set<TItem['value']>;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether loading item should be displayed among options.
     */
    isLoading?: boolean;
    /**
     * Whether required indicator is visible.
     */
    isRequired?: boolean;
    /**
     * Whether element is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Custom CSS class name for item.
     */
    itemClassName?: string | ((item: TItem) => string);
    /**
     * List of items to show.
     */
    items: TItem[];
    /**
     * Label for the element.
     */
    label?: ReactNode;
    /**
     * Width for the menu.
     */
    menuWidth?: CSSProperties['width'];
    /**
     * Handler that is called when bottom loader is reached.
     */
    onBottomLoaderVisible?: (entry: IntersectionObserverEntry) => void;
    /**
     * Handler that is called when something is typed to input field. Local search will not be used if this is set.
     */
    onInputChange?: (value: string, inputChangeTrigger: InputChangeTriggerAction) => void;
    /**
     * Handler that is called on keyboard event in menu toggler.
     */
    onKeyDown?: (e: KeyboardEvent, highlightedItem?: TItem) => boolean;
    /**
     * Handler that is called when menu open status changes.
     */
    onOpenChange?: (isOpen: boolean) => void;
    /**
     * Placeholder for input field when there are no selected items and element does not have focus.
     */
    placeholder?: string;
    /**
     * Custom renderer for item content.
     */
    renderItemContent?: (props: SelectOptionContentProps<TItem>) => ReactNode;
    /**
     * Selected items can be display with tag or text style. If not given, text style is the default.
     */
    selectedItemStyle?: SelectedItemStyle;
    /**
     * List of selected items.
     */
    selectedItems?: TItem[];
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.md | Size.sm | Size.xs;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
declare function MultiSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ changeCallback, changeParams, className, createOptions, dataState, disabledKeys, expandedKeys, helpText, isLoading, isRequired, isSkeleton, itemClassName, items, label, menuWidth, onBottomLoaderVisible, onOpenChange, ref, renderItemContent, selectedItemStyle, showHelpTextIcon, size, tooltipContent, ...props }: MultiSelectProps<P, TItem>): react_jsx_runtime.JSX.Element;

interface PhoneNumberFieldProps extends RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback: (args: {
        [key: string]: any;
        value: string;
    }) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: {
        [key: string]: unknown;
    };
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Array of favorite country codes in ISO CODE2 format.
     */
    favoriteCountryCodes?: string[];
    /**
     * Whether the field is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether the field is read only.
     */
    isReadOnly?: boolean;
    /**
     * Whether the field is required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the phone number TextField.
     */
    label: string;
    /**
     * Placeholder text when there's no value.
     */
    placeholder?: string;
    /**
     * Label of the prefix Select.
     */
    prefixLabel: string;
    /**
     * Value of the phone number containing prefix (country calling code) and phone number.
     */
    value?: string;
}
declare function PhoneNumberField({ changeCallback, changeParams, dataState, favoriteCountryCodes, isDisabled, isReadOnly, isRequired, isSkeleton, label, prefixLabel, ref, value }: PhoneNumberFieldProps): react_jsx_runtime.JSX.Element;

interface RadioCommonProps extends RadioProps$1, RefAttributes<HTMLLabelElement> {
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Whether label should be placed to start or end.
     */
    labelPlacement?: LabelPlacement;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
}
interface RadioPropsAriaLabelRequired extends RadioCommonProps {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label': string;
    /**
     * label don't have be given, use aria-label then.
     */
    label?: ReactNode;
}
interface RadioPropsLabelRequired extends RadioCommonProps {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label'?: string;
    /**
     * Main label for the element.
     */
    label: ReactNode;
}
type RadioProps = RadioPropsAriaLabelRequired | RadioPropsLabelRequired;
declare function Radio({ className, helpText, isSkeleton, label, labelPlacement, size, ...props }: RadioProps): react_jsx_runtime.JSX.Element;

interface RadioGroupProps<P extends AnyObject> extends RadioGroupProps$1, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    children: Array<ReactElement<RadioProps>>;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Help text to provide more information.
     */
    helpText?: ReactNode;
    /**
     * Help text to show in success style.
     */
    helpTextSuccess?: ReactNode;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label for the element.
     */
    label: ReactNode;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
declare function RadioGroup<P extends AnyObject>({ changeCallback, changeParams, children, className, dataState, helpText, helpTextSuccess, isDisabled, isInvalid, isRequired, isSkeleton, label, onChange, showHelpTextIcon, size, tooltipContent, ...props }: RadioGroupProps<P>): react_jsx_runtime.JSX.Element;

interface VariableItem {
    id: string;
    label: string;
}
interface RichTextEditorToolbarConfig {
    bold?: boolean;
    bulletList?: boolean;
    heading?: boolean;
    italic?: boolean;
    link?: boolean;
    orderedList?: boolean;
    underline?: boolean;
    variables?: VariableItem[];
}
declare const DEFAULT_TOOLBAR_CONFIG: RichTextEditorToolbarConfig;

interface VariableToHtmlOptions {
    regExp: RegExp;
    getItem: (match: string) => VariableItem;
}
interface VariableToTextOptions {
    getText: (variableItem: VariableItem) => string;
}
interface RichTextEditorProps<P extends AnyObject> extends RefAttributes<HTMLDivElement> {
    /**
     * Aria-label for the field.
     */
    ['aria-label']?: string;
    /**
     * Handler that is called on blur with current content.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Whether element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether element is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Whether element is in error.
     */
    isInvalid?: boolean;
    /**
     * Whether value is required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: string;
    /**
     * Label for the field.
     */
    label?: string;
    /**
     * Placeholder text.
     */
    placeholder?: string;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Customize which actions are available in the toolbar.
     */
    toolbarConfig?: RichTextEditorToolbarConfig;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
    /**
     * Text editor content. Can be provided as HTML-string or plain text string.
     */
    value?: string;
    /**
     * Options for converting text variables to HTML.
     */
    variableToHtmlOptions?: VariableToHtmlOptions;
    /**
     * Options for converting HTML variables to text.
     */
    variableToTextOptions?: VariableToTextOptions;
}
declare function RichTextEditor<P extends AnyObject>({ changeCallback, changeParams, className, dataState, helpText, helpTextSuccess, isDisabled, isInvalid, isRequired, isSkeleton, label, placeholder, ref, showHelpTextIcon, tooltipContent, value, variableToHtmlOptions, variableToTextOptions, ...props }: RichTextEditorProps<P>): react_jsx_runtime.JSX.Element;

interface SearchFieldProps extends SearchFieldProps$1, RefAttributes<HTMLDivElement> {
    'aria-label': string;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Placeholder to show when there is no text.
     */
    placeholder?: string;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the TextField, two different sizes are available.
     */
    size?: Size.xs | Size.sm | Size.md;
}
declare function SearchField({ className, helpText, isSkeleton, placeholder, showHelpTextIcon, size, ...props }: SearchFieldProps): react_jsx_runtime.JSX.Element;

declare const enum SliderValueDisplayMode {
    Label = "label",
    TextField = "text-field",
    Tooltip = "tooltip"
}

interface SliderProps<P extends AnyObject> extends Omit<SliderProps$1, 'defaultValue' | 'orientation'>, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, number | [number, number]>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Additional class names to be applied to the Slider
     */
    className?: string;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether the element is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the element.
     */
    label?: string;
    /**
     * Position of the label.
     */
    labelPosition?: Position.Top | Position.Left;
    /**
     * Maximum value of the slider.
     */
    maxValue?: number;
    /**
     * Minimum distance between two thumbs.
     */
    minDistance?: number;
    /**
     * Minimum value of the slider.
     */
    minValue?: number;
    /**
     * Whether to show the progress fill of the slider. Fill is visible on default.
     */
    showFill?: boolean;
    /**
     * Whether to show the help text icon.
     */
    showHelpTextIcon?: boolean;
    /**
     * Aria labels for the text fields.
     */
    textFieldAriaLabels?: string[];
    /**
     * Position of the tooltip.
     */
    tooltipPosition?: Position;
    /**
     * Value of the slider.
     */
    value: number | [number, number];
    /**
     * Value display mode.
     */
    valueDisplayMode?: SliderValueDisplayMode;
    /**
     * Width of the value text field.
     */
    valueTextFieldWidth?: CSSProperties['width'];
}
declare function Slider<P extends AnyObject>({ changeCallback, changeParams, className, helpText, isDisabled, isSkeleton, label, labelPosition, maxValue, minDistance, minValue, onChange, showFill, showHelpTextIcon, textFieldAriaLabels, tooltipPosition, value, valueDisplayMode, valueTextFieldWidth, ...props }: SliderProps<P>): react_jsx_runtime.JSX.Element;

interface TextAreaProps<P extends AnyObject> extends TextFieldProps$1, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Unique id that can be used for unit testing.
     */
    dataTestId?: string;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: string;
    /**
     * Whether current input value is controlled from the outside.
     */
    isControlled?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the TextField
     */
    label: string;
    /**
     * Minimum height for the textarea. Defaults to value which will show 5 visible lines.
     */
    minHeight?: CSSProperties['minHeight'];
    /**
     * Placeholder text when there's no value
     */
    placeholder?: string;
    /**
     * The number of visible lines. Defaults to 2.
     * Can be used as minHeight alternative or together with minHeight to fine-tune the initial height behavior.
     */
    rows?: number;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
declare function TextArea<P extends AnyObject>({ className, changeParams, changeCallback, dataState, dataTestId, helpText, helpTextSuccess, isControlled, isInvalid, isSkeleton, label, minHeight, onChange, onBlur, placeholder, rows, showHelpTextIcon, tooltipContent, value, ...props }: TextAreaProps<P>): react_jsx_runtime.JSX.Element;

type TextFieldSizes = Size.xs | Size.sm | Size.md;
interface PartContentProps {
    inputRef: RefObject<HTMLInputElement | null>;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    size: TextFieldSizes;
}
type PartContent = string | ((props: PartContentProps) => ReactNode);
interface TextFieldProps<P extends AnyObject> extends Omit<TextFieldProps$1, 'validate'>, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Unique id that can be used for unit testing.
     */
    dataTestId?: string;
    /**
     * Icon that will be rendered at the end of the Input block of TextField
     */
    endIconName?: IconName;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Additional help text to provide more information on successful action.
     */
    helpTextSuccess?: string;
    /**
     * Input size attribute.
     */
    inputSize?: number;
    /**
     * Whether current input value is controlled from the outside.
     */
    isControlled?: boolean;
    /**
     * Whether element has borderless style.
     */
    isPlain?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Label of the TextField
     */
    label?: string;
    /**
     * Placeholder text when there's no value
     */
    placeholder?: string;
    /**
     * Prefix text or element to be rendered at the start of the input element.
     */
    prefix?: PartContent;
    /**
     * Maximum value for input.
     */
    maxValue?: InputProps['max'];
    /**
     * Minimum value for input.
     */
    minValue?: InputProps['min'];
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the TextField, two different sizes are available.
     */
    size?: TextFieldSizes;
    /**
     * Icon that will be rendered at the start of the Input block of TextField
     */
    startIconName?: IconName;
    /**
     * Suffix text or element to be rendered at the end of the input element.
     */
    suffix?: PartContent;
    /**
     * Alignment of the input text.
     */
    textAlign?: Alignment.start | Alignment.end | Alignment.center;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
declare function TextField<P extends AnyObject>({ className, changeParams, changeCallback, dataState, dataTestId, endIconName, helpText, helpTextSuccess, inputSize, isControlled, isInvalid, isPlain, isSkeleton, label, maxValue, minValue, onBlur, onChange, placeholder, prefix, showHelpTextIcon, size, startIconName, suffix, textAlign, tooltipContent, value, ...props }: TextFieldProps<P>): react_jsx_runtime.JSX.Element;

interface PasswordFieldProps<P extends AnyObject> extends TextFieldProps<P> {
    showVisibilityToggle?: boolean;
}
declare function PasswordField<P extends AnyObject>({ showVisibilityToggle, ...props }: PasswordFieldProps<P>): react_jsx_runtime.JSX.Element;

interface TextFieldCopyProps extends RefAttributes<HTMLDivElement> {
    inputRef?: RefObject<HTMLInputElement | null>;
    prefix?: string;
    suffix?: string;
}
declare function TextFieldCopy({ inputRef, prefix, ref, suffix }: TextFieldCopyProps): react_jsx_runtime.JSX.Element;

interface TextFieldSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends SelectProps<P, TItem> {
}
declare function TextFieldSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>(props: TextFieldSelectProps<P, TItem>): react_jsx_runtime.JSX.Element;

interface TextFieldUnitProps extends RefAttributes<HTMLSpanElement> {
    children: ReactNode;
    id?: string;
    size?: Size.md | Size.lg;
}
declare function TextFieldUnit({ children, id, ref, size }: TextFieldUnitProps): react_jsx_runtime.JSX.Element;

interface TextFieldVisibilityToggleProps extends RefAttributes<HTMLDivElement> {
    isVisible: boolean;
    onPress: () => void;
}
declare function TextFieldVisibilityToggle({ isVisible, onPress, ref: outerRef }: TextFieldVisibilityToggleProps): react_jsx_runtime.JSX.Element;

interface InlineTextFieldProps<P extends AnyObject> extends Omit<TextFieldProps<P>, 'helpText' | 'helpTextSuccess' | 'showHelpTextIcon'> {
    /**
     * Function that is called when input value changes. Should return error message if given value is invalid.
     * Message will be shown in tooltip when field has focus.
     */
    validate?: (value: string) => string | null | undefined;
}
declare function InlineTextField<P extends AnyObject>({ dataState, ref: outerRef, size, validate, value, ...props }: InlineTextFieldProps<P>): react_jsx_runtime.JSX.Element;

interface ToggleButtonItem {
    isDisabled?: boolean;
    text: string;
    value: string;
}
interface ToggleButtonProps<P extends AnyObject> extends Omit<RadioGroupProps$1, 'children'>, RefAttributes<HTMLDivElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, string>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Help text to provide more information.
     */
    helpText?: ReactNode;
    /**
     * Help text to show in success style.
     */
    helpTextSuccess?: ReactNode;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Selectable items.
     */
    items: ToggleButtonItem[];
    /**
     * Label for the element.
     */
    label: ReactNode;
    /**
     * Whether to show icon for help text.
     */
    showHelpTextIcon?: boolean;
    /**
     * Size of the element.
     */
    size?: Size.xs | Size.sm | Size.md;
    /**
     * Label tooltip content.
     */
    tooltipContent?: TooltipContent;
}
declare function ToggleButton<P extends AnyObject>({ changeCallback, changeParams, className, dataState, helpText, helpTextSuccess, isDisabled, isInvalid, isRequired, isSkeleton, items, label, onChange, showHelpTextIcon, size, tooltipContent, ...props }: ToggleButtonProps<P>): react_jsx_runtime.JSX.Element;

interface ToggleSwitchCommonProps<P extends AnyObject> extends SwitchProps, RefAttributes<HTMLLabelElement> {
    /**
     * Handler that is called with object containing selection state value and changeParams when the element's
     * selection state changes.
     */
    changeCallback?: (args: ChangeArgs<P, boolean>) => void;
    /**
     * Object which is provided with element's selection state value property in changeCallback.
     */
    changeParams?: P;
    /**
     * Map that contains model property states associated with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Unique id that can be used for unit testing.
     */
    dataTestId?: string;
    /**
     * Additional help text to provide more information.
     */
    helpText?: string;
    /**
     * Whether ToggleSwitch is in error state.
     */
    isInvalid?: boolean;
    /**
     * Whether ToggleSwitch is in required.
     */
    isRequired?: boolean;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Whether label should be placed to start or end.
     */
    labelPlacement?: LabelPlacement;
    /**
     * Size of the element.
     */
    size?: Size.sm | Size.md;
}
interface ToggleSwitchPropsAriaLabelRequired<P extends AnyObject> extends ToggleSwitchCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label': string;
    /**
     * label don't have be given, use aria-label then.
     */
    label: undefined;
}
interface ToggleSwitchPropsLabelRequired<P extends AnyObject> extends ToggleSwitchCommonProps<P> {
    /**
     * aria-label for the element, required only if label is not given.
     */
    'aria-label'?: string;
    /**
     * Main label for the element.
     */
    label: ReactNode;
}
type ToggleSwitchProps<P extends AnyObject> = ToggleSwitchPropsAriaLabelRequired<P> | ToggleSwitchPropsLabelRequired<P>;
declare function ToggleSwitch<P extends AnyObject>({ changeCallback, changeParams, className, dataState, dataTestId, helpText, isDisabled, isInvalid, isRequired, isSelected, isSkeleton, label, labelPlacement, onChange, size, ...props }: ToggleSwitchProps<P>): react_jsx_runtime.JSX.Element;

interface TreeMultiSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends MultiSelectProps<P, TItem> {
    /**
     * Set of item keys to expand by default.
     */
    defaultExpandedKeys?: Set<TItem['value']>;
    /**
     * Handler that is called when item is expanded/collapsed.
     */
    onExpandedChange?: (expandedKeys: Set<TItem['value']>) => void;
    /**
     * Handler that is called when item is expanded, and it has empty children.
     */
    onLoadChildren?: (item: TItem) => Promise<void>;
}
declare function TreeMultiSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ defaultExpandedKeys, onExpandedChange, onLoadChildren, renderItemContent: propsRenderItemContent, ...props }: TreeMultiSelectProps<P, TItem>): react_jsx_runtime.JSX.Element;

interface TreeSelectProps<P extends AnyObject, TItem extends SelectItemBase<TItem>> extends SelectProps<P, TItem> {
    /**
     * Set of item keys to expand by default.
     */
    defaultExpandedKeys?: Set<TItem['value']>;
    /**
     * Handler that is called when item is expanded/collapsed.
     */
    onExpandedChange?: (expandedKeys: Set<TItem['value']>) => void;
    /**
     * Handler that is called when item is expanded, and it has empty children.
     */
    onLoadChildren?: (item: TItem) => Promise<void>;
}
declare function TreeSelect<P extends AnyObject, TItem extends SelectItemBase<TItem>>({ defaultExpandedKeys, onExpandedChange, onLoadChildren, renderItemContent: propsRenderItemContent, ...props }: TreeSelectProps<P, TItem>): react_jsx_runtime.JSX.Element;

declare const enum UploadItemStyle {
    Card = "card",
    Plain = "plain"
}
interface UploadItemProps extends RefAttributes<HTMLDivElement> {
    /**
     * Element or renderer for displaying actions.
     */
    actions?: ReactNode | ((props: UploadItemProps) => ReactNode);
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Map that contains model property states with messages.
     */
    dataState?: Map<TDataState, string> | null;
    /**
     * Description text.
     */
    description: ReactNode;
    /**
     * Error text.
     */
    errorMessage?: string;
    /**
     * Descriptive icon.
     */
    iconName: IconName;
    /**
     * Whether item is disabled.
     */
    isDisabled?: boolean;
    /**
     * Whether item is invalid.
     */
    isInvalid?: boolean;
    /**
     * Whether item is read-only.
     */
    isReadOnly?: boolean;
    /**
     * Name of the item.
     */
    name: ReactNode;
    /**
     * Press handler for the name.
     */
    onNamePress?: (e: PressEvent) => void;
    /**
     * Item display style.
     */
    style: UploadItemStyle;
    /**
     * Tooltip text for the name.
     */
    tooltipText?: string;
    /**
     * Value between 0-100 to display progress bar.
     */
    uploadProgress?: number;
}
declare function UploadItem(props: UploadItemProps): react_jsx_runtime.JSX.Element;

interface DataTableCheckboxHeaderProps<TData, TValue, T extends AnyObject> extends HeaderContext<TData, TValue>, CheckboxCommonProps<T> {
    label?: ReactNode;
}
declare function DataTableCheckboxHeader<TData, TValue, T extends AnyObject>({ table, ...props }: DataTableCheckboxHeaderProps<TData, TValue, T>): react_jsx_runtime.JSX.Element;

interface DataTableCheckboxCellProps<TData, TValue, P extends AnyObject> extends CellContext<TData, TValue>, CheckboxCommonProps<P> {
    label?: ReactNode;
}
declare function DataTableCheckboxCell<TData, TValue, P extends AnyObject>({ row, table, ...props }: DataTableCheckboxCellProps<TData, TValue, P>): react_jsx_runtime.JSX.Element;

interface DataTableTextCellProps<TData> extends CellContext<TData, any>, RefAttributes<HTMLSpanElement> {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare function DataTableTextCell<TData>({ children, className, getValue, ref, style, table, row }: DataTableTextCellProps<TData>): react_jsx_runtime.JSX.Element;

interface DataTableTextFieldCellProps<TData, TValue, P extends AnyObject> extends CellContext<TData, TValue>, InlineTextFieldProps<P> {
}
declare function DataTableTextFieldCell<TData, TValue extends string | number, P extends AnyObject>({ column, getValue, row, table, ...props }: DataTableTextFieldCellProps<TData, TValue, P>): react_jsx_runtime.JSX.Element;

interface DataTableExpanderCellProps<TData, TValue> extends CellContext<TData, TValue>, RefAttributes<HTMLDivElement> {
    prefix?: ReactNode;
    suffix?: ReactNode;
    useIndentation?: boolean;
}
declare function DataTableExpanderCell<TData, TValue>({ prefix, ref, row, suffix, table, useIndentation }: DataTableExpanderCellProps<TData, TValue>): react_jsx_runtime.JSX.Element;

interface DataTableDragHandleCellProps<TData, TValue> extends CellContext<TData, TValue>, RefAttributes<HTMLButtonElement> {
}
declare function DataTableDragHandleCell<TData, TValue>({ ref, row }: DataTableDragHandleCellProps<TData, TValue>): react_jsx_runtime.JSX.Element;

declare const enum DataTableDisplayColumnID {
    Checkbox = "checkbox",
    DragHandle = "drag-handle"
}

interface DataTableSelectCellProps<TData, TValue, P extends AnyObject, TItem extends SelectItemBase<TItem>> extends CellContext<TData, TValue>, InlineSelectProps<P, TItem> {
}
declare function DataTableSelectCell<TData, TValue, P extends AnyObject, TItem extends SelectItemBase<TItem>>({ column, row, table, ...props }: DataTableSelectCellProps<TData, TValue, P, TItem>): react_jsx_runtime.JSX.Element;

interface DataTableToolbarProps extends RefAttributes<HTMLDivElement> {
    /**
     * Action buttons for selected items.
     */
    actions?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Number of selected rows/items.
     */
    selectedCount: number;
    /**
     * Minimum width reserved for the "<selectedCount> selected" text.
     */
    selectedTextMinWidth?: CSSProperties['minWidth'];
}
declare function DataTableToolbar({ actions, className, ref, selectedCount, selectedTextMinWidth }: DataTableToolbarProps): react_jsx_runtime.JSX.Element;

type OmitIndexSignature<T> = {
    [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
};
type PartialWithRequired<T, K extends keyof T> = Partial<T> & Pick<T, K>;

type TActionButton = typeof Button | typeof IconButton;
interface DataTableActionButtonCellProps<TData, TValue, TButton extends TActionButton> extends CellContext<TData, TValue>, RefAttributes<HTMLDivElement> {
    buttonComponent?: TButton;
    buttonProps: TButton extends typeof IconButton ? PartialWithRequired<IconButtonProps, 'aria-label' | 'iconName'> : PartialWithRequired<ButtonProps, 'children'>;
    children?: ReactNode;
    className?: string;
    stopChildrenClickPropagation?: boolean;
    tooltipProps?: PartialWithRequired<TooltipProps, 'children'>;
}
declare function DataTableActionButtonCell<TData, TValue, TButton extends TActionButton>({ buttonComponent: ActionButton, buttonProps, children, className, ref, stopChildrenClickPropagation, tooltipProps }: DataTableActionButtonCellProps<TData, TValue, TButton>): react_jsx_runtime.JSX.Element;

declare const enum EmptyStateLayoutVariant {
    Centered = "centered",
    LeftAligned = "left-aligned",
    SideBySide = "side-by-side"
}
interface EmptyStateProps extends RefAttributes<HTMLDivElement> {
    /**
     * Body text.
     */
    bodyText: string;
    /**
     * Props for the button.
     */
    buttonProps?: ButtonProps;
    /**
     * Additional class name to be applied to the EmptyState component.
     */
    className?: string;
    /**
     * Descriptive icon.
     */
    iconName?: IconName;
    /**
     * Size of the icon. Defaults to IconSize.XXL.
     */
    iconSize?: IconSize;
    /**
     * Layout of the EmptyState component. Defaults to EmptyStateLayoutVariant.SideBySide.
     */
    layout?: EmptyStateLayoutVariant;
    /**
     * Title text.
     */
    title: string;
}
declare function EmptyState({ bodyText, buttonProps, className, iconName, iconSize, layout, ref, title }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface KanbanCardData {
}
interface KanbanColumnData<TCardData extends KanbanCardData, TMenuItem extends MenuItem> {
    /**
     * Array of kanban cards.
     */
    cards: TCardData[];
    /**
     * Column description.
     */
    description?: string;
    /**
     * Whether there are more cards to show which are not currently included in cards array.
     */
    hasMoreCards?: boolean;
    /**
     * Unique identifier.
     */
    id: string;
    /**
     * Props for header actions menu.
     */
    menuProps?: Omit<MenuProps<TMenuItem>, 'children' | 'onAction' | 'onSelectionChange'>;
    /**
     * Column title.
     */
    title: string;
    /**
     * Column total options.
     */
    total?: {
        tooltipContent?: ReactNode;
        value: string | number;
    };
}
declare const enum KanbanColumnHeightMode {
    Auto = "auto",
    Full = "full"
}

interface KanbanCardRenderProps<TCardData extends KanbanCardData> {
    columnId: string;
    data: TCardData;
    isOverlay?: boolean;
}
interface KanbanColumnProps<TCardData extends KanbanCardData, TMenuItem extends MenuItem> extends RefAttributes<HTMLDivElement> {
    addCardOptions?: {
        label: string;
        onAdd?: ({ columnId }: {
            columnId: string;
        }) => void;
    };
    data: KanbanColumnData<TCardData, TMenuItem>;
    isDraggable?: boolean;
    isCollapsed: boolean;
    isOverlay?: boolean;
    onCollapsedChange?: (args: {
        id: string;
        isCollapsed: boolean;
    }) => void;
    onMenuAction?: ({ actionKey, columnId }: {
        actionKey: Key;
        columnId: string;
    }) => void;
    onMenuSelectionChange?: ({ columnId, selectedKeys }: {
        columnId: string;
        selectedKeys: Selection;
    }) => void;
    onShowMoreCards?: (column: KanbanColumnData<TCardData, TMenuItem>) => Promise<void>;
    renderCard: (props: KanbanCardRenderProps<TCardData>) => ReactNode;
    width?: string | number;
}

interface KanbanProps<TCardData extends KanbanCardData, TMenuItem extends MenuItem> extends RefAttributes<HTMLDivElement> {
    /**
     * Display "Add card" button in the footer of each column with given label and press callback.
     */
    addCardOptions?: KanbanColumnProps<TCardData, TMenuItem>['addCardOptions'];
    /**
     * Display "Add column" button after the columns with given label and press callback.
     * If showIconOnly = true, will be displayed as icon button with given label as aria label.
     */
    addColumnOptions?: {
        label: string;
        onAdd?: () => void;
        showIconOnly?: boolean;
    };
    /**
     * Aria label for the element.
     */
    ['aria-label']?: string;
    /**
     * Accessor to get the name for card. Required for drag and drop a11y announcements.
     * Can be either property name or method which returns the property name for given item.
     */
    cardNameAccessor: string | ((card: TCardData) => string);
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Identifiers of collapsed columns.
     */
    collapsedColumnKeys?: Set<string>;
    /**
     * Determines how column height behaves.
     * Full (default) = columns take full height of the board.
     * Auto = columns take height of their content.
     */
    columnHeightMode?: KanbanColumnHeightMode;
    /**
     * Fixed width for columns. Should be between column min-width (240px) and max-width (550px).
     * If not given, columns fill the available space within their min and max width.
     */
    columnWidth?: string | number;
    /**
     * Data for the kanban.
     */
    data: Array<KanbanColumnData<TCardData, TMenuItem>>;
    /**
     * Whether columns can be drag and dropped.
     */
    enableColumnReordering?: boolean;
    /**
     * Height of the kanban board.
     */
    height?: CSSProperties['height'];
    /**
     * Handler that is called when on card drag end.
     */
    onCardDragEnd?: (params: {
        cardId: string;
        oldColumnId: string;
        oldColumnIndex: number;
        newColumnId: string;
        newColumnIndex: number;
    }) => void;
    /**
     * Handler that is called when on column collapsed state changes.
     */
    onColumnCollapsedChange?: (collapsedKeys: Set<string>) => void;
    /**
     * Handler that is called when on column drag end.
     */
    onColumnDragEnd?: (params: {
        columnId: string;
        oldIndex: number;
        newIndex: number;
    }) => void;
    /**
     * Handler that is called when column menu action is pressed.
     */
    onColumnMenuAction?: KanbanColumnProps<TCardData, TMenuItem>['onMenuAction'];
    /**
     * Handler that is called when column menu selection changed.
     */
    onColumnMenuSelectionChange?: KanbanColumnProps<TCardData, TMenuItem>['onMenuSelectionChange'];
    /**
     * Handler that is called when show more button for column is pressed.
     */
    onShowMoreCards?: KanbanColumnProps<TCardData, TMenuItem>['onShowMoreCards'];
    /**
     * Renderer for content after columns.
     */
    renderAfterColumns: (props: {
        isDraggingColumn?: boolean;
    }) => ReactNode;
    /**
     * Renderer for card.
     */
    renderCard: KanbanColumnProps<TCardData, TMenuItem>['renderCard'];
}
declare function Kanban<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({ addCardOptions, addColumnOptions, 'aria-label': ariaLabel, cardNameAccessor, className, collapsedColumnKeys: propsCollapsedColumnKeys, columnHeightMode, columnWidth, data, enableColumnReordering, height, onCardDragEnd, onColumnDragEnd, onColumnCollapsedChange: propsOnColumnCollapsedChange, onColumnMenuAction, onColumnMenuSelectionChange, onShowMoreCards, ref, renderAfterColumns, renderCard }: KanbanProps<TCardData, TMenuItem>): react_jsx_runtime.JSX.Element;

declare function useKanbanDroppableColumnBody<TCardData extends KanbanCardData, TMenuItem extends MenuItem>({ column, isDisabled }: {
    column: KanbanColumnData<TCardData, TMenuItem>;
    isDisabled?: boolean;
}): {
    isDroppableOver: any;
    bodyProps: {
        ref: any;
    };
};

declare const enum KanbanCardFooterAlertLevel {
    Success = 1,
    Warning = 2,
    Danger = 3
}
interface KanbanCardFooterProps extends DisclosureProps {
    alertLevel?: KanbanCardFooterAlertLevel;
    children: ReactNode;
    title: string;
}

interface KanbanCardProps<TData extends KanbanCardData, TMenuItem extends MenuItem> extends RefAttributes<HTMLDivElement> {
    /**
     * Content to display in the body after title.
     */
    bodyContent?: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Identifier of the column that the card belongs to. Required for drag and drop.
     */
    columnId: string;
    /**
     * Card data
     */
    data: TData;
    /**
     * Content to display after body.
     */
    detailsContent?: ReactNode;
    /**
     * Props for footer.
     */
    footerProps?: KanbanCardFooterProps;
    /**
     * Content to display on the right side of the header.
     */
    headerContent?: ReactNode;
    /**
     * Name of the id property in data. Defaults to "id" if not given.
     */
    idAccessor?: string;
    /**
     * Whether card is displayed as drag overlay.
     */
    isOverlay?: boolean;
    /**
     * Props for header actions menu.
     */
    menuProps?: Omit<MenuProps<TMenuItem>, 'children'> & {
        isDisabled?: boolean;
    };
    /**
     * Subtitle of the card.
     */
    subTitle?: string;
    /**
     * Title of the card.
     */
    title: string;
}
declare const KANBAN_CARD_HOVER_BUTTON_CSS_CLASS = "kanban-card__hover-button";
declare function KanbanCard<TData extends KanbanCardData, TMenuItem extends MenuItem>({ bodyContent, className, columnId, data, detailsContent, footerProps, headerContent, idAccessor, isOverlay, menuProps, ref, subTitle, title }: KanbanCardProps<TData, TMenuItem>): react_jsx_runtime.JSX.Element;

declare const enum ListItemStyle {
    Card = "card",
    Dash = "dash",
    Plain = "plain"
}
interface ListItemProps extends RefAttributes<HTMLLIElement> {
    /**
     * Body content.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Footer content.
     */
    footer?: ReactNode;
    /**
     * Whether to separate body and footer with separator.
     */
    showFooterSeparator?: boolean;
    /**
     * Display style for the element.
     */
    style?: ListItemStyle;
}
declare function ListItem({ children, className, footer, ref, showFooterSeparator, style }: ListItemProps): react_jsx_runtime.JSX.Element;

interface ListProps<TData extends object> extends RefAttributes<HTMLUListElement> {
    /**
     * The contents of the list.
     * For static lists, use ListItem component.
     * For dynamic lists, provide render function which renders item content or ListItem for each data item.
     */
    children: ReactNode | ((item: TData) => ReactNode);
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Data for dynamic list.
     */
    data?: TData[];
    /**
     * Accessor to get unique identifier for dynamic list item.
     * Can be either item id property name or method which returns id value for item.
     */
    idAccessor?: string | ((item: TData) => string | number);
    /**
     * Whether to separate list item body and footer with separator.
     */
    showItemFooterSeparator?: boolean;
    /**
     * Spacing between rows. Should be provided using design tokens.
     * Defaults to 0 with Plain-style and space-sm with other styles.
     */
    spacing?: string;
    /**
     * Display style for the list items.
     */
    style?: ListItemStyle;
}
declare function List<TData extends object>({ children, className, data, idAccessor, ref, showItemFooterSeparator, spacing, style }: ListProps<TData>): react_jsx_runtime.JSX.Element;

type ChartSize = Size.xxs | Size.xs | Size.sm | Size.md | Size.lg;
interface ChartProps extends Omit<OmitIndexSignature<HighchartsReactProps>, 'highcharts'>, RefAttributes<HighchartsReactRefObject> {
    /**
     * Make chart maintain specific aspect ratio when resized.
     * Has no effect if options.chart.height is set.
     */
    aspectRatio?: CSSProperties['aspectRatio'];
    /**
     * CSS class name for the container element.
     */
    className?: string;
    /**
     * Whether chart should take full height of the containing element.
     * Has no effect if options.chart.height or aspectRatio is set.
     */
    fullHeight?: boolean;
    /**
     * Size of the chart that affects the font sizes and spacings.
     * When set, font sizes and spacings are fixed to the given size regardless of containing element width.
     * If not set, font sizes and spacings scale depending on containing element width.
     */
    size?: ChartSize;
}

declare module 'highcharts' {
    interface Chart {
        _totalLabel?: Highcharts.SVGElement;
    }
}
declare function Chart(props: ChartProps): react_jsx_runtime.JSX.Element;

declare const enum ChartType {
    Area = "area",
    Areaspline = "areaspline",
    Bar = "bar",
    Column = "column",
    Donut = "donut",
    Line = "line",
    Pie = "pie"
}

declare const chartMinWidth: Record<ChartSize, number>;

interface ContentBlockProps extends RefAttributes<HTMLDivElement> {
    /**
     * CSS styles for the body if you need to override the default styling.
     */
    bodyStyle?: CSSProperties;
    /**
     * Element body content.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Content to display on the right side of the header.
     */
    headerContent?: ReactNode;
    /**
     * CSS styles for the header if you need to override the default styling.
     */
    headerStyle?: CSSProperties;
    /**
     * Whether element has "nested" style, i.e. whole element will get a background color and header will have left and right padding.
     * Useful when placed inside a container element.
     */
    isNested?: boolean;
    /**
     * Title to display in the header.
     * Heading and Title components with semantic level (2-6) should be used for this as needed.
     */
    title: ReactNode;
}
declare function ContentBlock({ bodyStyle, children, className, headerContent, headerStyle, isNested, title }: ContentBlockProps): react_jsx_runtime.JSX.Element;

interface BreakpointValues<T> {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
    ['2xl']?: T;
    ['3xl']?: T;
    ['4xl']?: T;
    ['5xl']?: T;
}

declare const enum LayoutGridColumnSpacing {
    Default = "var(--space-md)",
    Compact = "var(--space-xs)",
    Comfy = "var(--space-xl)",
    None = "var(--space-none)"
}
interface LayoutGridProps extends RefAttributes<HTMLDivElement> {
    /**
     * Children of the grid.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Spacing between columns. Can be provided as single value or per breakpoint.
     */
    columnSpacing?: LayoutGridColumnSpacing | BreakpointValues<LayoutGridColumnSpacing>;
    /**
     * Spacing between row. Can be provided as single value or per breakpoint.
     */
    rowSpacing?: string | BreakpointValues<string>;
}
declare function LayoutGrid({ children, className, columnSpacing, ref, rowSpacing }: LayoutGridProps): react_jsx_runtime.JSX.Element;

declare const LayoutGridItemPresetSize: {
    Full: {
        xs: number;
        sm: number;
        lg: number;
    };
    Half: {
        xs: number;
        sm: number;
        lg: number;
    };
};
interface LayoutGridItemProps extends RefAttributes<HTMLDivElement> {
    /**
     * Children of the grid item.
     */
    children: ReactNode;
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * How many units does the item take space in a grid.
     * Can be provided as single value or per breakpoint.
     */
    size: number | BreakpointValues<number>;
    /**
     * From which column item starts in a grid.
     * Can be provided as single value or per breakpoint.
     */
    start?: number | BreakpointValues<number>;
}
declare function LayoutGridItem({ children, className, ref, size, start }: LayoutGridItemProps): react_jsx_runtime.JSX.Element;

interface PageHeaderProps extends RefAttributes<HTMLDivElement> {
    /**
     * Badge element to display next to the title.
     */
    badge?: ReactNode;
    /**
     * Array of button elements to display next to the title.
     */
    buttons?: ReactNode[];
    /**
     * Breadcrumb items to show above title.
     * Last/current item will be hidden as title prop is interpreted as a replacement for it.
     */
    breadcrumbItems?: BreadcrumbItem[];
    /**
     * CSS class name for the element.
     */
    className?: string;
    /**
     * Array of detail elements to display below title.
     */
    details?: ReactNode[];
    /**
     * Icon name for the title.
     */
    iconName?: IconName;
    /**
     * Whether to show skeleton instead of an actual element.
     */
    isSkeleton?: boolean;
    /**
     * Level of the header. Affects the size of the icon and title text.
     */
    level: number;
    /**
     * Handler that is called when Back-button is pressed.
     */
    onBackPress?: () => void;
    /**
     * Whether Back-button should be visible.
     */
    showBackButton?: boolean;
    /**
     * CSS styles for the element.
     */
    style?: CSSProperties;
    /**
     * Title text.
     */
    title: string;
}
declare function PageHeader({ badge, buttons, breadcrumbItems, className, details, iconName, isSkeleton, level, onBackPress, ref, showBackButton, style, title }: PageHeaderProps): react_jsx_runtime.JSX.Element;

interface PageLayoutProps extends RefAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}
declare function PageLayout({ children, className, ref }: PageLayoutProps): react_jsx_runtime.JSX.Element;

type LocaleCode = 'en-IE' | 'en-GB' | 'en-US' | 'nb-NO' | 'fi-FI' | 'da-DK' | 'nl-NL' | 'de-DE' | 'sv-SE' | 'et-EE' | 'fr-FR' | 'it-IT' | 'pl-PL' | 'pt-PT' | 'ru-RU' | 'es-ES';
interface Locales {
    cultureLocale: LocaleCode;
    languageLocale: LocaleCode;
    timeZone: string;
}
declare const I18nContext: react.Context<Locales>;
interface I18nProviderProps {
    children: ReactNode;
    /**
     * BCP47 code (en-GB, fi-FI...)
     */
    cultureLocale: LocaleCode;
    /**
     * BCP47 code (en-GB, fi-FI...)
     */
    languageLocale: LocaleCode;
    /**
     * IANA timezone (Europe/London, Europe/Helsinki...)
     */
    timeZone: string;
}
declare function useLocales(): Locales;
declare function I18nProvider({ children, cultureLocale, languageLocale, timeZone }: I18nProviderProps): react_jsx_runtime.JSX.Element;

export { ACTION_ITEM_CSS_CLASS, ActionItemContent, ActionItemContentProps, AlertBanner, AlertBannerProps, AlertBannerVariant, AlertModal, AlertModalProps, Alignment, AriaRole, Avatar, AvatarGroup, AvatarGroupLayout, AvatarGroupProps, AvatarProps, Badge, BadgeProps, BadgeStyle, BadgeVariant, BodyText, BodyTextProps, BreadcrumbItem, Breadcrumbs, BreadcrumbsProps, BreakpointValues, Button, ButtonProps, ButtonRole, ButtonStyle, ButtonVariant, CTRL_MODIFIER_KEY, Calendar, CalendarProps, Callout, CalloutProps, Chart, ChartProps, ChartSize, ChartType, Checkbox, CheckboxCommonProps, CheckboxGroup, CheckboxGroupProps, CheckboxProps, CheckboxPropsAriaLabelRequired, CheckboxPropsLabelRequired, ClearButton, ClearButtonProps, Collapsible, CollapsibleItem, CollapsibleItemObject, CollapsibleItemProps, CollapsibleItemStyle, CollapsibleProps, ColorSelect, ColorSelectProps, ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem, ColorSwatchPickerItemProps, ColorSwatchPickerProps, ColorSwatchProps, ColumnConfigurator, ColumnConfiguratorItem, ColumnConfiguratorProps, ColumnConfiguratorVariant, ContentBlock, ContentBlockProps, DEFAULT_TOOLBAR_CONFIG, DataCard, DataCardAction, DataCardActionElement, DataCardAlert, DataCardAlertLevel, DataCardProps, DataCardStyle, DataTable, DataTableActionButtonCell, DataTableActionButtonCellProps, DataTableCheckboxCell, DataTableCheckboxCellProps, DataTableCheckboxHeader, DataTableCheckboxHeaderProps, DataTableColumnConfiguratorOptions, DataTableDisplayColumnID, DataTableDragHandleCell, DataTableDragHandleCellProps, DataTableExpanderCell, DataTableExpanderCellProps, DataTablePaginationProps, DataTableProps, DataTableRowDragMode, DataTableSelectCell, DataTableSelectCellProps, DataTableTextCell, DataTableTextCellProps, DataTableTextFieldCell, DataTableTextFieldCellProps, DataTableToolbar, DataTableToolbarProps, DateField, DatePicker, DatePickerProps, DateTile, DateTileProps, DateTimeField, DateTimeFieldType, DateTimeRangeFields, DateTimeRangeFieldsProps, DayOfMonth, DayOfMonthProps, DialogTrigger, Divider, DividerProps, Drawer, DrawerHeaderStyle, DrawerProps, DrawerRenderProps, DrawerVariant, DrawerWidth, DueDateButton, DueDateButtonProps, DueDateButtonVariant, EmptyState, EmptyStateLayoutVariant, EmptyStateProps, FieldLabel, FieldLabelProps, FileTrigger, FileTriggerProps, FileUploadArea, FileUploadAreaProps, FilterBar, FilterBarProps, FilterBarStyle, FilterButton, FilterButtonProps, FilterMultiSelect, FilterMultiSelectProps, FilterSelect, FilterSelectProps, GlobalToastRegion, GlobalToastRegionProps, HEADING_SIZE_LG_CSS_CLASS, HEADING_SIZE_MD_CSS_CLASS, HEADING_SIZE_SM_CSS_CLASS, HEADING_SIZE_XS_CSS_CLASS, HEADING_SIZE_XXS_CSS_CLASS, HTMLElementType, Heading, HeadingProps, HelpText, HelpTextProps, HelpTextVariant, I18nContext, I18nProvider, IColorSwatchItem, ISegmentedControlItem, Icon, IconButton, IconButtonProps, IconName, IconProps, IconSize, InlineAlert, InlineAlertProps, InlineAlertVariant, InlineSelect, InlineSelectProps, InlineTextField, InlineTextFieldProps, InputChangeTriggerAction, InputType, KANBAN_CARD_HOVER_BUTTON_CSS_CLASS, Kanban, KanbanCard, KanbanCardData, KanbanCardFooterAlertLevel, KanbanCardProps, KanbanColumnData, KanbanColumnHeightMode, KanbanProps, KeyboardEventKey, LABEL_SIZE_LG_CSS_CLASS, LABEL_SIZE_MD_CSS_CLASS, LABEL_SIZE_SM_CSS_CLASS, LABEL_SIZE_XS_CSS_CLASS, Label, LabelPlacement, LabelProps, LayoutGrid, LayoutGridColumnSpacing, LayoutGridItem, LayoutGridItemPresetSize, LayoutGridItemProps, LayoutGridProps, Link, LinkProps, LinkRole, List, ListItem, ListItemProps, ListItemStyle, ListProps, LocaleCode, Menu, MenuFooterItem, MenuItem, MenuOption, MenuOptionProps, MenuProps, MultiSelect, MultiSelectProps, Orientation, OverlayFooter, OverlayFooterAction, OverlayFooterIconAction, OverlayFooterProps, OverlayHeader, OverlayHeaderProps, OverlayHeaderVariant, PageHeader, PageHeaderProps, PageLayout, PageLayoutProps, Pagination, PaginationItemsPerPageOptions, PaginationProps, PanelItem, PasswordField, PasswordFieldProps, PhoneNumberField, PhoneNumberFieldProps, Popover, PopoverPadding, PopoverProps, Position, ProgressBar, ProgressBarProps, Radio, RadioCommonProps, RadioGroup, RadioGroupProps, RadioProps, RadioPropsAriaLabelRequired, RadioPropsLabelRequired, RequiredIndicator, RequiredIndicatorProps, RichTextEditor, RichTextEditorProps, RichTextEditorToolbarConfig, SearchField, SearchFieldProps, SegmentedControl, SegmentedControlProps, Select, SelectChangeItem, SelectItem, SelectItemBase, SelectOptionContent, SelectOptionContentProps, SelectOptionsEmptyState, SelectOptionsEmptyStateProps, SelectProps, SelectedItemStyle, SelectionMode, SideNav, SideNavItem, SideNavMode, SideNavProps, Size, Skeleton, SkeletonProps, SkeletonShape, SkeletonText, SkeletonTextMultiline, SkeletonTextMultilineProps, SkeletonTextProps, SkeletonTextType, Slider, SliderProps, SliderValueDisplayMode, SortDirection, SpecialSelectItemKey, Spinner, SpinnerProps, SpinnerVariant, StepItem, StepItemProps, Steps, StepsProps, SubmenuBehavior, TabItem, Tabs, TabsProps, TabsType, Tag, TagGroup, TagGroupProps, TagProps, TagStyle, TextArea, TextAreaProps, TextField, TextFieldCopy, TextFieldCopyProps, TextFieldProps, TextFieldSelect, TextFieldSelectProps, TextFieldUnit, TextFieldUnitProps, TextFieldVisibilityToggle, TextFieldVisibilityToggleProps, TimeField, TimePicker, TimePickerProps, Title, TitleProps, ToastOptions, ToastQueue, ToggleButton, ToggleButtonItem, ToggleButtonProps, ToggleSwitch, ToggleSwitchCommonProps, ToggleSwitchProps, ToggleSwitchPropsAriaLabelRequired, ToggleSwitchPropsLabelRequired, Tooltip, TooltipContent, TooltipProps, TooltipTrigger, TooltipType, TopNav, TopNavItem, TopNavProps, TreeMultiSelect, TreeMultiSelectProps, TreeSelect, TreeSelectProps, TriggerElement, TriggerElementProps, TriggerElementRenderProps, UploadItem, UploadItemProps, UploadItemStyle, VariableItem, chartMinWidth, closeToast, iconNames, icons, useKanbanDroppableColumnBody, useLocales };
