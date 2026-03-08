(function () {

'use strict';

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

        // Entry FHD 확장 확인
        if (window.EntryFHD) {
            return true;
        }

        if (window.entryFHD) {
            return true;
        }

        if (window.fhd) {
            return true;
        }

        return false;
    }
};

// 블록 등록
Entry.block.fhdBlocks = [
    'checkFHD'
];

// 분류 설정 (검정색)
Entry.block.fhdChecker = {
    color: '#000000',
    blocks: Entry.block.fhdBlocks
};

})();
