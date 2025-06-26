import {ChartSize} from './chartprops.js';
import {Size} from '../../../constants/index.js';

export const chartMinWidth: Record<ChartSize, number> = {
    [Size.xxs]: 0,
    [Size.xs]: 150,
    [Size.sm]: 384,
    [Size.md]: 768,
    [Size.lg]: 1250
};
