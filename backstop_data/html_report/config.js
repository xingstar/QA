report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/qq_BackstopJS_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20190521-225342/qq_BackstopJS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "qq_BackstopJS_Homepage_0_document_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "3.23",
          "analysisTime": 38
        },
        "diffImage": "../bitmaps_test/20190521-225342/failed_diff_qq_BackstopJS_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/qq_BackstopJS_Homepage_0_document_1_tablet.png",
        "test": "../bitmaps_test/20190521-225342/qq_BackstopJS_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "qq_BackstopJS_Homepage_0_document_1_tablet.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "tablet",
        "error": "Reference file not found /Users/ministar/Documents/code/coder/yideng/qa/backstop_data/bitmaps_reference/qq_BackstopJS_Homepage_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "移动端qq"
});