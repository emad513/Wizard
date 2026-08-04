# WIZARD

### 01 — Overview

Wizard is a group expense-splitting tool that stores receipts on-chain via 
Shelby Protocol. No spreadsheets, no "trust me" — every expense is a 
verifiable, signed transaction.

**Live:** https://wizard-apt.vercel.app/

---

### 02 — The Problem It Solves

Splitting bills with friends usually means someone's word against another's. 
Wizard puts the receipt and the transaction on-chain, so the record can't 
be quietly edited or disputed later.

---

### 03 — Core Features

```
[x] Connect wallet (Petra / Aptos Wallet Adapter)
[x] Create expense groups
[x] Add expenses with receipt upload → stored via Shelby SDK
[x] Auto-split (equal or custom) among group members
[x] Every expense = real signed on-chain transaction
[x] Per-wallet balances — "who owes what" at a glance
```

---

### 04 — Stack

```
Frontend     React + TypeScript
Wallet       @aptos-labs/wallet-adapter-react (Petra)
Storage      Shelby SDK (@shelby-protocol/sdk)
Chain        Aptos Testnet / Shelbynet
Deployment   Vercel
```

---

### 05 — Network

Built on **Shelby Protocol**

```
website   shelby.xyz
docs      docs.shelby.xyz
github    github.com/shelby
discord   discord.gg/shelbyserves
x         x.com/shelbyserves
```

---

### 06 — Author

**Emad**
`github.com/emad513` · `x.com/emad513`

---

### 07 — Status

`v1 — active development, Shelby testnet`
