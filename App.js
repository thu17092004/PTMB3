import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import { Card, Avatar } from 'react-native-paper';

// Sample data for notifications
const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    timestamp: '20/08/2020, 06:00',
    iconType: 'check',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    timestamp: '20/08/2020, 06:00',
    iconType: 'users',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    timestamp: '20/08/2020, 06:00',
    iconType: 'users',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    timestamp: '20/08/2020, 06:00',
    iconType: 'users',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    timestamp: '20/08/2020, 06:00',
    iconType: 'check',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    timestamp: '20/08/2020, 06:00',
    iconType: 'check',
  },
];

// Render each notification item
const renderItem = ({ item }) => (
  <Card style={styles.card}>
    <View style={styles.itemContainer}>
      <Avatar.Icon 
        size={32} 
        icon={item.iconType === 'check' ? 'check' : 'account-group'} 
        style={styles.icon} 
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  </Card>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Title Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Thông Báo</Text>
      </View>

      {/* Notification List */}
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    backgroundColor: '#6d84b4',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    marginTop: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
  },
});
