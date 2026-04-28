window.BENCHMARK_DATA = {
  "lastUpdate": 1777357829965,
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
      }
    ]
  }
}