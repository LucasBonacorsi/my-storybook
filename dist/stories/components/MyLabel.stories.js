"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
        size: {
            control: {
                type: 'select'
            },
        },
        color: {
            control: {
                type: 'select'
            },
        },
        allCaps: {
            control: {
                type: 'boolean',
            },
        },
        fontColor: {
            control: {
                type: 'color',
            },
        },
    }
};
exports.default = meta;
exports.Basic = {
    args: {
        label: "Basic",
        size: "h3",
    },
};
exports.AllCaps = {
    args: {
        label: "AllCaps",
        size: "h1",
        allCaps: true,
    },
};
exports.Secondary = {
    args: {
        label: "Secondary",
        size: "h1",
        color: "secondary",
    },
};
exports.Tertiary = {
    args: {
        label: "Tertiary",
        size: "h1",
        color: "tertiary",
    },
};
exports.CustomFontColor = {
    args: {
        label: "CustomFontColor",
        size: "h1",
        color: "tertiary",
    },
};
