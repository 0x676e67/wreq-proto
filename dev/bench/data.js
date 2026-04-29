window.BENCHMARK_DATA = {
  "lastUpdate": 1777476707784,
  "repoUrl": "https://github.com/0x676e67/wreq-proto",
  "entries": {
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c91cfbd2f3d7ca76ec4498bcc6c2c6164023583",
          "message": "Add default feature and tracing logging",
          "timestamp": "2026-04-28T14:22:21+08:00",
          "tree_id": "c572260330a33718ddaf6ed11bc61b02030ca9de",
          "url": "https://github.com/0x676e67/wreq-proto/commit/5c91cfbd2f3d7ca76ec4498bcc6c2c6164023583"
        },
        "date": 1777357829384,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 68834,
            "range": "± 2024.42",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 3906983,
            "range": "± 136817.52",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20574,
            "range": "± 438.72",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 22796,
            "range": "± 449.56",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33172,
            "range": "± 557.48",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 101514,
            "range": "± 1409.82",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000014,
            "range": "± 2917.62",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86656,
            "range": "± 1644.36",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 19867286,
            "range": "± 8311315.99",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 32000909,
            "range": "± 8245052.59",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7407201,
            "range": "± 156283.28",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 49184892,
            "range": "± 722910.17",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 50693018,
            "range": "± 956732.49",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5364005,
            "range": "± 155334.46",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91f8bcc881aa9d438a3a1b8ce462f2d49d5c9142",
          "message": "Bump actions/cache from 3 to 5 (#3)\n\nBumps [actions/cache](https://github.com/actions/cache) from 3 to 5.\n- [Release notes](https://github.com/actions/cache/releases)\n- [Changelog](https://github.com/actions/cache/blob/main/RELEASES.md)\n- [Commits](https://github.com/actions/cache/compare/v3...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/cache\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-28T14:43:08+08:00",
          "tree_id": "33315d82ad4b3fb1f768e59ddfd2690afe37724a",
          "url": "https://github.com/0x676e67/wreq-proto/commit/91f8bcc881aa9d438a3a1b8ce462f2d49d5c9142"
        },
        "date": 1777358762522,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 69605,
            "range": "± 1351.71",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4086904,
            "range": "± 55054.16",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 22103,
            "range": "± 208.44",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23368,
            "range": "± 240.15",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 28266,
            "range": "± 375.57",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 95115,
            "range": "± 2698.89",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 40999982,
            "range": "± 3144.71",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 77430,
            "range": "± 1505.99",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7893092,
            "range": "± 545139.53",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7956744,
            "range": "± 8182904.42",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7690568,
            "range": "± 74492.41",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53855007,
            "range": "± 946020.76",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 52680277,
            "range": "± 1069083.50",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5467542,
            "range": "± 144058.22",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7aa43cd197e5d27353cdf6c17c4299e9ce793bcc",
          "message": "Create README.md",
          "timestamp": "2026-04-28T14:52:01+08:00",
          "tree_id": "8a78936b01189c03edcf9a191d4a4e4f06378e05",
          "url": "https://github.com/0x676e67/wreq-proto/commit/7aa43cd197e5d27353cdf6c17c4299e9ce793bcc"
        },
        "date": 1777359301715,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 69249,
            "range": "± 1953.96",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4177784,
            "range": "± 107493.75",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20308,
            "range": "± 597.97",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 22629,
            "range": "± 591.17",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33322,
            "range": "± 659.34",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 101970,
            "range": "± 1462.21",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000048,
            "range": "± 7789.01",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86193,
            "range": "± 2225.65",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7542784,
            "range": "± 117794.39",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 32002238,
            "range": "± 8116885.55",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7378102,
            "range": "± 176802.59",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 49324960,
            "range": "± 580104.37",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 49326329,
            "range": "± 418101.45",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5029301,
            "range": "± 67767.77",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edc728ce465e801fc82d14ca4d5a9b13bcaf60bd",
          "message": "Update README.md\n\nRemoved Crates.io badge from",
          "timestamp": "2026-04-28T14:55:01+08:00",
          "tree_id": "b183d21fc1772658d5cf71d45a5d3d96507679b5",
          "url": "https://github.com/0x676e67/wreq-proto/commit/edc728ce465e801fc82d14ca4d5a9b13bcaf60bd"
        },
        "date": 1777359470045,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 69129,
            "range": "± 1495.05",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4165205,
            "range": "± 262936.06",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20974,
            "range": "± 424.46",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23519,
            "range": "± 420.12",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33276,
            "range": "± 963.64",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 99953,
            "range": "± 2194.69",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000231,
            "range": "± 11064.41",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86042,
            "range": "± 1583.02",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7375993,
            "range": "± 124474.47",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7378299,
            "range": "± 82008.91",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7188346,
            "range": "± 90272.89",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 90105730,
            "range": "± 527894.30",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 47765722,
            "range": "± 804004.86",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 4928030,
            "range": "± 100323.22",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "committer": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "distinct": true,
          "id": "155bd1d2a496aff42bfed4a123527306b3f569ee",
          "message": "Update README.md",
          "timestamp": "2026-04-28T14:56:41+08:00",
          "tree_id": "f51651d8e82f3839b767bd735c1ca13a1fe27d2a",
          "url": "https://github.com/0x676e67/wreq-proto/commit/155bd1d2a496aff42bfed4a123527306b3f569ee"
        },
        "date": 1777359578281,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 69462,
            "range": "± 974.91",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4402981,
            "range": "± 309785.65",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20795,
            "range": "± 402.88",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23001,
            "range": "± 339.65",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33568,
            "range": "± 1036.40",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 102068,
            "range": "± 13584.32",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000065,
            "range": "± 6615.66",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86636,
            "range": "± 2219.58",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7638078,
            "range": "± 114690.53",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 32422410,
            "range": "± 8418467.73",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7572327,
            "range": "± 134952.37",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50904857,
            "range": "± 576911.17",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 51727466,
            "range": "± 2105502.81",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5506508,
            "range": "± 58984.38",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9a965faca422aef072ac80871ac547a1b54f209",
          "message": "Update Cargo.toml",
          "timestamp": "2026-04-28T15:56:16+08:00",
          "tree_id": "50be68345f1d2e5d9e9e4cf857e799f7d0be1f55",
          "url": "https://github.com/0x676e67/wreq-proto/commit/d9a965faca422aef072ac80871ac547a1b54f209"
        },
        "date": 1777363146720,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 51341,
            "range": "± 770.29",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 3509615,
            "range": "± 515676.78",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 17054,
            "range": "± 151.16",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 18037,
            "range": "± 285.52",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 21912,
            "range": "± 554.78",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 75373,
            "range": "± 1508.15",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 40999997,
            "range": "± 5848.77",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 62777,
            "range": "± 891.23",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 6474824,
            "range": "± 500773.06",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 31001793,
            "range": "± 8156481.78",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 6281596,
            "range": "± 133240.87",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 41921736,
            "range": "± 930845.02",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 42152142,
            "range": "± 705053.35",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 4280133,
            "range": "± 219885.95",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "60d573fe90953a09e3c22361f5f157cdb3e72996",
          "message": "test: update tests (#4)",
          "timestamp": "2026-04-28T20:45:09+08:00",
          "tree_id": "ed75d54eec55e9dfe46f6887436ef1725943eb26",
          "url": "https://github.com/0x676e67/wreq-proto/commit/60d573fe90953a09e3c22361f5f157cdb3e72996"
        },
        "date": 1777380505232,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 48500,
            "range": "± 841.85",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 3233143,
            "range": "± 119585.71",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 17064,
            "range": "± 357.70",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 18505,
            "range": "± 148.27",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 22580,
            "range": "± 293.69",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 72029,
            "range": "± 1470.50",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000062,
            "range": "± 15530.18",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 64121,
            "range": "± 806.39",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 6265184,
            "range": "± 79543.70",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 6150882,
            "range": "± 45873.97",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 6083107,
            "range": "± 106210.44",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 82999765,
            "range": "± 996440.07",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 42482610,
            "range": "± 2592808.38",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 4355440,
            "range": "± 52878.65",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ed3f407ff24af82d0444f7246c0a6f4231c1996",
          "message": "feat(rt): runtime-agnostic (#5)",
          "timestamp": "2026-04-28T21:14:14+08:00",
          "tree_id": "a8f7aa9a7decd95177e43a9472a2c4efe98882e7",
          "url": "https://github.com/0x676e67/wreq-proto/commit/8ed3f407ff24af82d0444f7246c0a6f4231c1996"
        },
        "date": 1777382233873,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 69276,
            "range": "± 2640.47",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4318045,
            "range": "± 580158.94",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20690,
            "range": "± 544.35",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23062,
            "range": "± 365.79",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 32931,
            "range": "± 810.37",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 101406,
            "range": "± 2913.98",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000251,
            "range": "± 8274.95",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86557,
            "range": "± 1612.82",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 19878146,
            "range": "± 8313227.73",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 40022128,
            "range": "± 8445694.33",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7545680,
            "range": "± 116052.71",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 53742692,
            "range": "± 463873.14",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 51015042,
            "range": "± 525309.07",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5407952,
            "range": "± 71507.75",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "committer": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "distinct": true,
          "id": "42c5f98d986df84b5e97eb4ab665db0bd5729e4e",
          "message": "remove unused mod",
          "timestamp": "2026-04-28T21:22:31+08:00",
          "tree_id": "b1e712284cde8173f80360182a1ac7dc4f0b796b",
          "url": "https://github.com/0x676e67/wreq-proto/commit/42c5f98d986df84b5e97eb4ab665db0bd5729e4e"
        },
        "date": 1777382732840,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 69790,
            "range": "± 1165.60",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4028198,
            "range": "± 231902.05",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20636,
            "range": "± 799.83",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 22874,
            "range": "± 655.22",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33821,
            "range": "± 1162.51",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 101464,
            "range": "± 3771.96",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 40999863,
            "range": "± 11105.18",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86990,
            "range": "± 3185.09",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 23998059,
            "range": "± 8310747.17",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 32257263,
            "range": "± 8726001.97",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7563146,
            "range": "± 101998.97",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 91001117,
            "range": "± 2035947.50",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 51926987,
            "range": "± 888110.28",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5123017,
            "range": "± 73434.92",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "committer": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "distinct": true,
          "id": "8fd6035f022a0b835e7e30542737865242cc3dc6",
          "message": "remove parking_lot",
          "timestamp": "2026-04-28T21:27:00+08:00",
          "tree_id": "16f7ad4eede31dffb9a28a66752d4a35e5e34c48",
          "url": "https://github.com/0x676e67/wreq-proto/commit/8fd6035f022a0b835e7e30542737865242cc3dc6"
        },
        "date": 1777383008225,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 71154,
            "range": "± 2013.38",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 3951245,
            "range": "± 294884.32",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20920,
            "range": "± 549.00",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23409,
            "range": "± 851.28",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33920,
            "range": "± 2623.66",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 101320,
            "range": "± 2419.10",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000227,
            "range": "± 6201.10",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 87415,
            "range": "± 1810.88",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7651419,
            "range": "± 16253798.92",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7637495,
            "range": "± 139186.65",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7482908,
            "range": "± 105555.64",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50249631,
            "range": "± 966303.13",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 49193213,
            "range": "± 1189337.38",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5188543,
            "range": "± 8127868.85",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7eb58470a2951cfd89b711797509315e3be79993",
          "message": "feat(ext): add `ext::on_informational()` callback extension (#6)",
          "timestamp": "2026-04-29T11:56:53+08:00",
          "tree_id": "20e105fe3ab1c79f2fce263307e61ee9dd9a37de",
          "url": "https://github.com/0x676e67/wreq-proto/commit/7eb58470a2951cfd89b711797509315e3be79993"
        },
        "date": 1777435191691,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 71319,
            "range": "± 3151.80",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4395561,
            "range": "± 548023.12",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20796,
            "range": "± 2732.50",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23461,
            "range": "± 836.08",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 34180,
            "range": "± 1123.40",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 104194,
            "range": "± 2261.66",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 40999946,
            "range": "± 9236.81",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 89230,
            "range": "± 1860.69",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7680723,
            "range": "± 16401662.79",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7811273,
            "range": "± 115517.04",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7628973,
            "range": "± 264167.98",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 93000860,
            "range": "± 2113978.02",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 53925447,
            "range": "± 708826.93",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5438868,
            "range": "± 92563.82",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "97cd5e2b4e7772ea15692a63240538c36958c801",
          "message": "update package description in Cargo.toml",
          "timestamp": "2026-04-29T14:11:32+08:00",
          "tree_id": "88ddceebb925b6b18a5034baffb8a3bf8a7eeb80",
          "url": "https://github.com/0x676e67/wreq-proto/commit/97cd5e2b4e7772ea15692a63240538c36958c801"
        },
        "date": 1777443286420,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 68219,
            "range": "± 1740.03",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4429324,
            "range": "± 268311.89",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20644,
            "range": "± 626.68",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23110,
            "range": "± 859.86",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33418,
            "range": "± 529.17",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 101058,
            "range": "± 2584.20",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000291,
            "range": "± 41764.30",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86503,
            "range": "± 2117.10",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 23985731,
            "range": "± 8425967.36",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7599408,
            "range": "± 97590.05",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7355561,
            "range": "± 133508.02",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 93995533,
            "range": "± 995880.13",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 51675207,
            "range": "± 2292755.66",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5226415,
            "range": "± 93723.83",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e03d484424f61262d3dad056791bf925cb6ae6ad",
          "message": "Update README.md",
          "timestamp": "2026-04-29T14:12:21+08:00",
          "tree_id": "23fb06f991c9f08e202be82fbd78c5f0e0c3bdd9",
          "url": "https://github.com/0x676e67/wreq-proto/commit/e03d484424f61262d3dad056791bf925cb6ae6ad"
        },
        "date": 1777443315848,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 61757,
            "range": "± 1220.77",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4075051,
            "range": "± 76999.50",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 22142,
            "range": "± 2278.68",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23347,
            "range": "± 527.00",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 28226,
            "range": "± 370.26",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 91202,
            "range": "± 1879.72",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 40999955,
            "range": "± 3470.14",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 77831,
            "range": "± 1632.74",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 24182053,
            "range": "± 8358199.67",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 32659871,
            "range": "± 8158989.29",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7704334,
            "range": "± 77771.38",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 54716266,
            "range": "± 658505.99",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 54213007,
            "range": "± 462519.76",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5521060,
            "range": "± 34388.42",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9eb860f2a9fd2f6ce927bdde701ff9ad6b393be1",
          "message": "feat(ext): add `ext::on_preserve_header()` callback extension (#7)",
          "timestamp": "2026-04-29T14:14:47+08:00",
          "tree_id": "d993343cbfdd22857026e92b3c04e30cadcf390a",
          "url": "https://github.com/0x676e67/wreq-proto/commit/9eb860f2a9fd2f6ce927bdde701ff9ad6b393be1"
        },
        "date": 1777443479113,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 68509,
            "range": "± 2644.09",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4420239,
            "range": "± 161771.62",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20664,
            "range": "± 530.32",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 22936,
            "range": "± 936.37",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33711,
            "range": "± 594.77",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 101932,
            "range": "± 1292.68",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000299,
            "range": "± 3617.32",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86294,
            "range": "± 1713.54",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7669044,
            "range": "± 16371452.18",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 32518863,
            "range": "± 8400999.74",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7591577,
            "range": "± 102899.43",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 50809144,
            "range": "± 41510131.78",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 52837756,
            "range": "± 856262.66",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5104308,
            "range": "± 74518.12",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "committer": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "distinct": true,
          "id": "cbba4237df73d945998ea45d8032d2e908b2a382",
          "message": "remove unused mod",
          "timestamp": "2026-04-29T14:51:31+08:00",
          "tree_id": "7a20b38d5c58ad7603edfd43ff1fc88eb8f6f929",
          "url": "https://github.com/0x676e67/wreq-proto/commit/cbba4237df73d945998ea45d8032d2e908b2a382"
        },
        "date": 1777445665282,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 69551,
            "range": "± 1527.80",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4068592,
            "range": "± 79678.88",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20494,
            "range": "± 269.06",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 22788,
            "range": "± 583.50",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33562,
            "range": "± 814.35",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 100780,
            "range": "± 2155.71",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000270,
            "range": "± 5535.85",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86422,
            "range": "± 2670.48",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7582585,
            "range": "± 16376015.67",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7575131,
            "range": "± 181049.38",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7437867,
            "range": "± 142082.41",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 91197211,
            "range": "± 24632111.48",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 50204233,
            "range": "± 1924890.25",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5165428,
            "range": "± 76247.58",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "committer": {
            "email": "gngppz@gmail.com",
            "name": "gngpp",
            "username": "0x676e67"
          },
          "distinct": true,
          "id": "fd289908151f3e802eca415107df4575412962e7",
          "message": "ci: release-plz",
          "timestamp": "2026-04-29T15:34:57+08:00",
          "tree_id": "a14e5cb770b4f40531e730f80b0288d9b81ad4b1",
          "url": "https://github.com/0x676e67/wreq-proto/commit/fd289908151f3e802eca415107df4575412962e7"
        },
        "date": 1777448257051,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 68574,
            "range": "± 790.53",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4006046,
            "range": "± 97979.73",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20140,
            "range": "± 410.83",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 22441,
            "range": "± 496.96",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 32856,
            "range": "± 632.82",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 99416,
            "range": "± 2344.86",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000071,
            "range": "± 41411.80",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 85138,
            "range": "± 1507.38",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 7468779,
            "range": "± 95155.08",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 32001451,
            "range": "± 8236291.58",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7448616,
            "range": "± 167384.96",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 49421220,
            "range": "± 388979.21",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 49534291,
            "range": "± 8097586.29",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5129574,
            "range": "± 64361.48",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "345948a182b68c05cd74b2f96be2816f853e631b",
          "message": "chore: release v0.1.0 (#8)",
          "timestamp": "2026-04-29T16:24:16+08:00",
          "tree_id": "f894814a3a7eff69dea048a58aad174a03f63cda",
          "url": "https://github.com/0x676e67/wreq-proto/commit/345948a182b68c05cd74b2f96be2816f853e631b"
        },
        "date": 1777451238880,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 70142,
            "range": "± 1031.19",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4176299,
            "range": "± 244382.70",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20560,
            "range": "± 298.43",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 23150,
            "range": "± 9777.54",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 33816,
            "range": "± 912.47",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 101142,
            "range": "± 7080.58",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 40999966,
            "range": "± 4605.56",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 86823,
            "range": "± 1247.96",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 19886048,
            "range": "± 8326030.17",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 32045325,
            "range": "± 8285450.90",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7265290,
            "range": "± 78504.33",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 91213064,
            "range": "± 1007035.97",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 52424168,
            "range": "± 1481233.50",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5195888,
            "range": "± 162993.47",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "702f3439ac113cbca020daa08f49d08a8db829d8",
          "message": "refactor(ext): rename method to `call_visit` and clarify its purpose (#10)",
          "timestamp": "2026-04-29T23:28:16+08:00",
          "tree_id": "97ac21861c35261ff1342019211a5b32965cdb85",
          "url": "https://github.com/0x676e67/wreq-proto/commit/702f3439ac113cbca020daa08f49d08a8db829d8"
        },
        "date": 1777476680848,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 36870,
            "range": "± 699.98",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 4027667,
            "range": "± 200275.12",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 11085,
            "range": "± 207.32",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 12746,
            "range": "± 208.84",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 18602,
            "range": "± 350.29",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 53318,
            "range": "± 1263.58",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 40999946,
            "range": "± 4761.05",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 65211,
            "range": "± 852.05",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 4307799,
            "range": "± 78860.11",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 28728897,
            "range": "± 8185130.99",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 4184208,
            "range": "± 38885.90",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 33037557,
            "range": "± 189572.87",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 32959738,
            "range": "± 611233.76",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 3372667,
            "range": "± 62862.24",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gngppz@gmail.com",
            "name": "0x676e67",
            "username": "0x676e67"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2a67950cf81bfdadd538f820eb494c793341c15",
          "message": "Fix capitalization in package description",
          "timestamp": "2026-04-29T23:28:55+08:00",
          "tree_id": "68e52506f4e0977cc73236b15a057947eb281363",
          "url": "https://github.com/0x676e67/wreq-proto/commit/e2a67950cf81bfdadd538f820eb494c793341c15"
        },
        "date": 1777476707324,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_consecutive_x1_both_100kb",
            "value": 77610,
            "range": "± 1602.96",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_both_10mb",
            "value": 3995584,
            "range": "± 57944.38",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_empty",
            "value": 20041,
            "range": "± 684.41",
            "unit": "ns/iter"
          },
          {
            "name": "http1_consecutive_x1_req_10b",
            "value": 22571,
            "range": "± 526.04",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_empty",
            "value": 32938,
            "range": "± 1168.24",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_100kb",
            "value": 106786,
            "range": "± 2878.67",
            "unit": "ns/iter"
          },
          {
            "name": "http2_consecutive_x1_req_10b",
            "value": 41000025,
            "range": "± 4331.40",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 85757,
            "range": "± 1438.28",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 24034482,
            "range": "± 8394034.08",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 7899785,
            "range": "± 99407.96",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 7689758,
            "range": "± 79742.80",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 49239876,
            "range": "± 372627.30",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 51214013,
            "range": "± 335910.31",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5290102,
            "range": "± 40700.28",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}