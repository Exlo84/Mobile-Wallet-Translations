export default {
    lang: 'English',
    failed: 'Action failed',
    success: 'Action was successful',
    RPCCheck: 'All Systems Online',
    RPCCheck_fail: 'It appears our RPC is currently out of sync, Balances may be incorrect and TXs will not work. Functionality will be restored as soon as possible.',
    // Routes
    routes: {
        config: 'Configuration',
        settings: 'Settings',
        send: 'Send',
        txs: 'Transactions',
        receive: 'Receive',
        home: 'Home',
        supcurr: 'Supported Currencies',
        suplang: 'Supported Languages',
        keystore: 'Export Keystore',
    },
    // About Component
    about: {
        version: 'Version:',
        author: 'Authors:',
        funded: 'Funded By:',
        contact: 'Contact Us:',
        translators: 'Translators:',
    },
    // Cordova Component
    cordova: {
        signin: 'Sign In',
        error_screenlock: 'Please enable the screen lock on your device. This app cannot operate without it.',
        error_sec_storage: 'App could not setup secure storage due to unknown error. The app cannot operate without it.',
        title: 'Log In to your Wallet with Biometric Authentication',
        error_screenlock_changed: 'Looks like you changed/deleted screen lock. Please set up a screen lock and reinstall app.',
    },
    // Nav Drawer component
    nav: {
        about: 'About',
        signout: 'Sign Out',
    },
    // Manin layout
    main: {
        cache: 'Data not cached yet. Please retry when online',
    },
    // 404 Page
    error_404: {
        sorry: 'Sorry, nothing here...',
    },
    // Keystore
    keystore: {
        fail: 'Failed to Generate a Keystore, Please contact us.',
        success: 'Keystore created successfully.',
        message: 'Simply copy the generated keystore and paste in a file called keystore.json - You can then use your mobile wallet on MyEtherWallet or MyCrypto. When prompted for your password you use your app pin.',
    },
    // Home Page
    home: {
        balance: 'Wallet Balance',
        mcap: 'Market Cap:',
        volume: 'Volume (USD): $',
        mdata_error: 'Unable to retrieve requested market data',
        last_tx_in: 'Last TX in:',
        last_tx_out: 'Last TX out:',
        receive: 'Receive ETHO',
        send: 'Send ETHO',
        website: 'Ether-1 Website',
        settings: 'App Settings',
        txs: 'Transactions',
        error_getting_txs: 'Error Retrieving Transactions',
        copied: 'Copied Text',
    },
    // User Index (Wallet Setup)
    index: {
        welcome: 'Welcome to the',
        name: 'Ether-1 Mobile Wallet !',
        before: 'Before you get started, We have some important notices to get through first.',
        attention: 'Please pay close attention to the following:',
        access: 'We cannot access your wallet.',
        reset: 'We cannot reset your pin.',
        backup: 'Back up your private key.',
        client: 'You are responsible for your wallet, the app is completely client side and only uses our RPC to broadcast transactions.',
        pin: "If you disable your phones Pin, Face or Touch ID, you will lose access to your wallet and funds, that's why you should back up your private key.",
        understand: 'I understand',
        setting: "We're busy setting up your",
        wallet: 'Ether-1 Wallet',
        address: 'Below is your unique wallet address:',
        pkey: 'Below is your private key:',
        backup_pkey: 'Please remember to back your private key up!',
        got_it: "I've got it!",
        set: "You're all set, your",
        ready: 'is ready!',
        by: 'by:',
        funded: 'funded',
        developed: 'developed',
        the_wallet: 'The Ether-1 Wallet was',
        secure: 'Secure my wallet',
        encrypt: 'Encrypt your wallet:',
        wallet_name: 'Wallet Name',
        use_pin: 'Enter a Unique pin',
        confirm: 'Confirm your pin',
        required_name: 'A Wallet name is required',
        required_pin: 'A Pin is required',
        retype_pin: 'Please retype your Pin to confirm',
        no_match: 'The Pins supplied do not match',
        weak_pin: 'The chosen pin is very weak. It must be at least 10 characters long and have a number.',
        copied: 'Copied Text',
        language: 'Please select your preferred language:',
    },
    // Receive Page
    receive: {
        scan: 'Scan the QR code to receive',
        address: 'Address',
        warning: 'You can only recieve ETHO to this address!',
        current_price: 'Current ETHO Price in',
        wallet_addr: 'Wallet Address',
        copied: 'Copied Text',
    },
    // Send Page
    send: {
        recent: 'Recent:',
        no_recent: 'No Recent Transfers',
        no_contacts: 'No Contacts Added',
        send_to: 'How much would you like to send to',
        add_contact: 'Add Contact',
        name: 'Name:',
        address: 'Address:',
        save: 'Save',
        delete: 'Delete Contact',
        copy_address: 'Copy Address',
        invalid_address: 'Invalid Address',
        not_pasted: 'Unable to Paste',
        cancelled_scan: 'Cancelled Scan',
        unable_scan: 'Unable to Scan',
        scan_prompt: 'Scan Address QR Code',
        contact_added: 'Contact Added',
        enter_name: 'Enter Name:',
        enter_address: 'Enter Address:',
        exists: 'already has this address',
        copied: 'Copied Address',
        sending: 'Sending Coins',
        app_error: 'Unexpected Error, Please reinstall app',
        tx_success: 'TRANSACTION COMPLETED',
        tx_failed: 'TRANSACTION FAILED',
    },
    // Settings Page
    settings: {
        node_stats: 'Node Stats:',
        chain_id: 'ChainID:',
        Blockheight: 'Current Blockheigh:',
        version: 'Node Version:',
        sync_status: 'Sync Status:',
        app: 'App Settings',
        select_currency: 'Select your preferred currency:',
        select_language: 'Select your preferred lanaguage:',
        about: 'About Black Wallet:',
        about_etho: 'About Ether-1',
        error_offline: 'Offline',
        keystore: 'Generate Keystore',
        about_black: 'About etho.black',
        about_ncr: 'About 3rd Party Developer (newCodeRunner)',
        stats: 'Ether-1 Network Stats',
        git: 'Ether-1 Github',
    },
    // SupportedCurrencies Page
    SupportedCurrencies: {
        changed: 'Currency Changed to: ',
    },
    // SupportedLanguages
    SupportedLanguages: {
        changed: 'Language Changed to: ',
    },
    // Transactions
    txs: {
        recent_txs: 'Recent Transfers',
        no_txs: 'No Transfers made in the last 1000 Blocks.',
        retrieved: 'Retreived transactions',
        error: 'Error Retrieving Transactions',
    },
    // Currency Symbols - Do Not Change.
    etho: 'ETHO',
    zar: 'R',
    usd: '$',
    eur: '€',
    ltc: 'Ł',
    btc: '₿',
    eth: 'Ξ',
    bch: 'BCH',
    bnb: 'BNB',
    eos: 'EOS',
    xrp: 'XRP',
    xlm: 'XLM',
    aed: 'د.إ',
    ars: '$',
    aud: '$',
    bdt: '৳',
    bhd: '.د.ب',
    bmd: '$',
    brl: 'R$',
    cad: '$',
    chf: 'Fr',
    clp: '$',
    cny: '¥',
    czk: 'Kč',
    dkk: 'Kr.',
    gbp: '£',
    hkd: '$',
    huf: 'Ft',
    idr: 'Rp',
    ils: '₪',
    inr: '₹',
    jpy: '¥',
    krw: '₩',
    kwd: 'د.ك',
    lkr: 'Rs',
    mmk: 'K',
    mxn: '$',
    myr: 'RM',
    nok: 'kr',
    nzd: '$',
    php: '₱',
    pkr: '₱',
    pln: 'zł',
    rub: '₽',
    sar: '﷼‎,',
    sek: 'kr',
    sgd: '$',
    thb: '฿',
    try: '₺',
    twd: '$',
    uah: '₴',
    vef: 'Bs.',
    vnd: '₫',
    xdr: 'SDR.',
    xag: 'XAG',
    xau: 'XAU',
};
