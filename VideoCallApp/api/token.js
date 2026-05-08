import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { roomID, userID, userName } = req.query;

  if (!roomID || !userID || !userName) {
    res.status(400).json({ error: 'roomID, userID, and userName are required' });
    return;
  }

  const appID = Number(process.env.ZEGO_APP_ID);
  const serverSecret = process.env.ZEGO_SERVER_SECRET;

  if (!appID || !serverSecret) {
    res.status(500).json({ error: 'Missing ZEGO_APP_ID or ZEGO_SERVER_SECRET environment variables' });
    return;
  }

  try {
    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to generate kit token' });
  }
}
