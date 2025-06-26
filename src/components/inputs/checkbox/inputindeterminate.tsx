interface InputIndeterminateProps {
    size: number;
}

export function InputIndeterminate({size}: InputIndeterminateProps) {
    return (
        <svg aria-hidden={true} fill="currentColor" height={size} viewBox="0 0 24 24" width={size}>
            <path d="M6.845 13.325c-.369 0-.681-.129-.94-.386A1.278 1.278 0 0 1 5.52 12c0-.368.128-.68.386-.938.258-.258.57-.387.939-.387h10.31c.368 0 .681.129.939.386.258.258.386.571.386.94 0 .367-.128.68-.386.938a1.28 1.28 0 0 1-.939.386H6.845Z" />
        </svg>
    );
}
