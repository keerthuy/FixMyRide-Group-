import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookingRequest = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity >
          <Icon name="angle-left" size={20} color="#0075ff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Booking Request</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>User Details :</Text>

        <View style={styles.row}>
          <Icon name="user" size={18} />
          <Text style={styles.text}> Keerththanan</Text>
        </View>

        <View style={styles.row}>
          <Icon name="clock-o" size={18} />
          <Text style={styles.text}> May 4, 2025 - 10:15 AM</Text>
        </View>

        <View style={styles.row}>
          <Icon name="phone" size={18} />
          <Text style={styles.text}> 0734939421</Text>
        </View>

        <View style={styles.line} />

        <Text style={styles.label}>Service Type :</Text>
        <Text style={styles.text}>Vehicle Health Check-up</Text>

        <View style={styles.line} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.declineButton}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0075ff',
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
    marginHorizontal:20,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  acceptButton: {
    backgroundColor: '#0075ff',
    padding: 12,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  declineButton: {
    backgroundColor: '#0075ff',
    padding: 12,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
 
   
});

export default BookingRequest;

/*
// token screen
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BookingRequestScreen = () => {
  const [token, setToken] = useState('');

  const handleSend = () => {
    console.log('Token:', token);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="angle-left" size={20} color="#0075ff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Booking Request</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Type Token Number</Text>
        <TextInput
          style={styles.input}
          value={token}
          onChangeText={setToken}
          placeholder="Enter token"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingRequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap:8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0075ff',
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0075ff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
*/

/*
//service provide paid unpaid screen
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FinishedServicesScreen = () => {
  const [selectedTab, setSelectedTab] = useState('UnPaid');

  const [requests, setRequests] = useState([
    { id: '123345', status: 'UnPaid' },
    { id: '123344', status: 'UnPaid' },
    { id: '123343', status: 'UnPaid' },
    { id: '123342', status: 'Paid' },
    { id: '123341', status: 'Paid' }
  ]);

  // Filter requests based on the selected tab
  const filteredRequests = requests.filter(request => request.status === selectedTab);

  // Function to handle marking an item as "Paid"
  const handleMarkAsPaid = (id) => {
    setRequests(prevRequests =>
      prevRequests.map(request =>
        request.id === id ? { ...request, status: 'Paid' } : request
      )
    );
  };

  // Function to handle deleting an item
  const handleDelete = (id) => {
    setRequests(prevRequests => prevRequests.filter(request => request.id !== id));
  };

  return (
    <View style={styles.container}>
     
       <View style={styles.header}>
        <TouchableOpacity >
          <Icon name="angle-left" size={20} color="#0075ff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Finished Request</Text>
      </View>
      

      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setSelectedTab('UnPaid')}>
          <Text style={[styles.tab, selectedTab === 'UnPaid' && styles.activeTab]}>UnPaid</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('Paid')}>
          <Text style={[styles.tab, selectedTab === 'Paid' && styles.activeTab]}>Paid</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredRequests}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.requestId}>Request ID : {item.id}</Text>
            <View
              style={[
                styles.actionButton,
                selectedTab === 'UnPaid' ? styles.unpaidButton : styles.paidButton,
              ]}
            >
              <TouchableOpacity
                onPress={() =>
                  selectedTab === 'UnPaid'
                    ? handleMarkAsPaid(item.id)
                    : handleDelete(item.id)
                }
              >
                <Text style={styles.actionText}>
                  {selectedTab === 'UnPaid' ? 'Paid' : 'Delete'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20 },
  tabContainer: { flexDirection: 'row', marginBottom: 20 },
  tab: { fontSize: 18, marginRight: 20, color: '#858585' },
  activeTab: { color: 'black', fontWeight: 'bold', textDecorationLine: 'underline' },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15
  },
  requestId: { fontSize: 16, marginBottom: 10 },
  actionButton: {
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  unpaidButton: {
    backgroundColor: '#FFC107', // Yellow color for "Paid"
  },
  paidButton: {
    backgroundColor: '#0075ff', // Blue color for "UnPaid"
  },
  actionText: {
    fontWeight: 'bold',
    color: '#fff',
  },
   header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0075ff',
  },
});

export default FinishedServicesScreen;
*/

/*
// service provider request accept and decline screen
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ServiceRequestScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity >
        <Icon name="angle-left" size={20} color="#0075ff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Service Request</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>User Details :</Text>
          <View style={styles.detailRow}>
            <Icon name="user" size={18} />
            <Text style={styles.detailText}>Keerththanan</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="clock-o" size={18} />
            <Text style={styles.detailText}>May 4, 2025 – 10:15 AM</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="phone" size={18} />
            <Text style={styles.detailText}>0734939421</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="map-marker" size={18} />
            <Text style={styles.detailText}>Thumpalai Road, Pointpedro</Text>
          </View>

          <View style={styles.separator} />

          //Vehicle Details 
          <Text style={styles.sectionTitle}>Vehicle Details :</Text>
          <View style={styles.detailRow}>
            <Icon name="car" size={18} />
            <Text style={styles.detailText}>Vehicle Type: Car</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="exclamation-triangle" size={18} />
            <Text style={styles.detailText}>Problem Description:</Text>
          </View>
          <Text style={styles.problemText}>
            My front-left tire is flat and I don’t have a spare. Need urgent help.
          </Text>

          <View style={styles.separator} />

          <Text style={styles.requestId}>Request ID: 123345</Text>
        </View>

        // Buttons
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


    </View>
  );
};

export default ServiceRequestScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0075ff',
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 6,
  },
  detailText: {
    fontSize: 15,
    marginLeft: 10,
  },
  problemText: {
    fontSize: 15,
    marginLeft: 34,
    marginBottom: 8,
    color: '#858585',
  },
  separator: {
    borderBottomColor: '#666',
    borderBottomWidth: 0.6,
    marginVertical: 10,
  },
  requestId: {
    fontSize: 14,
    marginTop: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  Button: {
    backgroundColor: '#0075ff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
 
});
*/