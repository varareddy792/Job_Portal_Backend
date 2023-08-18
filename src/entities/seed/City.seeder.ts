import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { City } from '../City';
import { State } from '../State';

export default class CitySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const repository = dataSource.getRepository(City);
    await repository.upsert([
      {
        title: 'Port Blair',
        stateId: 1,
        status: true,
      },
      {
        title: 'Andhra Pradesh',
        stateId: 1,
        status: true,
      },
      {
        title: 'Adoni', stateId: 1,
        status: true,
      },
      {
        title: 'Amaravati', stateId: 1,
        status: true,
      },
      {
        title: 'Anantapur', stateId: 1,
        status: true,
      },
      {
        title: 'Chandragiri', stateId: 1,
        status: true,
      },
      {
        title: 'Chittoor', stateId: 1,
        status: true,
      },
      {
        title: 'Dowlaiswaram', stateId: 1,
        status: true,
      },
      {
        title: 'Eluru', stateId: 1,
        status: true,
      },
      {
        title: 'Guntur', stateId: 1,
        status: true,
      },
      {
        title: 'Kadapa', stateId: 1,
        status: true,
      },
      {
        title: 'Kakinada', stateId: 1,
        status: true,
      },
      {
        title: 'Kurnool', stateId: 1,
        status: true,
      },
      {
        title: 'Machilipatnam', stateId: 1,
        status: true,
      },
      {
        title: 'Nagarjunakoṇḍa', stateId: 1,
        status: true,
      },
      {
        title: 'Rajahmundry', stateId: 1,
        status: true,
      },
      {
        title: 'Srikakulam', stateId: 1,
        status: true,
      },
      {
        title: 'Tirupati', stateId: 1,
        status: true,
      },
      {
        title: 'Vijayawada', stateId: 1,
        status: true,
      },
      {
        title: 'Visakhapatnam', stateId: 1,
        status: true,
      },
      {
        title: 'Vizianagaram', stateId: 1,
        status: true,
      },
      {
        title: 'Yemmiganur', stateId: 1,
        status: true,
      },
      {
        title: 'Arunachal Pradesh', stateId: 1,
        status: true,
      },
      {
        title: 'Itanagar', stateId: 1,
        status: true,
      },
      {
        title: 'Assam', stateId: 1,
        status: true,
      },
      {
        title: 'Dhuburi', stateId: 1,
        status: true,
      },
      {
        title: 'Dibrugarh', stateId: 1,
        status: true,
      },
      {
        title: 'Dispur', stateId: 1,
        status: true,
      },
      {
        title: 'Guwahati', stateId: 1,
        status: true,
      },
      {
        title: 'Jorhat', stateId: 1,
        status: true,
      },
      {
        title: 'Nagaon', stateId: 1,
        status: true,
      },
      {
        title: 'Sivasagar', stateId: 1,
        status: true,
      },
      {
        title: 'Silchar', stateId: 1,
        status: true,
      },
      {
        title: 'Tezpur', stateId: 1,
        status: true,
      },
      {
        title: 'Tinsukia', stateId: 1,
        status: true,
      },
      {
        title: 'Bihar', stateId: 1,
        status: true,
      },
      {
        title: 'Ara', stateId: 1,
        status: true,
      },
      {
        title: 'Barauni', stateId: 1,
        status: true,
      },
      {
        title: 'Begusarai', stateId: 1,
        status: true,
      },
      {
        title: 'Bettiah', stateId: 1,
        status: true,
      },
      {
        title: 'Bhagalpur', stateId: 1,
        status: true,
      },
      {
        title: 'Bihar Sharif', stateId: 1,
        status: true,
      },
      {
        title: 'Bodh Gaya', stateId: 1,
        status: true,
      },
      {
        title: 'Buxar', stateId: 1,
        status: true,
      },
      {
        title: 'Chapra', stateId: 1,
        status: true,
      },
      {
        title: 'Darbhanga', stateId: 1,
        status: true,
      },
      {
        title: 'Dehri', stateId: 1,
        status: true,
      },
      {
        title: 'Dinapur Nizamat', stateId: 1,
        status: true,
      },
      {
        title: 'Gaya', stateId: 1,
        status: true,
      },
      {
        title: 'Hajipur', stateId: 1,
        status: true,
      },
      {
        title: 'Jamalpur', stateId: 1,
        status: true,
      },
      {
        title: 'Katihar', stateId: 1,
        status: true,
      },
      {
        title: 'Madhubani', stateId: 1,
        status: true,
      },
      {
        title: 'Motihari', stateId: 1,
        status: true,
      },
      {
        title: 'Munger', stateId: 1,
        status: true,
      },
      {
        title: 'Muzaffarpur', stateId: 1,
        status: true,
      },
      {
        title: 'Patna', stateId: 1,
        status: true,
      },
      {
        title: 'Purnia', stateId: 1,
        status: true,
      },
      {
        title: 'Pusa', stateId: 1,
        status: true,
      },
      {
        title: 'Saharsa', stateId: 1,
        status: true,
      },
      {
        title: 'Samastipur', stateId: 1,
        status: true,
      },
      {
        title: 'Sasaram', stateId: 1,
        status: true,
      },
      {
        title: 'Sitamarhi', stateId: 1,
        status: true,
      },
      {
        title: 'Siwan', stateId: 1,
        status: true,
      },
      {
        title: 'Chandigarh (union territory)', stateId: 1,
        status: true,
      },
      {
        title: 'Chhattisgarh', stateId: 1,
        status: true,
      },
      {
        title: 'Ambikapur', stateId: 1,
        status: true,
      },
      {
        title: 'Bhilai', stateId: 1,
        status: true,
      },
      {
        title: 'Dhamtari', stateId: 1,
        status: true,
      },
      {
        title: 'Durg', stateId: 1,
        status: true,
      },
      {
        title: 'Jagdalpur', stateId: 1,
        status: true,
      },
      {
        title: 'Raipur', stateId: 1,
        status: true,
      },
      {
        title: 'Rajnandgaon', stateId: 1,
        status: true,
      },
      {
        title: 'Dadra and Nagar Haveli and Daman and Diu (union territory)', stateId: 1,
        status: true,
      },
      {
        title: 'Daman', stateId: 1,
        status: true,
      },
      {
        title: 'Diu', stateId: 1,
        status: true,
      },
      {
        title: 'Silvassa', stateId: 1,
        status: true,
      },
      {
        title: 'Delhi (national capital territory)', stateId: 1,
        status: true,
      },
      {
        title: 'Delhi', stateId: 1,
        status: true,
      },
      {
        title: 'New Delhi', stateId: 1,
        status: true,
      },
      {
        title: 'Goa', stateId: 1,
        status: true,
      },
      {
        title: 'Madgaon', stateId: 1,
        status: true,
      },
      {
        title: 'Panaji', stateId: 1,
        status: true,
      },
      {
        title: 'Gujarat', stateId: 1,
        status: true,
      },
      {
        title: 'Ahmadabad', stateId: 1,
        status: true,
      },
      {
        title: 'Amreli', stateId: 1,
        status: true,
      },
      {
        title: 'Bharuch', stateId: 1,
        status: true,
      },
      {
        title: 'Bhavnagar', stateId: 1,
        status: true,
      },
      {
        title: 'Bhuj', stateId: 1,
        status: true,
      },
      {
        title: 'Dwarka', stateId: 1,
        status: true,
      },
      {
        title: 'Gandhinagar', stateId: 1,
        status: true,
      },
      {
        title: 'Godhra', stateId: 1,
        status: true,
      },
      {
        title: 'Jamnagar', stateId: 1,
        status: true,
      },
      {
        title: 'Junagadh', stateId: 1,
        status: true,
      },
      {
        title: 'Kandla', stateId: 1,
        status: true,
      },
      {
        title: 'Khambhat', stateId: 1,
        status: true,
      },
      {
        title: 'Kheda', stateId: 1,
        status: true,
      },
      {
        title: 'Mahesana', stateId: 1,
        status: true,
      },
      {
        title: 'Morbi', stateId: 1,
        status: true,
      },
      {
        title: 'Nadiad', stateId: 1,
        status: true,
      },
      {
        title: 'Navsari', stateId: 1,
        status: true,
      },
      {
        title: 'Okha', stateId: 1,
        status: true,
      },
      {
        title: 'Palanpur', stateId: 1,
        status: true,
      },
      {
        title: 'Patan', stateId: 1,
        status: true,
      },
      {
        title: 'Porbandar', stateId: 1,
        status: true,
      },
      {
        title: 'Rajkot', stateId: 1,
        status: true,
      },
      {
        title: 'Surat', stateId: 1,
        status: true,
      },
      {
        title: 'Surendranagar', stateId: 1,
        status: true,
      },
      {
        title: 'Valsad', stateId: 1,
        status: true,
      },
      {
        title: 'Veraval', stateId: 1,
        status: true,
      },
      {
        title: 'Haryana', stateId: 1,
        status: true,
      },
      {
        title: 'Ambala', stateId: 1,
        status: true,
      },
      {
        title: 'Bhiwani', stateId: 1,
        status: true,
      },
      {
        title: 'Faridabad', stateId: 1,
        status: true,
      },
      {
        title: 'Firozpur Jhirka', stateId: 1,
        status: true,
      },
      {
        title: 'Gurugram', stateId: 1,
        status: true,
      },
      {
        title: 'Hansi', stateId: 1,
        status: true,
      },
      {
        title: 'Hisar', stateId: 1,
        status: true,
      },
      {
        title: 'Jind', stateId: 1,
        status: true,
      },
      {
        title: 'Kaithal', stateId: 1,
        status: true,
      },
      {
        title: 'Karnal', stateId: 1,
        status: true,
      },
      {
        title: 'Kurukshetra', stateId: 2,
        status: true,
      },
      {
        title: 'Panipat', stateId: 2,
        status: true,
      },
      {
        title: 'Pehowa', stateId: 2,
        status: true,
      },
      {
        title: 'Rewari', stateId: 2,
        status: true,
      },
      {
        title: 'Rohtak', stateId: 2,
        status: true,
      },
      {
        title: 'Sirsa', stateId: 2,
        status: true,
      },
      {
        title: 'Sonipat', stateId: 2,
        status: true,
      },
      {
        title: 'Himachal Pradesh', stateId: 2,
        status: true,
      },
      {
        title: 'Bilaspur', stateId: 2,
        status: true,
      },
      {
        title: 'Chamba', stateId: 2,
        status: true,
      },
      {
        title: 'Dalhousie', stateId: 2,
        status: true,
      },
      {
        title: 'Dharmshala', stateId: 2,
        status: true,
      },
      {
        title: 'Kangra', stateId: 2,
        status: true,
      },
      {
        title: 'Kullu', stateId: 2,
        status: true,
      },
      {
        title: 'Mandi', stateId: 2,
        status: true,
      },
      {
        title: 'Nahan', stateId: 2,
        status: true,
      },
      {
        title: 'Shimla', stateId: 2,
        status: true,
      },
      {
        title: 'Una', stateId: 2,
        status: true,
      },
      {
        title: 'Jammu and Kashmir (union territory)', stateId: 2,
        status: true,
      },
      {
        title: 'Anantnag', stateId: 2,
        status: true,
      },
      {
        title: 'Baramula', stateId: 2,
        status: true,
      },
      {
        title: 'Doda', stateId: 2,
        status: true,
      },
      {
        title: 'Gulmarg', stateId: 2,
        status: true,
      },
      {
        title: 'Jammu', stateId: 2,
        status: true,
      },
      {
        title: 'Kathua', stateId: 2,
        status: true,
      },
      {
        title: 'Punch', stateId: 2,
        status: true,
      },
      {
        title: 'Rajouri', stateId: 2,
        status: true,
      },
      {
        title: 'Srinagar', stateId: 2,
        status: true,
      },
      {
        title: 'Udhampur', stateId: 2,
        status: true,
      },
      {
        title: 'Jharkhand', stateId: 2,
        status: true,
      },
      {
        title: 'Bokaro', stateId: 2,
        status: true,
      },
      {
        title: 'Chaibasa', stateId: 2,
        status: true,
      },
      {
        title: 'Deoghar', stateId: 2,
        status: true,
      },
      {
        title: 'Dhanbad', stateId: 2,
        status: true,
      },
      {
        title: 'Dumka', stateId: 2,
        status: true,
      },
      {
        title: 'Giridih', stateId: 2,
        status: true,
      },
      {
        title: 'Hazaribag', stateId: 2,
        status: true,
      },
      {
        title: 'Jamshedpur', stateId: 2,
        status: true,
      },
      {
        title: 'Jharia', stateId: 2,
        status: true,
      },
      {
        title: 'Rajmahal', stateId: 2,
        status: true,
      },
      {
        title: 'Ranchi', stateId: 2,
        status: true,
      },
      {
        title: 'Saraikela', stateId: 2,
        status: true,
      },
      {
        title: 'Karnataka', stateId: 2,
        status: true,
      },
      {
        title: 'Badami', stateId: 2,
        status: true,
      },
      {
        title: 'Ballari', stateId: 2,
        status: true,
      },
      {
        title: 'Bengaluru', stateId: 2,
        status: true,
      },
      {
        title: 'Belagavi', stateId: 2,
        status: true,
      },
      {
        title: 'Bhadravati', stateId: 2,
        status: true,
      },
      {
        title: 'Bidar', stateId: 2,
        status: true,
      },
      {
        title: 'Chikkamagaluru', stateId: 2,
        status: true,
      },
      {
        title: 'Chitradurga', stateId: 2,
        status: true,
      },
      {
        title: 'Davangere', stateId: 2,
        status: true,
      },
      {
        title: 'Halebid', stateId: 2,
        status: true,
      },
      {
        title: 'Hassan', stateId: 2,
        status: true,
      },
      {
        title: 'Hubballi-Dharwad', stateId: 2,
        status: true,
      },
      {
        title: 'Kalaburagi', stateId: 2,
        status: true,
      },
      {
        title: 'Kolar', stateId: 2,
        status: true,
      },
      {
        title: 'Madikeri', stateId: 2,
        status: true,
      },
      {
        title: 'Mandya', stateId: 2,
        status: true,
      },
      {
        title: 'Mangaluru', stateId: 2,
        status: true,
      },
      {
        title: 'Mysuru', stateId: 2,
        status: true,
      },
      {
        title: 'Raichur', stateId: 2,
        status: true,
      },
      {
        title: 'Shivamogga', stateId: 2,
        status: true,
      },
      {
        title: 'Shravanabelagola', stateId: 2,
        status: true,
      },
      {
        title: 'Shrirangapattana', stateId: 2,
        status: true,
      },
      {
        title: 'Tumakuru', stateId: 2,
        status: true,
      },
      {
        title: 'Vijayapura', stateId: 2,
        status: true,
      },
      {
        title: 'Kerala', stateId: 2,
        status: true,
      },
      {
        title: 'Alappuzha', stateId: 2,
        status: true,
      },
      {
        title: 'Vatakara', stateId: 2,
        status: true,
      },
      {
        title: 'Idukki', stateId: 2,
        status: true,
      }

    ],
      ["id"]);

  }
}