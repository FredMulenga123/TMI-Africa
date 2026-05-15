export const licenceSummary = {
  sourceTitle: 'TMI Update - Zambia Cancelled Mining and Non-Mining Rights (MLC Notice)',
  sourceUrl: 'https://www.mmmd.gov.zm/?p=2787',
  noticeDate: '2024-04-02',
  defaultNoticeDate: '2023-10-24',
  appealDeadline: '2024-05-01',
  decisionBasis: 'Section 72, Mines and Minerals Development Act, 2015',
  appealBasis: 'Section 97, Mines and Minerals Development Act, 2015',
  rowsParsed: 2604,
  uniqueLicenceCodes: 2582,
  duplicateRowsFlagged: 44,
  uniqueParties: 1718,
  stagingRecommendation: 'Load into staging first. Review duplicate licence codes before production merge.'
};

export const licenceTypeBreakdown = [
  { suffix: 'SEL', type: 'Small-scale Exploration Licence', count: 1277 },
  { suffix: 'LEL', type: 'Large-scale Exploration Licence', count: 750 },
  { suffix: 'SML', type: 'Small-scale Mining Licence', count: 416 },
  { suffix: 'AMR', type: 'Artisanal Mining Right', count: 69 },
  { suffix: 'MPL', type: 'Mineral Processing Licence', count: 52 },
  { suffix: 'LML', type: 'Large-scale Mining Licence', count: 35 },
  { suffix: 'LGL', type: 'LGL as coded in notice', count: 4 },
  { suffix: 'SE', type: 'SE as coded in notice', count: 1 }
];

export const repeatHolders = [
  { party: 'Praja Minerals Zambia Limited', rightsCancelled: 24, types: 'SEL, SML' },
  { party: 'Kampoko Resources Ltd', rightsCancelled: 11, types: 'LEL, SEL, SML' },
  { party: 'Sew Base Metals Zambia Limited', rightsCancelled: 11, types: 'SEL, SML' },
  { party: 'Anugraga Mines Zambia Limited', rightsCancelled: 10, types: 'SEL' },
  { party: 'Hounslow Investments Zambia Limited', rightsCancelled: 10, types: 'SEL' },
  { party: 'Kucimfya Mines Zambia Limited', rightsCancelled: 9, types: 'SEL' },
  { party: 'Segen Mines Zambia Limited', rightsCancelled: 9, types: 'SEL' },
  { party: 'Sew Base Metals Zambia Limited (100%)', rightsCancelled: 8, types: 'SEL, SML' },
  { party: 'Amiel Partners Limited', rightsCancelled: 7, types: 'LEL, SEL' },
  { party: 'Fortumax Limited', rightsCancelled: 7, types: 'LEL, SEL' }
];

export const licenceRecords = [
  { serialNo: 484, code: '30976-HQ-SEL', suffix: 'SEL', licenceType: 'Small-scale Exploration Licence', party: 'Satellite Mining Company LTD', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 38, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 68, opportunityScore: 74 },
  { serialNo: 485, code: '30983-HQ-SEL', suffix: 'SEL', licenceType: 'Small-scale Exploration Licence', party: 'Yang Mining Company Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 39, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 66, opportunityScore: 72 },
  { serialNo: 486, code: '30988-HQ-SEL', suffix: 'SEL', licenceType: 'Small-scale Exploration Licence', party: 'Nswachu Resources Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 39, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 64, opportunityScore: 70 },
  { serialNo: 487, code: '30989-HQ-SEL', suffix: 'SEL', licenceType: 'Small-scale Exploration Licence', party: 'Kanfield Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 39, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 63, opportunityScore: 69 },
  { serialNo: 488, code: '14666-HQ-LML', suffix: 'LML', licenceType: 'Large-scale Mining Licence', party: 'Safearth Mining Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 39, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 75, opportunityScore: 85 },
  { serialNo: 489, code: '15071-HQ-LML', suffix: 'LML', licenceType: 'Large-scale Mining Licence', party: 'Zamgem International Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 39, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 74, opportunityScore: 84 },
  { serialNo: 490, code: '19011-HQ-LML', suffix: 'LML', licenceType: 'Large-scale Mining Licence', party: 'C-Ore Industries Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 39, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 78, opportunityScore: 87 },
  { serialNo: 491, code: '19255-HQ-LML', suffix: 'LML', licenceType: 'Large-scale Mining Licence', party: 'Jagoda Tourmaline Extraction Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 39, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 73, opportunityScore: 82 },
  { serialNo: 792, code: '29893-HQ-LEL', suffix: 'LEL', licenceType: 'Large-scale Exploration Licence', party: 'Greenvelt Mining Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 61, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 70, opportunityScore: 80 },
  { serialNo: 793, code: '29980-HQ-AMR', suffix: 'AMR', licenceType: 'Artisanal Mining Right', party: 'Patel Salim Gulan Valli', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 61, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 59, opportunityScore: 52 },
  { serialNo: 794, code: '29989-HQ-AMR', suffix: 'AMR', licenceType: 'Artisanal Mining Right', party: 'Sharon Mwaba Sabina Chanda', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 61, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 58, opportunityScore: 51 },
  { serialNo: 795, code: '29837-HQ-AMR', suffix: 'AMR', licenceType: 'Artisanal Mining Right', party: 'Gabriel Chipwepwe Mushibwe Otis', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 61, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 57, opportunityScore: 50 },
  { serialNo: 796, code: '29483-HQ-AMR', suffix: 'AMR', licenceType: 'Artisanal Mining Right', party: 'Bannety Hamangaba (100%)', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 61, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 60, opportunityScore: 53 },
  { serialNo: 953, code: '27532-HQ-LEL', suffix: 'LEL', licenceType: 'Large-scale Exploration Licence', party: 'Kratos Mining Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 72, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 69, opportunityScore: 78 },
  { serialNo: 954, code: '26503-HQ-SEL', suffix: 'SEL', licenceType: 'Small-scale Exploration Licence', party: 'Nkanza Resources Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 72, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 62, opportunityScore: 68 },
  { serialNo: 955, code: '27329-HQ-LEL', suffix: 'LEL', licenceType: 'Large-scale Exploration Licence', party: 'Precise Mining Solutions Limited (100%)', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 72, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 72, opportunityScore: 79 },
  { serialNo: 956, code: '27839-HQ-LEL', suffix: 'LEL', licenceType: 'Large-scale Exploration Licence', party: 'Worthymore Investment Holdings Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 72, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 68, opportunityScore: 77 },
  { serialNo: 957, code: '28185-HQ-LEL', suffix: 'LEL', licenceType: 'Large-scale Exploration Licence', party: 'CS Mining Investments (Z) Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 72, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 71, opportunityScore: 78 },
  { serialNo: 958, code: '27137-HQ-LEL', suffix: 'LEL', licenceType: 'Large-scale Exploration Licence', party: 'Amar Ferro Alloys Limited', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 72, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 67, opportunityScore: 76 },
  { serialNo: 959, code: '28094-HQ-LEL', suffix: 'LEL', licenceType: 'Large-scale Exploration Licence', party: 'Nobel Construction Limited (100%)', decision: 'Cancelled', comments: 'Non Compliant', noticePage: 72, noticeDate: '2024-04-02', appealDeadline: '2024-05-01', duplicate: 'N', loadStatus: 'Staging', riskScore: 66, opportunityScore: 75 }
];
