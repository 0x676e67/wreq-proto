window.BENCHMARK_DATA = {
  "lastUpdate": 1777358763435,
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
      }
    ]
  }
}