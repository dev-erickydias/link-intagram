import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('151612'); // Your project ID
//.setKey(process.env.NEXT_PUBLIC_APPWHIT_API_KEY); // Your secret API key

const databases = new Databases(client);

const getDataBase = async () => {
  const result = await databases.listDocuments(
    '160509', // databaseId
    '66faa3a70023421195b8', // collectionId
    [], // queries (optional)
  );

  return result;
};

export default getDataBase;
