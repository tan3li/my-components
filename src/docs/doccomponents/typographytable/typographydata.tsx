import {HTMLElementType, Size} from '../../../constants/index.js';
import {ReactNode} from 'react';
import {
    BodyText,
    BodyTextProps,
    Heading,
    HeadingProps,
    Label,
    LabelProps,
    Title,
    TitleProps
} from '../../../components/index.js';

export interface TypographyItem {
    sample: ReactNode;
    token: string;
    usage: string;
}

export type PartialTypographyItem = Omit<TypographyItem, 'token'>;

interface TypographyData {
    heading: {
        regular: {
            [K in HeadingProps['size']]: PartialTypographyItem;
        };
    };
    body: {
        regular: {
            [K in BodyTextProps['size']]: PartialTypographyItem;
        };
        strong: {
            [K in BodyTextProps['size']]: PartialTypographyItem;
        };
    };
    label: {
        regular: {
            [K in LabelProps['size']]: PartialTypographyItem;
        };
        strong: {
            [K in LabelProps['size']]: PartialTypographyItem;
        };
        strongUnderline: {
            [K in LabelProps['size']]: PartialTypographyItem;
        };
    };
    title: {
        regular: {
            [K in TitleProps['size']]: PartialTypographyItem;
        };
        strong: {
            [K in TitleProps['size']]: PartialTypographyItem;
        };
    };
}

const headingText = 'Sera Design System';
const bodyText = 'A quick brown fox jumps over the lazy dog';

const typographyData: TypographyData = {
    heading: {
        regular: {
            [Size.xxs]: {sample: headingText, usage: ''},
            [Size.xs]: {sample: headingText, usage: ''},
            [Size.sm]: {sample: headingText, usage: ''},
            [Size.md]: {sample: headingText, usage: ''},
            [Size.lg]: {sample: headingText, usage: ''}
        }
    },
    body: {
        regular: {
            [Size.xs]: {sample: bodyText, usage: ''},
            [Size.sm]: {sample: bodyText, usage: ''},
            [Size.md]: {sample: bodyText, usage: ''},
            [Size.lg]: {
                sample: (
                    <>
                        {bodyText}
                        <ul>
                            <li>Unordered list item 1</li>
                            <li>Unordered list item 1</li>
                        </ul>
                        <ol>
                            <li>Ordered list item 1</li>
                            <li>Ordered list item 2</li>
                        </ol>
                    </>
                ),
                usage: ''
            }
        },
        strong: {
            [Size.xs]: {sample: bodyText, usage: ''},
            [Size.sm]: {sample: bodyText, usage: ''},
            [Size.md]: {sample: bodyText, usage: ''},
            [Size.lg]: {sample: bodyText, usage: ''}
        }
    },
    label: {
        regular: {
            [Size.xs]: {sample: bodyText, usage: ''},
            [Size.sm]: {sample: bodyText, usage: ''},
            [Size.md]: {sample: bodyText, usage: ''},
            [Size.lg]: {sample: bodyText, usage: ''}
        },
        strong: {
            [Size.xs]: {sample: bodyText, usage: ''},
            [Size.sm]: {sample: bodyText, usage: ''},
            [Size.md]: {sample: bodyText, usage: ''},
            [Size.lg]: {sample: bodyText, usage: ''}
        },
        strongUnderline: {
            [Size.xs]: {sample: bodyText, usage: ''},
            [Size.sm]: {sample: bodyText, usage: ''},
            [Size.md]: {sample: bodyText, usage: ''},
            [Size.lg]: {sample: bodyText, usage: ''}
        }
    },
    title: {
        regular: {
            [Size.xxs]: {sample: headingText, usage: ''},
            [Size.xs]: {sample: headingText, usage: ''},
            [Size.sm]: {sample: headingText, usage: ''},
            [Size.md]: {sample: headingText, usage: ''},
            [Size.lg]: {sample: headingText, usage: ''}
        },
        strong: {
            [Size.xxs]: {sample: headingText, usage: ''},
            [Size.xs]: {sample: headingText, usage: ''},
            [Size.sm]: {sample: headingText, usage: ''},
            [Size.md]: {sample: headingText, usage: ''},
            [Size.lg]: {sample: headingText, usage: ''}
        }
    }
};

function createTypography({
    data,
    formatting,
    type
}: {
    data: {[size: string]: PartialTypographyItem};
    formatting?: {
        strong?: boolean;
        underline?: boolean;
    };
    type: 'heading' | 'body' | 'label' | 'title';
}): TypographyItem[] {
    let formattingSuffix = '';

    if (formatting?.strong) {
        formattingSuffix += '-strong';
    }
    if (formatting?.underline) {
        formattingSuffix += '-underline';
    }

    return Object.keys(data).map((size) => {
        const item = data[size];
        const {sample, usage} = item;
        let sampleNode: ReactNode = sample;

        if (formatting?.underline) {
            sampleNode = <u>{sampleNode}</u>;
        }
        if (formatting?.strong) {
            sampleNode = <strong>{sampleNode}</strong>;
        }

        switch (type) {
            case 'heading':
                sampleNode = (
                    <Heading elementType={HTMLElementType.Div} size={size as HeadingProps['size']}>
                        {sampleNode}
                    </Heading>
                );
                break;
            case 'body':
                sampleNode = (
                    <BodyText elementType={HTMLElementType.Div} size={size as BodyTextProps['size']}>
                        {sampleNode}
                    </BodyText>
                );
                break;
            case 'label':
                sampleNode = <Label size={size as LabelProps['size']}>{sampleNode}</Label>;
                break;
            case 'title':
                sampleNode = <Title size={size as TitleProps['size']}>{sampleNode}</Title>;
                break;
            default:
                break;
        }

        return {
            sample: sampleNode,
            token: `${type}-${size}${formattingSuffix}`,
            usage
        };
    });
}

// Heading
export const headingTypography = createTypography({data: typographyData.heading.regular, type: 'heading'});

// Body
export const bodyTypography = createTypography({data: typographyData.body.regular, type: 'body'});
export const bodyStrongTypography = createTypography({
    data: typographyData.body.strong,
    formatting: {
        strong: true
    },
    type: 'body'
});

// Label
export const labelTypography = createTypography({data: typographyData.label.regular, type: 'label'});
export const labelStrongTypography = createTypography({
    data: typographyData.label.strong,
    formatting: {strong: true},
    type: 'label'
});
export const labelStrongUnderlineTypography = createTypography({
    data: typographyData.label.strongUnderline,
    formatting: {
        strong: true,
        underline: true
    },
    type: 'label'
});

// Title
export const titleTypography = createTypography({data: typographyData.title.regular, type: 'title'});
export const titleStrongTypography = createTypography({
    data: typographyData.title.strong,
    formatting: {strong: true},
    type: 'title'
});
