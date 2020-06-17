window.BENCHMARK_DATA = {
  "lastUpdate": 1592394032314,
  "repoUrl": "https://github.com/gofiber/fiber",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "a327b3f3568baba916dcbe0e465046ab950b4648",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:03:54+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/a327b3f3568baba916dcbe0e465046ab950b4648"
        },
        "date": 1590221127681,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5908,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8046382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 66.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17356180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 87.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13189620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18025490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 308,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3887755 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 93.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13916310 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7894350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8788046 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8178201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 492,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2451261 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1832,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "726921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 191,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6408763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9348828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 51.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21001200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 26.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45884270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 136,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8740178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 460,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2529094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 606,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2011128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 231,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5120035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 239,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4547926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27742423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9352356 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 290,
            "unit": "ns/op\t     268 B/op\t       4 allocs/op",
            "extra": "5058030 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1219,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "834403 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 256,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4781695 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1070,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 60.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17040109 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "900676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "971652 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 967815,
            "unit": "ns/op\t     157 B/op\t       2 allocs/op",
            "extra": "1279 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5662,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "197924 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5825,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "208052 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 161,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7448835 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "aec1bfccf0feb8b46a32fd5346ae03718557cea2",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:19+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/aec1bfccf0feb8b46a32fd5346ae03718557cea2"
        },
        "date": 1590221158280,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6882,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6944904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15359299 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11851038 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14980516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3476216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 104,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11686802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7630262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7259845 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7401229 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 556,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2164884 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2086,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "501114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5705665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8344276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18665475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38710495 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 150,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8039445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 510,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2316861 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 689,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1759981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4757036 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 277,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4455441 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24284116 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8240382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 312,
            "unit": "ns/op\t     248 B/op\t       4 allocs/op",
            "extra": "4479597 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1390,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "743244 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1331,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "904795 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 295,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4058607 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "904572 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16416525 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1309,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908965 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1318,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "864550 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1098255,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1100 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6648,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173996 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6771,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179304 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6787734 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c756ad1a683e9f2efcbb3fddfb8f9b906b695c8d",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:25+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/c756ad1a683e9f2efcbb3fddfb8f9b906b695c8d"
        },
        "date": 1590221166147,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6594,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 192,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6116889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13760398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10824260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 87.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13610191 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 383,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3192066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11061216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7133569 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6735625 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6590764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 608,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2003412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2402,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "548586 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 239,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4970832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7370757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16733985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38619174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 173,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7006621 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 533,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2213222 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 686,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1752673 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 283,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4395303 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 286,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4125919 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20597263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7456862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4646276 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1394,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "763916 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "873414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 324,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3637936 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1271,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "972121 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16604815 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1347,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "861614 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1325,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "836100 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1103445,
            "unit": "ns/op\t     196 B/op\t       2 allocs/op",
            "extra": "1020 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6540,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182323 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6805,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170246 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 202,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6304389 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "dca25b9acb7f441c2ef776b3efcd503f9bfe4fa6",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:34+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/dca25b9acb7f441c2ef776b3efcd503f9bfe4fa6"
        },
        "date": 1590221168681,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5466,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "200353 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7582100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15226286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11941981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 71.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15881466 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4140196 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 101,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13982180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9005012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8170423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8270665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 504,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2461436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2003,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "702424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 198,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6058598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8076579 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 56.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20134260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44529176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 138,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9143799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 443,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2591816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 568,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2136828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 255,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5159176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 225,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4745187 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24922525 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9272284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 258,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "5805948 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1163,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000431 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 268,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4430234 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1027,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 53.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21126986 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1117782 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1106,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 907109,
            "unit": "ns/op\t     150 B/op\t       2 allocs/op",
            "extra": "1334 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5467,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "209133 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5324,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "217870 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 169,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6957451 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "7ae76de074d8616369bf390ca63a8aa4d4aaa002",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:39+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/7ae76de074d8616369bf390ca63a8aa4d4aaa002"
        },
        "date": 1590221184802,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6825,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170893 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6817038 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15494589 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11824790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15046272 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3415024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 110,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11769265 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7522387 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7497993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7564983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 565,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2181003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2087,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "586856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5501140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8408938 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19372512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39796776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7701271 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 507,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2354757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 690,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1749742 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4547433 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 268,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4452776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 48.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25071849 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8092066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 309,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4625116 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1348,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "873399 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1294,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "874696 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 294,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4151847 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1211,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "974406 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 69.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16901713 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908643 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "900694 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1101918,
            "unit": "ns/op\t     190 B/op\t       2 allocs/op",
            "extra": "1056 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6588,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179948 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6659,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177840 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 185,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6558902 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "5ebb13d98c5485c0bdc9fc70b490dbeb09f93257",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:45+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/5ebb13d98c5485c0bdc9fc70b490dbeb09f93257"
        },
        "date": 1590221186635,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6599,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6300045 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 85.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14124558 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 111,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10695285 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 83.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14471541 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 370,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3100953 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 113,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10894684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7355325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6710812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7073095 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 566,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2106282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2170,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "639321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 226,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5172242 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7490973 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15214497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38092396 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 171,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7232805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 530,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2285128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 681,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1727148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 270,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4551552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 288,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4145827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19911072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7640660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 289,
            "unit": "ns/op\t     239 B/op\t       4 allocs/op",
            "extra": "4703804 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1359,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "795535 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1328,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "889792 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 331,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3685837 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "920563 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17452468 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1273,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "919010 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1271,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "891787 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1092261,
            "unit": "ns/op\t     184 B/op\t       2 allocs/op",
            "extra": "1090 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6372,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185662 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6302,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173372 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 197,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6122710 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "7b5180e8b2557ae3e88e853abea22a5633bd4bb6",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:04:54+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/7b5180e8b2557ae3e88e853abea22a5633bd4bb6"
        },
        "date": 1590221194710,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5980,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181789 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6355780 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14838772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11533654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14738552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 340,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3573669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 106,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11653846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7388038 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7085872 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7610882 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 555,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2153790 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2010,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "672686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5494740 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7153735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17829296 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39065472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7494667 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 500,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2422608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 644,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1824772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 252,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4633720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 264,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4425530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21305120 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7797597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 287,
            "unit": "ns/op\t     244 B/op\t       4 allocs/op",
            "extra": "4595220 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1289,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "841302 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "919922 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 320,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3895849 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18851499 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "902569 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1222,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "922978 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1025635,
            "unit": "ns/op\t     170 B/op\t       2 allocs/op",
            "extra": "1176 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5741,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193251 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5929,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201074 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6631088 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "3f316b21e53b92d72d5eb32a3f977754ba146157",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:04+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/3f316b21e53b92d72d5eb32a3f977754ba146157"
        },
        "date": 1590221198644,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5814,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "197121 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8107976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 66.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18491883 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14052360 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 68.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18192164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 303,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3876772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 89,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13098943 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8793972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8660469 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9313813 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 480,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2550097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1881,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "804637 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 187,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6356600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9394983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 53.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23393176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42451184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 131,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9206106 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 447,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2653251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 583,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1838612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 220,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5191544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 233,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4881944 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "29558216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10260262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 271,
            "unit": "ns/op\t     257 B/op\t       4 allocs/op",
            "extra": "5346679 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1215,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "884662 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 245,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5050186 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18937914 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "988498 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "988124 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 968462,
            "unit": "ns/op\t     155 B/op\t       2 allocs/op",
            "extra": "1293 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5805,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187167 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5753,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201064 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 164,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7750779 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "0bc84eb91cd8d1dca85f2b2a0403f4686a1c77a4",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:16+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/0bc84eb91cd8d1dca85f2b2a0403f4686a1c77a4"
        },
        "date": 1590221214701,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6588,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7542622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14959532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13859097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 75.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15973107 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3658844 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 96.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12668262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7943338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8131251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7688781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 522,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2200461 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1978,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "694582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 200,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6027873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8887676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 60.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19841587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 28.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40547031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 143,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8411968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 448,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2456678 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 594,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2006151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 244,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5076552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 258,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4416183 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27050380 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8866191 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 299,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "4656859 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1355,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "768421 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1233,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "970714 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 276,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4270426 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "965870 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16939849 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910959 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "928224 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1083993,
            "unit": "ns/op\t     186 B/op\t       2 allocs/op",
            "extra": "1077 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6600,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "194910 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7739,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174814 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 180,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6260184 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1614feaddb8371327e2d935234ec642aa7a39d7e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:21+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/1614feaddb8371327e2d935234ec642aa7a39d7e"
        },
        "date": 1590221221135,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6305,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6604652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14497041 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11257684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15098032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3473900 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 104,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11546920 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7726622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6797560 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7208397 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 544,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2221166 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2200,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "644654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 212,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5537901 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7516918 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18684066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41040518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7932055 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 499,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2445626 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 624,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1811053 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 257,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4699300 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 259,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4629518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20833449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8056930 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 280,
            "unit": "ns/op\t     229 B/op\t       4 allocs/op",
            "extra": "4987354 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1272,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "819523 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 300,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3886852 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "885760 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17315575 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961785 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "952683 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1005037,
            "unit": "ns/op\t     170 B/op\t       2 allocs/op",
            "extra": "1178 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6124,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198310 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6130,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187622 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 193,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6625688 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "b8da80d9997e79ca54a3343c7a0775b806cabb4e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:05:27+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/b8da80d9997e79ca54a3343c7a0775b806cabb4e"
        },
        "date": 1590221224666,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6825,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173636 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7020873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15640980 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11721778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15148908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3514214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12191536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7557319 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6239822 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7676710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 549,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2186485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2037,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "678720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 211,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5565464 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8206634 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19354044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40332814 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8108620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 503,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2390684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 664,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1780978 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 255,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4597508 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 272,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4507888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23749137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8292949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 311,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "4619768 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1351,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "773642 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1290,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910048 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 293,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4159410 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1206,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "947905 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16985143 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "899739 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "905299 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1084393,
            "unit": "ns/op\t     189 B/op\t       2 allocs/op",
            "extra": "1062 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6569,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157838 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6535,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185556 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6958580 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "13ac6767e77890f7b2ff4261130b0ce17baafac9",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:28+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/13ac6767e77890f7b2ff4261130b0ce17baafac9"
        },
        "date": 1590221279831,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5346,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "199759 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8440382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15571372 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 89.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14661435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 67.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17228514 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 300,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4142433 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 89.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13881226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 132,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9422665 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8721279 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8393490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 441,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2680881 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1745,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "822493 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 176,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6148628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10186722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 50.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23762908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 24.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47002138 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 126,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9450985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 454,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2836611 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 558,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2169536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 216,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5628428 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 225,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5299268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 38.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30874964 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 116,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10517493 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 268,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "5259207 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1141,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "883722 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 243,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5038231 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1017,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 55.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20624485 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1093,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1080,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 874359,
            "unit": "ns/op\t     145 B/op\t       2 allocs/op",
            "extra": "1380 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5180,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201530 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5334,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "225386 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 153,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7980153 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "49c703744cbe51b2b570c17c7187b97d9b2f4256",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:45+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/49c703744cbe51b2b570c17c7187b97d9b2f4256"
        },
        "date": 1590221298376,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5781,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "200782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8381664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 64.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19255677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 84.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14901362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 64.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18234577 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4079516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 90.8,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14040873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8691478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8176148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8045392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 433,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2731282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1802,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "777804 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 173,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6740394 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9465663 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 50.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23977144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50276888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 126,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9496641 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 438,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2791050 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 557,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2114523 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 222,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5873404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 233,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5422842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 41,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "27734235 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 120,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9565390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 258,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "5264686 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1152,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1040763 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 242,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4911174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1048,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1190648 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 55.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20052880 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1067,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1098,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 919088,
            "unit": "ns/op\t     151 B/op\t       2 allocs/op",
            "extra": "1324 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5470,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "213169 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5307,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "217923 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 162,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "8314392 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "8fad71a750dfab784ae5445831718a98bac73766",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:38+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/8fad71a750dfab784ae5445831718a98bac73766"
        },
        "date": 1590221298449,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6123,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6666517 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14503516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10290328 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13903344 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3537801 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12103965 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7082234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6569379 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7316676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2013270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2101,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "534817 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 217,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5293977 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7320661 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19082708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41728336 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7741935 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 486,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2473950 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 634,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1868376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4451208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 264,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4569470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21129361 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7590355 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 275,
            "unit": "ns/op\t     229 B/op\t       4 allocs/op",
            "extra": "4989595 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1318,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "783259 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "976674 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 302,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3996340 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 71.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18881275 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1225,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907812 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "984810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1008821,
            "unit": "ns/op\t     168 B/op\t       2 allocs/op",
            "extra": "1192 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6552,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "208447 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6457,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "191310 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 206,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6411987 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "59fcad317adde10a5e1dc24b5b087686ca14a685",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:59+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/59fcad317adde10a5e1dc24b5b087686ca14a685"
        },
        "date": 1590221334500,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6652,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168771 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7183717 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15432301 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11633557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15250738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 346,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3529362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 102,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11926194 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7228856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7430929 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7518691 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 534,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2275959 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2022,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "703436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 210,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5817198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8401354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18903224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "40324490 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 148,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8285451 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 508,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2304810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 672,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1751583 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 253,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4799811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 265,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4522183 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25318732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8353246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 312,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "4654518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1362,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "775051 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1281,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "939800 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 287,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4127229 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "983860 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16901986 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1291,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "916354 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1311,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910238 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1083600,
            "unit": "ns/op\t     184 B/op\t       2 allocs/op",
            "extra": "1089 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6460,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181774 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6568,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173479 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 185,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6530664 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c27fd7ae7438bbed5d69e71667edba99dc317115",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:06:32+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/c27fd7ae7438bbed5d69e71667edba99dc317115"
        },
        "date": 1590221349201,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6572,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181195 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7122925 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16139485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 98.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12357987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14192767 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 333,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3670321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 99.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12305936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7841940 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7556610 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7840566 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 522,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2283891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2025,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "658312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 205,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5719339 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8719542 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20510274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39699892 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 149,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8236921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 498,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2387150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 656,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1824650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 249,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4683882 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 263,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4426251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24686408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8406474 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 304,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "4344187 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1361,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "791064 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1309,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "938366 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 279,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4301518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "943383 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17102338 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1261,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "990487 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1277,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "942346 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1052083,
            "unit": "ns/op\t     174 B/op\t       2 allocs/op",
            "extra": "1150 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6358,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "188592 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6428,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181143 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 183,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7056067 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "02b373e43049cb98c8a1bf71b81803ffba4f6d20",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:11+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/02b373e43049cb98c8a1bf71b81803ffba4f6d20"
        },
        "date": 1590221392299,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6691,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 197,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6270418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14103565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10575601 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 85.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14323899 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3294889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 108,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11137264 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7014541 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6349430 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6949238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 594,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2032914 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2304,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "607192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 223,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5378834 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7239896 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16108239 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38992708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 166,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7309459 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 533,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2309710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 684,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1740064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 279,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4233991 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 299,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4121949 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20370915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7278751 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 303,
            "unit": "ns/op\t     240 B/op\t       4 allocs/op",
            "extra": "4675646 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1438,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "708061 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "822268 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 329,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3606740 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1263,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "886509 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587945 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1377,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "876607 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "818317 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1080637,
            "unit": "ns/op\t     186 B/op\t       2 allocs/op",
            "extra": "1078 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6357,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180552 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6678,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167052 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 198,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5961386 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "5b5612c98c699e192e7ffea7a89aac21dd60549f",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:07+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/5b5612c98c699e192e7ffea7a89aac21dd60549f"
        },
        "date": 1590221391967,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6184,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7791261 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 68.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16824632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13008424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 76.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17883044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3431008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 107,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11566192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7236232 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6673190 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6930974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2191485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2071,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "683677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 212,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5364445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8286660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19439731 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36786456 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7706709 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 520,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2337628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 686,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1723792 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 265,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4623878 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 261,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4357500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25519604 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8721664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 300,
            "unit": "ns/op\t     235 B/op\t       4 allocs/op",
            "extra": "4825238 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1281,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "921925 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 270,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4541511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16667490 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1211,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "889975 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1021506,
            "unit": "ns/op\t     181 B/op\t       2 allocs/op",
            "extra": "1107 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5957,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "194628 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6205,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "196498 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 180,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6663357 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "583f326be15b793b7bf730d2d6a6edfb75c3948a",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:17+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/583f326be15b793b7bf730d2d6a6edfb75c3948a"
        },
        "date": 1590221397171,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6903,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "178006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6944271 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15445988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12267552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15034966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3587382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 102,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12037467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7868617 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6979644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7673557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 535,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2265009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2060,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "674739 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 214,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5837349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8551243 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19711491 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38652051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 148,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8222647 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 502,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2300719 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 663,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1781559 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 252,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4716748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 270,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4472545 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25188622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8321095 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "4659816 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1387,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "767174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1307,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "924538 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 289,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4095585 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "979113 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16483470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1299,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "924949 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1313,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "886204 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1086803,
            "unit": "ns/op\t     183 B/op\t       2 allocs/op",
            "extra": "1092 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6481,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177552 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6555,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172515 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6645658 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "c422f90fbac4aa7710185273574280f3b4e70d7e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:29+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/c422f90fbac4aa7710185273574280f3b4e70d7e"
        },
        "date": 1590221400776,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6590,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7159993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14821255 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12280862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15261510 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3527110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11757007 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7455012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7745937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7519009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 564,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2238608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1968,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "708708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 211,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5792427 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8451813 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18845989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42519114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 149,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7732090 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 503,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2315852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 659,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1780369 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 257,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4719753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 261,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4528716 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26304846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8628630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4630782 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1343,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "778945 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "913640 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 283,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4138616 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16524799 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932556 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1272,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "940460 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1047807,
            "unit": "ns/op\t     178 B/op\t       2 allocs/op",
            "extra": "1128 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6274,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184694 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6340,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176775 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6858109 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1e9cae81f82d36f2b547ae467834665ff8b3c91e",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:36+02:00",
          "tree_id": "104f8921842b61b37ca5c3ff53d9d9e2a289d1fe",
          "url": "https://github.com/Fenny/fiber/commit/1e9cae81f82d36f2b547ae467834665ff8b3c91e"
        },
        "date": 1590221418856,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6951,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6942063 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15286974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11304494 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13651016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3268712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 107,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11366322 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7308483 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7083523 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7155141 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 572,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2169390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2075,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "669802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 218,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5660692 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7818897 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18988707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37555506 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8128321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 511,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2311398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 696,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1680277 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 261,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4488423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 276,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4402676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23766582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8189782 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 320,
            "unit": "ns/op\t     249 B/op\t       4 allocs/op",
            "extra": "4460414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1402,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "758926 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1319,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "912128 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 297,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4099146 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1234,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "983841 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16132360 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "880957 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1321,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "840502 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1111316,
            "unit": "ns/op\t     185 B/op\t       2 allocs/op",
            "extra": "1080 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6793,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180804 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6686,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173911 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6813622 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "e66afea4c07bc3c98c34ad80aa096e29ad59d5e7",
          "message": "Trigger benchmarks",
          "timestamp": "2020-05-23T10:08:41+02:00",
          "tree_id": "864faa5b4e1c60eee7a232d6a41dff035d05abef",
          "url": "https://github.com/Fenny/fiber/commit/e66afea4c07bc3c98c34ad80aa096e29ad59d5e7"
        },
        "date": 1590221466703,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6643,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184905 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6224947 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 81.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14535877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11331289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13531500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 365,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3398859 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 109,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11776364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6966891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6857890 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7017078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 571,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2071520 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2296,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "572241 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 231,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5156979 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7624730 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17587412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35982333 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 171,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7428663 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 518,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2329119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 669,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1746750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 277,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4527778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 286,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4283581 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20513244 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7547887 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 298,
            "unit": "ns/op\t     239 B/op\t       4 allocs/op",
            "extra": "4725936 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1380,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "725940 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1274,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961918 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 326,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3507949 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1242,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "959626 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15641511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1314,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "864405 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1117316,
            "unit": "ns/op\t     202 B/op\t       2 allocs/op",
            "extra": "991 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6647,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173671 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6563,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166560 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 199,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6023516 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "071fec42feee82e04e0ab5bf5970e84808fdb50f",
          "message": "Merge pull request #399 from Fenny/master\n\n☄️ v1.10.0",
          "timestamp": "2020-05-23T09:58:31+02:00",
          "tree_id": "12a2768cf756eae8210ba53b0cb43d601589b2f7",
          "url": "https://github.com/gofiber/fiber/commit/071fec42feee82e04e0ab5bf5970e84808fdb50f"
        },
        "date": 1590221846056,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6840,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6164066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 85.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14010475 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10567923 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13683459 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 368,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3196201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 109,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11044017 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7281742 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6614444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7104496 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 554,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2161341 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2121,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "634596 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 207,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5712840 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7847458 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18143486 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37241127 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 163,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7256071 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 526,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2225781 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 682,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1749711 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 277,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4441910 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 281,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4289902 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19673821 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7330866 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 295,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "4551703 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1388,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "780181 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "893109 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 332,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3643240 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1242,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "943824 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17080225 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "897446 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1310,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859245 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1111090,
            "unit": "ns/op\t     185 B/op\t       2 allocs/op",
            "extra": "1083 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6579,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177858 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6678,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168696 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 200,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6227306 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "25568509ce8a4353267c7be624d88c1d2ccedf09",
          "message": "Merge pull request #402 from Fenny/master\n\nReduce pre allocated memory, fix Etag benchmark, cleanup unused stuff",
          "timestamp": "2020-05-23T15:05:59+02:00",
          "tree_id": "8100e45065c9123e61f4a7626f5f6b55a55cb39f",
          "url": "https://github.com/gofiber/fiber/commit/25568509ce8a4353267c7be624d88c1d2ccedf09"
        },
        "date": 1590239244173,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7029,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171033 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6958,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6974134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15252714 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11842718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 79.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15171691 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3469423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 109,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10998738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7503802 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7346085 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7411100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 551,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2091404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2186,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "561220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5433220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8171557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19263528 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38371462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 163,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7552465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 541,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2200629 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 725,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1675021 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 274,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4453101 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 297,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4075852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24346780 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8357721 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 341,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "3535909 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1322,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "892791 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1230,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932779 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 291,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4075387 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "979968 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18055885 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1210,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "966361 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1252,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "897747 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1064329,
            "unit": "ns/op\t     180 B/op\t       2 allocs/op",
            "extra": "1114 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7051,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168742 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7123,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162848 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 196,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6238957 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cdea1c806aa146c8aa45b5785eaf2e17c40a9f2c",
          "message": "Merge pull request #406 from Fenny/master\n\nHot fix delimiter miss match, parser needs fix",
          "timestamp": "2020-05-23T18:42:29-04:00",
          "tree_id": "4bc232c2eb72ef87c9a86d3987dcd3fcf0599a3c",
          "url": "https://github.com/gofiber/fiber/commit/cdea1c806aa146c8aa45b5785eaf2e17c40a9f2c"
        },
        "date": 1590273833149,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6029,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "210688 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6178,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201342 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8216066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 67.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18467043 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 87.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13042873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 67.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17361658 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3996176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 88.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13576927 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8907838 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9128516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7972208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 481,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2533334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1797,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "722389 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 195,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5932870 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8614941 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 56.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23890554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41369850 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 135,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9371680 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 453,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2732350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 606,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1996568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 231,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5116122 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 252,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4771114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 40.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28198203 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10220020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 274,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "4390412 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1132,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "892770 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1039,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 240,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5177130 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 962,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1273982 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21657040 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 994,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1243413 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 878439,
            "unit": "ns/op\t     144 B/op\t       2 allocs/op",
            "extra": "1392 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5808,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198697 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5858,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195193 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 157,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7702484 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3ab0e90802d448f60a795068c5fa5540b5b9dcd",
          "message": "Merge pull request #407 from ReneWerner87/panic_on_optional_param\n\n🐞 Panic on \":param\" #405",
          "timestamp": "2020-05-24T05:47:42-04:00",
          "tree_id": "893daf6fb9cf8d0bdb5010c3f1516ec389870c14",
          "url": "https://github.com/gofiber/fiber/commit/b3ab0e90802d448f60a795068c5fa5540b5b9dcd"
        },
        "date": 1590313745859,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5567,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180397 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5580,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "223207 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8357325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 61.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21351387 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 78.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15397273 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 62.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17636956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 277,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4102557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 94.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12028449 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9079516 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9007264 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10284445 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 459,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2745081 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1693,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "738260 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 176,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6701473 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10221072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 52.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23975140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52688847 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 131,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8736580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 471,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2874726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 604,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1874149 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 227,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5219218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 249,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5050867 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "28825471 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10620037 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 290,
            "unit": "ns/op\t     229 B/op\t       4 allocs/op",
            "extra": "4005363 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1119,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 301,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4004100 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1044,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19341325 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1033,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1139348 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1088,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 980581,
            "unit": "ns/op\t     150 B/op\t       2 allocs/op",
            "extra": "1334 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6254,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173269 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6688,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179209 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 153,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7017324 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a1896b7d615fa743ab910459c9bbd2cbbc9eae0e",
          "message": "Merge pull request #408 from ReneWerner87/panic_on_optional_param\n\nFix error on static \":param\" #405",
          "timestamp": "2020-05-24T08:11:32-04:00",
          "tree_id": "e3c7afcebeeb28d1e5d706635785bd528f9d856b",
          "url": "https://github.com/gofiber/fiber/commit/a1896b7d615fa743ab910459c9bbd2cbbc9eae0e"
        },
        "date": 1590322377828,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6265,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180392 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6303,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6911764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17014519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 102,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12417642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13740966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 341,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3673677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 103,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11005206 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7852528 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7648480 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7478238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 563,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2314527 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2069,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "610164 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5452770 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7901478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18422763 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36820556 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7292584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 496,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2357323 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 652,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1932870 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4399407 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 269,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4348524 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 51.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23275207 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8650893 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 275,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "4412640 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1161,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "897636 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "997272 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 311,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4006653 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1056,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 58.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20022974 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1125,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 975504,
            "unit": "ns/op\t     165 B/op\t       2 allocs/op",
            "extra": "1215 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6359,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195152 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6016,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201496 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6643285 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73a29062ae6ad300147d9b8063275c644184e1b2",
          "message": "Merge pull request #409 from ReneWerner87/panic_on_optional_param\n\nPanic on static \":param\" path #405",
          "timestamp": "2020-05-24T08:54:58-04:00",
          "tree_id": "bace46735dfdd979ff804c2bbff6f47fed37efa7",
          "url": "https://github.com/gofiber/fiber/commit/73a29062ae6ad300147d9b8063275c644184e1b2"
        },
        "date": 1590324983646,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6600,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "190420 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6686,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7737507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 70.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14772694 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 92.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13744993 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16273603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 312,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3896310 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 100,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12370681 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8145465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7323606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7337913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 546,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2177193 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2021,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "556399 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 213,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5403003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9010512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 60.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20577067 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 27.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39204764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 145,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8343739 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 517,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2412728 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 684,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1734204 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4506010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 281,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4333591 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "26018214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9109659 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 322,
            "unit": "ns/op\t     250 B/op\t       4 allocs/op",
            "extra": "3545678 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1254,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "917125 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 292,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4125889 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1087,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1120527 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19958665 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63605341 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "289982919 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1222,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "978602 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1251,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "955788 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1051239,
            "unit": "ns/op\t     176 B/op\t       2 allocs/op",
            "extra": "1140 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6634,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157136 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6790,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184809 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6574399 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8b8fdfb35c4dd68bd764e7e9362d704145a56db",
          "message": "Add Handler type (#410)\n\n* Add new supporter\r\n* Add new test condition\r\n* Add Handler Type",
          "timestamp": "2020-05-24T16:02:21+02:00",
          "tree_id": "ecc0ca80589cb60d7279cb2b8b036198b9f4dc3d",
          "url": "https://github.com/gofiber/fiber/commit/e8b8fdfb35c4dd68bd764e7e9362d704145a56db"
        },
        "date": 1590329037352,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6046,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "205047 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6332,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "206756 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7497595 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 69.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16179696 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13716735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 71.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15884607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 318,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3867324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 92.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11904986 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9010078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7576983 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8838789 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 487,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2382585 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1785,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "595888 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 194,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6242706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8677268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 55.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22266532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 26.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48925347 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 142,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8985025 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 465,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2576008 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 647,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1909778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 242,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5056560 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 253,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4889035 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25736155 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9682174 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 277,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4634991 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1143,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1084,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 258,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4509454 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1021,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20429971 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 17.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58644014 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "305822737 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1042,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "976083 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 938121,
            "unit": "ns/op\t     157 B/op\t       2 allocs/op",
            "extra": "1276 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6032,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177879 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6333,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187387 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 170,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7270345 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02b4061b447a5eb1c4a4d1299e2d0e9523528e84",
          "message": "Add Handler & Templates interface (#412)\n\n* Add new supporter\r\n* Add new test condition\r\n* Add Handler Type\r\n* Update Templates Interface",
          "timestamp": "2020-05-25T13:31:20+02:00",
          "tree_id": "8532e5bf8554df5c88c3355a650ca8e6eb11fb87",
          "url": "https://github.com/gofiber/fiber/commit/02b4061b447a5eb1c4a4d1299e2d0e9523528e84"
        },
        "date": 1590406377453,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7215,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174621 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7121,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5903671 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 89.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13870660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10464064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12677215 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 386,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3073507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 119,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10143578 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6758824 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6501931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6886214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 650,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "1862478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2256,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "554638 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 251,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4775796 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6601830 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 75.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15354175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37332776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 194,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6494467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 560,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2096877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 734,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1653246 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 297,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4074936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 309,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4080937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19828474 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7286391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 315,
            "unit": "ns/op\t     246 B/op\t       4 allocs/op",
            "extra": "3636984 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1333,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "864831 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1340,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "830545 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 335,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3653810 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1282,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "911524 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18105225 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55086541 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.45,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275237451 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1375,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "842682 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1353,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "852741 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1156858,
            "unit": "ns/op\t     199 B/op\t       2 allocs/op",
            "extra": "1006 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7088,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169495 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7165,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169705 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 211,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5629922 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c027e715258f278a746e6cb40e2315bd2ee377",
          "message": "Small changes (#415)\n\n* Update template examples\r\n\r\n* Update fasthttp to v1.13.1\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\n\r\n* Cookie SameSite defaults to Lax\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-Authored-By: Queru <pascal@queru.net>\r\n\r\n* Fix router bug\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\n* Remove unused code\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\nCo-authored-by: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-authored-by: Queru <pascal@queru.net>\r\nCo-authored-by: RW <renewerner87@googlemail.com>",
          "timestamp": "2020-05-27T10:22:01+02:00",
          "tree_id": "b81d876e4a019ebbac6b80afa50df1533e19e525",
          "url": "https://github.com/gofiber/fiber/commit/f2c027e715258f278a746e6cb40e2315bd2ee377"
        },
        "date": 1590567825897,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7430,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "147462 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7502,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "151586 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 208,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5871662 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 89.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13119732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9985495 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 97.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12237968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 373,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3248650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 122,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9872228 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6284635 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6330150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6752020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 571,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2099086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2192,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "489775 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 249,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4917182 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6766088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 73.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16353150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 34.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35230467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 187,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6083907 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 584,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2062518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 748,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1629578 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 313,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3936873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 316,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3715630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 61.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17479040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7242024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 328,
            "unit": "ns/op\t     251 B/op\t       4 allocs/op",
            "extra": "3524502 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1392,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "835782 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1345,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "826314 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 358,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3406532 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1253,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "890544 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17189142 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55086918 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.94,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "246169815 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1322,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1327,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "828614 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1194106,
            "unit": "ns/op\t     195 B/op\t       2 allocs/op",
            "extra": "1026 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7301,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168524 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7214,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "149324 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 213,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5802204 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c027e715258f278a746e6cb40e2315bd2ee377",
          "message": "Small changes (#415)\n\n* Update template examples\r\n\r\n* Update fasthttp to v1.13.1\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\n\r\n* Cookie SameSite defaults to Lax\r\n\r\nCo-Authored-By: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-Authored-By: Queru <pascal@queru.net>\r\n\r\n* Fix router bug\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\n* Remove unused code\r\n\r\nCo-Authored-By: RW <renewerner87@googlemail.com>\r\n\r\nCo-authored-by: Thomas van Vugt <thomasvvugt@users.noreply.github.com>\r\nCo-authored-by: Queru <pascal@queru.net>\r\nCo-authored-by: RW <renewerner87@googlemail.com>",
          "timestamp": "2020-05-27T10:22:01+02:00",
          "tree_id": "b81d876e4a019ebbac6b80afa50df1533e19e525",
          "url": "https://github.com/gofiber/fiber/commit/f2c027e715258f278a746e6cb40e2315bd2ee377"
        },
        "date": 1590567992541,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6551,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171439 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6743,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6237942 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 81.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15072429 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11079007 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14211128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 358,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3467212 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10465390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6749799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6631082 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7054178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 539,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2067904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2128,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "548712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 240,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5247926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6763435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17185803 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37941918 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 181,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6664236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 554,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2123618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 733,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1673954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 290,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4166726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 298,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3966909 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19560769 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7411687 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 292,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "3643684 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1262,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "933174 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1235,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "903020 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 332,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3645964 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961845 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17476702 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55946844 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "245188364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "932187 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1212,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "944498 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1073336,
            "unit": "ns/op\t     179 B/op\t       2 allocs/op",
            "extra": "1117 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6969,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173722 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6648,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179616 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 194,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6324334 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cd55804b7dcf33c078cd1e435090d72533e1e15",
          "message": "Merge pull request #418 from Fenny/master\n\nFix partial wildcard in Static",
          "timestamp": "2020-05-27T17:04:33-04:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/1cd55804b7dcf33c078cd1e435090d72533e1e15"
        },
        "date": 1590613562963,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6898,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164840 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6863,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175752 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7229065 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 75.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15760374 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11526022 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15570862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 336,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3567600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11898326 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7142361 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7689441 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7560954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 547,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2247393 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2156,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "468049 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 219,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5443192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8223805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17759584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39231627 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7470003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 519,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2293101 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 689,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1739497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 259,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4452880 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 285,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4196986 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25830506 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8530190 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 316,
            "unit": "ns/op\t     247 B/op\t       4 allocs/op",
            "extra": "3606442 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1280,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "925573 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "937869 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 168,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "7146162 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19252178 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59829741 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270726764 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "980700 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1046316,
            "unit": "ns/op\t     189 B/op\t       2 allocs/op",
            "extra": "1062 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6928,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161739 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7041,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176566 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 186,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6475915 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cd55804b7dcf33c078cd1e435090d72533e1e15",
          "message": "Merge pull request #418 from Fenny/master\n\nFix partial wildcard in Static",
          "timestamp": "2020-05-27T17:04:33-04:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/1cd55804b7dcf33c078cd1e435090d72533e1e15"
        },
        "date": 1590613624704,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7057,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157486 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7107,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174876 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5929700 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14749753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10473444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 88.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13558128 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3189030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 123,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10062302 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6636969 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7011324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7093707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 544,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2149989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2163,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "508930 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 236,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5055860 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6972954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16837473 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36557281 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 172,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7227313 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 564,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2204835 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 702,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1697564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 282,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4518336 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 295,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3971607 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19438110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7768700 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 285,
            "unit": "ns/op\t     233 B/op\t       4 allocs/op",
            "extra": "3898320 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1294,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "873050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1255,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "906494 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 198,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5995203 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 71.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16936402 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61409661 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "275492930 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1252,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "978369 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "930456 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1078554,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1098 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6698,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "156829 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6801,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167877 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 200,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6232092 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edb10010da90edcf7d35b5988cd40e33d52d35d8",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:05:47+02:00",
          "tree_id": "276d09c082785d34067469f22c28eb652c7cd7e8",
          "url": "https://github.com/gofiber/fiber/commit/edb10010da90edcf7d35b5988cd40e33d52d35d8"
        },
        "date": 1590613652016,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7159,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "155275 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6940,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177937 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7021231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16208154 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11946069 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14895499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 332,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3458418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 106,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11143773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7431333 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7574985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7691296 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 554,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2100883 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2107,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "558622 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 219,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5559913 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8436666 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 66.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18662757 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39971463 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8030001 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 541,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2225377 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 738,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1610343 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 285,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4473032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 295,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4212079 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 48.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25839020 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8290126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 338,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "3471375 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1289,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "910796 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "991123 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 181,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6951074 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18594142 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60753633 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "262877634 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "953268 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "992985 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1078393,
            "unit": "ns/op\t     178 B/op\t       2 allocs/op",
            "extra": "1126 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7207,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168776 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7123,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167694 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 189,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6219537 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edb10010da90edcf7d35b5988cd40e33d52d35d8",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:05:47+02:00",
          "tree_id": "276d09c082785d34067469f22c28eb652c7cd7e8",
          "url": "https://github.com/gofiber/fiber/commit/edb10010da90edcf7d35b5988cd40e33d52d35d8"
        },
        "date": 1590613665189,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7078,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "163388 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7210,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182952 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 196,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5531990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 88.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13075063 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 116,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10359805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 87.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12703825 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 391,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2971606 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 122,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9612846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6911642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 195,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5842502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6177829 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 600,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2002868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2140,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "523383 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 247,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4855467 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7321863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 75.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17165931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36756987 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 182,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6296329 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 574,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2147415 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 780,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1578805 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 292,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3735231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 302,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3881599 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 64.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18780822 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7515486 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 329,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "3651298 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1449,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "762741 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1374,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 197,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5542719 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1232,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 72.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16887823 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 23.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "48599545 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.67,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "257326538 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1382,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "811347 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "845721 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1108756,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1099 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7270,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "163262 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7158,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173646 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 211,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5543809 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38c8bb240daedba0887f864ed1f18facd7403df3",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:06:23+02:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/38c8bb240daedba0887f864ed1f18facd7403df3"
        },
        "date": 1590613767041,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7573,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157329 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7733,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6057992 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 89.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12974450 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9910658 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 95.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12860982 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 387,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3019507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 120,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9878073 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 188,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5947221 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6247477 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6602444 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 606,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2006497 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2476,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "476004 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 253,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4659009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6911858 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 73.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16220725 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36553304 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 197,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6416377 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 597,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1991500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 872,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1582984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 314,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3675206 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 327,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3737340 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19660274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6684519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 327,
            "unit": "ns/op\t     250 B/op\t       4 allocs/op",
            "extra": "3557026 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1422,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "827697 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1349,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "849398 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 210,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5909541 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1251,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "945417 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16313377 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53738528 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "258398462 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1342,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "892749 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "784861 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1187915,
            "unit": "ns/op\t     193 B/op\t       2 allocs/op",
            "extra": "1038 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7628,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "157702 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7731,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159740 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 218,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5562184 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "38c8bb240daedba0887f864ed1f18facd7403df3",
          "message": "Update app.go",
          "timestamp": "2020-05-27T23:06:23+02:00",
          "tree_id": "f801b78eb7aafef05296f76cbdec9436230b0c4f",
          "url": "https://github.com/gofiber/fiber/commit/38c8bb240daedba0887f864ed1f18facd7403df3"
        },
        "date": 1590613792308,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 8058,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166346 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6730,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169842 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6385917 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 82.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14184588 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10056729 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 89.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14042857 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 355,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3150970 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 112,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10756276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7052778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6985437 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7346376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 558,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2170150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2229,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "571545 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 229,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5119318 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7323883 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17219200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38155507 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 172,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6799827 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 532,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2252674 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 687,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1691482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 278,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4075968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 285,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4161003 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19753354 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7039758 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 306,
            "unit": "ns/op\t     264 B/op\t       4 allocs/op",
            "extra": "4119427 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1349,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "794482 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1268,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "893950 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 192,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6272432 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16969813 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57061226 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284068776 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1233,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "871050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1269,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "816289 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1077114,
            "unit": "ns/op\t     181 B/op\t       2 allocs/op",
            "extra": "1105 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6822,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176244 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6812,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174901 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 196,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6142238 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "2f4b9c4132883d7187795cf173453220277b4335",
          "message": "Add Handler comment",
          "timestamp": "2020-06-01T11:19:29+02:00",
          "tree_id": "0f1356910e758b0a830cbdb546b51a63ec3bc20b",
          "url": "https://github.com/Fenny/fiber/commit/2f4b9c4132883d7187795cf173453220277b4335"
        },
        "date": 1591003273337,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6601,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179485 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6726,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159146 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7226889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17786112 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11891600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14922482 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 317,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3868198 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 104,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11700388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7605057 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7863424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8347078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 522,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2310684 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2138,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "558200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 225,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5472499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8517536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 58.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18498946 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 28.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "44035036 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 151,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7801184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 508,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2407270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 700,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1794176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 260,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4597483 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 280,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4246681 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24833614 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8132863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 304,
            "unit": "ns/op\t     238 B/op\t       4 allocs/op",
            "extra": "3794698 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1238,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "940374 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "917277 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 162,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "7171438 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1076,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19511948 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62338390 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.23,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284730764 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "861230 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1047444,
            "unit": "ns/op\t     172 B/op\t       2 allocs/op",
            "extra": "1166 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6659,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184795 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6755,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182103 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 180,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6768010 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "06c119d49a53b7859dde8dd8302bae97becce880",
          "message": "Send 404 Body Response",
          "timestamp": "2020-06-01T11:24:22+02:00",
          "tree_id": "9ee3fd8ba65ca6c7ac836c613a3bb92502996b9e",
          "url": "https://github.com/Fenny/fiber/commit/06c119d49a53b7859dde8dd8302bae97becce880"
        },
        "date": 1591003564783,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5684,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "222796 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5551,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "220965 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8828998 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 62.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19295252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 82,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15416818 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 62.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19225669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 258,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4401927 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 86.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14257562 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9894697 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9686216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 121,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10519822 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 471,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2847168 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1711,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "768392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 176,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6323664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9344539 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 48.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23408504 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 23.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "45725263 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 125,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8696470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 420,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2953195 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 562,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2092526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 216,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5533951 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 226,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5088386 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 40.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30432499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10110542 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 247,
            "unit": "ns/op\t     233 B/op\t       4 allocs/op",
            "extra": "4889881 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1006,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 993,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1214583 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 142,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "8687481 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 949,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1372360 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 52.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21922689 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 15.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "79413882 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "360209384 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 976,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1306428 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 956,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1284499 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 829296,
            "unit": "ns/op\t     139 B/op\t       2 allocs/op",
            "extra": "1438 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5538,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "217812 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5428,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "228697 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 145,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7976227 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "5c5afa88ae9ff997f6818baec307180afbc450b7",
          "message": "Add 404 Benchmark",
          "timestamp": "2020-06-01T11:54:23+02:00",
          "tree_id": "707982669e23962a89f38a855af698e68adf36a5",
          "url": "https://github.com/Fenny/fiber/commit/5c5afa88ae9ff997f6818baec307180afbc450b7"
        },
        "date": 1591005361273,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6118,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173846 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6263,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198481 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8142768 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 64.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18476826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 89.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12425948 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 68.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16840200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 297,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3989448 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 92.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12645108 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7829281 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9199915 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8871836 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 465,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2627137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1785,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "656366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 194,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5833668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9770563 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 52.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20766180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 25.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "42472046 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 129,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "9045794 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 447,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2818278 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 614,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1952847 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 235,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5590231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 240,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "5044810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 41.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "31456083 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10192867 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 276,
            "unit": "ns/op\t     258 B/op\t       4 allocs/op",
            "extra": "4251133 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1318,
            "unit": "ns/op\t     112 B/op\t       4 allocs/op",
            "extra": "844114 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1101,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "975292 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1007,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 146,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "7981404 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 936,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1309988 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19860895 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 16.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "73954951 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "315388158 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1062,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1009,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1127480 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 932743,
            "unit": "ns/op\t     159 B/op\t       2 allocs/op",
            "extra": "1257 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6179,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176600 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6430,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193712 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 167,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7251644 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "a58bc02eca6e3485969adb0507f29da15c3952a0",
          "message": "Update benchmarks",
          "timestamp": "2020-06-01T12:05:02+02:00",
          "tree_id": "28fa049d4e9bf5c2c54fd792c94abb7a1930d7d0",
          "url": "https://github.com/Fenny/fiber/commit/a58bc02eca6e3485969adb0507f29da15c3952a0"
        },
        "date": 1591006003691,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7052,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170900 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6860,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "165718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6525981 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13918843 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9955969 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13643784 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 380,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3363386 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 111,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10822027 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 188,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6560570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6635120 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7517422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 560,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2052231 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2122,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "542199 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 236,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4625388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7439630 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17132284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35222247 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 169,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7028598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 555,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2158496 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 694,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1709599 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 283,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4142259 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 304,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4060670 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20996212 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7328314 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 324,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "3680758 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1311,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "872746 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1404,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "830300 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1288,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "912513 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 197,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6017805 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "960978 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 66.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16785997 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55298506 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "251862898 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1265,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "868321 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1085031,
            "unit": "ns/op\t     188 B/op\t       2 allocs/op",
            "extra": "1068 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6980,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179558 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7192,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "165754 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 205,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5513095 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1827ccce7ab91c649ad5a44990715d49cedefdc0",
          "message": "Default 404 if Use response is empty",
          "timestamp": "2020-06-01T12:10:30+02:00",
          "tree_id": "106df2836e9cb7fbfe0990944f3f1ca853972a35",
          "url": "https://github.com/Fenny/fiber/commit/1827ccce7ab91c649ad5a44990715d49cedefdc0"
        },
        "date": 1591006323424,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7277,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159982 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7248,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 181,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6729175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15151395 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 109,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10620242 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 83.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14596975 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 361,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3357224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10900358 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6952705 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7066111 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7293801 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 580,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2100349 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2176,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "531186 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 233,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4976408 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7429806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18357853 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38236386 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 162,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7308872 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 569,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2065875 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 744,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1601866 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 283,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4172476 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 308,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3870753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23356208 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7907042 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 357,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "3365814 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1453,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "827510 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1350,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "852518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1258,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907321 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 177,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6834529 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "951277 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17368125 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57049948 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253777659 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1285,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "917625 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1281,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "906746 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1128632,
            "unit": "ns/op\t     190 B/op\t       2 allocs/op",
            "extra": "1057 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7270,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162099 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7361,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172657 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 195,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6120722 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "705b05216a6ac9c5fe4a77cd20bf0f85e6bef716",
          "message": "Update Static test",
          "timestamp": "2020-06-01T12:54:32+02:00",
          "tree_id": "f85f88c8dcce84282791669ded93f94fde312e16",
          "url": "https://github.com/Fenny/fiber/commit/705b05216a6ac9c5fe4a77cd20bf0f85e6bef716"
        },
        "date": 1591008966298,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7461,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164514 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7499,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162786 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 201,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6043226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 88.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12975591 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10538592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13617098 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 384,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3180632 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 121,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9838509 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5584154 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6202357 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6358759 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 593,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "1990551 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2343,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "524289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 253,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4785717 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6780932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 72,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16272717 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 33.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "35434581 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 189,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6514698 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 585,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2023321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 759,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1582831 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 289,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3966033 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 312,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3853720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21028080 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6721218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 322,
            "unit": "ns/op\t     246 B/op\t       4 allocs/op",
            "extra": "3623341 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1458,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "840163 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1367,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "869386 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 238,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4908858 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1263,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "895592 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 73.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16193598 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53238681 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 5.09,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "238151196 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1394,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "895806 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1364,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "835936 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1151351,
            "unit": "ns/op\t     191 B/op\t       2 allocs/op",
            "extra": "1047 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7453,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162114 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7474,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159015 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 215,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5751292 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "f9c08818ed6e297e026fe73fa22cd19e472884db",
          "message": "Return 404 if Next does not match",
          "timestamp": "2020-06-01T13:36:51+02:00",
          "tree_id": "5a69741c6aaba1097047df67ef95aaddc8ebfade",
          "url": "https://github.com/Fenny/fiber/commit/f9c08818ed6e297e026fe73fa22cd19e472884db"
        },
        "date": 1591011514080,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7169,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172431 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6966,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "165289 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6889663 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15043004 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11519148 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14414587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 339,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3479856 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 113,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11302831 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7090362 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7068388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7438891 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 549,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2206185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2038,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "559922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 215,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5494702 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8108552 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19595178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "39802608 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 157,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7714814 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 539,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2140584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 708,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1678215 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 264,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4492292 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 289,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4026750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23195185 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7932115 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 346,
            "unit": "ns/op\t     256 B/op\t       4 allocs/op",
            "extra": "3435589 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1401,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "876450 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1262,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "865002 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "989919 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 243,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4990060 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1073674 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18188934 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59198180 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "259140511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "942728 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1238,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "978050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1071861,
            "unit": "ns/op\t     182 B/op\t       2 allocs/op",
            "extra": "1098 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7072,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168711 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7156,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176421 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 186,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6313557 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "027823e08482e3516e20962246533419f01a9b09",
          "message": "Return 404 if Next does not match",
          "timestamp": "2020-06-01T13:45:04+02:00",
          "tree_id": "59282ee3be5d3b079b536fcf4c0e8baa37941170",
          "url": "https://github.com/Fenny/fiber/commit/027823e08482e3516e20962246533419f01a9b09"
        },
        "date": 1591011999991,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7214,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159745 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6953,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "163864 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6963176 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15827590 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11382205 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15177240 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3512068 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 106,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11131153 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7397565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7628343 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7544527 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 549,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2154693 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2044,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "558603 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 224,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5277970 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8051286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19540222 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 30.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38024868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7838943 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 526,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2255464 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 713,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1682144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 273,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4395908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 287,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4152066 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 46.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25765124 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8350741 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 343,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "3361581 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1422,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "870654 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1258,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "807042 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "958484 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 233,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5175604 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "958514 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18297232 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52539021 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "268394784 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "890667 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1201,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "956942 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1065048,
            "unit": "ns/op\t     181 B/op\t       2 allocs/op",
            "extra": "1107 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6991,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169749 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7003,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174679 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6558835 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "69596c03b908d9419a93a06f2bc4c9fdb6d2b75f",
          "message": "Add io.Reader support\n\nCo-Authored-By: Roman Kredentser <shareed2k@gmail.com>",
          "timestamp": "2020-06-01T14:53:45+02:00",
          "tree_id": "e081b263fe836c24f188ba278abdd92352ef1bd3",
          "url": "https://github.com/Fenny/fiber/commit/69596c03b908d9419a93a06f2bc4c9fdb6d2b75f"
        },
        "date": 1591016122492,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7188,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "153124 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7436,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164269 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6769804 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 79.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15044850 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11101708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 85.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14122178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 349,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3408745 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 110,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10828808 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 185,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6688671 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7012963 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7296847 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 579,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2117709 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2146,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "474758 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 242,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5017083 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7263612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 66.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17934540 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "36468356 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 164,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6798846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 559,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2135180 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 748,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1617123 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 285,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4213932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 300,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4038030 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24134570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7865312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 359,
            "unit": "ns/op\t     255 B/op\t       4 allocs/op",
            "extra": "3458698 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1461,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "823435 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1347,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "809274 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1355,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "847518 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 255,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4747930 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1224,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908886 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16823384 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55046840 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "250943546 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1248,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "875786 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1287,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "898413 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1143466,
            "unit": "ns/op\t     187 B/op\t       2 allocs/op",
            "extra": "1070 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7178,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169794 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7350,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167562 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 195,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6174937 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "8cfadbde291fc9eeedf9fa05ec2b8582d6167663",
          "message": "Add io.Reader comments\n\nCo-Authored-By: Roman Kredentser <shareed2k@gmail.com>",
          "timestamp": "2020-06-01T15:00:42+02:00",
          "tree_id": "73a75b278a530cb1cac3f2e4c224618edc4fe9e4",
          "url": "https://github.com/Fenny/fiber/commit/8cfadbde291fc9eeedf9fa05ec2b8582d6167663"
        },
        "date": 1591016543863,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6140,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176169 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6096,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175634 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7326355 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16254264 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 95.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12368499 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15865922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4009416 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 99.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13210404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7666862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7676828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7499522 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 495,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2486936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2008,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "555384 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 223,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5382172 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7180267 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17385454 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 28.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38388446 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 151,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7712910 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 481,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2606773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 613,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1929850 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 264,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4493373 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 277,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4419196 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21561972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8379117 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 267,
            "unit": "ns/op\t     258 B/op\t       4 allocs/op",
            "extra": "4255162 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1334,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "925861 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1145,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "882093 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 241,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4747563 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1077,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1229242 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 57.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20704599 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57507848 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "305775064 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1038,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "988250 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 944648,
            "unit": "ns/op\t     181 B/op\t       2 allocs/op",
            "extra": "1106 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5940,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "198501 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5941,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "206350 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 169,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6894344 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f08c08459d548cdcc37a339df56d97e3cc82524",
          "message": "Merge pull request #431 from Fenny/master\n\nRouter updates",
          "timestamp": "2020-06-01T09:08:19-04:00",
          "tree_id": "73a75b278a530cb1cac3f2e4c224618edc4fe9e4",
          "url": "https://github.com/Fenny/fiber/commit/4f08c08459d548cdcc37a339df56d97e3cc82524"
        },
        "date": 1591024203120,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6431,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180006 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6423,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186817 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7862060 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 65.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16594707 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 88.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13192434 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16178438 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 294,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4081358 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 93.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12513151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8494502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8541549 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8639637 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 491,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2510832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1961,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "589852 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 205,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5643544 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8436332 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 59.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19741597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 29,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "41215252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7685055 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 522,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2336131 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 676,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1760773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 265,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4754724 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 280,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4381126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 47.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24188787 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8490472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 319,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "3706237 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1288,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "904044 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1129,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 213,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5018305 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1078,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1210650 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18881190 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58187079 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.96,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "288481336 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "935047 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1053,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 919569,
            "unit": "ns/op\t     152 B/op\t       2 allocs/op",
            "extra": "1320 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5875,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "202965 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6315,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201620 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 167,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7591006 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "ae785453bb9cddb46ca9dc881f892c767f4d611e",
          "message": "Hide complete msg on DisableStartupMessage",
          "timestamp": "2020-06-01T20:29:52+02:00",
          "tree_id": "e6deeed421d6a405da34490233a4325a1bd624a3",
          "url": "https://github.com/Fenny/fiber/commit/ae785453bb9cddb46ca9dc881f892c767f4d611e"
        },
        "date": 1591036302227,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7412,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "153794 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7515,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158373 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 181,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6803578 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 84.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14598676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 110,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9848521 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 88.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13419838 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 362,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3324366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 115,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9010143 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 181,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6470034 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6753392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6938557 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 580,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2103302 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2282,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "512959 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 236,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5057461 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7469884 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 71.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17136992 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37723570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 175,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6679564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 568,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2098074 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 775,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1588932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 293,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3883239 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 310,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3975674 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 50.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24409627 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7856725 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 367,
            "unit": "ns/op\t     267 B/op\t       4 allocs/op",
            "extra": "3255040 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1479,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "806593 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1363,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "815278 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1315,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "881947 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 250,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4753069 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "938179 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 70.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16789802 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57206574 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "250385450 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1302,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "822444 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1348,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "886647 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1191089,
            "unit": "ns/op\t     193 B/op\t       2 allocs/op",
            "extra": "1038 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7452,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160699 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7519,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "154042 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 201,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5995824 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "eb8c8d88d3be74d994ce22c02a0e57b0da67d972",
          "message": "Update version 1.10.3",
          "timestamp": "2020-06-01T20:30:11+02:00",
          "tree_id": "7d3e9efab24a23a7e973f8da483b922559094788",
          "url": "https://github.com/Fenny/fiber/commit/eb8c8d88d3be74d994ce22c02a0e57b0da67d972"
        },
        "date": 1591036308199,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7396,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164149 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7320,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159550 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 181,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6557048 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 80.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15118777 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11211012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 86.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13997068 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 351,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3419971 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 114,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10490206 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6588426 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6859966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7107250 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 570,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2068159 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2471,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "515894 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 234,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5015012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7568587 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17431623 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37753452 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 167,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7131861 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 563,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2174485 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 738,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1608487 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 291,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4193137 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 313,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3947166 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20491275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7961772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 367,
            "unit": "ns/op\t     257 B/op\t       4 allocs/op",
            "extra": "3425470 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1469,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "809700 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1348,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "853048 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1269,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "879618 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 256,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4573119 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "940602 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 69.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16769478 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56095447 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.77,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253253372 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1273,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "868773 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1296,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "898420 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1127230,
            "unit": "ns/op\t     190 B/op\t       2 allocs/op",
            "extra": "1057 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7295,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "167349 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7461,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "144258 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 198,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6082370 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5caaea6d5a0e3f889624af699426a3401ed0ed81",
          "message": "Merge pull request #432 from Fenny/master\n\nUpdate DisableStartupMessage Behaviour",
          "timestamp": "2020-06-01T14:33:57-04:00",
          "tree_id": "7d3e9efab24a23a7e973f8da483b922559094788",
          "url": "https://github.com/Fenny/fiber/commit/5caaea6d5a0e3f889624af699426a3401ed0ed81"
        },
        "date": 1591103571698,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 8336,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "146014 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 8316,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "146262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6256371 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 87.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14177044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 115,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10410070 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 91.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13247932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 363,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3331965 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 115,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10334734 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6777430 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 184,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6516985 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7168274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 579,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2042256 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2505,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "459021 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 235,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4906140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7270956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 67.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16845855 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 32.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "37303555 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 178,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6473082 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 566,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2069214 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 760,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1562312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 301,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4008376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 312,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3845752 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23492368 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7276124 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 350,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "3516708 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1534,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "768087 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1408,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "745855 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1327,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "910891 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 260,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4623169 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "907563 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 72.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17303128 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52559872 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.92,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "239454231 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1303,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "856071 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1353,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "850104 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1187866,
            "unit": "ns/op\t     197 B/op\t       2 allocs/op",
            "extra": "1017 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 8354,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "139038 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 8442,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "133896 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 205,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5428242 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f402a5495f9a917327d780e23b463b0285086fe",
          "message": "Merge pull request #434 from ReneWerner87/master\n\nFix a problem when matching the static routes",
          "timestamp": "2020-06-02T17:57:05-04:00",
          "tree_id": "923a3172ff7ef4146aa545cfb06441100950f24e",
          "url": "https://github.com/Fenny/fiber/commit/2f402a5495f9a917327d780e23b463b0285086fe"
        },
        "date": 1591135332502,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6536,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182707 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6523,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177776 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6253660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 86.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14877048 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10767772 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14250026 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 365,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3318156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 110,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9875359 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7093683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 180,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6626067 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7308960 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 556,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2099832 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2036,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "621480 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 225,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5287699 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7240966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17350045 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 31.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "38818074 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 167,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7117834 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 534,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2240874 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 692,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1734564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 272,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4385392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 291,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4243192 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20326080 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7303256 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 286,
            "unit": "ns/op\t     267 B/op\t       4 allocs/op",
            "extra": "4076244 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1416,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "850676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1292,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "888894 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1221,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "943594 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 270,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4417999 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19337390 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57096868 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "265262842 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1231,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "908766 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1234,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "926475 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1072401,
            "unit": "ns/op\t     179 B/op\t       2 allocs/op",
            "extra": "1117 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6531,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175387 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6538,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186000 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 188,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6172324 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "1d16f9943856bbb6f3b93e713103b6420fd63105",
          "message": "Update comment",
          "timestamp": "2020-06-03T00:02:26+02:00",
          "tree_id": "efa42a74dad6024558a4d21c885045860a4b57c9",
          "url": "https://github.com/Fenny/fiber/commit/1d16f9943856bbb6f3b93e713103b6420fd63105"
        },
        "date": 1591143260622,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7777,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "152288 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7597,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161318 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6944931 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15839662 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11867002 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14999338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 366,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3454098 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 92.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12772225 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6868976 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7348150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7609335 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 538,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2225823 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2046,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "537114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 222,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5236561 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8647339 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19284585 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62927133 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 155,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7658584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 532,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2254765 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 707,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1678114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 278,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4207434 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 289,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4158984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "24582829 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7718582 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 343,
            "unit": "ns/op\t     253 B/op\t       4 allocs/op",
            "extra": "3489106 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1387,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "862308 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1287,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "858064 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1216,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "935427 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 239,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5024280 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1058241 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 66.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16839681 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59692190 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.59,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "259368144 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1204,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "899034 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1226,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "952746 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1068537,
            "unit": "ns/op\t     183 B/op\t       2 allocs/op",
            "extra": "1092 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7602,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "154840 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7659,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "158304 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6407259 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "a257b6e1ec2f896fdc045a4bed2c218809e3c6c4",
          "message": "Add ErrorHandler",
          "timestamp": "2020-06-03T12:48:49+02:00",
          "tree_id": "98113567cd58369c93fa8a6eae71c7adf7cb3ede",
          "url": "https://github.com/Fenny/fiber/commit/a257b6e1ec2f896fdc045a4bed2c218809e3c6c4"
        },
        "date": 1591181426370,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7351,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "144902 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7282,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7808341 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16439089 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12066321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15478011 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 306,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3917857 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 90.6,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12762556 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7433628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7843348 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8150382 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 509,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2215330 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1891,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "635470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 191,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5855272 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9858904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 57.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20292181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 16.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62511436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 139,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7509375 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 471,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2209110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 649,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1951683 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 243,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4870324 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 258,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4319252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 42.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25279902 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9172501 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 290,
            "unit": "ns/op\t     257 B/op\t       4 allocs/op",
            "extra": "4285278 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1266,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "865292 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1125,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1075,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 208,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5851189 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1030,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1232090 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18610846 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62338940 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "284989921 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 978384,
            "unit": "ns/op\t     168 B/op\t       2 allocs/op",
            "extra": "1192 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7303,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176653 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7347,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "142861 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 174,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6510278 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "982bc5d55c83f8c80d69235e09a307f9a448c56c",
          "message": "Add ErrorHandler tests",
          "timestamp": "2020-06-03T12:57:31+02:00",
          "tree_id": "b6fbb46ea73267026b9fd74bc27aa138ed9f07ec",
          "url": "https://github.com/Fenny/fiber/commit/982bc5d55c83f8c80d69235e09a307f9a448c56c"
        },
        "date": 1591181959887,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6741,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161442 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6901,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168513 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8012346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18253468 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 90.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12599718 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 73.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15180138 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 295,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4049282 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 86.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14272398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7597119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7067257 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8103708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 489,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2418531 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1909,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "608343 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 201,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5802584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9281226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 59.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19095334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 17.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "72399740 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 145,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7970614 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 497,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2523548 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 699,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1726862 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4614810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 288,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4164249 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 45.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25273899 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 132,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9122388 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 301,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "3684148 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1279,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "873786 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1109,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1086139 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1046,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 203,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "6204778 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1010,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20051089 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 17.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "71798108 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "316219255 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1023,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 921647,
            "unit": "ns/op\t     156 B/op\t       2 allocs/op",
            "extra": "1286 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6559,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186061 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6961,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179878 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 169,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6932091 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "Fenny",
            "username": "Fenny"
          },
          "distinct": true,
          "id": "d6bee955de6fc91df0ee4ebef4ee33b85ff83b2f",
          "message": "Add recover by default",
          "timestamp": "2020-06-03T13:12:10+02:00",
          "tree_id": "5b11f30620a2cabec1438a8f30666778e3fe06bb",
          "url": "https://github.com/Fenny/fiber/commit/d6bee955de6fc91df0ee4ebef4ee33b85ff83b2f"
        },
        "date": 1591182824921,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6075,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201589 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6251,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6740390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15695978 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13363593 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15504936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 316,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3345584 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 95.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11623921 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7852377 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7172565 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7647644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 497,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2402106 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1951,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "639068 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 214,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5513077 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8448834 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19061929 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "70336945 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 161,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8105436 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 489,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2168907 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 637,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1894644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 258,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4541031 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 272,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4366376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 49.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21555864 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 145,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8017783 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 294,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "4353162 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1328,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "929530 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1159,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "949364 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 251,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4437495 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1094,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 57.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19742908 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59474636 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.26,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "280946540 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859887 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "997083 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 977910,
            "unit": "ns/op\t     168 B/op\t       2 allocs/op",
            "extra": "1192 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6088,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187020 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5965,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "196388 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 174,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6294428 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "961fda2b8da004e114ee78e163f270a69016f412",
          "message": "Merge pull request #435 from Fenny/master\n\nBump Fasthttp v1.14.0",
          "timestamp": "2020-06-03T06:23:58-04:00",
          "tree_id": "efa42a74dad6024558a4d21c885045860a4b57c9",
          "url": "https://github.com/Fenny/fiber/commit/961fda2b8da004e114ee78e163f270a69016f412"
        },
        "date": 1591196305710,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6807,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160312 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7211,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170600 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 212,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6176276 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14214236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8942517 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 92.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13599088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 383,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3167800 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11056454 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6574450 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6305134 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6410640 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 589,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2036284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2172,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "557448 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 253,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4785968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6764929 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 74.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15010040 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59744373 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 193,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6178345 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 580,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2107526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 732,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1623922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 293,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4143826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 326,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3998994 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 66.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17985386 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 210,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5178706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 348,
            "unit": "ns/op\t     230 B/op\t       4 allocs/op",
            "extra": "3171655 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1522,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "769738 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1353,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "767272 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1417,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "815344 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 292,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3847874 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "837123 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15991972 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56981450 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "257721169 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1370,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "808276 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1300,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "916387 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1189962,
            "unit": "ns/op\t     186 B/op\t       2 allocs/op",
            "extra": "1076 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7076,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175099 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7093,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "178191 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 199,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6035977 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2aec03a3be78cf12ffaf12c9dc8db0c2a8f660b2",
          "message": "🚀v1.11.0-alpha (#445)\n\n* 🔎 Add more test coverage\r\n\r\n* 🧬 Add internal middleware\r\n\r\n* 📦 Update dependencies\r\n\r\n* 😌 Ignore .gz files\r\n\r\n* 🐛 ErrorHandler & ctx.Routes()\r\n\r\n* ⌨️ Fix typo\r\n\r\n* 📋 Add route position\r\n\r\n* 📙 utf-8 support\r\n\r\n* 🩹 Fix Golint",
          "timestamp": "2020-06-06T08:05:07+02:00",
          "tree_id": "ec2f3668b361d83310545baf8549d76c35050b96",
          "url": "https://github.com/gofiber/fiber/commit/2aec03a3be78cf12ffaf12c9dc8db0c2a8f660b2"
        },
        "date": 1591423605181,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5929,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "215737 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5877,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "214599 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7529054 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 72.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16874230 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 100,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13144533 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 76.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15996657 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 318,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3951955 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 91.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13872016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6874962 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7412098 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8128224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 520,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2277795 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2103,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "599179 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 215,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5899912 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9038533 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20298948 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66598299 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 166,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6941044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 522,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2116160 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 604,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1920841 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 256,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4817818 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 261,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4745042 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 60.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19767434 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9936826 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8270628 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 299,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "4203602 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1301,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "785954 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1216,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "986919 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1109,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 236,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5218581 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1032,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 57,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21466702 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66707647 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "257698492 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1063,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1085,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "965356 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 943245,
            "unit": "ns/op\t     162 B/op\t       2 allocs/op",
            "extra": "1234 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6056,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "222550 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5873,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201366 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 171,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6320840 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ab641aec46512a71d54f3f0ceb18632c050606f",
          "message": "Merge pull request #447 from Fenny/master\n\n🚀v1.11.0-alpha",
          "timestamp": "2020-06-06T08:09:44+02:00",
          "tree_id": "ec2f3668b361d83310545baf8549d76c35050b96",
          "url": "https://github.com/gofiber/fiber/commit/1ab641aec46512a71d54f3f0ceb18632c050606f"
        },
        "date": 1591423877399,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5943,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172576 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6213,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "215589 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5972745 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 73.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17681811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11896848 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 83.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15598122 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 344,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3688839 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 92.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13204384 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7608435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6338352 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6999403 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 523,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2280082 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2010,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "569181 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 208,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5911243 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7958968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 66.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17607843 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66110846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 167,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7534070 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 545,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2092701 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 650,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1680810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 273,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4446130 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 259,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4739155 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21037962 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10029202 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8670529 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 284,
            "unit": "ns/op\t     246 B/op\t       4 allocs/op",
            "extra": "4525827 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1308,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "997267 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1161,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 246,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4972839 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1051,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 57.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18263790 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62886604 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "264005893 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1118,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1082,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 960029,
            "unit": "ns/op\t     173 B/op\t       2 allocs/op",
            "extra": "1160 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6063,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "207405 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6022,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "207394 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 196,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6507607 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46997a6f919e4248d44a9be91e53495df7ef4cb9",
          "message": "Merge pull request #448 from Fenny/master\n\nUpdate error handling",
          "timestamp": "2020-06-06T22:47:00+02:00",
          "tree_id": "811bc80c21d2b3b766bc90b30a7597c36da6bac3",
          "url": "https://github.com/gofiber/fiber/commit/46997a6f919e4248d44a9be91e53495df7ef4cb9"
        },
        "date": 1591476523169,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6185,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "188680 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 5944,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "213381 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7274466 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 71.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16227806 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 102,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12425898 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 74.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16927446 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 320,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3642458 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 87,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11644280 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7479236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7384956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8115927 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 494,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2401886 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1933,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "677029 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 211,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5368539 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8607387 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20536468 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64966753 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7324924 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 490,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2319265 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 662,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1905236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 262,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4366936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 265,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4386093 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 59.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20197238 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9908140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8814465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 272,
            "unit": "ns/op\t     262 B/op\t       4 allocs/op",
            "extra": "4165231 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1306,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1181,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1089,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "989761 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 233,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4818727 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17919712 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61786551 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.42,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "259877354 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1090,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1101,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 953404,
            "unit": "ns/op\t     156 B/op\t       2 allocs/op",
            "extra": "1284 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6012,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "210321 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5970,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195866 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 173,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "7229828 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jozsef@sallai.me",
            "name": "József Sallai",
            "username": "jozsefsallai"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa0f34e58565d025c5e07322e3a101466d11ee62",
          "message": "Merge pull request #449 from nyaascii/feat/stargazers\n\nAdd the stargazers chart to README files",
          "timestamp": "2020-06-07T00:39:28+03:00",
          "tree_id": "c3fccbdacc405cc06cfce397434b05cf7a76f430",
          "url": "https://github.com/gofiber/fiber/commit/fa0f34e58565d025c5e07322e3a101466d11ee62"
        },
        "date": 1591479676397,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7746,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "147040 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 8114,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "149586 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6819147 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 78.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15321762 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10645573 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14769998 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 341,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3542193 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 101,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12148688 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 170,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7203514 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6294620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6809145 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 592,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2077568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2287,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "504910 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 231,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5415447 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7755592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16209456 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52419556 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 164,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6882712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 561,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2177253 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 741,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1601604 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 274,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4296712 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 284,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4247812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 64.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18618549 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8424669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7094649 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 347,
            "unit": "ns/op\t     238 B/op\t       4 allocs/op",
            "extra": "3035954 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1521,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "823185 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1287,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "887428 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1217,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "948330 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 235,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4671367 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1176,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1031178 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17225632 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59621062 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.64,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "261102148 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1317,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "886380 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1258,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "948022 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1112221,
            "unit": "ns/op\t     204 B/op\t       3 allocs/op",
            "extra": "984 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 8069,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "145879 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7967,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "153242 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 199,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6065689 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abf1f7338899d07cf42c75bd06a859ae2eef1545",
          "message": "Merge pull request #450 from ReneWerner87/master\n\nrepair some tests and add new tests for logger and server error handler",
          "timestamp": "2020-06-07T20:03:59+02:00",
          "tree_id": "18acd1e53a9e1637b8a56a6876510339ac3b726e",
          "url": "https://github.com/gofiber/fiber/commit/abf1f7338899d07cf42c75bd06a859ae2eef1545"
        },
        "date": 1591553132493,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6904,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "149347 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6728,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "178797 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6928051 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15962257 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11295337 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 74.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16565899 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 305,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4086528 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 84.1,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14457922 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7880642 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7731201 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8368783 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 502,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2357896 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2067,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "598088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 198,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5536226 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9952956 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 56.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20267115 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "77885370 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 152,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8103573 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 515,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2415136 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 689,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1775288 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 253,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4599058 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 263,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4833936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 54.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21887179 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9609108 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8457796 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 300,
            "unit": "ns/op\t     270 B/op\t       4 allocs/op",
            "extra": "4016935 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1283,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "855987 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1214,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1014772 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 214,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5890063 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1045,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19928073 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 17.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59066785 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.12,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "302888676 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1080,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1069898 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961759 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 972031,
            "unit": "ns/op\t     167 B/op\t       2 allocs/op",
            "extra": "1203 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6025,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "215040 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6363,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "183691 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 162,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6785574 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45c9a7e1c6d063e258ab02a65f0cfc78ccd0a5e1",
          "message": "Merge pull request #452 from ReneWerner87/cleanupRouteTests\n\nswap out the test routes into a json file",
          "timestamp": "2020-06-07T20:26:42+02:00",
          "tree_id": "8f848a34fd784c4b97a92ee30a9380cd6cd183d5",
          "url": "https://github.com/gofiber/fiber/commit/45c9a7e1c6d063e258ab02a65f0cfc78ccd0a5e1"
        },
        "date": 1591554494540,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7062,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160575 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6647,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180110 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6481184 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 75.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14117972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11342376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 81.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17191005 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 340,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3421065 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 88.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12790863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7759882 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6533818 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6832332 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 536,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2244933 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2137,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "567868 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 239,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5153744 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 153,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7801270 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 70.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16720668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66531961 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 171,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6702076 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 566,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2217009 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 773,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1579689 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 289,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3943390 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 287,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4338414 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 62.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18251242 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8937807 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8222044 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 286,
            "unit": "ns/op\t     262 B/op\t       4 allocs/op",
            "extra": "4162011 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1319,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "833844 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1198,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 249,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4834699 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1098,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1146051 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 59.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18613452 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "65433702 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.32,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "283064067 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1095961 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1052092,
            "unit": "ns/op\t     157 B/op\t       2 allocs/op",
            "extra": "1273 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6634,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "178266 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6953,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170060 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 187,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6151615 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "965b44ef7b1f108e8996f74a93e095b86afb1130",
          "message": "Merge pull request #453 from Fenny/master\n\nAdd CompressedFileSuffix",
          "timestamp": "2020-06-07T20:39:52+02:00",
          "tree_id": "006a15036ae1d3812abe3f25a20bb3ae56f97600",
          "url": "https://github.com/gofiber/fiber/commit/965b44ef7b1f108e8996f74a93e095b86afb1130"
        },
        "date": 1591555289512,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7516,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "148440 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7289,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "151140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 207,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5642859 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 85,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12850140 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8824576 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 87.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14162697 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 376,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "2913704 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 105,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12331010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6636621 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 203,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6177908 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 190,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6140664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 592,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2030277 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2124,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "507573 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 241,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4791334 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7742965 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 72.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17270554 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 21.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60368748 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 183,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6216451 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 605,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2105332 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 816,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1494092 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 292,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4114677 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 304,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3916873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 69.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17558926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8246074 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7379280 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 320,
            "unit": "ns/op\t     246 B/op\t       4 allocs/op",
            "extra": "3632440 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1557,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "720517 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1451,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "779610 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1372,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "936501 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 283,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4374666 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1258,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "965539 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16636479 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 22.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "56986873 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.63,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "270204841 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1232,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "900112 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1305,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "890956 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1096657,
            "unit": "ns/op\t     201 B/op\t       2 allocs/op",
            "extra": "997 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7875,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "152638 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7255,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "171896 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 223,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5234432 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4ffb82493b9519987aa93d61a0a3bbf7f876b33",
          "message": "Merge pull request #454 from ReneWerner87/defaultSettings\n\norganize default settings more clear",
          "timestamp": "2020-06-07T21:41:55+02:00",
          "tree_id": "a50be0d34836f1fd1ba6997b1e2916013fa49f2f",
          "url": "https://github.com/gofiber/fiber/commit/b4ffb82493b9519987aa93d61a0a3bbf7f876b33"
        },
        "date": 1591559006808,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6359,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175833 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6881,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "160519 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6241903 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15749698 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12220647 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14563963 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 313,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3634796 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 89,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "14020953 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 144,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8570053 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7305867 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7668472 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 508,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2335321 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2127,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "535635 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 222,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5176698 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8475752 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17759811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68916308 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 174,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6854934 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 482,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2354126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 786,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1563256 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 274,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4053079 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 254,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4966254 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 66.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17997879 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8835424 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8493580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 287,
            "unit": "ns/op\t     256 B/op\t       4 allocs/op",
            "extra": "4295467 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1369,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "980000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1232,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "856521 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1006165 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 239,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5052440 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1016,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 55.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20658228 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66153192 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "328992678 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1052,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "989407 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1134,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "953564 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 952991,
            "unit": "ns/op\t     155 B/op\t       2 allocs/op",
            "extra": "1293 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6489,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "196569 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6747,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172726 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 184,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "6340208 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "748935aace7c60e0bfa6a2ffb25ef1866dfb4047",
          "message": "Merge pull request #451 from otaku/master\n\n🩹 fix ctx.Render when using Go Templates",
          "timestamp": "2020-06-07T22:16:48+02:00",
          "tree_id": "b233f7917868d0707e8d8aeb2afd56199925b9b3",
          "url": "https://github.com/gofiber/fiber/commit/748935aace7c60e0bfa6a2ffb25ef1866dfb4047"
        },
        "date": 1591561099045,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6732,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176810 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6648,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180199 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7138626 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15513591 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11819664 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14045816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 333,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3764329 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 94,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12416283 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 160,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7305570 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7089644 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7259816 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 543,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2197597 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2167,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "555715 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 223,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5395441 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 132,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8927709 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 64.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19494004 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "62644699 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 155,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6800422 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 546,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2221797 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 721,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1665633 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 266,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4360233 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 284,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4267526 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 55.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20604729 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9025309 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8066904 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 332,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "3509755 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1408,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "849003 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1279,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "909193 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1195,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "929576 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 233,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5182741 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "972486 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 65.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18310322 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61079422 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.52,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "269282353 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "917143 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1045086,
            "unit": "ns/op\t     177 B/op\t       2 allocs/op",
            "extra": "1131 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6636,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "185198 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6878,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176784 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 199,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5961402 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8c2556a19cb09e843a1f137e2dfaedee01564b5",
          "message": "Merge pull request #455 from Fenny/master\n\nUpdate Render + Tests",
          "timestamp": "2020-06-07T22:49:01+02:00",
          "tree_id": "db9f9f2ac176a68ad2c7a2f0478f7528034e2c87",
          "url": "https://github.com/gofiber/fiber/commit/e8c2556a19cb09e843a1f137e2dfaedee01564b5"
        },
        "date": 1591563047847,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7350,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159600 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7037,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162386 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 187,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6276117 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14290795 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 113,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10346745 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 88.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13474756 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 352,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3307468 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 100,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11534722 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6990168 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 195,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6522783 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6475593 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 564,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2087605 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2158,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "528814 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 237,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5124345 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7746538 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17121854 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60098534 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 169,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6647370 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 534,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2207419 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 813,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1488660 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 292,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4221052 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 295,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4057836 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17405858 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7894150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7282903 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 300,
            "unit": "ns/op\t     240 B/op\t       4 allocs/op",
            "extra": "3749961 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1495,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "837249 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1299,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "883513 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1240,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "882849 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 266,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4471551 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "929911 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 64.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19473404 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58054674 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.75,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "253127736 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1240,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "935864 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1220,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "939955 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1101108,
            "unit": "ns/op\t     185 B/op\t       2 allocs/op",
            "extra": "1083 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7253,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "162343 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7415,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164389 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 206,
            "unit": "ns/op\t     104 B/op\t       3 allocs/op",
            "extra": "5586990 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8bc6044fd863693b297166557a9b50c5a1c8a822",
          "message": "Merge pull request #457 from Fenny/master\n\nFix gosec & typo's",
          "timestamp": "2020-06-08T03:02:03+02:00",
          "tree_id": "59d97a4fa8583495e5d0dd8e9eb71cfdc3033b68",
          "url": "https://github.com/gofiber/fiber/commit/8bc6044fd863693b297166557a9b50c5a1c8a822"
        },
        "date": 1591578227239,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6697,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184616 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6694,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180286 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6323301 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14688423 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10820901 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13797704 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 361,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3201135 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 99,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11969706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7148155 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 186,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6458958 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7082797 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 538,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2231419 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1956,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "631468 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 229,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5173312 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7920787 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 68.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16523078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63391452 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 169,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7107813 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 530,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2252738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 716,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1642616 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 274,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4359979 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 298,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3893104 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 66.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18189729 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8472710 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7331625 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 286,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "4210195 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1420,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "837105 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1306,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "852211 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1212,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "967624 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 272,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4466704 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "958688 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18555488 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58564018 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "266225359 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1200,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "924698 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "928687 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1077430,
            "unit": "ns/op\t     179 B/op\t       2 allocs/op",
            "extra": "1119 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6927,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175167 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6840,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172138 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 163,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7288375 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89bcc76e560e4f8609b5641e1fbb045bce20ddd4",
          "message": "Merge pull request #458 from Fenny/master\n\nUpdate middleware docs",
          "timestamp": "2020-06-08T04:27:18+02:00",
          "tree_id": "d79e8a6f5aea7f07d892ec525d219f4c98d6987f",
          "url": "https://github.com/gofiber/fiber/commit/89bcc76e560e4f8609b5641e1fbb045bce20ddd4"
        },
        "date": 1591583342804,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 5931,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177956 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6282,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "197620 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6800097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 72.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17017470 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 94.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13688503 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 73.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14661682 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 304,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "4004713 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 81.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13966530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8340294 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8085303 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 142,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8817811 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 469,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2704744 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1898,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "627435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 210,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5575048 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9520087 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 55.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18939296 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 16.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "81042043 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 150,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8240236 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 470,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2515639 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 628,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1945478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 243,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "5049252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 261,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4808072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22701262 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 116,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9846144 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8948876 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 255,
            "unit": "ns/op\t     245 B/op\t       4 allocs/op",
            "extra": "4555965 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1197,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1087,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1049,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 238,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5670279 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1082,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23973445 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 17.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "76290616 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 3.89,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "303097696 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1009,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1148122 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1061,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1026286,
            "unit": "ns/op\t     155 B/op\t       2 allocs/op",
            "extra": "1293 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6236,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "191016 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6146,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "192616 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 140,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8980508 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "164fbb36199325a84bcadc0e3ca7ba62266a94bf",
          "message": "Merge pull request #459 from Fenny/master\n\nAdd Favicon middleware",
          "timestamp": "2020-06-08T05:59:55+02:00",
          "tree_id": "2369b18f00e21c3148c76fa4f0a7844280946370",
          "url": "https://github.com/gofiber/fiber/commit/164fbb36199325a84bcadc0e3ca7ba62266a94bf"
        },
        "date": 1591588890252,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7885,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "139321 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7699,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "153618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 209,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5774474 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 91.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12137143 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9590076 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12984902 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 422,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3000853 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 112,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "9676948 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 198,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5953855 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 224,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5381034 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 201,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5942151 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 629,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2020612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2768,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "440972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 273,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "3765990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6752649 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 72.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16001706 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 23.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58099149 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 199,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6159656 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 631,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1898788 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 844,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1456371 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 328,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3715101 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 334,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3642954 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 72.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16138303 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7605346 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 194,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6166375 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 346,
            "unit": "ns/op\t     267 B/op\t       4 allocs/op",
            "extra": "3245018 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1625,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "752247 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1433,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "826062 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1455,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "859725 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 327,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "3652579 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1325,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "853088 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 75.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17776891 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 23.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "47031724 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 5.24,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "229873646 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1313,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "768292 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1466,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "837753 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1183210,
            "unit": "ns/op\t     203 B/op\t       2 allocs/op",
            "extra": "986 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 8279,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "156372 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 8657,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "141574 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 199,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6123495 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "164fbb36199325a84bcadc0e3ca7ba62266a94bf",
          "message": "Merge pull request #459 from Fenny/master\n\nAdd Favicon middleware",
          "timestamp": "2020-06-08T05:59:55+02:00",
          "tree_id": "2369b18f00e21c3148c76fa4f0a7844280946370",
          "url": "https://github.com/gofiber/fiber/commit/164fbb36199325a84bcadc0e3ca7ba62266a94bf"
        },
        "date": 1591612855111,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6422,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "201363 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6879,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "197012 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 193,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6327476 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 87.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14174430 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 105,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10054209 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 74.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15658970 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 315,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3656006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 88.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12909556 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 150,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7899175 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7047841 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7528197 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 488,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2273462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1944,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "617900 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 211,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5468714 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8636846 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 58.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19006916 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 17.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "73756274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7617446 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 502,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2624013 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 631,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1834923 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 266,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4816078 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 267,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4462678 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20455279 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9271778 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8633512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 267,
            "unit": "ns/op\t     242 B/op\t       4 allocs/op",
            "extra": "4643565 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1328,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "967347 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1195,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "896602 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1051952 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 274,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4360737 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "894330 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 58,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19082125 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "68248398 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.73,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "255316976 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1230,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "879547 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1263,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "903927 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1099224,
            "unit": "ns/op\t     189 B/op\t       2 allocs/op",
            "extra": "1059 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7318,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159951 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7520,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "144069 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 170,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6663530 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "164fbb36199325a84bcadc0e3ca7ba62266a94bf",
          "message": "Merge pull request #459 from Fenny/master\n\nAdd Favicon middleware",
          "timestamp": "2020-06-08T05:59:55+02:00",
          "tree_id": "2369b18f00e21c3148c76fa4f0a7844280946370",
          "url": "https://github.com/gofiber/fiber/commit/164fbb36199325a84bcadc0e3ca7ba62266a94bf"
        },
        "date": 1591613309096,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6152,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "212484 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6212,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "202094 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7516498 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 71.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17659268 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 95.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12467344 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15750266 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 324,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3755936 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 87,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13507111 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8209735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8068596 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8633803 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 474,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2406206 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1840,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "656530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 201,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6049788 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9857828 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 59.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19899799 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64936280 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 145,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7180615 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 481,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2539659 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 636,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1831149 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 257,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4506097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 272,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4737670 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 54.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20539496 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11297406 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9076191 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 324,
            "unit": "ns/op\t     241 B/op\t       4 allocs/op",
            "extra": "3729548 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1265,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1118,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 209,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5415453 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1039,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20034679 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60064646 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "269261637 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1062,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "991238 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1107,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 950421,
            "unit": "ns/op\t     164 B/op\t       2 allocs/op",
            "extra": "1220 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 5996,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "194236 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 5927,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "207687 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 143,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "8409422 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7469db77aa69339a72887c210e46755d0c96d2cd",
          "message": "Merge pull request #460 from Fenny/master\n\nAdd content type to default error handler",
          "timestamp": "2020-06-08T13:36:39+02:00",
          "tree_id": "05b733820913e31281940f56bbc306f4af40ed75",
          "url": "https://github.com/gofiber/fiber/commit/7469db77aa69339a72887c210e46755d0c96d2cd"
        },
        "date": 1591616308284,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6513,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176998 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6524,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "190742 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7215307 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15113437 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 102,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11363503 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14808668 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 338,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3716973 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 101,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12578688 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7323504 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7123399 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 154,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7458357 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 530,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2301075 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2024,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "575257 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 224,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5565127 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8171425 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 60.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18988638 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "70029498 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 152,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7977278 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 529,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2226783 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 712,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1627224 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 268,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4535990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 294,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4170700 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 52.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "23277428 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 120,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9908906 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8250873 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 323,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "3690919 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1381,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "923414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1245,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1158,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "990913 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 224,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5351937 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1085,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 63.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18242216 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63290821 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.36,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "279611120 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1031821,
            "unit": "ns/op\t     172 B/op\t       2 allocs/op",
            "extra": "1168 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6595,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172574 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6467,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174607 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 162,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7184924 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f8c74d4c6d8de9e53f8587b842e5c30d7653222",
          "message": "Merge pull request #463 from Fenny/master\n\n🗎 Add layout support in Render",
          "timestamp": "2020-06-12T12:40:39+02:00",
          "tree_id": "12bd541aa791849ff9b7d78f78824807e9639c75",
          "url": "https://github.com/gofiber/fiber/commit/4f8c74d4c6d8de9e53f8587b842e5c30d7653222"
        },
        "date": 1591958530942,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6757,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "161146 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7112,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164769 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 189,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6290036 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 83.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14561341 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 111,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10963580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 85.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14315306 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 358,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3356006 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 100,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12446379 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6980714 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 188,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6434200 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 177,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7008364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 542,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2227839 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2128,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "610808 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 231,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5213366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8023340 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 69.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16353412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63357403 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 168,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6975363 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 543,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2124100 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 755,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1568810 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 271,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3783546 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 289,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4170794 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 66.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18069234 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8437598 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7437283 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 302,
            "unit": "ns/op\t     262 B/op\t       4 allocs/op",
            "extra": "4174014 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1447,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "826123 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1333,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "876529 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1241,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "896877 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 275,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4391698 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1141,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "967800 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18992443 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58358744 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.91,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "243966050 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1223,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "920121 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1236,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "901587 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1088247,
            "unit": "ns/op\t     180 B/op\t       2 allocs/op",
            "extra": "1112 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6804,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168958 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6870,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175699 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 171,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7212546 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cca1c4bd51b079f60321ae2ae50111b21f03f52e",
          "message": "Merge pull request #464 from Fenny/master\n\nUpdate template examples",
          "timestamp": "2020-06-12T12:48:32+02:00",
          "tree_id": "02a04ad1b26fa8c65a7f87031d54cf0c68986f53",
          "url": "https://github.com/gofiber/fiber/commit/cca1c4bd51b079f60321ae2ae50111b21f03f52e"
        },
        "date": 1591959017739,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6806,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184593 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6762,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "155011 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 169,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6736735 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 76.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15256447 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11760102 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14750886 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3553917 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 94.7,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11838727 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 163,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7090984 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7047752 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 161,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7413290 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 554,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2176518 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1972,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "597025 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 220,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5447872 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8868392 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 66,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18038942 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61287026 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7637114 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 565,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2131376 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 731,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1656732 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 271,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4466361 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 303,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4043787 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 55.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21376654 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9743086 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8423611 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 333,
            "unit": "ns/op\t     253 B/op\t       4 allocs/op",
            "extra": "3489511 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1439,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "857772 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1277,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "869797 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "961014 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 244,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5017219 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "969973 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15056084 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59470778 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "265238022 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1233,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "942540 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1212,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "965116 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1085184,
            "unit": "ns/op\t     179 B/op\t       2 allocs/op",
            "extra": "1116 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6780,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166052 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6938,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181808 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 160,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6616116 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a331823a09e1b913a491cf93cd17963c4615e181",
          "message": "Merge pull request #465 from Fenny/master\n\nUpdate deprecated message",
          "timestamp": "2020-06-12T12:50:22+02:00",
          "tree_id": "20a29188d7e133dbca9fb3228653f9db61ba329d",
          "url": "https://github.com/gofiber/fiber/commit/a331823a09e1b913a491cf93cd17963c4615e181"
        },
        "date": 1591959117642,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6469,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170167 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6877,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174325 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7230855 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15984381 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 98.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12484750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14903250 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 332,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3738919 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 91.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12749788 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7541338 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6861016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7200126 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 534,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2148793 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2093,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "563750 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 220,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5289398 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8758170 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 66.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16880674 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67072105 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 158,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7488580 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 535,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2209945 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 716,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1663158 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 270,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4565403 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 286,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4246521 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 56.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22001793 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 124,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9457368 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 140,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8300326 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 347,
            "unit": "ns/op\t     252 B/op\t       4 allocs/op",
            "extra": "3503749 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1401,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "918199 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1255,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "880412 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "968032 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 230,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5047908 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1082,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "981690 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 66.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18422965 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "64434608 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.47,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "277608578 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1205,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "904390 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1060479,
            "unit": "ns/op\t     179 B/op\t       2 allocs/op",
            "extra": "1113 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6608,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "180888 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6620,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "181867 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 165,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7593896 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a331823a09e1b913a491cf93cd17963c4615e181",
          "message": "Merge pull request #465 from Fenny/master\n\nUpdate deprecated message",
          "timestamp": "2020-06-12T12:50:22+02:00",
          "tree_id": "20a29188d7e133dbca9fb3228653f9db61ba329d",
          "url": "https://github.com/gofiber/fiber/commit/a331823a09e1b913a491cf93cd17963c4615e181"
        },
        "date": 1591959383043,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6843,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "146859 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6937,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175910 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6953001 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15549307 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 103,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11737844 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14478456 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 339,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3577275 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 98.5,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "10456545 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7320969 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6921432 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7497795 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 553,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2182328 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2397,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "503391 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 238,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5041046 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8682256 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18131720 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61901017 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 164,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7283079 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 572,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2081481 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 736,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1636120 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 282,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4216639 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 298,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4147212 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 55,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21859478 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9694797 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8420989 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 346,
            "unit": "ns/op\t     254 B/op\t       4 allocs/op",
            "extra": "3475275 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1425,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "849181 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1287,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "902374 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1208,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "946153 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 246,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4912039 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1137,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "917968 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17679980 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "59668689 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "259546543 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1199,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "870061 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1227,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "938553 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1083315,
            "unit": "ns/op\t     180 B/op\t       2 allocs/op",
            "extra": "1108 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6856,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182385 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6909,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "175303 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 174,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7104882 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e588d866d68b8a172f79323f8d6b10aa2e1f5017",
          "message": "Merge pull request #468 from firebase007/update-readme\n\nadd Go-Fiber article to all read-me files",
          "timestamp": "2020-06-15T08:32:08+02:00",
          "tree_id": "e8d70c4f23664b4e41cb4724d164366d6434c9b3",
          "url": "https://github.com/gofiber/fiber/commit/e588d866d68b8a172f79323f8d6b10aa2e1f5017"
        },
        "date": 1592202817216,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6806,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "179134 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6918,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "173011 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 168,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6989350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16155894 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 99.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12350323 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 77.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15449992 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 321,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3694502 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 102,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12275997 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7212103 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6893944 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7396898 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 544,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2221974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2090,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "554412 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 225,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5327133 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 139,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8415367 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16712859 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63467968 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 159,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7533442 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 557,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2177010 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 721,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1621726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 270,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4355839 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 289,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4048108 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 55.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22047708 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 119,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9933650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 135,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8202327 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 356,
            "unit": "ns/op\t     257 B/op\t       4 allocs/op",
            "extra": "3428084 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1376,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "839738 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1264,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "900940 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "985144 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 234,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5056623 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1094,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "959276 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19112491 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60129612 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.39,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "273639931 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "974630 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1127,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1048807,
            "unit": "ns/op\t     177 B/op\t       2 allocs/op",
            "extra": "1129 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6781,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169600 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6640,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "172353 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 157,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7533914 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8d5c780f237986abd84c2e455f29d361cf0600a",
          "message": "Merge pull request #466 from ReneWerner87/master\n\nadd route support for dot and hyphen",
          "timestamp": "2020-06-15T08:55:47+02:00",
          "tree_id": "c2c612d38bee7b7291629c19c41a92f051b2326e",
          "url": "https://github.com/gofiber/fiber/commit/e8d5c780f237986abd84c2e455f29d361cf0600a"
        },
        "date": 1592204238630,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6235,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "191599 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6305,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195279 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 183,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6899059 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 72.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16169560 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12552586 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 75.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16094676 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 309,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3862218 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 85.6,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12930028 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 149,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7817568 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7197726 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 148,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8235675 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 500,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2460988 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1857,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "658298 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 207,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5703170 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 126,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9502564 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 56.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20843899 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 17.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61459990 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 141,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8382789 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 498,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2384032 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 663,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1801484 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 256,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4598571 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 262,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4513700 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22154216 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 114,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10594477 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8916462 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 314,
            "unit": "ns/op\t     233 B/op\t       4 allocs/op",
            "extra": "3906639 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1359,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "891690 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1220,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "894608 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1129,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "954649 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 224,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5566695 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1064,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 61.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19194764 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "63289416 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.13,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "294135004 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "927403 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1112,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1016958,
            "unit": "ns/op\t     210 B/op\t       2 allocs/op",
            "extra": "1165 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6265,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "192166 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6240,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "193080 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 151,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7775840 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "80b9547bbdc8885aa950c40a3215cddf6c58ad81",
          "message": "Merge pull request #470 from Fenny/master\n\nAdd ReadBufferSize & WriteBufferSize",
          "timestamp": "2020-06-15T13:47:27+02:00",
          "tree_id": "0ece501bf69f5db35de568ee98d91eb0115f5bf3",
          "url": "https://github.com/gofiber/fiber/commit/80b9547bbdc8885aa950c40a3215cddf6c58ad81"
        },
        "date": 1592221738897,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6535,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "192380 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6432,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166513 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7139500 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 75.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14522592 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 97.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11372340 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 78.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15228680 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 328,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3615177 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 89.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13273142 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 162,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7057874 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 173,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6872156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 159,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7540317 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 527,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2272974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2015,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "526083 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 221,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5056072 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 136,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9251812 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 58.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20822118 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 18.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "66445764 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 153,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8054130 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 517,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2309926 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 678,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1779112 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 263,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4548057 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 271,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4578465 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 53.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22483530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 122,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9509613 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 138,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8770458 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 307,
            "unit": "ns/op\t     232 B/op\t       4 allocs/op",
            "extra": "3922473 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1411,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "864206 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1249,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "916039 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "971080 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 224,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5330542 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1092,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "969136 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 60.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18021446 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "61453488 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "281650606 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "928581 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "973588 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1031445,
            "unit": "ns/op\t     205 B/op\t       2 allocs/op",
            "extra": "1192 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6458,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "182089 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6493,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "183174 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 160,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7487845 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f20e66efee9e6b85d712718ad05e12edf3d06ab0",
          "message": "Merge pull request #471 from ReneWerner87/master\n\n🐛 flag.Parse not working when using Prefork on Fiber #469",
          "timestamp": "2020-06-15T15:37:29+02:00",
          "tree_id": "e802508ba5891ed30c3e723d7a3d7f3a958a8f2a",
          "url": "https://github.com/gofiber/fiber/commit/f20e66efee9e6b85d712718ad05e12edf3d06ab0"
        },
        "date": 1592228342695,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6794,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168918 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6814,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "170854 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6773097 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 77.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15612505 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 104,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11569309 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 80.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14839005 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 336,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3593935 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 97.3,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12660652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 165,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7270404 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6734599 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 166,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7282609 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 553,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2158052 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2081,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "550311 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 227,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5195893 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8399365 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 62,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18803220 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57877252 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 160,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7588858 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 545,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2175064 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 720,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1662265 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 272,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4370125 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 289,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4149418 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19252251 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9397177 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 147,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8188572 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 342,
            "unit": "ns/op\t     259 B/op\t       4 allocs/op",
            "extra": "3390866 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1436,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "749868 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1361,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "851708 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1208,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "902932 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 265,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4620666 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1175,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "969025 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 67.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17358511 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "55029678 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.53,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "264572427 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1219,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "916435 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1230,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "939043 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1107609,
            "unit": "ns/op\t     229 B/op\t       3 allocs/op",
            "extra": "1070 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6816,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "176859 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6820,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "154749 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 193,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6781507 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43d87ceff5905040faf35889298a1debdb08476e",
          "message": "Merge pull request #472 from Fenny/master\n\nv1.12.0-alpha",
          "timestamp": "2020-06-15T15:50:18+02:00",
          "tree_id": "9069a873b904fcef61bc04532d358be8ebb5fa00",
          "url": "https://github.com/gofiber/fiber/commit/43d87ceff5905040faf35889298a1debdb08476e"
        },
        "date": 1592229107360,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6959,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "164878 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7134,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "169531 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 182,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6406488 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 82.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14684156 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 108,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "11116836 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 84.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "14239843 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 348,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3433686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 99.2,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12124135 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6823624 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 192,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6410612 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 174,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6785602 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 581,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2099025 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2101,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "487824 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 228,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "5273877 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8208974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 65.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18801855 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 20.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "58900172 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 161,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6526575 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 572,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2125713 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 750,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1568966 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 277,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4238272 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 292,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4152626 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 57.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19859167 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 130,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9195698 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7876773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 336,
            "unit": "ns/op\t     260 B/op\t       4 allocs/op",
            "extra": "3365878 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1558,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "792076 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1341,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "841134 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1264,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "913740 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 272,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4397408 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1191,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "922286 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 69,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17302472 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 20.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "57182220 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.74,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "254180133 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1245,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "867420 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1250,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "871647 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1145575,
            "unit": "ns/op\t     232 B/op\t       3 allocs/op",
            "extra": "1053 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7212,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "153081 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7131,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "166856 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 173,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6591370 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43d87ceff5905040faf35889298a1debdb08476e",
          "message": "Merge pull request #472 from Fenny/master\n\nv1.12.0-alpha",
          "timestamp": "2020-06-15T15:50:18+02:00",
          "tree_id": "9069a873b904fcef61bc04532d358be8ebb5fa00",
          "url": "https://github.com/gofiber/fiber/commit/43d87ceff5905040faf35889298a1debdb08476e"
        },
        "date": 1592229703140,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 7568,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "145628 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 7622,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "159024 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 178,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "5988530 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 86.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12957889 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10045023 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 82.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "13054669 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 337,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3539481 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 111,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "11862520 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 172,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6142572 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 179,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6428823 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 171,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7278999 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 566,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "1902451 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 2541,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "534916 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 258,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "4744284 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7514178 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 61.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "16230080 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 19.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "53960233 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 187,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "6285896 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 600,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1968104 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 772,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1578680 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 319,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "3758257 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 320,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "3654616 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 58.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20130972 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8348532 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 152,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8236605 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 341,
            "unit": "ns/op\t     263 B/op\t       4 allocs/op",
            "extra": "3317414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1529,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "705319 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1331,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "814346 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1310,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "954542 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 292,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4448571 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1023010 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 68.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "17867931 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "52817238 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.71,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "259816296 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1299,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "838978 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1343,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "909111 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1308072,
            "unit": "ns/op\t     263 B/op\t       3 allocs/op",
            "extra": "931 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 7946,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "145419 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 7706,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "168151 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 193,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "6279652 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7677589476ef8f79564254c97e5a708a9a8aa414",
          "message": "Merge pull request #475 from kiyonlin/master\n\nCheck index to avoid slice bounds out of range panic",
          "timestamp": "2020-06-17T08:05:51+02:00",
          "tree_id": "3b02c12d979ef8c370fb8ccbca22e8e8ae09e25b",
          "url": "https://github.com/gofiber/fiber/commit/7677589476ef8f79564254c97e5a708a9a8aa414"
        },
        "date": 1592374051879,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6454,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "184191 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6058,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "186536 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6964250 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 71.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "18039928 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 96.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12959364 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15578932 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 330,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3783974 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 91.4,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "12913513 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8369650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 164,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6968508 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 143,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8150484 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 457,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2404119 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1698,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "682807 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 182,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6538678 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 123,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9822734 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 55.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22695016 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 15.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "82464228 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 139,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "8987062 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 456,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2642366 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 606,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2021618 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 250,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4381686 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 268,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4523083 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 55.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "22353450 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9988746 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 131,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9449383 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 270,
            "unit": "ns/op\t     243 B/op\t       4 allocs/op",
            "extra": "4621414 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1187,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1164,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1085,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 228,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "5106781 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1035,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 56.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "21680904 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 18.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "67963465 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.08,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "299704214 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1016,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1056,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 929573,
            "unit": "ns/op\t     204 B/op\t       2 allocs/op",
            "extra": "1200 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6227,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "195495 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6385,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "174187 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 152,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7821603 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "25108519+Fenny@users.noreply.github.com",
            "name": "fenny",
            "username": "Fenny"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "924baf910761248424b13193143d6a0523b3b53d",
          "message": "Merge pull request #477 from Fenny/master\n\nUpdate comment",
          "timestamp": "2020-06-17T13:38:57+02:00",
          "tree_id": "4c9a8c5c74e74a1cfe99fcc37c2b7752d33f33e7",
          "url": "https://github.com/gofiber/fiber/commit/924baf910761248424b13193143d6a0523b3b53d"
        },
        "date": 1592394031333,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_App_ETag",
            "value": 6554,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "177856 times\n2 procs"
          },
          {
            "name": "Benchmark_App_ETag_Weak",
            "value": 6422,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "192534 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Accepts",
            "value": 167,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "6849652 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsCharsets",
            "value": 74.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15863697 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsEncodings",
            "value": 98.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "12315865 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_AcceptsLanguages",
            "value": 72.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "15379578 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Append",
            "value": 308,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "3947088 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_BaseURL",
            "value": 84.9,
            "unit": "ns/op\t      32 B/op\t       1 allocs/op",
            "extra": "13737385 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Cookie",
            "value": 151,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7637773 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format",
            "value": 156,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "7713043 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_HTML",
            "value": 155,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "8035863 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_JSON",
            "value": 530,
            "unit": "ns/op\t      32 B/op\t       2 allocs/op",
            "extra": "2328350 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Format_XML",
            "value": 1960,
            "unit": "ns/op\t    4464 B/op\t       7 allocs/op",
            "extra": "591690 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_IPs",
            "value": 203,
            "unit": "ns/op\t      48 B/op\t       1 allocs/op",
            "extra": "6080512 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Is",
            "value": 128,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9378566 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Params",
            "value": 54.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20700901 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Protocol",
            "value": 17.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "70972274 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Subdomains",
            "value": 142,
            "unit": "ns/op\t      64 B/op\t       1 allocs/op",
            "extra": "7656435 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSON",
            "value": 494,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "2420650 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_JSONP",
            "value": 670,
            "unit": "ns/op\t      80 B/op\t       3 allocs/op",
            "extra": "1763575 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Links",
            "value": 252,
            "unit": "ns/op\t     112 B/op\t       1 allocs/op",
            "extra": "4830525 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Send",
            "value": 259,
            "unit": "ns/op\t      64 B/op\t       4 allocs/op",
            "extra": "4704738 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type",
            "value": 51,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "25730737 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Type_Charset",
            "value": 117,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "10933150 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Vary",
            "value": 133,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "9018758 times\n2 procs"
          },
          {
            "name": "Benchmark_Ctx_Write",
            "value": 293,
            "unit": "ns/op\t     238 B/op\t       4 allocs/op",
            "extra": "3803980 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_NotFound",
            "value": 1327,
            "unit": "ns/op\t      80 B/op\t       2 allocs/op",
            "extra": "959872 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler",
            "value": 1228,
            "unit": "ns/op\t      16 B/op\t       1 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_Strict_Case",
            "value": 1146,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "982772 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Chain",
            "value": 242,
            "unit": "ns/op\t       1 B/op\t       1 allocs/op",
            "extra": "4667007 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Next",
            "value": 1077,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match",
            "value": 62.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "19294494 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Star",
            "value": 19.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "60968288 times\n2 procs"
          },
          {
            "name": "Benchmark_Route_Match_Root",
            "value": 4.44,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "267935852 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_CaseSensitive",
            "value": 1222,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "1024041 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Handler_StrictRouting",
            "value": 1157,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "991118 times\n2 procs"
          },
          {
            "name": "Benchmark_Router_Github_API",
            "value": 1046281,
            "unit": "ns/op\t     242 B/op\t       3 allocs/op",
            "extra": "1010 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag",
            "value": 6168,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "187780 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_ETag_Weak",
            "value": 6374,
            "unit": "ns/op\t    1056 B/op\t       4 allocs/op",
            "extra": "200733 times\n2 procs"
          },
          {
            "name": "Benchmark_Utils_getGroupPath",
            "value": 164,
            "unit": "ns/op\t      96 B/op\t       2 allocs/op",
            "extra": "7328934 times\n2 procs"
          }
        ]
      }
    ]
  }
}