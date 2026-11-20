

const users = [
    {
        userId: "Tan",
        name: "Alice Tan",
        email: "alice@example.com"
    },
    {
        userId: "Lim",
        name: "Daniel Lim",
        email: "daniel@example.com"
    },
    {
        userId: "Chen",
        name: "Mei Chen",
        email: "mei@example.com"
    },
    {
        userId: "Teo",
        name: "Nora Teo",
        email: "nora@example.com"
    }
];

const plans = [
    {
        planName: "Standard",
        monthlyPrice: 18.98,
        annualPrice: 159.98,
        maxStreams: 2,
        supports4K: false
    },
    {
        planName: "Premium",
        monthlyPrice: 22.98,
        annualPrice: 189.98,
        maxStreams: 4,
        supports4K: true
    }
];

const subscriptions = [
    {
        userId: "Tan",
        planName: "Standard",
        billingCycle: "monthly",
        startDate: "10-11-2026",
        expiryDate: "10-12-2026",
        autoRenew: true
    },
    {
        userId: "Lim",
        planName: "Premium",
        billingCycle: "yearly",
        startDate: "20-07-2026",
        expiryDate: "20-07-2027",
        autoRenew: true
    },
    {
        userId: "Chen",
        planName: "Standard",
        billingCycle: "monthly",
        startDate: "12-10-2026",
        expiryDate: "12-11-2026",
        autoRenew: false
    }
];

const activeStreams = [
    {
        streamId: "ST001",
        userId: "Tan",
        deviceName: "Laptop"
    },
    {
        streamId: "ST002",
        userId: "Tan",
        deviceName: "iPhone"
    },
    {
        streamId: "ST003",
        userId: "Lim",
        deviceName: "Smart TV"
    }
];

module.exports = {
    users,
    plans,
    subscriptions,
    activeStreams
};

