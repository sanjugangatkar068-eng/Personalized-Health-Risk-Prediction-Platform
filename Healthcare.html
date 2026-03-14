<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HealthHub — Risk Predictor & MediBot</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=DM+Sans:wght@400;500;600&display=swap');

    :root {
      --bg: #E8EEF2;
      --surface: #FAFCFD;
      --surface2: #EEF2F5;
      --border: #B0BEC5;
      --border2: #CFD8DC;
      --navy: #1A3A4A;
      --navy2: #0D2535;
      --text: #1A2E38;
      --text2: #546E7A;
      --text3: #90A4AE;
      --blue: #2196F3;
      --blue2: #1565C0;
      --green: #27AE60;
      --mono: 'JetBrains Mono', monospace;
      --sans: 'DM Sans', sans-serif;
    }

    [data-theme="dark"] {
      --bg: #0D1B22;
      --surface: #152330;
      --surface2: #1C2F3D;
      --border: #2A4255;
      --border2: #1F3344;
      --navy: #1E4560;
      --navy2: #0D2535;
      --text: #D8E8EF;
      --text2: #7FB3C8;
      --text3: #4A7A92;
      --blue: #42A5F5;
      --blue2: #90CAF9;
      --green: #2ECC71;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--sans);
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      transition: background .3s, color .3s;
    }

    #topbar {
      background: var(--navy);
      border-bottom: 2px solid var(--navy2);
      display: flex;
      align-items: center;
      padding: 0 20px;
      position: sticky;
      top: 0;
      z-index: 100;
      flex-wrap: wrap;
    }

    #topbar-brand {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 11px 0;
      margin-right: 24px;
    }

    #topbar-brand svg {
      width: 22px;
      height: 22px;
      flex-shrink: 0;
    }

    #topbar-brand span {
      font-family: var(--mono);
      font-size: 13px;
      font-weight: 700;
      color: #E8F4F8;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .tab-btn {
      padding: 13px 16px;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .1em;
      text-transform: uppercase;
      color: #7FB3C8;
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      margin-bottom: -2px;
      cursor: pointer;
      transition: color .15s, border-color .15s;
    }

    .tab-btn:hover {
      color: #E8F4F8;
    }

    .tab-btn.active {
      color: #E8F4F8;
      border-bottom-color: var(--green);
    }

    #topbar-right {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    #online-badge {
      background: var(--green);
      color: #fff;
      font-family: var(--mono);
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .1em;
      padding: 3px 8px;
      border-radius: 3px;
    }

    .top-btn {
      background: none;
      border: 1px solid #2A4255;
      border-radius: 4px;
      color: #7FB3C8;
      font-family: var(--mono);
      font-size: 10px;
      padding: 4px 10px;
      cursor: pointer;
      letter-spacing: .06em;
    }

    .top-btn:hover {
      color: #E8F4F8;
      border-color: #7FB3C8;
    }

    .page {
      display: none;
      padding: 20px;
    }

    .page.active {
      display: block;
    }

    /* RISK PREDICTOR */
    .rp-grid {
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: 16px;
      align-items: start;
    }

    .rp-sidebar {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .rp-main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .panel {
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
    }

    .panel-header {
      background: var(--navy);
      color: #E8F4F8;
      padding: 10px 14px;
      font-family: var(--mono);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .form-group {
      background: var(--surface2);
      border: 1px solid var(--border2);
      border-radius: 4px;
      padding: 10px 12px;
    }

    .form-group label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .07em;
      text-transform: uppercase;
      color: var(--text2);
      margin-bottom: 6px;
    }

    .form-group label span {
      font-weight: 400;
      color: var(--text);
    }

    .form-group input[type=range] {
      width: 100%;
      accent-color: var(--blue);
      cursor: pointer;
    }

    .form-group select {
      width: 100%;
      padding: 4px 6px;
      border: 1px solid var(--border2);
      border-radius: 3px;
      background: var(--surface);
      color: var(--text);
      font-family: var(--mono);
      font-size: 11px;
      outline: none;
    }

    .bmi-badge {
      display: inline-block;
      margin-top: 4px;
      padding: 2px 8px;
      border-radius: 3px;
      font-family: var(--mono);
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .06em;
      text-transform: uppercase;
    }

    .bmi-under {
      background: #E3F2FD;
      color: #0D47A1;
    }

    .bmi-normal {
      background: #E8F5E9;
      color: #1B5E20;
    }

    .bmi-over {
      background: #FFF3E0;
      color: #E65100;
    }

    .bmi-obese {
      background: #FFEBEE;
      color: #C62828;
    }

    [data-theme="dark"] .bmi-under {
      background: #0D2A40;
      color: #90CAF9;
    }

    [data-theme="dark"] .bmi-normal {
      background: #0D2A1A;
      color: #A5D6A7;
    }

    [data-theme="dark"] .bmi-over {
      background: #2A1A00;
      color: #FFCC80;
    }

    [data-theme="dark"] .bmi-obese {
      background: #2A0D0D;
      color: #EF9A9A;
    }

    .chart-box {
      background: var(--surface);
      border: 1px solid var(--border2);
      border-radius: 4px;
      padding: 10px;
      height: 190px;
    }

    .chart-label {
      font-family: var(--mono);
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .06em;
      text-transform: uppercase;
      color: var(--text3);
      margin-bottom: 6px;
    }

    .result-box {
      grid-column: span 2;
      border-radius: 4px;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: var(--mono);
    }

    .result-low {
      background: #E8F5E9;
      border: 1.5px solid #2E7D32;
      color: #1B5E20;
    }

    .result-high {
      background: #FFEBEE;
      border: 1.5px solid #C62828;
      color: #B71C1C;
    }

    [data-theme="dark"] .result-low {
      background: #0D2A1A;
      border-color: #2E7D32;
      color: #A5D6A7;
    }

    [data-theme="dark"] .result-high {
      background: #2A0D0D;
      border-color: #C62828;
      color: #EF9A9A;
    }

    .result-label {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: .08em;
    }

    .result-pct {
      font-size: 12px;
      opacity: .8;
    }

    .recs-box {
      grid-column: span 2;
      background: var(--surface2);
      border: 1px solid var(--border2);
      border-radius: 4px;
      padding: 12px;
    }

    .recs-title {
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .07em;
      text-transform: uppercase;
      color: var(--text2);
      margin-bottom: 8px;
    }

    .rec-item {
      font-size: 13px;
      color: var(--text);
      padding: 4px 0;
      border-bottom: 1px solid var(--border2);
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }

    .rec-item:last-child {
      border-bottom: none;
    }

    .rec-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--blue);
      flex-shrink: 0;
      margin-top: 6px;
    }

    .history-panel {
      background: var(--surface2);
      border: 1px solid var(--border2);
      border-radius: 4px;
      padding: 10px;
      max-height: 150px;
      overflow-y: auto;
    }

    .history-title {
      font-family: var(--mono);
      font-size: 9px;
      color: var(--text3);
    }

    .history-entry {
      font-family: var(--mono);
      font-size: 10px;
      padding: 3px 0;
      border-bottom: 1px solid var(--border2);
      display: flex;
      justify-content: space-between;
      color: var(--text2);
    }

    .history-entry:last-child {
      border-bottom: none;
    }

    .h-low {
      color: #2E7D32;
    }

    .h-high {
      color: #C62828;
    }

    [data-theme="dark"] .h-low {
      color: #A5D6A7;
    }

    [data-theme="dark"] .h-high {
      color: #EF9A9A;
    }

    .log-btn {
      margin-top: 8px;
      width: 100%;
      padding: 7px;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .07em;
      text-transform: uppercase;
      background: var(--navy);
      color: #E8F4F8;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }

    .clr-btn {
      margin-top: 4px;
      width: 100%;
      padding: 5px;
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: .06em;
      text-transform: uppercase;
      background: none;
      color: var(--text3);
      border: 1px solid var(--border2);
      border-radius: 3px;
      cursor: pointer;
    }

    /* MEDIBOT */
    #page-medibot {
      padding: 20px;
    }

    .medibot-wrap {
      display: grid;
      grid-template-columns: 1fr 290px;
      gap: 16px;
      align-items: start;
    }

    #bot-app {
      display: flex;
      flex-direction: column;
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
      height: calc(100vh - 120px);
    }

    #bot-header {
      padding: 10px 16px;
      background: var(--navy);
      border-bottom: 2px solid var(--navy2);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    #bot-header h2 {
      font-family: var(--mono);
      font-size: 13px;
      font-weight: 700;
      color: #E8F4F8;
      letter-spacing: .06em;
      text-transform: uppercase;
    }

    #chat {
      flex: 1;
      overflow-y: auto;
      padding: 14px;
      background: var(--surface2);
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .msg-row {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .user-row {
      align-items: flex-end;
    }

    .bot-row {
      align-items: flex-start;
    }

    .msg-meta {
      font-family: var(--mono);
      font-size: 8px;
      color: var(--text3);
      padding: 0 3px;
      letter-spacing: .06em;
    }

    .msg {
      padding: 9px 13px;
      font-size: 12.5px;
      line-height: 1.6;
      max-width: 85%;
    }

    .bot-msg {
      background: var(--surface);
      color: var(--text);
      border: 1px solid var(--border2);
      border-radius: 0 6px 6px 6px;
      border-left: 3px solid var(--blue);
      font-family: var(--mono);
    }

    .user-msg {
      background: var(--navy);
      color: #E8F4F8;
      border-radius: 6px 0 6px 6px;
      font-family: var(--mono);
    }

    .info-msg {
      background: #E3F2FD;
      color: #0D47A1;
      border: 1px solid #90CAF9;
      border-radius: 0 6px 6px 6px;
      border-left: 3px solid var(--blue2);
      font-family: var(--mono);
    }

    [data-theme="dark"] .info-msg {
      background: #0D2A40;
      color: #90CAF9;
      border-color: #1565C0;
    }

    .alert-panel {
      max-width: 92%;
      border-radius: 4px;
      overflow: hidden;
      border: 1.5px solid;
      font-family: var(--mono);
    }

    .alert-header {
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 6px 11px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    .alert-header .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .alert-body {
      padding: 7px 11px;
      font-size: 11.5px;
      line-height: 1.5;
    }

    .alert-critical {
      border-color: #C62828;
    }

    .alert-critical .alert-header {
      background: #C62828;
      color: #FFEBEE;
    }

    .alert-critical .alert-header .dot {
      background: #FFCDD2;
    }

    .alert-critical .alert-body {
      background: #FFEBEE;
      color: #B71C1C;
    }

    .alert-moderate {
      border-color: #E65100;
    }

    .alert-moderate .alert-header {
      background: #E65100;
      color: #FFF3E0;
    }

    .alert-moderate .alert-header .dot {
      background: #FFE0B2;
    }

    .alert-moderate .alert-body {
      background: #FFF3E0;
      color: #BF360C;
    }

    .alert-mild {
      border-color: #2E7D32;
    }

    .alert-mild .alert-header {
      background: #2E7D32;
      color: #E8F5E9;
    }

    .alert-mild .alert-header .dot {
      background: #C8E6C9;
    }

    .alert-mild .alert-body {
      background: #E8F5E9;
      color: #1B5E20;
    }

    .alert-info {
      border-color: #0D47A1;
    }

    .alert-info .alert-header {
      background: #1565C0;
      color: #E3F2FD;
    }

    .alert-info .alert-header .dot {
      background: #BBDEFB;
    }

    .alert-info .alert-body {
      background: #E3F2FD;
      color: #0D47A1;
    }

    [data-theme="dark"] .alert-critical .alert-body {
      background: #2A0D0D;
    }

    [data-theme="dark"] .alert-moderate .alert-body {
      background: #2A1200;
    }

    [data-theme="dark"] .alert-mild .alert-body {
      background: #0D2A1A;
    }

    [data-theme="dark"] .alert-info .alert-body {
      background: #0D2A40;
    }

    .disease-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 4px;
      overflow: hidden;
      max-width: 95%;
      font-family: var(--mono);
    }

    .card-title {
      background: var(--navy);
      color: #E8F4F8;
      padding: 6px 11px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .1em;
      text-transform: uppercase;
    }

    .card-row {
      display: flex;
      border-bottom: 1px solid var(--border2);
    }

    .card-row:last-child {
      border-bottom: none;
    }

    .card-label {
      background: var(--surface2);
      color: var(--text2);
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .06em;
      text-transform: uppercase;
      padding: 6px 9px;
      width: 90px;
      flex-shrink: 0;
      padding-top: 8px;
    }

    .card-value {
      color: var(--text);
      padding: 6px 9px;
      font-size: 11.5px;
      line-height: 1.5;
    }

    .chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 7px;
    }

    .chip {
      padding: 3px 8px;
      font-family: var(--mono);
      font-size: 10px;
      border: 1px solid var(--border);
      border-radius: 2px;
      cursor: pointer;
      color: var(--text2);
      background: var(--surface);
      letter-spacing: .04em;
    }

    .chip:hover {
      background: #E3F2FD;
      border-color: var(--blue2);
      color: var(--blue2);
    }

    [data-theme="dark"] .chip:hover {
      background: #0D2A40;
      border-color: var(--blue);
      color: var(--blue);
    }

    #demo-form {
      padding: 10px 13px;
      border-top: 1.5px solid var(--border);
      background: var(--surface2);
      display: none;
      flex-direction: column;
      gap: 7px;
    }

    #demo-form label {
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .06em;
      text-transform: uppercase;
      color: var(--text2);
    }

    #demo-input-row {
      display: flex;
      gap: 6px;
    }

    #demo-input {
      flex: 1;
      padding: 6px 9px;
      font-family: var(--mono);
      font-size: 12px;
      border: 1.5px solid var(--border);
      border-radius: 3px;
      background: var(--surface);
      color: var(--text);
      outline: none;
    }

    #demo-input:focus {
      border-color: var(--blue);
    }

    #demo-submit {
      padding: 6px 14px;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .07em;
      text-transform: uppercase;
      background: var(--navy);
      color: #E8F4F8;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }

    #input-row {
      display: flex;
      border-top: 1.5px solid var(--border);
    }

    #user-input {
      flex: 1;
      padding: 10px 13px;
      font-family: var(--mono);
      font-size: 12px;
      border: none;
      background: var(--surface);
      color: var(--text);
      outline: none;
      border-right: 1px solid var(--border2);
    }

    #user-input::placeholder {
      color: var(--text3);
    }

    #send-btn {
      padding: 10px 18px;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: .09em;
      text-transform: uppercase;
      background: var(--navy);
      color: #E8F4F8;
      border: none;
      cursor: pointer;
    }

    #chat::-webkit-scrollbar {
      width: 4px;
    }

    #chat::-webkit-scrollbar-track {
      background: var(--surface2);
    }

    #chat::-webkit-scrollbar-thumb {
      background: var(--border);
      border-radius: 3px;
    }

    .tips-panel {
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
    }

    .tips-header {
      background: var(--navy);
      color: #E8F4F8;
      padding: 10px 14px;
      font-family: var(--mono);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .tip-item {
      padding: 10px 14px;
      border-bottom: 1px solid var(--border2);
      font-size: 13px;
      line-height: 1.5;
      color: var(--text);
    }

    .tip-item:last-child {
      border-bottom: none;
    }

    .tip-tag {
      display: inline-block;
      padding: 1px 6px;
      border-radius: 2px;
      font-family: var(--mono);
      font-size: 9px;
      font-weight: 700;
      letter-spacing: .05em;
      text-transform: uppercase;
      margin-bottom: 4px;
    }

    .tip-tag-diet {
      background: #E8F5E9;
      color: #1B5E20;
    }

    .tip-tag-exercise {
      background: #E3F2FD;
      color: #0D47A1;
    }

    .tip-tag-mental {
      background: #F3E5F5;
      color: #6A1B9A;
    }

    .tip-tag-sleep {
      background: #FFF3E0;
      color: #E65100;
    }

    [data-theme="dark"] .tip-tag-diet {
      background: #0D2A1A;
      color: #A5D6A7;
    }

    [data-theme="dark"] .tip-tag-exercise {
      background: #0D2A40;
      color: #90CAF9;
    }

    [data-theme="dark"] .tip-tag-mental {
      background: #1A0D2A;
      color: #CE93D8;
    }

    [data-theme="dark"] .tip-tag-sleep {
      background: #2A1200;
      color: #FFCC80;
    }

    /* TIPS PAGE */
    #page-tips .tips-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 14px;
    }

    .tip-card {
      background: var(--surface);
      border: 1.5px solid var(--border);
      border-radius: 6px;
      padding: 16px;
      transition: border-color .2s;
    }

    .tip-card:hover {
      border-color: var(--blue);
    }

    .tip-card h3 {
      font-size: 14px;
      font-weight: 600;
      color: var(--text);
      margin: 6px 0;
    }

    .tip-card p {
      font-size: 13px;
      color: var(--text2);
      line-height: 1.6;
    }

    /* RESPONSIVE */
    @media(max-width:900px) {
      .rp-grid {
        grid-template-columns: 1fr;
      }

      .rp-main {
        grid-template-columns: 1fr;
      }

      .result-box,
      .recs-box {
        grid-column: span 1;
      }

      .medibot-wrap {
        grid-template-columns: 1fr;
      }

      #bot-app {
        height: 70vh;
      }
    }

    @media(max-width:600px) {
      #topbar {
        padding: 0 10px;
      }

      .tab-btn {
        padding: 12px 10px;
        font-size: 9px;
      }

      .page {
        padding: 12px;
      }

      #topbar-right {
        gap: 5px;
      }

      .top-btn {
        font-size: 9px;
        padding: 3px 7px;
      }
    }

    @media print {

      #topbar,
      .tab-btn,
      #dark-btn,
      #print-btn,
      #input-row,
      #demo-form,
      .chip-row,
      .log-btn,
      .clr-btn {
        display: none !important;
      }

      body {
        background: #fff;
        color: #000;
      }

      .page {
        display: block !important;
        padding: 0;
      }
    }
  </style>
