var _a, _b, _c, _d, _e, _f, _g, _h;
import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { HTMLElementType, Size } from '../../../constants/index.js';
import { BodyText, Heading, Label, Title } from '../../../components/index.js';
var headingText = 'Sera Design System';
var bodyText = 'A quick brown fox jumps over the lazy dog';
var typographyData = {
    heading: {
        regular: (_a = {},
            _a[Size.xxs] = { sample: headingText, usage: '' },
            _a[Size.xs] = { sample: headingText, usage: '' },
            _a[Size.sm] = { sample: headingText, usage: '' },
            _a[Size.md] = { sample: headingText, usage: '' },
            _a[Size.lg] = { sample: headingText, usage: '' },
            _a)
    },
    body: {
        regular: (_b = {},
            _b[Size.xs] = { sample: bodyText, usage: '' },
            _b[Size.sm] = { sample: bodyText, usage: '' },
            _b[Size.md] = { sample: bodyText, usage: '' },
            _b[Size.lg] = {
                sample: (_jsxs(_Fragment, { children: [bodyText, _jsxs("ul", { children: [_jsx("li", { children: "Unordered list item 1" }), _jsx("li", { children: "Unordered list item 1" })] }), _jsxs("ol", { children: [_jsx("li", { children: "Ordered list item 1" }), _jsx("li", { children: "Ordered list item 2" })] })] })),
                usage: ''
            },
            _b),
        strong: (_c = {},
            _c[Size.xs] = { sample: bodyText, usage: '' },
            _c[Size.sm] = { sample: bodyText, usage: '' },
            _c[Size.md] = { sample: bodyText, usage: '' },
            _c[Size.lg] = { sample: bodyText, usage: '' },
            _c)
    },
    label: {
        regular: (_d = {},
            _d[Size.xs] = { sample: bodyText, usage: '' },
            _d[Size.sm] = { sample: bodyText, usage: '' },
            _d[Size.md] = { sample: bodyText, usage: '' },
            _d[Size.lg] = { sample: bodyText, usage: '' },
            _d),
        strong: (_e = {},
            _e[Size.xs] = { sample: bodyText, usage: '' },
            _e[Size.sm] = { sample: bodyText, usage: '' },
            _e[Size.md] = { sample: bodyText, usage: '' },
            _e[Size.lg] = { sample: bodyText, usage: '' },
            _e),
        strongUnderline: (_f = {},
            _f[Size.xs] = { sample: bodyText, usage: '' },
            _f[Size.sm] = { sample: bodyText, usage: '' },
            _f[Size.md] = { sample: bodyText, usage: '' },
            _f[Size.lg] = { sample: bodyText, usage: '' },
            _f)
    },
    title: {
        regular: (_g = {},
            _g[Size.xxs] = { sample: headingText, usage: '' },
            _g[Size.xs] = { sample: headingText, usage: '' },
            _g[Size.sm] = { sample: headingText, usage: '' },
            _g[Size.md] = { sample: headingText, usage: '' },
            _g[Size.lg] = { sample: headingText, usage: '' },
            _g),
        strong: (_h = {},
            _h[Size.xxs] = { sample: headingText, usage: '' },
            _h[Size.xs] = { sample: headingText, usage: '' },
            _h[Size.sm] = { sample: headingText, usage: '' },
            _h[Size.md] = { sample: headingText, usage: '' },
            _h[Size.lg] = { sample: headingText, usage: '' },
            _h)
    }
};
function createTypography(_a) {
    var data = _a.data, formatting = _a.formatting, type = _a.type;
    var formattingSuffix = '';
    if (formatting === null || formatting === void 0 ? void 0 : formatting.strong) {
        formattingSuffix += '-strong';
    }
    if (formatting === null || formatting === void 0 ? void 0 : formatting.underline) {
        formattingSuffix += '-underline';
    }
    return Object.keys(data).map(function (size) {
        var item = data[size];
        var sample = item.sample, usage = item.usage;
        var sampleNode = sample;
        if (formatting === null || formatting === void 0 ? void 0 : formatting.underline) {
            sampleNode = _jsx("u", { children: sampleNode });
        }
        if (formatting === null || formatting === void 0 ? void 0 : formatting.strong) {
            sampleNode = _jsx("strong", { children: sampleNode });
        }
        switch (type) {
            case 'heading':
                sampleNode = (_jsx(Heading, __assign({ elementType: HTMLElementType.Div, size: size }, { children: sampleNode })));
                break;
            case 'body':
                sampleNode = (_jsx(BodyText, __assign({ elementType: HTMLElementType.Div, size: size }, { children: sampleNode })));
                break;
            case 'label':
                sampleNode = _jsx(Label, __assign({ size: size }, { children: sampleNode }));
                break;
            case 'title':
                sampleNode = _jsx(Title, __assign({ size: size }, { children: sampleNode }));
                break;
            default:
                break;
        }
        return {
            sample: sampleNode,
            token: "".concat(type, "-").concat(size).concat(formattingSuffix),
            usage: usage
        };
    });
}
// Heading
export var headingTypography = createTypography({ data: typographyData.heading.regular, type: 'heading' });
// Body
export var bodyTypography = createTypography({ data: typographyData.body.regular, type: 'body' });
export var bodyStrongTypography = createTypography({
    data: typographyData.body.strong,
    formatting: {
        strong: true
    },
    type: 'body'
});
// Label
export var labelTypography = createTypography({ data: typographyData.label.regular, type: 'label' });
export var labelStrongTypography = createTypography({
    data: typographyData.label.strong,
    formatting: { strong: true },
    type: 'label'
});
export var labelStrongUnderlineTypography = createTypography({
    data: typographyData.label.strongUnderline,
    formatting: {
        strong: true,
        underline: true
    },
    type: 'label'
});
// Title
export var titleTypography = createTypography({ data: typographyData.title.regular, type: 'title' });
export var titleStrongTypography = createTypography({
    data: typographyData.title.strong,
    formatting: { strong: true },
    type: 'title'
});
//# sourceMappingURL=typographydata.js.map