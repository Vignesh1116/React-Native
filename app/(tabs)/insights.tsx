import {Text, View, ScrollView} from 'react-native'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
import { useSubscriptionStore } from "@/lib/subscriptionStore";
import SubscriptionCard from "@/components/SubscriptionCard";

const SafeAreaView = styled(RNSafeAreaView);

const Insights = () => {
    const { subscriptions } = useSubscriptionStore();

    // Calculate total spend per month
    const totalMonthlySpend = subscriptions.reduce((acc, sub) => {
        if (sub.status !== 'active') return acc;
        const price = sub.price;
        // Normalize to monthly
        const monthlyCost = sub.billing === 'Yearly' ? price / 12 : price;
        return acc + monthlyCost;
    }, 0);

    // Group by category
    const categoryTotals = subscriptions.reduce((acc, sub) => {
        if (sub.status !== 'active') return acc;
        const cat = sub.category || 'Other';
        const price = sub.billing === 'Yearly' ? sub.price / 12 : sub.price;
        acc[cat] = (acc[cat] || 0) + price;
        return acc;
    }, {} as Record<string, number>);

    const categories = Object.entries(categoryTotals)
        .map(([name, total]) => ({ name, total }))
        .sort((a, b) => b.total - a.total);

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <Text className="text-3xl font-bold text-dark mb-6">Insights</Text>

                <View className="bg-card rounded-2xl p-6 mb-8 border border-gray-100">
                    <Text className="text-gray-500 font-sans-medium text-sm mb-2">Total Monthly Spend</Text>
                    <Text className="text-4xl font-sans-extrabold text-primary">${totalMonthlySpend.toFixed(2)}</Text>
                </View>

                <Text className="text-xl font-sans-bold text-dark mb-4">Spend by Category</Text>
                <View className="bg-card rounded-2xl p-5 mb-8 border border-gray-100">
                    {categories.map((cat, index) => (
                        <View key={cat.name} className={`flex-row justify-between items-center ${index !== categories.length - 1 ? 'border-b border-gray-100 pb-3 mb-3' : ''}`}>
                            <Text className="font-sans-medium text-dark text-base">{cat.name}</Text>
                            <Text className="font-sans-bold text-primary text-base">${cat.total.toFixed(2)}</Text>
                        </View>
                    ))}
                    {categories.length === 0 && (
                        <Text className="text-gray-500 font-sans-medium">No active subscriptions found.</Text>
                    )}
                </View>

                <Text className="text-xl font-sans-bold text-dark mb-4">Most Expensive</Text>
                <View className="gap-3">
                    {subscriptions
                        .filter(s => s.status === 'active')
                        .sort((a, b) => {
                            const costA = a.billing === 'Yearly' ? a.price / 12 : a.price;
                            const costB = b.billing === 'Yearly' ? b.price / 12 : b.price;
                            return costB - costA;
                        })
                        .slice(0, 3)
                        .map((sub) => (
                            <SubscriptionCard key={sub.id} {...sub} onPress={() => {}} expanded={false} />
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Insights
