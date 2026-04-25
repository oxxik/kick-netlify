exports.handler = async function () {
  try {
    const response = await fetch("https://kick.com/api/v2/channels/vediidfc");
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        followers: data.followersCount || 0,
        isLive: !!data.livestream,
        viewers: data.livestream?.viewer_count || 0,
        title: data.livestream?.session_title || ""
      })
    };
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        followers: 0,
        isLive: false
      })
    };
  }
};