export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Lead Data Received:", data);
    return Response.json({ success: true, message: "Lead captured" });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 400 });
  }
}