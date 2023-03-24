import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
import "reveal.js/dist/reveal.css"
import "reveal.js/dist/theme/white.css"
import "reveal.js"

import RevealHighlight from "reveal.js/plugin/highlight/highlight"
import RevealNotes from "reveal.js/plugin/notes/notes"

const Panel = ({children}) =>
{
    useEffect(() => {
        Reveal.initialize(
            {
                width: 1920,
                height: 720,
                pdfViewerEnabled: false,
                center: true,
                disableLayout: false,
                slideNumber: true,
                plugins: [ RevealHighlight, RevealNotes ]
            }
        );
    });

    return (
        <div className="reveal">
            <div className="slides">
                {children}
            </div>
        </div>
    );
};

export default Panel;
