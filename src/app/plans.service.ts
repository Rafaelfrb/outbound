
export class PlansService {
    getPlans() {
        return [
            {
            name: "Free",
            price: "€0",
            description: "Always free",
            buttonText: "Get started",
            details: ["Basic Company Search Filters",
                      "200 Email Credits / Month",
                      "Contact Manager",
                      "Unlimited Quick Campaigns",
                      "Campaign analytics",
                      "Gmail & Outlook Integrations"]
        },
        {
            name: "Solo",
            price: "€0",
            description: "Per user/month, billed monthly",
            buttonText: "Buy now",
            details: ["Everything in free plus:",
                      "Pro Company Search Filters",
                      "Unlimited Email Credits",
                      "Basic Campaign Automation",
                      "Unlimited sequenced Campaigns",
                      "Call tasks (Coming Soon)",
                      "Priority Live Chat Support"]
        },
        {
            name: "Business",
            price: "€0",
            description: "Per user/month, billed monthly",
            buttonText: "Buy now",
            details: ["Everything in solo plus:",
                      "Expert Company Search Filters",
                      "Full Campaign Automation",
                      "Reveal 3 months of website visitors",
                      "Team permissions and analytics",
                      "Dedicated CS Manager",
                      "Export 1000 contacts / user / month"]
        },
        {
            name: "Enterprise",
            price: "€0",
            description: "Per user/month, billed monthly",
            buttonText: "Talk to sales",
            details: ["Everything in business plus:",
                      "Custom Data requirements",
                      "On-demand data refreshes",
                      "Custom CSV Exports",
                      "Smart Inbox",
                      "API Access",
                      "Priority Phone and Email Support"]
        },  
    ]   
}}