if(!Array.prototype.forEach)
 Array.prototype.forEach=function(f){var i,l=this.length>>>0,thisp=arguments[1]
  for(i=0;i<l;i++)
   if(i in this)
    f.call(thisp,this[i],i,this)}
if(!Array.prototype.filter)
 Array.prototype.filter=function(f){var i,l=this.length>>>0,res=[],thisp=arguments[1],v
  for(i=0;i<l;i++){
   v=this[i]
   if(i in this&&f.call(thisp,v,i,this))res.push(v)}
  return res}
CSET=function(){
cUC=
{Cc:[0,0x20,0x7F,0xA0]
,Zs:[0x20,0x21,0xA0,0xA1,0x1680,0x1681,0x180E,0x180F,0x2000,0x200B,0x202F,0x2030,0x205F,0x2060,0x3000,0x3001]
,Po:[0x21,0x24,0x25,0x28,0x2A,0x2B,0x2C,0x2D,0x2E,0x30,0x3A,0x3C,0x3F,0x41,0x5C,0x5D,0xA1,0xA2,0xB7,0xB8,0xBF,0xC0,0x37E,0x37F,0x387,0x388,0x55A,0x560,0x589,0x58A,0x5C0,0x5C1,0x5C3,0x5C4,0x5C6,0x5C7,0x5F3,0x5F5,0x609,0x60B,0x60C,0x60E,0x61B,0x61C,0x61E,0x620,0x66A,0x66E,0x6D4,0x6D5,0x700,0x70E,0x7F7,0x7FA,0x964,0x966,0x970,0x971,0xDF4,0xDF5,0xE4F,0xE50,0xE5A,0xE5C,0xF04,0xF13,0xF85,0xF86,0xFD0,0xFD5,0x104A,0x1050,0x10FB,0x10FC,0x1361,0x1369,0x166D,0x166F,0x16EB,0x16EE,0x1735,0x1737,0x17D4,0x17D7,0x17D8,0x17DB,0x1800,0x1806,0x1807,0x180B,0x1944,0x1946,0x19DE,0x19E0,0x1A1E,0x1A20,0x1B5A,0x1B61,0x1C3B,0x1C40,0x1C7E,0x1C80,0x2016,0x2018,0x2020,0x2028,0x2030,0x2039,0x203B,0x203F,0x2041,0x2044,0x2047,0x2052,0x2053,0x2054,0x2055,0x205F,0x2CF9,0x2CFD,0x2CFE,0x2D00,0x2E00,0x2E02,0x2E06,0x2E09,0x2E0B,0x2E0C,0x2E0E,0x2E17,0x2E18,0x2E1A,0x2E1B,0x2E1C,0x2E1E,0x2E20,0x2E2A,0x2E2F,0x2E30,0x2E31,0x3001,0x3004,0x303D,0x303E,0x30FB,0x30FC,0xA60D,0xA610,0xA673,0xA674,0xA67E,0xA67F,0xA874,0xA878,0xA8CE,0xA8D0,0xA92E,0xA930,0xA95F,0xA960,0xAA5C,0xAA60,0xFE10,0xFE17,0xFE19,0xFE1A,0xFE30,0xFE31,0xFE45,0xFE47,0xFE49,0xFE4D,0xFE50,0xFE53,0xFE54,0xFE58,0xFE5F,0xFE62,0xFE68,0xFE69,0xFE6A,0xFE6C,0xFF01,0xFF04,0xFF05,0xFF08,0xFF0A,0xFF0B,0xFF0C,0xFF0D,0xFF0E,0xFF10,0xFF1A,0xFF1C,0xFF1F,0xFF21,0xFF3C,0xFF3D,0xFF61,0xFF62,0xFF64,0xFF66,0x10100,0x10102,0x1039F,0x103A0,0x103D0,0x103D1,0x1091F,0x10920,0x1093F,0x10940,0x10A50,0x10A59,0x12470,0x12474]
,Sc:[0x24,0x25,0xA2,0xA6,0x60B,0x60C,0x9F2,0x9F4,0xAF1,0xAF2,0xBF9,0xBFA,0xE3F,0xE40,0x17DB,0x17DC,0x20A0,0x20B6,0xFDFC,0xFDFD,0xFE69,0xFE6A,0xFF04,0xFF05,0xFFE0,0xFFE2,0xFFE5,0xFFE7]
,Ps:[0x28,0x29,0x5B,0x5C,0x7B,0x7C,0xF3A,0xF3B,0xF3C,0xF3D,0x169B,0x169C,0x201A,0x201B,0x201E,0x201F,0x2045,0x2046,0x207D,0x207E,0x208D,0x208E,0x2329,0x232A,0x2768,0x2769,0x276A,0x276B,0x276C,0x276D,0x276E,0x276F,0x2770,0x2771,0x2772,0x2773,0x2774,0x2775,0x27C5,0x27C6,0x27E6,0x27E7,0x27E8,0x27E9,0x27EA,0x27EB,0x27EC,0x27ED,0x27EE,0x27EF,0x2983,0x2984,0x2985,0x2986,0x2987,0x2988,0x2989,0x298A,0x298B,0x298C,0x298D,0x298E,0x298F,0x2990,0x2991,0x2992,0x2993,0x2994,0x2995,0x2996,0x2997,0x2998,0x29D8,0x29D9,0x29DA,0x29DB,0x29FC,0x29FD,0x2E22,0x2E23,0x2E24,0x2E25,0x2E26,0x2E27,0x2E28,0x2E29,0x3008,0x3009,0x300A,0x300B,0x300C,0x300D,0x300E,0x300F,0x3010,0x3011,0x3014,0x3015,0x3016,0x3017,0x3018,0x3019,0x301A,0x301B,0x301D,0x301E,0xFD3E,0xFD3F,0xFE17,0xFE18,0xFE35,0xFE36,0xFE37,0xFE38,0xFE39,0xFE3A,0xFE3B,0xFE3C,0xFE3D,0xFE3E,0xFE3F,0xFE40,0xFE41,0xFE42,0xFE43,0xFE44,0xFE47,0xFE48,0xFE59,0xFE5A,0xFE5B,0xFE5C,0xFE5D,0xFE5E,0xFF08,0xFF09,0xFF3B,0xFF3C,0xFF5B,0xFF5C,0xFF5F,0xFF60,0xFF62,0xFF63]
,Pe:[0x29,0x2A,0x5D,0x5E,0x7D,0x7E,0xF3B,0xF3C,0xF3D,0xF3E,0x169C,0x169D,0x2046,0x2047,0x207E,0x207F,0x208E,0x208F,0x232A,0x232B,0x2769,0x276A,0x276B,0x276C,0x276D,0x276E,0x276F,0x2770,0x2771,0x2772,0x2773,0x2774,0x2775,0x2776,0x27C6,0x27C7,0x27E7,0x27E8,0x27E9,0x27EA,0x27EB,0x27EC,0x27ED,0x27EE,0x27EF,0x27F0,0x2984,0x2985,0x2986,0x2987,0x2988,0x2989,0x298A,0x298B,0x298C,0x298D,0x298E,0x298F,0x2990,0x2991,0x2992,0x2993,0x2994,0x2995,0x2996,0x2997,0x2998,0x2999,0x29D9,0x29DA,0x29DB,0x29DC,0x29FD,0x29FE,0x2E23,0x2E24,0x2E25,0x2E26,0x2E27,0x2E28,0x2E29,0x2E2A,0x3009,0x300A,0x300B,0x300C,0x300D,0x300E,0x300F,0x3010,0x3011,0x3012,0x3015,0x3016,0x3017,0x3018,0x3019,0x301A,0x301B,0x301C,0x301E,0x3020,0xFD3F,0xFD40,0xFE18,0xFE19,0xFE36,0xFE37,0xFE38,0xFE39,0xFE3A,0xFE3B,0xFE3C,0xFE3D,0xFE3E,0xFE3F,0xFE40,0xFE41,0xFE42,0xFE43,0xFE44,0xFE45,0xFE48,0xFE49,0xFE5A,0xFE5B,0xFE5C,0xFE5D,0xFE5E,0xFE5F,0xFF09,0xFF0A,0xFF3D,0xFF3E,0xFF5D,0xFF5E,0xFF60,0xFF61,0xFF63,0xFF64]
,Sm:[0x2B,0x2C,0x3C,0x3F,0x7C,0x7D,0x7E,0x7F,0xAC,0xAD,0xB1,0xB2,0xD7,0xD8,0xF7,0xF8,0x3F6,0x3F7,0x606,0x609,0x2044,0x2045,0x2052,0x2053,0x207A,0x207D,0x208A,0x208D,0x2140,0x2145,0x214B,0x214C,0x2190,0x2195,0x219A,0x219C,0x21A0,0x21A1,0x21A3,0x21A4,0x21A6,0x21A7,0x21AE,0x21AF,0x21CE,0x21D0,0x21D2,0x21D3,0x21D4,0x21D5,0x21F4,0x2300,0x2308,0x230C,0x2320,0x2322,0x237C,0x237D,0x239B,0x23B4,0x23DC,0x23E2,0x25B7,0x25B8,0x25C1,0x25C2,0x25F8,0x2600,0x266F,0x2670,0x27C0,0x27C5,0x27C7,0x27CB,0x27CC,0x27CD,0x27D0,0x27E6,0x27F0,0x2800,0x2900,0x2983,0x2999,0x29D8,0x29DC,0x29FC,0x29FE,0x2B00,0x2B30,0x2B45,0x2B47,0x2B4D,0xFB29,0xFB2A,0xFE62,0xFE63,0xFE64,0xFE67,0xFF0B,0xFF0C,0xFF1C,0xFF1F,0xFF5C,0xFF5D,0xFF5E,0xFF5F,0xFFE2,0xFFE3,0xFFE9,0xFFED,0x1D6C1,0x1D6C2,0x1D6DB,0x1D6DC,0x1D6FB,0x1D6FC,0x1D715,0x1D716,0x1D735,0x1D736,0x1D74F,0x1D750,0x1D76F,0x1D770,0x1D789,0x1D78A,0x1D7A9,0x1D7AA,0x1D7C3,0x1D7C4]
,Pd:[0x2D,0x2E,0x58A,0x58B,0x5BE,0x5BF,0x1806,0x1807,0x2010,0x2016,0x2E17,0x2E18,0x2E1A,0x2E1B,0x301C,0x301D,0x3030,0x3031,0x30A0,0x30A1,0xFE31,0xFE33,0xFE58,0xFE59,0xFE63,0xFE64,0xFF0D,0xFF0E]
,Nd:[0x30,0x3A,0x660,0x66A,0x6F0,0x6FA,0x7C0,0x7CA,0x966,0x970,0x9E6,0x9F0,0xA66,0xA70,0xAE6,0xAF0,0xB66,0xB70,0xBE6,0xBF0,0xC66,0xC70,0xCE6,0xCF0,0xD66,0xD70,0xE50,0xE5A,0xED0,0xEDA,0xF20,0xF2A,0x1040,0x104A,0x1090,0x109A,0x17E0,0x17EA,0x1810,0x181A,0x1946,0x1950,0x19D0,0x19DA,0x1B50,0x1B5A,0x1BB0,0x1BBA,0x1C40,0x1C4A,0x1C50,0x1C5A,0xA620,0xA62A,0xA8D0,0xA8DA,0xA900,0xA90A,0xAA50,0xAA5A,0xFF10,0xFF1A,0x104A0,0x104AA,0x1D7CE,0x1D800]
,Lu:[0x41,0x5B,0xC0,0xD7,0xD8,0xDF,0x100,0x101,0x102,0x103,0x104,0x105,0x106,0x107,0x108,0x109,0x10A,0x10B,0x10C,0x10D,0x10E,0x10F,0x110,0x111,0x112,0x113,0x114,0x115,0x116,0x117,0x118,0x119,0x11A,0x11B,0x11C,0x11D,0x11E,0x11F,0x120,0x121,0x122,0x123,0x124,0x125,0x126,0x127,0x128,0x129,0x12A,0x12B,0x12C,0x12D,0x12E,0x12F,0x130,0x131,0x132,0x133,0x134,0x135,0x136,0x137,0x139,0x13A,0x13B,0x13C,0x13D,0x13E,0x13F,0x140,0x141,0x142,0x143,0x144,0x145,0x146,0x147,0x148,0x14A,0x14B,0x14C,0x14D,0x14E,0x14F,0x150,0x151,0x152,0x153,0x154,0x155,0x156,0x157,0x158,0x159,0x15A,0x15B,0x15C,0x15D,0x15E,0x15F,0x160,0x161,0x162,0x163,0x164,0x165,0x166,0x167,0x168,0x169,0x16A,0x16B,0x16C,0x16D,0x16E,0x16F,0x170,0x171,0x172,0x173,0x174,0x175,0x176,0x177,0x178,0x17A,0x17B,0x17C,0x17D,0x17E,0x181,0x183,0x184,0x185,0x186,0x188,0x189,0x18C,0x18E,0x192,0x193,0x195,0x196,0x199,0x19C,0x19E,0x19F,0x1A1,0x1A2,0x1A3,0x1A4,0x1A5,0x1A6,0x1A8,0x1A9,0x1AA,0x1AC,0x1AD,0x1AE,0x1B0,0x1B1,0x1B4,0x1B5,0x1B6,0x1B7,0x1B9,0x1BC,0x1BD,0x1C4,0x1C5,0x1C7,0x1C8,0x1CA,0x1CB,0x1CD,0x1CE,0x1CF,0x1D0,0x1D1,0x1D2,0x1D3,0x1D4,0x1D5,0x1D6,0x1D7,0x1D8,0x1D9,0x1DA,0x1DB,0x1DC,0x1DE,0x1DF,0x1E0,0x1E1,0x1E2,0x1E3,0x1E4,0x1E5,0x1E6,0x1E7,0x1E8,0x1E9,0x1EA,0x1EB,0x1EC,0x1ED,0x1EE,0x1EF,0x1F1,0x1F2,0x1F4,0x1F5,0x1F6,0x1F9,0x1FA,0x1FB,0x1FC,0x1FD,0x1FE,0x1FF,0x200,0x201,0x202,0x203,0x204,0x205,0x206,0x207,0x208,0x209,0x20A,0x20B,0x20C,0x20D,0x20E,0x20F,0x210,0x211,0x212,0x213,0x214,0x215,0x216,0x217,0x218,0x219,0x21A,0x21B,0x21C,0x21D,0x21E,0x21F,0x220,0x221,0x222,0x223,0x224,0x225,0x226,0x227,0x228,0x229,0x22A,0x22B,0x22C,0x22D,0x22E,0x22F,0x230,0x231,0x232,0x233,0x23A,0x23C,0x23D,0x23F,0x241,0x242,0x243,0x247,0x248,0x249,0x24A,0x24B,0x24C,0x24D,0x24E,0x24F,0x370,0x371,0x372,0x373,0x376,0x377,0x386,0x387,0x388,0x38B,0x38C,0x38D,0x38E,0x390,0x391,0x3A2,0x3A3,0x3AC,0x3CF,0x3D0,0x3D2,0x3D5,0x3D8,0x3D9,0x3DA,0x3DB,0x3DC,0x3DD,0x3DE,0x3DF,0x3E0,0x3E1,0x3E2,0x3E3,0x3E4,0x3E5,0x3E6,0x3E7,0x3E8,0x3E9,0x3EA,0x3EB,0x3EC,0x3ED,0x3EE,0x3EF,0x3F4,0x3F5,0x3F7,0x3F8,0x3F9,0x3FB,0x3FD,0x430,0x460,0x461,0x462,0x463,0x464,0x465,0x466,0x467,0x468,0x469,0x46A,0x46B,0x46C,0x46D,0x46E,0x46F,0x470,0x471,0x472,0x473,0x474,0x475,0x476,0x477,0x478,0x479,0x47A,0x47B,0x47C,0x47D,0x47E,0x47F,0x480,0x481,0x48A,0x48B,0x48C,0x48D,0x48E,0x48F,0x490,0x491,0x492,0x493,0x494,0x495,0x496,0x497,0x498,0x499,0x49A,0x49B,0x49C,0x49D,0x49E,0x49F,0x4A0,0x4A1,0x4A2,0x4A3,0x4A4,0x4A5,0x4A6,0x4A7,0x4A8,0x4A9,0x4AA,0x4AB,0x4AC,0x4AD,0x4AE,0x4AF,0x4B0,0x4B1,0x4B2,0x4B3,0x4B4,0x4B5,0x4B6,0x4B7,0x4B8,0x4B9,0x4BA,0x4BB,0x4BC,0x4BD,0x4BE,0x4BF,0x4C0,0x4C2,0x4C3,0x4C4,0x4C5,0x4C6,0x4C7,0x4C8,0x4C9,0x4CA,0x4CB,0x4CC,0x4CD,0x4CE,0x4D0,0x4D1,0x4D2,0x4D3,0x4D4,0x4D5,0x4D6,0x4D7,0x4D8,0x4D9,0x4DA,0x4DB,0x4DC,0x4DD,0x4DE,0x4DF,0x4E0,0x4E1,0x4E2,0x4E3,0x4E4,0x4E5,0x4E6,0x4E7,0x4E8,0x4E9,0x4EA,0x4EB,0x4EC,0x4ED,0x4EE,0x4EF,0x4F0,0x4F1,0x4F2,0x4F3,0x4F4,0x4F5,0x4F6,0x4F7,0x4F8,0x4F9,0x4FA,0x4FB,0x4FC,0x4FD,0x4FE,0x4FF,0x500,0x501,0x502,0x503,0x504,0x505,0x506,0x507,0x508,0x509,0x50A,0x50B,0x50C,0x50D,0x50E,0x50F,0x510,0x511,0x512,0x513,0x514,0x515,0x516,0x517,0x518,0x519,0x51A,0x51B,0x51C,0x51D,0x51E,0x51F,0x520,0x521,0x522,0x523,0x531,0x557,0x10A0,0x10C6,0x1E00,0x1E01,0x1E02,0x1E03,0x1E04,0x1E05,0x1E06,0x1E07,0x1E08,0x1E09,0x1E0A,0x1E0B,0x1E0C,0x1E0D,0x1E0E,0x1E0F,0x1E10,0x1E11,0x1E12,0x1E13,0x1E14,0x1E15,0x1E16,0x1E17,0x1E18,0x1E19,0x1E1A,0x1E1B,0x1E1C,0x1E1D,0x1E1E,0x1E1F,0x1E20,0x1E21,0x1E22,0x1E23,0x1E24,0x1E25,0x1E26,0x1E27,0x1E28,0x1E29,0x1E2A,0x1E2B,0x1E2C,0x1E2D,0x1E2E,0x1E2F,0x1E30,0x1E31,0x1E32,0x1E33,0x1E34,0x1E35,0x1E36,0x1E37,0x1E38,0x1E39,0x1E3A,0x1E3B,0x1E3C,0x1E3D,0x1E3E,0x1E3F,0x1E40,0x1E41,0x1E42,0x1E43,0x1E44,0x1E45,0x1E46,0x1E47,0x1E48,0x1E49,0x1E4A,0x1E4B,0x1E4C,0x1E4D,0x1E4E,0x1E4F,0x1E50,0x1E51,0x1E52,0x1E53,0x1E54,0x1E55,0x1E56,0x1E57,0x1E58,0x1E59,0x1E5A,0x1E5B,0x1E5C,0x1E5D,0x1E5E,0x1E5F,0x1E60,0x1E61,0x1E62,0x1E63,0x1E64,0x1E65,0x1E66,0x1E67,0x1E68,0x1E69,0x1E6A,0x1E6B,0x1E6C,0x1E6D,0x1E6E,0x1E6F,0x1E70,0x1E71,0x1E72,0x1E73,0x1E74,0x1E75,0x1E76,0x1E77,0x1E78,0x1E79,0x1E7A,0x1E7B,0x1E7C,0x1E7D,0x1E7E,0x1E7F,0x1E80,0x1E81,0x1E82,0x1E83,0x1E84,0x1E85,0x1E86,0x1E87,0x1E88,0x1E89,0x1E8A,0x1E8B,0x1E8C,0x1E8D,0x1E8E,0x1E8F,0x1E90,0x1E91,0x1E92,0x1E93,0x1E94,0x1E95,0x1E9E,0x1E9F,0x1EA0,0x1EA1,0x1EA2,0x1EA3,0x1EA4,0x1EA5,0x1EA6,0x1EA7,0x1EA8,0x1EA9,0x1EAA,0x1EAB,0x1EAC,0x1EAD,0x1EAE,0x1EAF,0x1EB0,0x1EB1,0x1EB2,0x1EB3,0x1EB4,0x1EB5,0x1EB6,0x1EB7,0x1EB8,0x1EB9,0x1EBA,0x1EBB,0x1EBC,0x1EBD,0x1EBE,0x1EBF,0x1EC0,0x1EC1,0x1EC2,0x1EC3,0x1EC4,0x1EC5,0x1EC6,0x1EC7,0x1EC8,0x1EC9,0x1ECA,0x1ECB,0x1ECC,0x1ECD,0x1ECE,0x1ECF,0x1ED0,0x1ED1,0x1ED2,0x1ED3,0x1ED4,0x1ED5,0x1ED6,0x1ED7,0x1ED8,0x1ED9,0x1EDA,0x1EDB,0x1EDC,0x1EDD,0x1EDE,0x1EDF,0x1EE0,0x1EE1,0x1EE2,0x1EE3,0x1EE4,0x1EE5,0x1EE6,0x1EE7,0x1EE8,0x1EE9,0x1EEA,0x1EEB,0x1EEC,0x1EED,0x1EEE,0x1EEF,0x1EF0,0x1EF1,0x1EF2,0x1EF3,0x1EF4,0x1EF5,0x1EF6,0x1EF7,0x1EF8,0x1EF9,0x1EFA,0x1EFB,0x1EFC,0x1EFD,0x1EFE,0x1EFF,0x1F08,0x1F10,0x1F18,0x1F1E,0x1F28,0x1F30,0x1F38,0x1F40,0x1F48,0x1F4E,0x1F59,0x1F5A,0x1F5B,0x1F5C,0x1F5D,0x1F5E,0x1F5F,0x1F60,0x1F68,0x1F70,0x1FB8,0x1FBC,0x1FC8,0x1FCC,0x1FD8,0x1FDC,0x1FE8,0x1FED,0x1FF8,0x1FFC,0x2102,0x2103,0x2107,0x2108,0x210B,0x210E,0x2110,0x2113,0x2115,0x2116,0x2119,0x211E,0x2124,0x2125,0x2126,0x2127,0x2128,0x2129,0x212A,0x212E,0x2130,0x2134,0x213E,0x2140,0x2145,0x2146,0x2183,0x2184,0x2C00,0x2C2F,0x2C60,0x2C61,0x2C62,0x2C65,0x2C67,0x2C68,0x2C69,0x2C6A,0x2C6B,0x2C6C,0x2C6D,0x2C70,0x2C72,0x2C73,0x2C75,0x2C76,0x2C80,0x2C81,0x2C82,0x2C83,0x2C84,0x2C85,0x2C86,0x2C87,0x2C88,0x2C89,0x2C8A,0x2C8B,0x2C8C,0x2C8D,0x2C8E,0x2C8F,0x2C90,0x2C91,0x2C92,0x2C93,0x2C94,0x2C95,0x2C96,0x2C97,0x2C98,0x2C99,0x2C9A,0x2C9B,0x2C9C,0x2C9D,0x2C9E,0x2C9F,0x2CA0,0x2CA1,0x2CA2,0x2CA3,0x2CA4,0x2CA5,0x2CA6,0x2CA7,0x2CA8,0x2CA9,0x2CAA,0x2CAB,0x2CAC,0x2CAD,0x2CAE,0x2CAF,0x2CB0,0x2CB1,0x2CB2,0x2CB3,0x2CB4,0x2CB5,0x2CB6,0x2CB7,0x2CB8,0x2CB9,0x2CBA,0x2CBB,0x2CBC,0x2CBD,0x2CBE,0x2CBF,0x2CC0,0x2CC1,0x2CC2,0x2CC3,0x2CC4,0x2CC5,0x2CC6,0x2CC7,0x2CC8,0x2CC9,0x2CCA,0x2CCB,0x2CCC,0x2CCD,0x2CCE,0x2CCF,0x2CD0,0x2CD1,0x2CD2,0x2CD3,0x2CD4,0x2CD5,0x2CD6,0x2CD7,0x2CD8,0x2CD9,0x2CDA,0x2CDB,0x2CDC,0x2CDD,0x2CDE,0x2CDF,0x2CE0,0x2CE1,0x2CE2,0x2CE3,0xA640,0xA641,0xA642,0xA643,0xA644,0xA645,0xA646,0xA647,0xA648,0xA649,0xA64A,0xA64B,0xA64C,0xA64D,0xA64E,0xA64F,0xA650,0xA651,0xA652,0xA653,0xA654,0xA655,0xA656,0xA657,0xA658,0xA659,0xA65A,0xA65B,0xA65C,0xA65D,0xA65E,0xA65F,0xA662,0xA663,0xA664,0xA665,0xA666,0xA667,0xA668,0xA669,0xA66A,0xA66B,0xA66C,0xA66D,0xA680,0xA681,0xA682,0xA683,0xA684,0xA685,0xA686,0xA687,0xA688,0xA689,0xA68A,0xA68B,0xA68C,0xA68D,0xA68E,0xA68F,0xA690,0xA691,0xA692,0xA693,0xA694,0xA695,0xA696,0xA697,0xA722,0xA723,0xA724,0xA725,0xA726,0xA727,0xA728,0xA729,0xA72A,0xA72B,0xA72C,0xA72D,0xA72E,0xA72F,0xA732,0xA733,0xA734,0xA735,0xA736,0xA737,0xA738,0xA739,0xA73A,0xA73B,0xA73C,0xA73D,0xA73E,0xA73F,0xA740,0xA741,0xA742,0xA743,0xA744,0xA745,0xA746,0xA747,0xA748,0xA749,0xA74A,0xA74B,0xA74C,0xA74D,0xA74E,0xA74F,0xA750,0xA751,0xA752,0xA753,0xA754,0xA755,0xA756,0xA757,0xA758,0xA759,0xA75A,0xA75B,0xA75C,0xA75D,0xA75E,0xA75F,0xA760,0xA761,0xA762,0xA763,0xA764,0xA765,0xA766,0xA767,0xA768,0xA769,0xA76A,0xA76B,0xA76C,0xA76D,0xA76E,0xA76F,0xA779,0xA77A,0xA77B,0xA77C,0xA77D,0xA77F,0xA780,0xA781,0xA782,0xA783,0xA784,0xA785,0xA786,0xA787,0xA78B,0xA78C,0xFF21,0xFF3B,0x10400,0x10428,0x1D400,0x1D41A,0x1D434,0x1D44E,0x1D468,0x1D482,0x1D49C,0x1D49D,0x1D49E,0x1D4A0,0x1D4A2,0x1D4A3,0x1D4A5,0x1D4A7,0x1D4A9,0x1D4AD,0x1D4AE,0x1D4B6,0x1D4D0,0x1D4EA,0x1D504,0x1D506,0x1D507,0x1D50B,0x1D50D,0x1D515,0x1D516,0x1D51D,0x1D538,0x1D53A,0x1D53B,0x1D53F,0x1D540,0x1D545,0x1D546,0x1D547,0x1D54A,0x1D551,0x1D56C,0x1D586,0x1D5A0,0x1D5BA,0x1D5D4,0x1D5EE,0x1D608,0x1D622,0x1D63C,0x1D656,0x1D670,0x1D68A,0x1D6A8,0x1D6C1,0x1D6E2,0x1D6FB,0x1D71C,0x1D735,0x1D756,0x1D76F,0x1D790,0x1D7A9,0x1D7CA,0x1D7CB]
,Sk:[0x5E,0x5F,0x60,0x61,0xA8,0xA9,0xAF,0xB0,0xB4,0xB5,0xB8,0xB9,0x2C2,0x2C6,0x2D2,0x2E0,0x2E5,0x2EC,0x2ED,0x2EE,0x2EF,0x300,0x375,0x376,0x384,0x386,0x1FBD,0x1FBE,0x1FBF,0x1FC2,0x1FCD,0x1FD0,0x1FDD,0x1FE0,0x1FED,0x1FF0,0x1FFD,0x1FFF,0x309B,0x309D,0xA700,0xA717,0xA720,0xA722,0xA789,0xA78B,0xFF3E,0xFF3F,0xFF40,0xFF41,0xFFE3,0xFFE4]
,Pc:[0x5F,0x60,0x203F,0x2041,0x2054,0x2055,0xFE33,0xFE35,0xFE4D,0xFE50,0xFF3F,0xFF40]
,Ll:[0x61,0x7B,0xAA,0xAB,0xB5,0xB6,0xBA,0xBB,0xDF,0xF7,0xF8,0x100,0x101,0x102,0x103,0x104,0x105,0x106,0x107,0x108,0x109,0x10A,0x10B,0x10C,0x10D,0x10E,0x10F,0x110,0x111,0x112,0x113,0x114,0x115,0x116,0x117,0x118,0x119,0x11A,0x11B,0x11C,0x11D,0x11E,0x11F,0x120,0x121,0x122,0x123,0x124,0x125,0x126,0x127,0x128,0x129,0x12A,0x12B,0x12C,0x12D,0x12E,0x12F,0x130,0x131,0x132,0x133,0x134,0x135,0x136,0x137,0x139,0x13A,0x13B,0x13C,0x13D,0x13E,0x13F,0x140,0x141,0x142,0x143,0x144,0x145,0x146,0x147,0x148,0x14A,0x14B,0x14C,0x14D,0x14E,0x14F,0x150,0x151,0x152,0x153,0x154,0x155,0x156,0x157,0x158,0x159,0x15A,0x15B,0x15C,0x15D,0x15E,0x15F,0x160,0x161,0x162,0x163,0x164,0x165,0x166,0x167,0x168,0x169,0x16A,0x16B,0x16C,0x16D,0x16E,0x16F,0x170,0x171,0x172,0x173,0x174,0x175,0x176,0x177,0x178,0x17A,0x17B,0x17C,0x17D,0x17E,0x181,0x183,0x184,0x185,0x186,0x188,0x189,0x18C,0x18E,0x192,0x193,0x195,0x196,0x199,0x19C,0x19E,0x19F,0x1A1,0x1A2,0x1A3,0x1A4,0x1A5,0x1A6,0x1A8,0x1A9,0x1AA,0x1AC,0x1AD,0x1AE,0x1B0,0x1B1,0x1B4,0x1B5,0x1B6,0x1B7,0x1B9,0x1BB,0x1BD,0x1C0,0x1C6,0x1C7,0x1C9,0x1CA,0x1CC,0x1CD,0x1CE,0x1CF,0x1D0,0x1D1,0x1D2,0x1D3,0x1D4,0x1D5,0x1D6,0x1D7,0x1D8,0x1D9,0x1DA,0x1DB,0x1DC,0x1DE,0x1DF,0x1E0,0x1E1,0x1E2,0x1E3,0x1E4,0x1E5,0x1E6,0x1E7,0x1E8,0x1E9,0x1EA,0x1EB,0x1EC,0x1ED,0x1EE,0x1EF,0x1F1,0x1F3,0x1F4,0x1F5,0x1F6,0x1F9,0x1FA,0x1FB,0x1FC,0x1FD,0x1FE,0x1FF,0x200,0x201,0x202,0x203,0x204,0x205,0x206,0x207,0x208,0x209,0x20A,0x20B,0x20C,0x20D,0x20E,0x20F,0x210,0x211,0x212,0x213,0x214,0x215,0x216,0x217,0x218,0x219,0x21A,0x21B,0x21C,0x21D,0x21E,0x21F,0x220,0x221,0x222,0x223,0x224,0x225,0x226,0x227,0x228,0x229,0x22A,0x22B,0x22C,0x22D,0x22E,0x22F,0x230,0x231,0x232,0x233,0x23A,0x23C,0x23D,0x23F,0x241,0x242,0x243,0x247,0x248,0x249,0x24A,0x24B,0x24C,0x24D,0x24E,0x24F,0x294,0x295,0x2B0,0x371,0x372,0x373,0x374,0x377,0x378,0x37B,0x37E,0x390,0x391,0x3AC,0x3CF,0x3D0,0x3D2,0x3D5,0x3D8,0x3D9,0x3DA,0x3DB,0x3DC,0x3DD,0x3DE,0x3DF,0x3E0,0x3E1,0x3E2,0x3E3,0x3E4,0x3E5,0x3E6,0x3E7,0x3E8,0x3E9,0x3EA,0x3EB,0x3EC,0x3ED,0x3EE,0x3EF,0x3F4,0x3F5,0x3F6,0x3F8,0x3F9,0x3FB,0x3FD,0x430,0x460,0x461,0x462,0x463,0x464,0x465,0x466,0x467,0x468,0x469,0x46A,0x46B,0x46C,0x46D,0x46E,0x46F,0x470,0x471,0x472,0x473,0x474,0x475,0x476,0x477,0x478,0x479,0x47A,0x47B,0x47C,0x47D,0x47E,0x47F,0x480,0x481,0x482,0x48B,0x48C,0x48D,0x48E,0x48F,0x490,0x491,0x492,0x493,0x494,0x495,0x496,0x497,0x498,0x499,0x49A,0x49B,0x49C,0x49D,0x49E,0x49F,0x4A0,0x4A1,0x4A2,0x4A3,0x4A4,0x4A5,0x4A6,0x4A7,0x4A8,0x4A9,0x4AA,0x4AB,0x4AC,0x4AD,0x4AE,0x4AF,0x4B0,0x4B1,0x4B2,0x4B3,0x4B4,0x4B5,0x4B6,0x4B7,0x4B8,0x4B9,0x4BA,0x4BB,0x4BC,0x4BD,0x4BE,0x4BF,0x4C0,0x4C2,0x4C3,0x4C4,0x4C5,0x4C6,0x4C7,0x4C8,0x4C9,0x4CA,0x4CB,0x4CC,0x4CD,0x4CE,0x4D0,0x4D1,0x4D2,0x4D3,0x4D4,0x4D5,0x4D6,0x4D7,0x4D8,0x4D9,0x4DA,0x4DB,0x4DC,0x4DD,0x4DE,0x4DF,0x4E0,0x4E1,0x4E2,0x4E3,0x4E4,0x4E5,0x4E6,0x4E7,0x4E8,0x4E9,0x4EA,0x4EB,0x4EC,0x4ED,0x4EE,0x4EF,0x4F0,0x4F1,0x4F2,0x4F3,0x4F4,0x4F5,0x4F6,0x4F7,0x4F8,0x4F9,0x4FA,0x4FB,0x4FC,0x4FD,0x4FE,0x4FF,0x500,0x501,0x502,0x503,0x504,0x505,0x506,0x507,0x508,0x509,0x50A,0x50B,0x50C,0x50D,0x50E,0x50F,0x510,0x511,0x512,0x513,0x514,0x515,0x516,0x517,0x518,0x519,0x51A,0x51B,0x51C,0x51D,0x51E,0x51F,0x520,0x521,0x522,0x523,0x524,0x561,0x588,0x1D00,0x1D2C,0x1D62,0x1D78,0x1D79,0x1D9B,0x1E01,0x1E02,0x1E03,0x1E04,0x1E05,0x1E06,0x1E07,0x1E08,0x1E09,0x1E0A,0x1E0B,0x1E0C,0x1E0D,0x1E0E,0x1E0F,0x1E10,0x1E11,0x1E12,0x1E13,0x1E14,0x1E15,0x1E16,0x1E17,0x1E18,0x1E19,0x1E1A,0x1E1B,0x1E1C,0x1E1D,0x1E1E,0x1E1F,0x1E20,0x1E21,0x1E22,0x1E23,0x1E24,0x1E25,0x1E26,0x1E27,0x1E28,0x1E29,0x1E2A,0x1E2B,0x1E2C,0x1E2D,0x1E2E,0x1E2F,0x1E30,0x1E31,0x1E32,0x1E33,0x1E34,0x1E35,0x1E36,0x1E37,0x1E38,0x1E39,0x1E3A,0x1E3B,0x1E3C,0x1E3D,0x1E3E,0x1E3F,0x1E40,0x1E41,0x1E42,0x1E43,0x1E44,0x1E45,0x1E46,0x1E47,0x1E48,0x1E49,0x1E4A,0x1E4B,0x1E4C,0x1E4D,0x1E4E,0x1E4F,0x1E50,0x1E51,0x1E52,0x1E53,0x1E54,0x1E55,0x1E56,0x1E57,0x1E58,0x1E59,0x1E5A,0x1E5B,0x1E5C,0x1E5D,0x1E5E,0x1E5F,0x1E60,0x1E61,0x1E62,0x1E63,0x1E64,0x1E65,0x1E66,0x1E67,0x1E68,0x1E69,0x1E6A,0x1E6B,0x1E6C,0x1E6D,0x1E6E,0x1E6F,0x1E70,0x1E71,0x1E72,0x1E73,0x1E74,0x1E75,0x1E76,0x1E77,0x1E78,0x1E79,0x1E7A,0x1E7B,0x1E7C,0x1E7D,0x1E7E,0x1E7F,0x1E80,0x1E81,0x1E82,0x1E83,0x1E84,0x1E85,0x1E86,0x1E87,0x1E88,0x1E89,0x1E8A,0x1E8B,0x1E8C,0x1E8D,0x1E8E,0x1E8F,0x1E90,0x1E91,0x1E92,0x1E93,0x1E94,0x1E95,0x1E9E,0x1E9F,0x1EA0,0x1EA1,0x1EA2,0x1EA3,0x1EA4,0x1EA5,0x1EA6,0x1EA7,0x1EA8,0x1EA9,0x1EAA,0x1EAB,0x1EAC,0x1EAD,0x1EAE,0x1EAF,0x1EB0,0x1EB1,0x1EB2,0x1EB3,0x1EB4,0x1EB5,0x1EB6,0x1EB7,0x1EB8,0x1EB9,0x1EBA,0x1EBB,0x1EBC,0x1EBD,0x1EBE,0x1EBF,0x1EC0,0x1EC1,0x1EC2,0x1EC3,0x1EC4,0x1EC5,0x1EC6,0x1EC7,0x1EC8,0x1EC9,0x1ECA,0x1ECB,0x1ECC,0x1ECD,0x1ECE,0x1ECF,0x1ED0,0x1ED1,0x1ED2,0x1ED3,0x1ED4,0x1ED5,0x1ED6,0x1ED7,0x1ED8,0x1ED9,0x1EDA,0x1EDB,0x1EDC,0x1EDD,0x1EDE,0x1EDF,0x1EE0,0x1EE1,0x1EE2,0x1EE3,0x1EE4,0x1EE5,0x1EE6,0x1EE7,0x1EE8,0x1EE9,0x1EEA,0x1EEB,0x1EEC,0x1EED,0x1EEE,0x1EEF,0x1EF0,0x1EF1,0x1EF2,0x1EF3,0x1EF4,0x1EF5,0x1EF6,0x1EF7,0x1EF8,0x1EF9,0x1EFA,0x1EFB,0x1EFC,0x1EFD,0x1EFE,0x1EFF,0x1F08,0x1F10,0x1F16,0x1F20,0x1F28,0x1F30,0x1F38,0x1F40,0x1F46,0x1F50,0x1F58,0x1F60,0x1F68,0x1F70,0x1F7E,0x1F80,0x1F88,0x1F90,0x1F98,0x1FA0,0x1FA8,0x1FB0,0x1FB5,0x1FB6,0x1FB8,0x1FBE,0x1FBF,0x1FC2,0x1FC5,0x1FC6,0x1FC8,0x1FD0,0x1FD4,0x1FD6,0x1FD8,0x1FE0,0x1FE8,0x1FF2,0x1FF5,0x1FF6,0x1FF8,0x2071,0x2072,0x207F,0x2080,0x210A,0x210B,0x210E,0x2110,0x2113,0x2114,0x212F,0x2130,0x2134,0x2135,0x2139,0x213A,0x213C,0x213E,0x2146,0x214A,0x214E,0x214F,0x2184,0x2185,0x2C30,0x2C5F,0x2C61,0x2C62,0x2C65,0x2C67,0x2C68,0x2C69,0x2C6A,0x2C6B,0x2C6C,0x2C6D,0x2C71,0x2C72,0x2C73,0x2C75,0x2C76,0x2C7D,0x2C81,0x2C82,0x2C83,0x2C84,0x2C85,0x2C86,0x2C87,0x2C88,0x2C89,0x2C8A,0x2C8B,0x2C8C,0x2C8D,0x2C8E,0x2C8F,0x2C90,0x2C91,0x2C92,0x2C93,0x2C94,0x2C95,0x2C96,0x2C97,0x2C98,0x2C99,0x2C9A,0x2C9B,0x2C9C,0x2C9D,0x2C9E,0x2C9F,0x2CA0,0x2CA1,0x2CA2,0x2CA3,0x2CA4,0x2CA5,0x2CA6,0x2CA7,0x2CA8,0x2CA9,0x2CAA,0x2CAB,0x2CAC,0x2CAD,0x2CAE,0x2CAF,0x2CB0,0x2CB1,0x2CB2,0x2CB3,0x2CB4,0x2CB5,0x2CB6,0x2CB7,0x2CB8,0x2CB9,0x2CBA,0x2CBB,0x2CBC,0x2CBD,0x2CBE,0x2CBF,0x2CC0,0x2CC1,0x2CC2,0x2CC3,0x2CC4,0x2CC5,0x2CC6,0x2CC7,0x2CC8,0x2CC9,0x2CCA,0x2CCB,0x2CCC,0x2CCD,0x2CCE,0x2CCF,0x2CD0,0x2CD1,0x2CD2,0x2CD3,0x2CD4,0x2CD5,0x2CD6,0x2CD7,0x2CD8,0x2CD9,0x2CDA,0x2CDB,0x2CDC,0x2CDD,0x2CDE,0x2CDF,0x2CE0,0x2CE1,0x2CE2,0x2CE3,0x2CE5,0x2D00,0x2D26,0xA641,0xA642,0xA643,0xA644,0xA645,0xA646,0xA647,0xA648,0xA649,0xA64A,0xA64B,0xA64C,0xA64D,0xA64E,0xA64F,0xA650,0xA651,0xA652,0xA653,0xA654,0xA655,0xA656,0xA657,0xA658,0xA659,0xA65A,0xA65B,0xA65C,0xA65D,0xA65E,0xA65F,0xA660,0xA663,0xA664,0xA665,0xA666,0xA667,0xA668,0xA669,0xA66A,0xA66B,0xA66C,0xA66D,0xA66E,0xA681,0xA682,0xA683,0xA684,0xA685,0xA686,0xA687,0xA688,0xA689,0xA68A,0xA68B,0xA68C,0xA68D,0xA68E,0xA68F,0xA690,0xA691,0xA692,0xA693,0xA694,0xA695,0xA696,0xA697,0xA698,0xA723,0xA724,0xA725,0xA726,0xA727,0xA728,0xA729,0xA72A,0xA72B,0xA72C,0xA72D,0xA72E,0xA72F,0xA732,0xA733,0xA734,0xA735,0xA736,0xA737,0xA738,0xA739,0xA73A,0xA73B,0xA73C,0xA73D,0xA73E,0xA73F,0xA740,0xA741,0xA742,0xA743,0xA744,0xA745,0xA746,0xA747,0xA748,0xA749,0xA74A,0xA74B,0xA74C,0xA74D,0xA74E,0xA74F,0xA750,0xA751,0xA752,0xA753,0xA754,0xA755,0xA756,0xA757,0xA758,0xA759,0xA75A,0xA75B,0xA75C,0xA75D,0xA75E,0xA75F,0xA760,0xA761,0xA762,0xA763,0xA764,0xA765,0xA766,0xA767,0xA768,0xA769,0xA76A,0xA76B,0xA76C,0xA76D,0xA76E,0xA76F,0xA770,0xA771,0xA779,0xA77A,0xA77B,0xA77C,0xA77D,0xA77F,0xA780,0xA781,0xA782,0xA783,0xA784,0xA785,0xA786,0xA787,0xA788,0xA78C,0xA78D,0xFB00,0xFB07,0xFB13,0xFB18,0xFF41,0xFF5B,0x10428,0x10450,0x1D41A,0x1D434,0x1D44E,0x1D455,0x1D456,0x1D468,0x1D482,0x1D49C,0x1D4B6,0x1D4BA,0x1D4BB,0x1D4BC,0x1D4BD,0x1D4C4,0x1D4C5,0x1D4D0,0x1D4EA,0x1D504,0x1D51E,0x1D538,0x1D552,0x1D56C,0x1D586,0x1D5A0,0x1D5BA,0x1D5D4,0x1D5EE,0x1D608,0x1D622,0x1D63C,0x1D656,0x1D670,0x1D68A,0x1D6A6,0x1D6C2,0x1D6DB,0x1D6DC,0x1D6E2,0x1D6FC,0x1D715,0x1D716,0x1D71C,0x1D736,0x1D74F,0x1D750,0x1D756,0x1D770,0x1D789,0x1D78A,0x1D790,0x1D7AA,0x1D7C3,0x1D7C4,0x1D7CA,0x1D7CB,0x1D7CC]
,So:[0xA6,0xA8,0xA9,0xAA,0xAE,0xAF,0xB0,0xB1,0xB6,0xB7,0x482,0x483,0x60E,0x610,0x6E9,0x6EA,0x6FD,0x6FF,0x7F6,0x7F7,0x9FA,0x9FB,0xB70,0xB71,0xBF3,0xBF9,0xBFA,0xBFB,0xC7F,0xC80,0xCF1,0xCF3,0xD79,0xD7A,0xF01,0xF04,0xF13,0xF18,0xF1A,0xF20,0xF34,0xF35,0xF36,0xF37,0xF38,0xF39,0xFBE,0xFC6,0xFC7,0xFCD,0xFCE,0xFD0,0x109E,0x10A0,0x1360,0x1361,0x1390,0x139A,0x1940,0x1941,0x19E0,0x1A00,0x1B61,0x1B6B,0x1B74,0x1B7D,0x2100,0x2102,0x2103,0x2107,0x2108,0x210A,0x2114,0x2115,0x2116,0x2119,0x211E,0x2124,0x2125,0x2126,0x2127,0x2128,0x2129,0x212A,0x212E,0x212F,0x213A,0x213C,0x214A,0x214B,0x214C,0x214E,0x214F,0x2150,0x2195,0x219A,0x219C,0x21A0,0x21A1,0x21A3,0x21A4,0x21A6,0x21A7,0x21AE,0x21AF,0x21CE,0x21D0,0x21D2,0x21D3,0x21D4,0x21D5,0x21F4,0x2300,0x2308,0x230C,0x2320,0x2322,0x2329,0x232B,0x237C,0x237D,0x239B,0x23B4,0x23DC,0x23E2,0x23E8,0x2400,0x2427,0x2440,0x244B,0x249C,0x24EA,0x2500,0x25B7,0x25B8,0x25C1,0x25C2,0x25F8,0x2600,0x266F,0x2670,0x269E,0x26A0,0x26BD,0x26C0,0x26C4,0x2701,0x2705,0x2706,0x270A,0x270C,0x2728,0x2729,0x274C,0x274D,0x274E,0x274F,0x2753,0x2756,0x2757,0x2758,0x275F,0x2761,0x2768,0x2794,0x2795,0x2798,0x27B0,0x27B1,0x27BF,0x2800,0x2900,0x2B00,0x2B30,0x2B45,0x2B47,0x2B50,0x2B55,0x2CE5,0x2CEB,0x2E80,0x2E9A,0x2E9B,0x2EF4,0x2F00,0x2FD6,0x2FF0,0x2FFC,0x3004,0x3005,0x3012,0x3014,0x3020,0x3021,0x3036,0x3038,0x303E,0x3040,0x3190,0x3192,0x3196,0x31A0,0x31C0,0x31E4,0x3200,0x321F,0x322A,0x3244,0x3250,0x3251,0x3260,0x3280,0x328A,0x32B1,0x32C0,0x32FF,0x3300,0x3400,0x4DC0,0x4E00,0xA490,0xA4C7,0xA828,0xA82C,0xFDFD,0xFDFE,0xFFE4,0xFFE5,0xFFE8,0xFFE9,0xFFED,0xFFEF,0xFFFC,0xFFFE,0x10102,0x10103,0x10137,0x10140,0x10179,0x1018A,0x10190,0x1019C,0x101D0,0x101FD,0x1D000,0x1D0F6,0x1D100,0x1D127,0x1D129,0x1D165,0x1D16A,0x1D16D,0x1D183,0x1D185,0x1D18C,0x1D1AA,0x1D1AE,0x1D1DE,0x1D200,0x1D242,0x1D245,0x1D246,0x1D300,0x1D357,0x1F000,0x1F02C,0x1F030,0x1F094]
,Pi:[0xAB,0xAC,0x2018,0x2019,0x201B,0x201D,0x201F,0x2020,0x2039,0x203A,0x2E02,0x2E03,0x2E04,0x2E05,0x2E09,0x2E0A,0x2E0C,0x2E0D,0x2E1C,0x2E1D,0x2E20,0x2E21]
,Cf:[0xAD,0xAE,0x600,0x604,0x6DD,0x6DE,0x70F,0x710,0x17B4,0x17B6,0x200B,0x2010,0x202A,0x202F,0x2060,0x2065,0x206A,0x2070,0xFEFF,0xFF00,0xFFF9,0xFFFC,0x1D173,0x1D17B,0xE0001,0xE0002,0xE0020,0xE0080]
,No:[0xB2,0xB4,0xB9,0xBA,0xBC,0xBF,0x9F4,0x9FA,0xBF0,0xBF3,0xC78,0xC7F,0xD70,0xD76,0xF2A,0xF34,0x1369,0x137D,0x17F0,0x17FA,0x2070,0x2071,0x2074,0x207A,0x2080,0x208A,0x2153,0x2160,0x2460,0x249C,0x24EA,0x2500,0x2776,0x2794,0x2CFD,0x2CFE,0x3192,0x3196,0x3220,0x322A,0x3251,0x3260,0x3280,0x328A,0x32B1,0x32C0,0x10107,0x10134,0x10175,0x10179,0x1018A,0x1018B,0x10320,0x10324,0x10916,0x1091A,0x10A40,0x10A48,0x1D360,0x1D372]
,Pf:[0xBB,0xBC,0x2019,0x201A,0x201D,0x201E,0x203A,0x203B,0x2E03,0x2E04,0x2E05,0x2E06,0x2E0A,0x2E0B,0x2E0D,0x2E0E,0x2E1D,0x2E1E,0x2E21,0x2E22]
,Lo:[0x1BB,0x1BC,0x1C0,0x1C4,0x294,0x295,0x5D0,0x5EB,0x5F0,0x5F3,0x621,0x640,0x641,0x64B,0x66E,0x670,0x671,0x6D4,0x6D5,0x6D6,0x6EE,0x6F0,0x6FA,0x6FD,0x6FF,0x700,0x710,0x711,0x712,0x730,0x74D,0x7A6,0x7B1,0x7B2,0x7CA,0x7EB,0x904,0x93A,0x93D,0x93E,0x950,0x951,0x958,0x962,0x972,0x973,0x97B,0x980,0x985,0x98D,0x98F,0x991,0x993,0x9A9,0x9AA,0x9B1,0x9B2,0x9B3,0x9B6,0x9BA,0x9BD,0x9BE,0x9CE,0x9CF,0x9DC,0x9DE,0x9DF,0x9E2,0x9F0,0x9F2,0xA05,0xA0B,0xA0F,0xA11,0xA13,0xA29,0xA2A,0xA31,0xA32,0xA34,0xA35,0xA37,0xA38,0xA3A,0xA59,0xA5D,0xA5E,0xA5F,0xA72,0xA75,0xA85,0xA8E,0xA8F,0xA92,0xA93,0xAA9,0xAAA,0xAB1,0xAB2,0xAB4,0xAB5,0xABA,0xABD,0xABE,0xAD0,0xAD1,0xAE0,0xAE2,0xB05,0xB0D,0xB0F,0xB11,0xB13,0xB29,0xB2A,0xB31,0xB32,0xB34,0xB35,0xB3A,0xB3D,0xB3E,0xB5C,0xB5E,0xB5F,0xB62,0xB71,0xB72,0xB83,0xB84,0xB85,0xB8B,0xB8E,0xB91,0xB92,0xB96,0xB99,0xB9B,0xB9C,0xB9D,0xB9E,0xBA0,0xBA3,0xBA5,0xBA8,0xBAB,0xBAE,0xBBA,0xBD0,0xBD1,0xC05,0xC0D,0xC0E,0xC11,0xC12,0xC29,0xC2A,0xC34,0xC35,0xC3A,0xC3D,0xC3E,0xC58,0xC5A,0xC60,0xC62,0xC85,0xC8D,0xC8E,0xC91,0xC92,0xCA9,0xCAA,0xCB4,0xCB5,0xCBA,0xCBD,0xCBE,0xCDE,0xCDF,0xCE0,0xCE2,0xD05,0xD0D,0xD0E,0xD11,0xD12,0xD29,0xD2A,0xD3A,0xD3D,0xD3E,0xD60,0xD62,0xD7A,0xD80,0xD85,0xD97,0xD9A,0xDB2,0xDB3,0xDBC,0xDBD,0xDBE,0xDC0,0xDC7,0xE01,0xE31,0xE32,0xE34,0xE40,0xE46,0xE81,0xE83,0xE84,0xE85,0xE87,0xE89,0xE8A,0xE8B,0xE8D,0xE8E,0xE94,0xE98,0xE99,0xEA0,0xEA1,0xEA4,0xEA5,0xEA6,0xEA7,0xEA8,0xEAA,0xEAC,0xEAD,0xEB1,0xEB2,0xEB4,0xEBD,0xEBE,0xEC0,0xEC5,0xEDC,0xEDE,0xF00,0xF01,0xF40,0xF48,0xF49,0xF6D,0xF88,0xF8C,0x1000,0x102B,0x103F,0x1040,0x1050,0x1056,0x105A,0x105E,0x1061,0x1062,0x1065,0x1067,0x106E,0x1071,0x1075,0x1082,0x108E,0x108F,0x10D0,0x10FB,0x1100,0x115A,0x115F,0x11A3,0x11A8,0x11FA,0x1200,0x1249,0x124A,0x124E,0x1250,0x1257,0x1258,0x1259,0x125A,0x125E,0x1260,0x1289,0x128A,0x128E,0x1290,0x12B1,0x12B2,0x12B6,0x12B8,0x12BF,0x12C0,0x12C1,0x12C2,0x12C6,0x12C8,0x12D7,0x12D8,0x1311,0x1312,0x1316,0x1318,0x135B,0x1380,0x1390,0x13A0,0x13F5,0x1401,0x166D,0x166F,0x1677,0x1681,0x169B,0x16A0,0x16EB,0x1700,0x170D,0x170E,0x1712,0x1720,0x1732,0x1740,0x1752,0x1760,0x176D,0x176E,0x1771,0x1780,0x17B4,0x17DC,0x17DD,0x1820,0x1843,0x1844,0x1878,0x1880,0x18A9,0x18AA,0x18AB,0x1900,0x191D,0x1950,0x196E,0x1970,0x1975,0x1980,0x19AA,0x19C1,0x19C8,0x1A00,0x1A17,0x1B05,0x1B34,0x1B45,0x1B4C,0x1B83,0x1BA1,0x1BAE,0x1BB0,0x1C00,0x1C24,0x1C4D,0x1C50,0x1C5A,0x1C78,0x2135,0x2139,0x2D30,0x2D66,0x2D80,0x2D97,0x2DA0,0x2DA7,0x2DA8,0x2DAF,0x2DB0,0x2DB7,0x2DB8,0x2DBF,0x2DC0,0x2DC7,0x2DC8,0x2DCF,0x2DD0,0x2DD7,0x2DD8,0x2DDF,0x3006,0x3007,0x303C,0x303D,0x3041,0x3097,0x309F,0x30A0,0x30A1,0x30FB,0x30FF,0x3100,0x3105,0x312E,0x3131,0x318F,0x31A0,0x31B8,0x31F0,0x3200,0x3400,0x4DB6,0x4E00,0x9FC4,0xA000,0xA015,0xA016,0xA48D,0xA500,0xA60C,0xA610,0xA620,0xA62A,0xA62C,0xA66E,0xA66F,0xA7FB,0xA802,0xA803,0xA806,0xA807,0xA80B,0xA80C,0xA823,0xA840,0xA874,0xA882,0xA8B4,0xA90A,0xA926,0xA930,0xA947,0xAA00,0xAA29,0xAA40,0xAA43,0xAA44,0xAA4C,0xAC00,0xD7A4,0xF900,0xFA2E,0xFA30,0xFA6B,0xFA70,0xFADA,0xFB1D,0xFB1E,0xFB1F,0xFB29,0xFB2A,0xFB37,0xFB38,0xFB3D,0xFB3E,0xFB3F,0xFB40,0xFB42,0xFB43,0xFB45,0xFB46,0xFBB2,0xFBD3,0xFD3E,0xFD50,0xFD90,0xFD92,0xFDC8,0xFDF0,0xFDFC,0xFE70,0xFE75,0xFE76,0xFEFD,0xFF66,0xFF70,0xFF71,0xFF9E,0xFFA0,0xFFBF,0xFFC2,0xFFC8,0xFFCA,0xFFD0,0xFFD2,0xFFD8,0xFFDA,0xFFDD,0x10000,0x1000C,0x1000D,0x10027,0x10028,0x1003B,0x1003C,0x1003E,0x1003F,0x1004E,0x10050,0x1005E,0x10080,0x100FB,0x10280,0x1029D,0x102A0,0x102D1,0x10300,0x1031F,0x10330,0x10341,0x10342,0x1034A,0x10380,0x1039E,0x103A0,0x103C4,0x103C8,0x103D0,0x10450,0x1049E,0x10800,0x10806,0x10808,0x10809,0x1080A,0x10836,0x10837,0x10839,0x1083C,0x1083D,0x1083F,0x10840,0x10900,0x10916,0x10920,0x1093A,0x10A00,0x10A01,0x10A10,0x10A14,0x10A15,0x10A18,0x10A19,0x10A34,0x12000,0x1236F,0x20000,0x2A6D7,0x2F800,0x2FA1E]
,Lt:[0x1C5,0x1C6,0x1C8,0x1C9,0x1CB,0x1CC,0x1F2,0x1F3,0x1F88,0x1F90,0x1F98,0x1FA0,0x1FA8,0x1FB0,0x1FBC,0x1FBD,0x1FCC,0x1FCD,0x1FFC,0x1FFD]
,Lm:[0x2B0,0x2C2,0x2C6,0x2D2,0x2E0,0x2E5,0x2EC,0x2ED,0x2EE,0x2EF,0x374,0x375,0x37A,0x37B,0x559,0x55A,0x640,0x641,0x6E5,0x6E7,0x7F4,0x7F6,0x7FA,0x7FB,0x971,0x972,0xE46,0xE47,0xEC6,0xEC7,0x10FC,0x10FD,0x17D7,0x17D8,0x1843,0x1844,0x1C78,0x1C7E,0x1D2C,0x1D62,0x1D78,0x1D79,0x1D9B,0x1DC0,0x2090,0x2095,0x2C7D,0x2C7E,0x2D6F,0x2D70,0x2E2F,0x2E30,0x3005,0x3006,0x3031,0x3036,0x303B,0x303C,0x309D,0x309F,0x30FC,0x30FF,0xA015,0xA016,0xA60C,0xA60D,0xA67F,0xA680,0xA717,0xA720,0xA770,0xA771,0xA788,0xA789,0xFF70,0xFF71,0xFF9E,0xFFA0]
,Mn:[0x300,0x370,0x483,0x488,0x591,0x5BE,0x5BF,0x5C0,0x5C1,0x5C3,0x5C4,0x5C6,0x5C7,0x5C8,0x610,0x61B,0x64B,0x65F,0x670,0x671,0x6D6,0x6DD,0x6DF,0x6E5,0x6E7,0x6E9,0x6EA,0x6EE,0x711,0x712,0x730,0x74B,0x7A6,0x7B1,0x7EB,0x7F4,0x901,0x903,0x93C,0x93D,0x941,0x949,0x94D,0x94E,0x951,0x955,0x962,0x964,0x981,0x982,0x9BC,0x9BD,0x9C1,0x9C5,0x9CD,0x9CE,0x9E2,0x9E4,0xA01,0xA03,0xA3C,0xA3D,0xA41,0xA43,0xA47,0xA49,0xA4B,0xA4E,0xA51,0xA52,0xA70,0xA72,0xA75,0xA76,0xA81,0xA83,0xABC,0xABD,0xAC1,0xAC6,0xAC7,0xAC9,0xACD,0xACE,0xAE2,0xAE4,0xB01,0xB02,0xB3C,0xB3D,0xB3F,0xB40,0xB41,0xB45,0xB4D,0xB4E,0xB56,0xB57,0xB62,0xB64,0xB82,0xB83,0xBC0,0xBC1,0xBCD,0xBCE,0xC3E,0xC41,0xC46,0xC49,0xC4A,0xC4E,0xC55,0xC57,0xC62,0xC64,0xCBC,0xCBD,0xCBF,0xCC0,0xCC6,0xCC7,0xCCC,0xCCE,0xCE2,0xCE4,0xD41,0xD45,0xD4D,0xD4E,0xD62,0xD64,0xDCA,0xDCB,0xDD2,0xDD5,0xDD6,0xDD7,0xE31,0xE32,0xE34,0xE3B,0xE47,0xE4F,0xEB1,0xEB2,0xEB4,0xEBA,0xEBB,0xEBD,0xEC8,0xECE,0xF18,0xF1A,0xF35,0xF36,0xF37,0xF38,0xF39,0xF3A,0xF71,0xF7F,0xF80,0xF85,0xF86,0xF88,0xF90,0xF98,0xF99,0xFBD,0xFC6,0xFC7,0x102D,0x1031,0x1032,0x1038,0x1039,0x103B,0x103D,0x103F,0x1058,0x105A,0x105E,0x1061,0x1071,0x1075,0x1082,0x1083,0x1085,0x1087,0x108D,0x108E,0x135F,0x1360,0x1712,0x1715,0x1732,0x1735,0x1752,0x1754,0x1772,0x1774,0x17B7,0x17BE,0x17C6,0x17C7,0x17C9,0x17D4,0x17DD,0x17DE,0x180B,0x180E,0x18A9,0x18AA,0x1920,0x1923,0x1927,0x1929,0x1932,0x1933,0x1939,0x193C,0x1A17,0x1A19,0x1B00,0x1B04,0x1B34,0x1B35,0x1B36,0x1B3B,0x1B3C,0x1B3D,0x1B42,0x1B43,0x1B6B,0x1B74,0x1B80,0x1B82,0x1BA2,0x1BA6,0x1BA8,0x1BAA,0x1C2C,0x1C34,0x1C36,0x1C38,0x1DC0,0x1DE7,0x1DFE,0x1E00,0x20D0,0x20DD,0x20E1,0x20E2,0x20E5,0x20F1,0x2DE0,0x2E00,0x302A,0x3030,0x3099,0x309B,0xA66F,0xA670,0xA67C,0xA67E,0xA802,0xA803,0xA806,0xA807,0xA80B,0xA80C,0xA825,0xA827,0xA8C4,0xA8C5,0xA926,0xA92E,0xA947,0xA952,0xAA29,0xAA2F,0xAA31,0xAA33,0xAA35,0xAA37,0xAA43,0xAA44,0xAA4C,0xAA4D,0xFB1E,0xFB1F,0xFE00,0xFE10,0xFE20,0xFE27,0x101FD,0x101FE,0x10A01,0x10A04,0x10A05,0x10A07,0x10A0C,0x10A10,0x10A38,0x10A3B,0x10A3F,0x10A40,0x1D167,0x1D16A,0x1D17B,0x1D183,0x1D185,0x1D18C,0x1D1AA,0x1D1AE,0x1D242,0x1D245,0xE0100,0xE01F0]
,Me:[0x488,0x48A,0x6DE,0x6DF,0x20DD,0x20E1,0x20E2,0x20E5,0xA670,0xA673]
,Mc:[0x903,0x904,0x93E,0x941,0x949,0x94D,0x982,0x984,0x9BE,0x9C1,0x9C7,0x9C9,0x9CB,0x9CD,0x9D7,0x9D8,0xA03,0xA04,0xA3E,0xA41,0xA83,0xA84,0xABE,0xAC1,0xAC9,0xACA,0xACB,0xACD,0xB02,0xB04,0xB3E,0xB3F,0xB40,0xB41,0xB47,0xB49,0xB4B,0xB4D,0xB57,0xB58,0xBBE,0xBC0,0xBC1,0xBC3,0xBC6,0xBC9,0xBCA,0xBCD,0xBD7,0xBD8,0xC01,0xC04,0xC41,0xC45,0xC82,0xC84,0xCBE,0xCBF,0xCC0,0xCC5,0xCC7,0xCC9,0xCCA,0xCCC,0xCD5,0xCD7,0xD02,0xD04,0xD3E,0xD41,0xD46,0xD49,0xD4A,0xD4D,0xD57,0xD58,0xD82,0xD84,0xDCF,0xDD2,0xDD8,0xDE0,0xDF2,0xDF4,0xF3E,0xF40,0xF7F,0xF80,0x102B,0x102D,0x1031,0x1032,0x1038,0x1039,0x103B,0x103D,0x1056,0x1058,0x1062,0x1065,0x1067,0x106E,0x1083,0x1085,0x1087,0x108D,0x108F,0x1090,0x17B6,0x17B7,0x17BE,0x17C6,0x17C7,0x17C9,0x1923,0x1927,0x1929,0x192C,0x1930,0x1932,0x1933,0x1939,0x19B0,0x19C1,0x19C8,0x19CA,0x1A19,0x1A1C,0x1B04,0x1B05,0x1B35,0x1B36,0x1B3B,0x1B3C,0x1B3D,0x1B42,0x1B43,0x1B45,0x1B82,0x1B83,0x1BA1,0x1BA2,0x1BA6,0x1BA8,0x1BAA,0x1BAB,0x1C24,0x1C2C,0x1C34,0x1C36,0xA823,0xA825,0xA827,0xA828,0xA880,0xA882,0xA8B4,0xA8C4,0xA952,0xA954,0xAA2F,0xAA31,0xAA33,0xAA35,0xAA4D,0xAA4E,0x1D165,0x1D167,0x1D16D,0x1D173]
,Nl:[0x16EE,0x16F1,0x2160,0x2183,0x2185,0x2189,0x3007,0x3008,0x3021,0x302A,0x3038,0x303B,0x10140,0x10175,0x10341,0x10342,0x1034A,0x1034B,0x103D1,0x103D6,0x12400,0x12463]
,Zl:[0x2028,0x2029]
,Zp:[0x2029,0x202A]
,Cs:[0xD800,0xE000]
,Co:[0xE000,0xF900,0xF0000,0xFFFFE,0x100000,0x10FFFE]
};
var nil=[]
var U=[0]

function fC(c){return fI(cpFC(c))}
function fI(cp){return [cp,cp+1]}

function fIR(from,to){return [from,to+1]}
function fCR(from,to){
 from=cpFC(from);to=cpFC(to)
 return to>from ?[from,to+1] :[to,from+1]}

function empty(cset){return !cset.length}
function one(cset){return cset.length==2 && cset[0]+1 == cset[1]}

function cpFC(s){var hi,lo
 if(/[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(s)){
  hi=s.charCodeAt(0)
  lo=s.charCodeAt(1)
  return 0x10000+(((hi&0x3FF) << 10) | (lo&0x3FF))}
 return s.charCodeAt(0)}

function comp(cset){
 return (cset[0]==0) ? cset.slice(1)
                     : [0].concat(cset.slice())}

function fL(a){var i,l,ret=[]
 for(i=0,l=a.length;i<l;){
  ret.push(a[i])
  while(a[i]+1 == a[++i] && i<l);
  if(a[i-1]!==0x10ffff)ret.push(a[i-1]+1)}
 return ret}

function fS(s){var res=[]
 s.replace(/[\u0000-\uD7FF\uDC00-\uFFFF]|([\uD800-\uDBFF][\uDC00-\uDFFF])|[\uD800-\uDBFF]/g,
  function(m,u){
   if(u)res.push(cpFC(u))
   else res.push(m[0].charCodeAt(0))})
 return fL(res.sort(function(a,b){return a-b}).filter(function(c,i,a){return !i||a[i-1]!=a[i]}))}

function member(cset,c){var state=false,i,l
 if(c>0x10FFFF)return false
 for(i=0,l=cset.length;i<l;i++){
  if(cset[i]>c)return state
  state=!state}
 return state}

function eq(as,bs){var i,l
 l=as.length
 if(l!=bs.length)return false
 for(i=0;i<l;i++)if(as[i]!=bs[i])return false
 return true}

function diff(as,bs){var
 ret=[],i=0,j=0,a,b,al=as.length,bl=bs.length,last,state=0
 if(!al)return []
 if(!bl)return as
 a=as[0]
 b=bs[0]
 if(isNaN(a)||isNaN(b))throw Error('cset_difference: bad input')
 for(;;){
  if(a < b){
   if(!(state & 1)){
    if(a==last) ret.pop(); else ret.push(a)
    last=a}
   state ^= 2
   a=(++i<al)?as[i]:0x110000}
  else{
   if(a==0x110000 && b==0x110000) return ret
   if(state & 2){
    if(b==last) ret.pop(); else ret.push(b)
    last=b}
   state ^= 1
   b=(++j<bl)?bs[j]:0x110000}}}

function union(as,bs){var
 ret=[],i=0,j=0,a,b,al=as.length,bl=bs.length,last,state=0
 if(!al)return bs
 if(!bl)return as
 a=as[0]
 b=bs[0]
 if(isNaN(a)||isNaN(b))throw Error('cset_union: bad input')
 for(;;){
  if(a < b){
   if(!(state & 1)){
    if(a==last) ret.pop(); else ret.push(a)
    last=a}
   state ^= 2
   a=(++i<al)?as[i]:0x110000}
  else{
   if(a==0x110000 && b==0x110000) return ret
   if(!(state & 2)){
    if(b==last) ret.pop(); else ret.push(b)
    last=b}
   state ^= 1
   b=(++j<bl)?bs[j]:0x110000}}}

function inter(as,bs){return comp(union(comp(as),comp(bs)))}
esc.safe=[32,33];
 ['Lu'
 ,'Ll'
 ,'Lt'
 ,'Lm'
 ,'Lo'
 ,'Nd'
 ,'No'
 ,'Pc'
 ,'Pd'
 ,'Ps'
 ,'Pe'
 ,'Pi'
 ,'Pf'
 ,'Po'
 ,'Sm'
 ,'Sc'
 ,'Sk'
 ,'So'
 ].forEach(function(s){esc.safe=union(esc.safe,cUC[s])})
 esc.safe=inter(esc.safe,fIR(0,0xFFFF))

function esc(n){var
 x={9:'\\t',10:'\\n',11:'\\v',12:'\\f',13:'\\r',45:'\\-',92:'\\\\',93:'\\]'}[n]
 if(x)return x
 if(member(esc.safe,n))return String.fromCharCode(n)
 function fill(s){return ('000'+s).slice(-4)}
 return "\\u"+fill(n.toString(16))}

function reCC_bmp(cset){var res=[],state=0,i,l,c
 if(one(cset)) return esc(cset[0])
 for(i=0,l=cset.length;i<l,cset[i]<0x10000;i++){
  if(state && cset[i] == c+1){state=0;continue}
  c=cset[i]
  if(state){res.push('-');c--}
  res.push(esc(c))
  state=!state}
 if(state){res.push('-\\uffff')}
 return '['+res.join('')+']'}

function splitAtBMP(cset){var bmp=[],i=0,l=cset.length,c,state
 for(;i<l;i++){
  c=cset[i]
  if(c>0xFFFF){
   state=i&1
   if(state)bmp.push(0x10000)
   if(state&&c===0x10000){i++;state=0}
   return [bmp
          ,(state?[0x10000]:[]).concat(cset.slice(i))]}
  bmp.push(c)}
 state=l&1
 if(state)bmp.push(0x10000)
 return [bmp
        ,(state?[0x10000]:[])]}

function surrogatePair(n){
 n-=0x10000
 return [0xD800|(n>>10),0xDC00|(n&0x3FF)]}

function surrogateSet(cset){var i=0,l=cset.length,state,c,prev,hi,lo,ret=[],prev_hi,prev_lo,full=[],cur,all_hi=[],a
 if(l&1){cset[l++]=0x110000}
 cset.push(0x110001)
 for(;i<l,c=cset[i];i++){
  if(c<0x10000)continue
  state=i&1
  if(state){
   a=surrogatePair(c);hi=a[0];lo=a[1]
   if(!cur){prev_hi=0xD800;prev_lo=0xDC00;cur=[[0xD800,0xD801],[0xDC00]]}
   if(hi===prev_hi) cur[1].push(lo)
   else{
    if(prev_lo===0xDC00){full.push(prev_hi);all_hi.push(prev_hi)}
    else{cur[1].push(0xE000);ret.push(cur);all_hi.push(prev_hi)}
    while(++prev_hi < hi){full.push(prev_hi);all_hi.push(prev_hi)}
    if(lo===0xDC00) cur=[[hi,hi+1],[]]
    else cur=[[hi,hi+1],[0xDC00,lo]]}
   prev_lo=lo}
  else{
   a=surrogatePair(c);hi=a[0];lo=a[1]
   if(cur && hi===prev_hi) cur[1].push(lo)
   else{
    if(cur && cur[1].length){ret.push(cur);all_hi.push(prev_hi)}
    prev_hi=hi
    cur=[[hi,hi+1],[lo]]}
   prev_lo=lo}}
 return [fL(all_hi)
        ,(full.length?[[fL(full),[0xDC00,0xE000]]]
                     :[]).concat(ret)
        ]}

function sS2RE(surr){var ret=[]
 surr.forEach(function(pair){
  ret.push(f(pair[0])+f(pair[1]))})
 return ret.join('|')
 function f(cset){
  return reCC_bmp(cset)}}

function reCC(cset){var a,bmp,sup,all_hi,surr,d,i,ret=[]
 a=splitAtBMP(cset);bmp=a[0];sup=a[1]
 a=surrogateSet(sup);all_hi=a[0];surr=a[1]
 d=diff(bmp,all_hi)
 i=inter(bmp,all_hi)
 if(!empty(d)) ret.push(reCC_bmp(d))
 if(surr.length) ret.push(sS2RE(surr))
 if(!empty(i)) ret.push(reCC_bmp(i))
 return ret.join('|')}

function fGC(x){
 var ret=cUC[x]
 if(!ret) throw Error('unknown Unicode General Category '+x)
 return ret}

function show(cset){var i,l,ret=[],c
 if(cset.length % 2) cset.push(0x110000)
 for(i=0,l=cset.length;i<l;i+=2){
  c=cset[i]
  if(cset[i+1]==c+1)ret.push(c.toString(16))
  else ret.push(c.toString(16)+'-'+(cset[i+1]-1).toString(16))}
 return ret.join('\n')}
var g=this
return {'import':function(prefix,object){object=object||g
 var i,l,e,es=
 [['fromChar',fC]
 ,['fromInt',fI]
 ,['universe',U]
 ,['nil',nil]
 ,['empty',empty]
 ,['singleton',one]
 ,['fromIntRange',fIR]
 ,['fromCharRange',fCR]
 ,['fromUnicodeGeneralCategory',fGC]
 ,['complement',comp]
 ,['fromList',fL]
 ,['fromString',fS]
 ,['member',member]
 ,['equal',eq]
 ,['difference',diff]
 ,['union',union]
 ,['intersection',inter]
 ,['toRegex',reCC]
 ,['show',show]
 ]
 for(i=0,l=es.length;i<l,e=es[i];i++)
  object[(prefix||'')+e[0]]=e[1]}}
}();