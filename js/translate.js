'use strict';

// translation a text
const translate_text = (dom, lang, text) => {
    let s = lang[text];
    if (s) {
        dom.html(s);
    }
}

// translation language
const translation = (lang) => {
    translate_text($('a#text_canvas'), lang, 'canvas');
    translate_text($('a#text_setting'), lang, 'setting');
    translate_text($('a#text_log'), lang, 'log');
    translate_text($('h4#text_ui_language'), lang, 'ui_language');
    translate_text($('h4#text_logs'), lang, 'text_logs');
    translate_text($('h4#text_procedures'), lang, 'text_procedures');
    translate_text($('a#text_help'), lang, 'help');
    translate_text($('span#source_code'), lang, 'source_code');
    translate_text($('a#report_bugs'), lang, 'report_bugs');
    translate_text($('h4#supported_commands'), lang, 'supported_commands');
    translate_text($('h4#examples'), lang, 'examples');
    translate_text($('h4#global_vars'), lang, 'global_vars');
    translate_text($('div#chess_board'), lang, 'chess_board');
    translate_text($('div#frac_star'), lang, 'frac_star');
    translate_text($('button#setting_save_btn'), lang, 'save');
	translate_text($('span#proudly_brought_to_you_by'), lang, 'proudly_brought_to_you_by');
}

// get ui lang data
const get_lang = () => {
    let lang = $('select#lang').val();
    switch (lang) {
        case 'zh-cn': return (translation_simplified_chinese); 
        case 'en-us': return (translation_english); 
        case 'zh-tw': return (translation_traditional_chinese); 
    }	
}

// ui translate
const ui_translate = () => {
	let data = get_lang();
	translation(data);
}

// translate
const get_text = (x, default_text = '') => {
	let lang = get_lang();
	if (lang && lang[x]) {
		return lang[x];
	}
	return default_text;
}
