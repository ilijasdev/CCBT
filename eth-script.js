const APIKEYETH = 'ckey_999c6c5421f24cd08f32bf5bfb0';

async function getTokenDataEth() {
    // Covalent API setup
    const metadataBalancesSection = document.getElementById('metadata_balances_section');
    metadataBalancesSection.style.display = "unset";

    const address = document.getElementById('address').value || '0x80E46246E765F301fCb6940906eB86760E25E079';

    const chainIdETHMainnet = '1';

    const url = new URL(`https://api.covalenthq.com/v1/${chainIdETHMainnet}/address/${address}/balances_v2/?&key=${APIKEYETH}`);

    // Get key HTML elements and reset table content
    const ul = document.getElementById('metadata');

    const tableRef = document.getElementById('tokenTableEth');
    tableRef.innerHTML =
        `<thead class="thead-dark">
            <tr>
                <th></th>
                <th>Token</th>
                <th>Symbol</th>
                <th>Contract</th>
                <th>Balance</th>
                <th>Fiat Value</th>
            </tr>
        </thead>
        <tbody>
        </tbody>`;



    // Use Fetch API to get Covalent data
    let resp = await fetch(url);
    // console.log(resp)
    let data = await resp.json();
    // console.log(data)
    let tokens = data.data.items;
    // console.log(tokens)
    let ftm_networth = 0;

    // Update wallet metadata

    for (let token of tokens) {
      ftm_networth = ftm_networth + token.quote;
      console.log(ftm_networth);
    }

    ul.innerHTML =
        `<li> Public address: ${data.data.address} </li>` +
        // `<li> Last update: ${data.data.updated_at} </li>` +
        `<li> Fiat currency: ${data.data.quote_currency} </li>`;
        // `<li> Networth (FTM Chain): ${ftm_networth.toFixed(2)} $ </li>`;

    return tokens.map(async function(token) { // Map through the results and for each run the code below
      if (token.contract_decimals > 0) {
          balance = parseInt(token.balance) / Math.pow(10, token.contract_decimals);
      } else {
          balance = parseInt(token.balance);
      }
      if (token.balance != 0) {
        token.logo_url ? token.logo_url = token.logo_url : token.logo_url = `./unknown-token.png`;
        tableRef.insertRow().innerHTML =
        `<td><img src=${token.logo_url} style='width:40px;height:40px;border-radius:50px;padding:5px;'></td>` +
        `<td> ${token.contract_name} </td>` +
        `<td> ${token.contract_ticker_symbol} </td>` +
        `<td> ${token.contract_address} </td>` +
        `<td> ${balance.toFixed(4)} </td>` +
        `<td> $${parseFloat(token.quote).toFixed(2)} </td>`;
      }
    });
}
