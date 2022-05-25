let productArray=[
    {
        productName:'iPad',
        baseImg:'iPad產品總圖.jpg',
        basePrice:30000,
        specArray:[{
            title:'機型',
            key:'model',
            option:[
                { data: '9吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
                { data: '12.2吋顯示器', extraPrice: 10000, description: 'Liquid Retina XDR 顯示器', },
            ],
            choosed:null,
            changePrice:true,
            changeImg:true,
        },
        {
            title:'顏色',
            key:'color',
            option:[
                { data: '#777', description: '太空灰色', },
                { data: '#ddd', description: '銀色', },
                { data: '#faa', description: '玫瑰金色', },
                { data: '#0f0', description: '綠色', },
            ],
            choosed:null,
            changePrice:false,
            changeImg:true,
        },
        {
            title:'記憶體',
            key:'storage',
            option:[
                { data: '128GB', extraPrice: 0, },
                { data: '256GB', extraPrice: 1000, },
                { data: '512GB', extraPrice: 2000, },
                { data: '1TB', extraPrice: 4000, },
            ],
            choosed:null,
            changePrice:true,
            changeImg:false,
        },
        {
            title:'網路',
            key:'network',
            option:[
                { data: 'Wi-Fi', extraPrice: 0, },
                { data: 'Wi-Fi + 行動網路', extraPrice: 5000, },
            ],
            choosed:null,
            changePrice:true,
            changeImg:false,
        },
        ],
    },
    {
        productName:'iPhone',
        baseImg:'iPad產品總圖.jpg',
        basePrice:30000,
        specArray:[{
            title:'機型',
            key:'model',
            option:[
                { data: '9吋顯示器', extraPrice: 0, description: 'Liquid Retina 顯示器', },
                { data: '12.2吋顯示器', extraPrice: 10000, description: 'Liquid Retina XDR 顯示器', },
            ],
            choosed:null,
            changePrice:true,
            changeImg:true,
        },
        {
            title:'顏色',
            key:'color',
            option:[
                { data: '#777', description: '太空灰色', },
                { data: '#ddd', description: '銀色', },
                { data: '#faa', description: '玫瑰金色', },
                { data: '#0f0', description: '綠色', },
            ],
            choosed:null,
            changePrice:false,
            changeImg:true,
        },
        {
            title:'記憶體',
            key:'storage',
            option:[
                { data: '128GB', extraPrice: 0, },
                { data: '256GB', extraPrice: 1000, },
                { data: '512GB', extraPrice: 2000, },
                { data: '1TB', extraPrice: 4000, },
            ],
            choosed:null,
            changePrice:true,
            changeImg:false,
        },
        ],
    }
] 