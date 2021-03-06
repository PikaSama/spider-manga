/**
 * Author: Zorin
 * Github: https://github.com/PikaSama
 * Project: Spider-Manga
 * Description: 主要模块（桥接模块），漫画站点选择菜单
 * License: MIT
 */

import * as inquirer from 'inquirer';

// 支持的漫画站点
const sites: string[] = ['www.dm5.com', 'm.mhxin.com'];

inquirer
    .prompt([
        {
            type: 'list',
            name: 'site',
            message: 'Which website do you want to download manga on ?',
            choices: sites,
        },
    ])
    .then(({ site }): void => {
        switch (site) {
            case 'www.dm5.com': {
                import('./sites/dm5').then(({ dongmanwu }): void => dongmanwu()).catch((err): void => console.log(err));
                break;
            }
            case 'm.mhxin.com': {
                import('./sites/mhxin')
                    .then(({ manhuaxin }): void => manhuaxin())
                    .catch((err): void => console.log(err));
                break;
            }
            default:
                process.exit(1);
        }
    });
