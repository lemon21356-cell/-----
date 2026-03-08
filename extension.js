(function () {

'use strict';

function waitForEntry() {

    if (!window.Entry) {
        setTimeout(waitForEntry, 500);
        return;
    }

    Entry.FHDChecker = {
        name: 'FHDChecker',
        title: 'FHD 확인',

        blocks: [
            {
                opcode: 'checkFHD',
                blockType: 'boolean',
                text: 'Entry FHD 확장프로그램이 켜져있는가?'
            }
        ],

        checkFHD() {

            if (window.EntryFHD) return true;
            if (window.entryFHD) return true;
            if (window.fhd) return true;

            return false;
        }
    };

    Entry.block.fhdCheckerBlocks = [
        'checkFHD'
    ];

    Entry.block.fhdChecker = {
        color: '#000000',
        blocks: Entry.block.fhdCheckerBlocks
    };

}

waitForEntry();

})();