</head>

<body>
  <div id="topbar">
    <div id="topbar-brand">
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="10" y="3" width="4" height="18" rx="1" fill="#E8F4F8" />
        <rect x="3" y="10" width="18" height="4" rx="1" fill="#E8F4F8" />
      </svg>
      <span>HealthHub</span>
    </div>
    <button class="tab-btn active" onclick="showPage('risk',this)">Risk Predictor</button>
    <button class="tab-btn" onclick="showPage('medibot',this)">MediBot</button>
    <button class="tab-btn" onclick="showPage('tips',this)">Health Tips</button>
    <div id="topbar-right">
      <span id="online-badge">ONLINE</span>
      <button class="top-btn" id="dark-btn" onclick="toggleDark()">Dark Mode</button>
      <button class="top-btn" onclick="window.print()">Print Report</button>
    </div>
  </div>

  <!-- RISK PREDICTOR -->
  <div id="page-risk" class="page active">
    <div class="rp-grid">
      <div class="rp-sidebar">
        <div class="panel">
          <div class="panel-header">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <rect x="10" y="3" width="4" height="18" rx="1" fill="#E8F4F8" />
              <rect x="3" y="10" width="18" height="4" rx="1" fill="#E8F4F8" />
            </svg>
            Patient Inputs
          </div>
          <div style="padding:12px;display:flex;flex-direction:column;gap:9px;">
            <div class="form-group"><label>Age <span id="ageValue">50</span></label><input type="range" id="age"
                min="25" max="85" value="50"></div>
            <div class="form-group"><label>BMI <span id="bmiValue">27.0</span></label><input type="range" id="bmi"
                min="15" max="50" step="0.1" value="27">
              <div id="bmi-badge" class="bmi-badge bmi-over">Overweight</div>
            </div>
            <div class="form-group"><label>Systolic BP <span id="systolic_bpValue">130</span></label><input type="range"
                id="systolic_bp" min="90" max="200" value="130"></div>
            <div class="form-group"><label>Cholesterol <span id="cholesterolValue">200</span></label><input type="range"
                id="cholesterol" min="120" max="350" value="200"></div>
            <div class="form-group"><label>Exercise (days/wk) <span id="exerciseValue">2</span></label><input
                type="range" id="exercise" min="0" max="7" value="2"></div>
            <div class="form-group"><label>PM2.5 Exposure <span id="pm25Value">30.0</span></label><input type="range"
                id="pm25" min="10" max="80" step="0.1" value="30"></div>
            <div class="form-group"><label>Smoker</label><select id="smoker">
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select></div>
            <div class="form-group"><label>Diabetes</label><select id="diabetes">
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select></div>
            <div class="form-group"><label>Family History</label><select id="family_history">
                <option value="0">No</option>
                <option value="1">Yes</option>
              </select></div>
          </div>
        </div>
        <div class="panel">
          <div class="panel-header">Risk History Log</div>
          <div style="padding:10px;">
            <div class="history-panel" id="history-log">
              <div class="history-title">No readings logged yet.</div>
            </div>
            <button class="log-btn" onclick="logHistory()">Log Current Reading</button>
            <button class="clr-btn" onclick="clearHistory()">Clear History</button>
          </div>
        </div>
      </div>
      <div class="rp-main">
        <div class="chart-box">
          <div class="chart-label">Biometric Profile</div><canvas id="profileChart"></canvas>
        </div>
        <div class="chart-box">
          <div class="chart-label">Smoking Status</div><canvas id="smokerChart"></canvas>
        </div>
        <div class="chart-box">
          <div class="chart-label">Risk Factor Radar</div><canvas id="radarChart"></canvas>
        </div>
        <div class="chart-box">
          <div class="chart-label">Risk Distribution</div><canvas id="riskChart"></canvas>
        </div>
        <div id="result" class="result-box result-low">
          <div>
            <div class="result-label" id="result-label">LOW RISK</div>
            <div class="result-pct" id="result-pct">Probability: —</div>
          </div>
          <div id="result-icon" style="font-size:26px;">✅</div>
        </div>
        <div class="recs-box">
          <div class="recs-title">Personalised Recommendations</div>
          <div id="recs-list"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- MEDIBOT -->
  <div id="page-medibot" class="page">
    <div class="medibot-wrap">
      <div id="bot-app">
        <div id="bot-header">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect x="10" y="3" width="4" height="18" rx="1" fill="#E8F4F8" />
            <rect x="3" y="10" width="18" height="4" rx="1" fill="#E8F4F8" />
          </svg>
          <h2>MediBot Assistant</h2>
          <div
            style="margin-left:auto;background:#27AE60;color:#fff;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:.1em;padding:3px 8px;border-radius:3px;">
            ONLINE</div>
        </div>
        <div id="chat"></div>
        <div id="demo-form">
          <label id="demo-label">Enter value:</label>
          <div id="demo-input-row"><input type="number" id="demo-input" placeholder="—" /><button
              id="demo-submit">Confirm</button></div>
        </div>
        <div id="input-row">
          <input id="user-input" type="text" placeholder="Enter disease name or describe symptoms..."
            autocomplete="off" />
          <button id="send-btn">Send</button>
        </div>
      </div>
      <div class="tips-panel">
        <div class="tips-header">Quick Health Tips</div>
        <div class="tip-item">
          <div class="tip-tag tip-tag-diet">Diet</div><br>Eat 5+ portions of fruit and vegetables daily to reduce
          chronic disease risk.
        </div>
        <div class="tip-item">
          <div class="tip-tag tip-tag-exercise">Exercise</div><br>Aim for 150 min of moderate aerobic activity per week.
        </div>
        <div class="tip-item">
          <div class="tip-tag tip-tag-sleep">Sleep</div><br>Adults need 7–9 hours of sleep per night for optimal
          function.
        </div>
        <div class="tip-item">
          <div class="tip-tag tip-tag-mental">Mental Health</div><br>10 minutes of mindfulness daily reduces cortisol
          levels.
        </div>
        <div class="tip-item">
          <div class="tip-tag tip-tag-diet">Hydration</div><br>Drink 8–10 glasses of water daily. Dehydration worsens
          many conditions.
        </div>
        <div class="tip-item">
          <div class="tip-tag tip-tag-exercise">Posture</div><br>Take a standing break every 30 minutes if you have a
          desk job.
        </div>
      </div>
    </div>
  </div>

  <!-- HEALTH TIPS -->
  <div id="page-tips" class="page">
    <div class="panel" style="margin-bottom:16px;">
      <div class="panel-header">Health & Wellness Guide</div>
    </div>
    <div class="tips-grid">
      <div class="tip-card">
        <div class="tip-tag tip-tag-diet">Nutrition</div>
        <h3>Balanced Diet</h3>
        <p>Focus on whole grains, lean proteins, healthy fats, and colourful vegetables. Limit processed food, added
          sugar, and excess salt.</p>
      </div>
      <div class="tip-card">
        <div class="tip-tag tip-tag-exercise">Exercise</div>
        <h3>Stay Active</h3>
        <p>Combine cardio and strength training. A 30-minute daily walk significantly reduces cardiovascular disease
          risk.</p>
      </div>
      <div class="tip-card">
        <div class="tip-tag tip-tag-sleep">Sleep</div>
        <h3>Sleep Hygiene</h3>
        <p>Keep a consistent sleep schedule. Avoid screens 1 hour before bed. Keep your room cool, dark, and quiet.</p>
      </div>
      <div class="tip-card">
        <div class="tip-tag tip-tag-mental">Mental Health</div>
        <h3>Stress Management</h3>
        <p>Meditation, journaling, and social connection are proven to lower stress hormones and improve mood.</p>
      </div>
      <div class="tip-card">
        <div class="tip-tag tip-tag-diet">Hydration</div>
        <h3>Water Intake</h3>
        <p>Proper hydration supports kidney function, joint lubrication, and temperature regulation. Pale yellow urine
          is ideal.</p>
      </div>
      <div class="tip-card">
        <div class="tip-tag tip-tag-exercise">Preventive Care</div>
        <h3>Regular Check-ups</h3>
        <p>Annual screenings for blood pressure, cholesterol, blood sugar, and age-appropriate cancer checks save lives.
        </p>
      </div>
      <div class="tip-card">
        <div class="tip-tag tip-tag-mental">Social Health</div>
        <h3>Stay Connected</h3>
        <p>Strong social relationships are linked to a 50% increased chance of longevity and lower dementia risk.</p>
      </div>
      <div class="tip-card">
        <div class="tip-tag tip-tag-diet">Gut Health</div>
        <h3>Probiotics & Fibre</h3>
        <p>A healthy gut microbiome supports immunity and mood. Include yoghurt, kefir, and kimchi in your diet.</p>
      </div>
      <div class="tip-card">
        <div class="tip-tag tip-tag-exercise">Ergonomics</div>
        <h3>Posture & Workspace</h3>
        <p>Set your monitor at eye level. Use a chair that supports the natural curve of your spine to prevent back
          pain.</p>
      </div>
    </div>
  </div>

  <script>
    function showPage(id, btn) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.getElementById('page-' + id).classList.add('active');
      btn.classList.add('active');
    }
    function toggleDark() {
      const html = document.documentElement;
      const isDark = html.getAttribute('data-theme') === 'dark';
      html.setAttribute('data-theme', isDark ? 'light' : 'dark');
      document.getElementById('dark-btn').textContent = isDark ? 'Dark Mode' : 'Light Mode';
    }

    /* RISK PREDICTOR */
    function predictRisk(d) {
      const [age, bmi, bp, chol, smk, diab, fam, pm, ex] = d;
      const logit = -6.8 + 0.065 * age + 0.13 * bmi + 0.028 * bp + 0.009 * chol + 1 * smk + 0.85 * diab + 1.15 * fam + 0.018 * pm - 0.04 * ex;
      return 1 / (1 + Math.exp(-logit));
    }
    function getBMICat(bmi) {
      if (bmi < 18.5) return { label: 'Underweight', cls: 'bmi-under' };
      if (bmi < 25) return { label: 'Normal', cls: 'bmi-normal' };
      if (bmi < 30) return { label: 'Overweight', cls: 'bmi-over' };
      return { label: 'Obese', cls: 'bmi-obese' };
    }
    function getRecs(d, prob) {
      const [age, bmi, bp, chol, smk, diab, fam, pm, ex] = d;
      const r = [];
      if (smk == 1) r.push('Quit smoking — the single most impactful change for cardiovascular health.');
      if (bmi >= 25) r.push(Your BMI is ${bmi.toFixed(1)}. Losing 5–10% of body weight significantly reduces risk.);
      if (bp >= 140) r.push('Blood pressure is elevated. Reduce sodium intake and consult a physician.');
      if (chol >= 240) r.push('High cholesterol detected. Consider a low-saturated-fat diet and medical evaluation.');
      if (ex < 3) r.push('Increase physical activity to at least 3–5 days per week for measurable risk reduction.');
      if (pm >= 50) r.push('High PM2.5 exposure. Use air purifiers indoors and a mask on high-pollution days.');
      if (diab == 1) r.push('Monitor blood glucose regularly and follow your diabetes management plan.');
      if (r.length === 0) r.push('Excellent profile! Maintain your current healthy lifestyle habits.');
      return r;
    }
    let charts = {};
    function initCharts() {
      const mono = "'JetBrains Mono',monospace";
      const tc = { family: mono, size: 9 };
      const mkBar = (id, labels, data, colors) => new Chart(document.getElementById(id), { type: 'bar', data: { labels, datasets: [{ data, backgroundColor: colors, borderRadius: 2 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { ticks: { font: tc, color: '#546E7A' } }, y: { ticks: { font: tc, color: '#546E7A' }, grid: { color: 'rgba(0,0,0,.06)' } } } } });
      charts.profileChart = mkBar('profileChart', ['Age', 'BMI', 'BP', 'Chol'], [50, 27, 130, 200], '#667eea');
      charts.smokerChart = mkBar('smokerChart', ['Non-Smoker', 'Smoker'], [1, 0], ['#4caf50', '#f44336']);
      charts.radarChart = new Chart(document.getElementById('radarChart'), { type: 'radar', data: { labels: ['Age', 'BMI', 'BP', 'Chol', 'PM2.5', 'Exercise'], datasets: [{ data: [50 / 85, 27 / 50, 130 / 200, 200 / 350, 30 / 80, 2 / 7], backgroundColor: 'rgba(102,126,234,.2)', borderColor: '#667eea', pointBackgroundColor: '#667eea', pointRadius: 3 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { r: { ticks: { display: false }, grid: { color: 'rgba(0,0,0,.08)' }, pointLabels: { font: tc, color: '#546E7A' } } } } });
      charts.riskChart = new Chart(document.getElementById('riskChart'), { type: 'pie', data: { labels: ['Low Risk', 'High Risk'], datasets: [{ data: [0.7, 0.3], backgroundColor: ['#4caf50', '#f44336'], borderWidth: 0 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { font: tc, color: '#546E7A' } } } } });
    }
    function getData() {
      return [+document.getElementById('age').value, +document.getElementById('bmi').value, +document.getElementById('systolic_bp').value, +document.getElementById('cholesterol').value, +document.getElementById('smoker').value, +document.getElementById('diabetes').value, +document.getElementById('family_history').value, +document.getElementById('pm25').value, +document.getElementById('exercise').value];
    }
    function updateAll() {
      const d = getData(); const prob = predictRisk(d);
      charts.profileChart.data.datasets[0].data = d.slice(0, 4); charts.profileChart.update();
      charts.smokerChart.data.datasets[0].data = [1 - d[4], d[4]]; charts.smokerChart.update();
      charts.radarChart.data.datasets[0].data = [d[0] / 85, d[1] / 50, d[2] / 200, d[3] / 350, d[7] / 80, d[8] / 7]; charts.radarChart.update();
      charts.riskChart.data.datasets[0].data = [1 - prob, prob]; charts.riskChart.update();
      const res = document.getElementById('result');
      if (prob > 0.5) { res.className = 'result-box result-high'; document.getElementById('result-label').textContent = 'HIGH RISK'; document.getElementById('result-icon').textContent = '⚠️'; }
      else { res.className = 'result-box result-low'; document.getElementById('result-label').textContent = 'LOW RISK'; document.getElementById('result-icon').textContent = '✅'; }
      document.getElementById('result-pct').textContent = Probability: ${(prob * 100).toFixed(1)}%;
      const cat = getBMICat(d[1]); const badge = document.getElementById('bmi-badge'); badge.textContent = cat.label; badge.className = 'bmi-badge ' + cat.cls;
      document.getElementById('recs-list').innerHTML = getRecs(d, prob).map(r => <div class="rec-item"><div class="rec-dot"></div><span>${r}</span></div>).join('');
    }
    let historyLog = [];
    function logHistory() { const d = getData(); const prob = predictRisk(d); const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); historyLog.unshift({ time: now, prob, label: prob > 0.5 ? 'HIGH' : 'LOW' }); if (historyLog.length > 10) historyLog.pop(); renderHistory(); }
    function clearHistory() { historyLog = []; renderHistory(); }
    function renderHistory() { const el = document.getElementById('history-log'); if (!historyLog.length) { el.innerHTML = '<div class="history-title">No readings logged yet.</div>'; return; } el.innerHTML = historyLog.map(e => <div class="history-entry"><span>${e.time}</span><span class="${e.label === 'HIGH' ? 'h-high' : 'h-low'}">${e.label} (${(e.prob * 100).toFixed(1)}%)</span></div>).join(''); }
    ['age', 'bmi', 'systolic_bp', 'cholesterol', 'pm25', 'exercise'].forEach(id => {
      const s = document.getElementById(id); const v = document.getElementById(id + 'Value');
      s.oninput = () => { v.textContent = (id === 'bmi' || id === 'pm25') ? (+s.value).toFixed(1) : s.value; updateAll(); };
    });
    ['smoker', 'diabetes', 'family_history'].forEach(id => document.getElementById(id).onchange = updateAll);

    /* MEDIBOT */
    const MEDICAL_DB = {
      "common cold": { description: "A viral infection of the nose and throat.", causes: ["Rhinoviruses", "Coronaviruses", "RSV"], symptoms: ["Sneezing", "Cough", "Mild headache", "Body aches"], remedies: ["Rest", "Hydration", "Steam inhalation"], typical_duration: "7–10 days" },
      "influenza": { description: "A contagious respiratory illness caused by influenza viruses.", causes: ["Influenza virus"], symptoms: ["Fever", "Chills", "Muscle aches", "Cough"], remedies: ["Rest", "Hydration", "Antiviral medications"] },
      "covid 19": { description: "A respiratory disease caused by SARS-CoV-2.", causes: ["SARS-CoV-2 virus"], symptoms: ["Fever", "Dry cough", "Fatigue", "Loss of taste/smell"], remedies: ["Isolation", "Rest", "Hydration", "Medical attention if severe"] },
      "asthma": { description: "Airways narrow and swell, causing breathing difficulty.", causes: ["Genetics", "Allergens", "Environmental factors"], symptoms: ["Wheezing", "Shortness of breath", "Chest tightness"], remedies: ["Inhalers", "Avoiding triggers", "Breathing exercises"] },
      "hypertension": { description: "Blood pressure consistently too high.", causes: ["Genetics", "High salt diet", "Stress", "Inactivity"], symptoms: ["Usually asymptomatic", "Headaches in severe cases"], remedies: ["Lifestyle changes", "Antihypertensive medications", "Reduced sodium"] },
      "diabetes type 1": { description: "Pancreas produces little or no insulin.", causes: ["Autoimmune destruction of beta cells", "Genetics"], symptoms: ["Frequent urination", "Extreme thirst", "Unexplained weight loss"], remedies: ["Insulin therapy", "Blood sugar monitoring", "Diet management"] },
      "diabetes type 2": { description: "Affects how the body processes blood sugar.", causes: ["Obesity", "Physical inactivity", "Genetics"], symptoms: ["Fatigue", "Blurred vision", "Slow healing wounds"], remedies: ["Diet and exercise", "Oral medications", "Insulin if needed"] },
      "diabetes": { description: "Chronic disease affecting blood sugar regulation.", causes: ["Insulin deficiency", "Insulin resistance"], symptoms: ["Fatigue", "Thirst", "Frequent urination", "Blurred vision"], remedies: ["Healthy diet", "Exercise", "Blood sugar monitoring", "Medication"] },
      "migraine": { description: "Neurological condition with intense recurring headaches.", causes: ["Genetics", "Hormonal changes", "Stress", "Certain foods"], symptoms: ["Severe headache", "Nausea", "Light sensitivity", "Aura"], remedies: ["Pain relievers", "Triptans", "Rest in dark room"] },
      "tension headache": { description: "Mild to moderate pain like a tight band around the head.", causes: ["Stress", "Fatigue", "Poor posture"], symptoms: ["Dull head pain", "Tenderness in scalp"], remedies: ["OTC pain relievers", "Stress management", "Massage"] },
      "gastroenteritis": { description: "Intestinal infection causing diarrhea, cramps, nausea.", causes: ["Norovirus", "Rotavirus", "Contaminated food/water"], symptoms: ["Diarrhea", "Vomiting", "Stomach cramps", "Fever"], remedies: ["Oral rehydration", "Rest", "Bland diet"] },
      "appendicitis": { description: "Inflammation of the appendix.", causes: ["Blockage in the appendix lining"], symptoms: ["Pain in lower right abdomen", "Nausea", "Fever"], remedies: ["Appendectomy", "Antibiotics"] },
      "bronchitis": { description: "Inflammation of the bronchial tube lining.", causes: ["Viral infections", "Smoking", "Air pollution"], symptoms: ["Cough with mucus", "Fatigue", "Shortness of breath"], remedies: ["Rest", "Fluids", "Cough suppressants", "Humidifier"] },
      "pneumonia": { description: "Infection inflaming air sacs in one or both lungs.", causes: ["Bacteria", "Viruses", "Fungi"], symptoms: ["Chest pain", "Cough", "Fever", "Difficulty breathing"], remedies: ["Antibiotics (bacterial)", "Antivirals (viral)", "Rest and fluids"] },
      "tuberculosis": { description: "Serious infectious bacterial disease mainly affecting lungs.", causes: ["Mycobacterium tuberculosis"], symptoms: ["Persistent cough", "Coughing blood", "Night sweats", "Weight loss"], remedies: ["Long-term antibiotics", "Medical supervision"] },
      "malaria": { description: "Disease from plasmodium parasites via infected mosquitoes.", causes: ["Plasmodium parasites (Anopheles mosquitoes)"], symptoms: ["Fever", "Chills", "Sweating", "Headache"], remedies: ["Antimalarial drugs", "Supportive care"] },
      "dengue fever": { description: "Mosquito-borne viral disease in tropical areas.", causes: ["Dengue virus (Aedes mosquitoes)"], symptoms: ["High fever", "Severe headache", "Pain behind eyes", "Rash"], remedies: ["Acetaminophen", "Fluid replacement", "Hospitalization if severe"] },
      "dengue": { description: "Mosquito-borne viral infection causing flu-like illness.", causes: ["Dengue virus"], symptoms: ["Fever", "Severe headache", "Rash", "Muscle pain"], remedies: ["Rest", "Hydration", "Paracetamol", "Medical monitoring"] },
      "typhoid fever": { description: "Bacterial infection causing high fever and digestive issues.", causes: ["Salmonella typhi bacteria"], symptoms: ["High fever", "Weakness", "Abdominal pain", "Rash"], remedies: ["Antibiotics", "Increased fluid intake"] },
      "typhoid": { description: "Bacterial infection spreading via contaminated food and water.", causes: ["Salmonella Typhi bacteria"], symptoms: ["High fever", "Weakness", "Abdominal pain"], remedies: ["Antibiotics", "Hydration", "Rest"] },
      "chickenpox": { description: "Highly contagious viral infection with itchy blister rash.", causes: ["Varicella-zoster virus"], symptoms: ["Itchy blisters", "Fever", "Fatigue"], remedies: ["Calamine lotion", "Antihistamines", "Rest"] },
      "measles": { description: "Serious viral infection preventable by vaccine.", causes: ["Measles virus"], symptoms: ["High fever", "Cough", "Runny nose", "Distinctive rash"], remedies: ["Rest", "Fever reducers", "Vitamin A supplements"] },
      "rubella": { description: "Contagious viral infection known by its red rash.", causes: ["Rubella virus"], symptoms: ["Red rash", "Low fever", "Joint pain"], remedies: ["Rest", "Fever reducers", "Isolation"] },
      "mumps": { description: "Viral infection affecting the salivary glands.", causes: ["Mumps virus"], symptoms: ["Swollen salivary glands", "Fever", "Headache"], remedies: ["Pain relievers", "Warm/cold compresses", "Soft foods"] },
      "rabies": { description: "Deadly virus from saliva of infected animals.", causes: ["Rabies virus (animal bites)"], symptoms: ["Fever", "Headache", "Hydrophobia", "Confusion"], remedies: ["Post-exposure prophylaxis", "Wound washing"] },
      "tetanus": { description: "Serious bacterial infection causing painful muscle spasms.", causes: ["Clostridium tetani via wounds"], symptoms: ["Jaw cramping", "Muscle stiffness", "Fever"], remedies: ["Tetanus antitoxin", "Antibiotics", "Wound care"] },
      "cholera": { description: "Bacterial disease causing severe diarrhea and dehydration.", causes: ["Vibrio cholerae"], symptoms: ["Watery diarrhea", "Vomiting", "Muscle cramps"], remedies: ["ORS", "IV fluids", "Antibiotics"] },
      "peptic ulcer": { description: "Sore on the lining of the stomach or intestine.", causes: ["H. pylori bacteria", "Long-term NSAID use"], symptoms: ["Burning stomach pain", "Nausea", "Bloating"], remedies: ["Antibiotics", "Proton pump inhibitors", "Antacids"] },
      "gerd": { description: "Stomach acid repeatedly flows back into the esophagus.", causes: ["Frequent acid reflux", "Obesity", "Hiatal hernia"], symptoms: ["Heartburn", "Regurgitation", "Difficulty swallowing"], remedies: ["Antacids", "H2 blockers", "Dietary changes"] },
      "irritable bowel syndrome": { description: "Intestinal disorder causing pain, gas, diarrhea, constipation.", causes: ["Abnormal GI contractions", "Stress"], symptoms: ["Abdominal pain", "Bloating", "Alternating diarrhea and constipation"], remedies: ["Dietary changes", "Stress management", "Medications"] },
      "celiac disease": { description: "Immune disease where gluten damages the small intestine.", causes: ["Genetic predisposition + gluten ingestion"], symptoms: ["Diarrhea", "Bloating", "Fatigue", "Anaemia"], remedies: ["Strict lifelong gluten-free diet"] },
      "hyperthyroidism": { description: "Overproduction of thyroid hormone.", causes: ["Graves' disease", "Thyroid nodules"], symptoms: ["Weight loss", "Rapid heartbeat", "Sweating", "Anxiety"], remedies: ["Anti-thyroid medications", "Radioactive iodine", "Beta blockers"] },
      "hypothyroidism": { description: "Thyroid gland does not produce enough hormone.", causes: ["Hashimoto's disease", "Radiation therapy"], symptoms: ["Fatigue", "Weight gain", "Cold intolerance", "Depression"], remedies: ["Levothyroxine replacement therapy"] },
      "anemia": { description: "Lack of healthy red blood cells to carry adequate oxygen.", causes: ["Iron deficiency", "Vitamin B12 deficiency", "Chronic disease"], symptoms: ["Fatigue", "Pale skin", "Shortness of breath", "Dizziness"], remedies: ["Iron supplements", "Vitamin B12", "Dietary changes"] },
      "leukemia": { description: "Cancer of blood-forming tissues hindering infection defense.", causes: ["Genetic mutations", "High radiation exposure"], symptoms: ["Fatigue", "Frequent infections", "Easy bruising"], remedies: ["Chemotherapy", "Stem cell transplant", "Targeted therapy"] },
      "hemophilia": { description: "Blood's clotting ability is severely reduced.", causes: ["Inherited genetic mutation"], symptoms: ["Excessive bleeding", "Easy bruising", "Joint bleeding"], remedies: ["Clotting factor replacement therapy"] },
      "osteoporosis": { description: "Bones become weak and brittle, prone to fractures.", causes: ["Aging", "Hormonal changes", "Calcium deficiency"], symptoms: ["Back pain", "Height loss", "Bone fractures"], remedies: ["Calcium & Vitamin D", "Weight-bearing exercise", "Medications"] },
      "osteoarthritis": { description: "Arthritis from tissue wear at the ends of bones.", causes: ["Joint wear and tear", "Aging", "Obesity"], symptoms: ["Joint pain", "Stiffness", "Tenderness", "Bone spurs"], remedies: ["Pain relievers", "Physical therapy", "Joint replacement"] },
      "rheumatoid arthritis": { description: "Chronic inflammatory disorder affecting many joints.", causes: ["Autoimmune attack on synovium"], symptoms: ["Joint pain", "Swelling", "Morning stiffness"], remedies: ["DMARDs", "Biologic agents", "Corticosteroids"] },
      "arthritis": { description: "Inflammation of joints causing pain and stiffness.", causes: ["Age", "Autoimmune disorders", "Joint injuries"], symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced motion"], remedies: ["Pain relievers", "Physical therapy", "Anti-inflammatory drugs"] },
      "gout": { description: "Arthritis with severe pain and tenderness in joints.", causes: ["High uric acid in blood"], symptoms: ["Sudden severe joint pain", "Redness", "Swelling"], remedies: ["NSAIDs", "Colchicine", "Low-purine diet"] },
      "eczema": { description: "Condition making skin red, itchy, and inflamed.", causes: ["Skin barrier gene variant", "Immune overreaction"], symptoms: ["Itchy skin", "Red patches", "Dry skin", "Rash"], remedies: ["Moisturizers", "Corticosteroid creams", "Avoiding triggers"] },
      "psoriasis": { description: "Skin cells build up forming itchy, scaly patches.", causes: ["Immune system problem", "Genetics"], symptoms: ["Red patches with silvery scales", "Dry cracked skin", "Itching"], remedies: ["Topical treatments", "Light therapy", "Systemic medications"] },
      "acne": { description: "Hair follicles plugged with oil and dead skin cells.", causes: ["Excess sebum", "Bacteria", "Hormonal changes"], symptoms: ["Pimples", "Blackheads", "Whiteheads", "Cysts"], remedies: ["Topical retinoids", "Benzoyl peroxide", "Oral antibiotics"] },
      "melanoma": { description: "Most serious skin cancer, develops in melanocytes.", causes: ["UV radiation", "Genetic factors"], symptoms: ["Changing mole", "Unusual skin growth", "Asymmetric lesion"], remedies: ["Surgical removal", "Immunotherapy", "Targeted therapy"] },
      "alzheimers disease": { description: "Progressive disease destroying memory and mental function.", causes: ["Abnormal brain proteins", "Genetics"], symptoms: ["Memory loss", "Confusion", "Mood changes"], remedies: ["Cognition-enhancing medications", "Supportive care"] },
      "parkinsons disease": { description: "CNS disorder affecting movement, often with tremors.", causes: ["Loss of dopamine-producing cells", "Genetics"], symptoms: ["Tremors", "Slow movement", "Muscle stiffness"], remedies: ["Levodopa", "Dopamine agonists", "Physical therapy"] },
      "multiple sclerosis": { description: "Immune system attacks protective covering of nerves.", causes: ["Autoimmune attack on myelin"], symptoms: ["Numbness", "Fatigue", "Balance problems", "Vision issues"], remedies: ["Immunosuppressants", "Physical therapy", "Corticosteroids"] },
      "epilepsy": { description: "CNS disorder with abnormal brain activity causing seizures.", causes: ["Genetic influence", "Head trauma", "Brain conditions"], symptoms: ["Seizures", "Temporary confusion", "Staring spells"], remedies: ["Anti-seizure medications", "Vagus nerve stimulation", "Surgery"] },
      "schizophrenia": { description: "Disorder affecting thinking, feeling, and behaviour.", causes: ["Genetics", "Brain chemistry", "Environment"], symptoms: ["Hallucinations", "Delusions", "Disorganised thinking"], remedies: ["Antipsychotic medications", "Psychosocial therapy"] },
      "bipolar disorder": { description: "Mood swings from depressive lows to manic highs.", causes: ["Brain biology", "Genetics"], symptoms: ["Extreme mood swings", "Impulsive behaviour", "Depression episodes"], remedies: ["Mood stabilizers", "Antipsychotics", "Psychotherapy"] },
      "major depressive disorder": { description: "Persistently depressed mood or loss of interest.", causes: ["Brain chemistry", "Hormones", "Inherited traits"], symptoms: ["Persistent sadness", "Loss of interest", "Fatigue", "Sleep problems"], remedies: ["Antidepressants", "CBT", "Lifestyle modifications"] },
      "hepatitis": { description: "Inflammation of the liver from viruses, alcohol, or toxins.", causes: ["Hepatitis viruses (A,B,C)", "Alcohol abuse", "Toxins"], symptoms: ["Jaundice", "Fatigue", "Abdominal pain", "Nausea"], remedies: ["Antiviral medication", "Rest", "Healthy diet"] }
    };

    const SYMPTOM_MAP = {};
    Object.entries(MEDICAL_DB).forEach(([cond, info]) => {
      if (info.symptoms) info.symptoms.forEach(s => { const k = s.toLowerCase(); if (!SYMPTOM_MAP[k]) SYMPTOM_MAP[k] = []; SYMPTOM_MAP[k].push(cond); });
    });

    const chat = document.getElementById('chat'), userInput = document.getElementById('user-input'), sendBtn = document.getElementById('send-btn'), demoForm = document.getElementById('demo-form'), demoLabel = document.getElementById('demo-label'), demoInput = document.getElementById('demo-input'), demoSubmit = document.getElementById('demo-submit');
    let demoState = null;
    function ts() { return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }
    function scrollB() { chat.scrollTop = chat.scrollHeight; }
    function addMsg(html, type = 'bot') {
      const row = document.createElement('div'); row.className = 'msg-row ' + (type === 'user' ? 'user-row' : 'bot-row');
      const meta = document.createElement('div'); meta.className = 'msg-meta'; meta.textContent = (type === 'user' ? 'PATIENT' : 'MEDIBOT') + ' · ' + ts();
      const el = document.createElement('div'); el.className = 'msg ' + (type === 'user' ? 'user-msg' : type === 'info' ? 'info-msg' : 'bot-msg'); el.innerHTML = html;
      row.appendChild(meta); row.appendChild(el); chat.appendChild(row); scrollB();
    }
    function addAlert(level, label, body) {
      const row = document.createElement('div'); row.className = 'msg-row bot-row';
      const meta = document.createElement('div'); meta.className = 'msg-meta'; meta.textContent = 'MEDIBOT · ' + ts();
      const panel = document.createElement('div'); panel.className = 'alert-panel alert-' + level;
      panel.innerHTML = <div class="alert-header"><div class="dot"></div>${label}</div><div class="alert-body">${body}</div>;
      row.appendChild(meta); row.appendChild(panel); chat.appendChild(row); scrollB();
    }
    function addCard(info, condition) {
      const row = document.createElement('div'); row.className = 'msg-row bot-row';
      const meta = document.createElement('div'); meta.className = 'msg-meta'; meta.textContent = 'MEDIBOT · ' + ts();
      const card = document.createElement('div'); card.className = 'disease-card';
      let html = <div class="card-title">${condition.toUpperCase()}</div>;
      html += <div class="card-row"><div class="card-label">Desc.</div><div class="card-value">${info.description}</div></div>;
      html += <div class="card-row"><div class="card-label">Causes</div><div class="card-value">${info.causes.join(', ')}</div></div>;
      if (info.symptoms) html += <div class="card-row"><div class="card-label">Symptoms</div><div class="card-value">${info.symptoms.join(', ')}</div></div>;
      html += <div class="card-row"><div class="card-label">Remedies</div><div class="card-value">${info.remedies.join(', ')}</div></div>;
      if (info.typical_duration) html += <div class="card-row"><div class="card-label">Duration</div><div class="card-value">${info.typical_duration}</div></div>;
      card.innerHTML = html; row.appendChild(meta); row.appendChild(card); chat.appendChild(row); scrollB();
    }
    function addChips(list) {
      const row = document.createElement('div'); row.className = 'msg-row bot-row';
      const el = document.createElement('div'); el.className = 'msg bot-msg'; el.innerHTML = 'Quick picks:';
      const chips = document.createElement('div'); chips.className = 'chip-row';
      list.forEach(d => { const c = document.createElement('span'); c.className = 'chip'; c.dataset.d = d; c.textContent = d.toUpperCase(); c.addEventListener('click', () => handleInput(d)); chips.appendChild(c); });
      el.appendChild(chips); row.appendChild(el); chat.appendChild(row); scrollB();
    }
    function fuzzyScore(a, b) {
      a = a.toLowerCase(); b = b.toLowerCase(); if (a === b) return 1.0; if (!a || !b) return 0.0;
      let m = 0; const used = new Array(b.length).fill(false);
      for (const ch of a) { for (let i = 0; i < b.length; i++) { if (!used[i] && ch === b[i]) { m++; used[i] = true; break; } } }
      return (m * 2) / (a.length + b.length);
    }
    function findCondition(input) {
      for (const c of Object.keys(MEDICAL_DB)) if (input.includes(c)) return { condition: c, fuzzy: false };
      for (const c of Object.keys(MEDICAL_DB)) if (c.split(' ').every(w => input.includes(w))) return { condition: c, fuzzy: false };
      const words = input.split(/[\s,]+/);
      const hits = {};
      words.forEach(w => { if (w.length < 3) return; Object.entries(SYMPTOM_MAP).forEach(([sym, conds]) => { if (sym.includes(w) || w.includes(sym)) conds.forEach(c => { hits[c] = (hits[c] || 0) + 1; }); }); });
      if (Object.keys(hits).length > 0) { const best = Object.entries(hits).sort((a, b) => b[1] - a[1])[0]; return { condition: best[0], fuzzy: false, symptomBased: true }; }
      let bestScore = 0, bestC = null;
      for (const c of Object.keys(MEDICAL_DB)) { for (const iw of words) { if (iw.length < 3) continue; for (const cw of c.split(' ')) { const s = fuzzyScore(iw, cw); if (s > bestScore) { bestScore = s; bestC = c; } } } }
      if (bestScore >= 0.70) return { condition: bestC, fuzzy: true };
      return null;
    }
    function evaluateSeverity(age, pain) {
      if (pain >= 8) addAlert('critical', 'CRITICAL — IMMEDIATE ATTENTION REQUIRED', Pain score: ${pain}/10. Seek emergency medical care immediately.);
      else if (pain >= 5) addAlert('moderate', 'MODERATE — MEDICAL CONSULTATION ADVISED', Pain score: ${pain}/10. Schedule an appointment with your physician promptly.);
      else addAlert('mild', 'MILD — MONITOR & REST', Pain score: ${pain}/10. Discomfort is manageable. Rest well and stay hydrated.);
      if (age > 65 && pain >= 6) addAlert('info', 'AGE-RELATED ADVISORY (65+)', 'Elevated pain in patients 65+ warrants professional evaluation regardless of perceived severity.');
      else if (age < 12 && pain >= 6) addAlert('info', 'PEDIATRIC ADVISORY (<12 YRS)', 'Consult a pediatrician for patients under 12 with this pain level.');
    }
    function handleInput(text) {
      const input = text.trim().toLowerCase(); if (!input) return; addMsg(text, 'user');
      if (['hello', 'hi', 'hey', 'greetings'].some(w => input.split(/\s+/).includes(w))) { addMsg('Hello. I am MediBot. Enter a disease name or describe your symptoms.'); return; }
      if (['thanks', 'thank you', 'appreciate it'].some(w => input.includes(w))) { addMsg('Acknowledged. Stay well.'); return; }
      if (['exit', 'quit', 'bye', 'goodbye'].some(w => input.split(/\s+/).includes(w) || input === w)) { addMsg('Session ended. Wishing you good health. Goodbye.'); return; }
      const result = findCondition(input);
      if (result) {
        if (result.fuzzy) addMsg(Did you mean <strong>${result.condition.toUpperCase()}</strong>? Showing results., 'info');
        if (result.symptomBased) addMsg(Symptoms matched: <strong>${result.condition.toUpperCase()}</strong>, 'info');
        addCard(MEDICAL_DB[result.condition], result.condition);
        addAlert('info', 'DISCLAIMER', 'MediBot is informational only. If symptoms persist, consult a qualified healthcare provider.');
        setTimeout(() => { addMsg('To assess severity, please answer two brief questions.'); demoState = 'age'; demoInput.type = 'number'; demoInput.min = '1'; demoInput.max = '120'; demoInput.placeholder = 'e.g. 35'; demoLabel.textContent = 'Patient age (years):'; demoForm.style.display = 'flex'; demoInput.focus(); }, 400);
      } else {
        addMsg("No matching condition found. Try a disease name or describe symptoms like 'fever and cough'.");
        addChips(['asthma', 'migraine', 'covid 19', 'hypertension', 'diabetes type 2', 'malaria', 'eczema', 'anemia']);
      }
    }
    function handleDemoSubmit() {
      const val = parseInt(demoInput.value);
      if (demoState === 'age') {
        if (!val || val <= 0 || val > 120) { addMsg('Please enter a valid age between 1 and 120.'); return; }
        addMsg(demoInput.value, 'user'); demoState = 'pain'; demoInput.value = ''; demoInput.min = '1'; demoInput.max = '10'; demoInput.placeholder = '1–10'; demoLabel.textContent = 'Pain / discomfort level (1 = minimal, 10 = worst):'; window._age = val; scrollB();
      } else if (demoState === 'pain') {
        if (!val || val < 1 || val > 10) { addMsg('Please enter a number between 1 and 10.'); return; }
        addMsg(demoInput.value, 'user'); demoForm.style.display = 'none'; demoInput.value = ''; demoState = null;
        evaluateSeverity(window._age, val); addMsg('Assessment complete. You may query another condition or type <em>bye</em> to exit.');
      }
    }
    sendBtn.addEventListener('click', () => { if (userInput.value.trim()) { handleInput(userInput.value); userInput.value = ''; } });
    userInput.addEventListener('keydown', e => { if (e.key === 'Enter' && userInput.value.trim()) { handleInput(userInput.value); userInput.value = ''; } });
    demoSubmit.addEventListener('click', handleDemoSubmit);
    demoInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleDemoSubmit(); });

    window.onload = () => {
      initCharts(); updateAll();
      addMsg('MEDIBOT SYSTEM INITIALIZED. Database: 50 conditions. Symptom search: active. Fuzzy matching: active.');
      addMsg('Enter a disease name, describe your symptoms, or choose a quick pick below.');
      setTimeout(() => addChips(['common cold', 'influenza', 'migraine', 'diabetes type 2', 'hypertension', 'asthma', 'covid 19', 'malaria']), 300);
    };
  </script>
</body>

</html>
