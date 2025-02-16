#!/usr/bin/env python
# coding: utf-8

# In[30]:


client_id = "demo"
secret = "{noop}secret"
authorization_endpoint = 'http://localhost:8080/realms/demo/protocol/openid-connect/auth'


# In[31]:


from authlib.integrations.httpx_client import AsyncOAuth2Client


# In[32]:


# use header mode
client = AsyncOAuth2Client(
    client_id=client_id, client_secret=secret
)


# In[34]:


client.create_authorization_url(authorization_endpoint, redirect_uri='http://localhost:8888/callback')


# In[35]:


code = "700b3588-77f5-40b8-94a2-be36b28686d2.e79ab843-faf8-46a0-ad1c-d29e04df5c47.0188c8ff-fff2-462b-a621-b3e81247f310"


# In[36]:


token = await client.fetch_token(authorization_endpoint, code=code, redirect_uri='http://localhost:8888/callback')


# In[1]:


import base64
import json

# JWT token components
jwt_token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJlRElPWjFOOW4xTElEdkFMY2NVVkhHcUN6ZGhUemhSYkVnVEtEcmI0NlhFIn0.eyJleHAiOjE3MjM5OTU4MzQsImlhdCI6MTcyMzk5NTUzNCwiYXV0aF90aW1lIjoxNzIzOTk1NTM0LCJqdGkiOiJjNDRiOTdkYy0zMWY1LTQ5MzEtOWZlYi01MWFjZGMwY2JlMTIiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL2RlbW8iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiMTFmODQ3ZTMtNDgwMC00YTJmLTgzM2MtMWI5OWRkMGY4OTZhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZGVtbyIsInNpZCI6ImVmYjgyNTY2LWU4NjQtNDQ5Yi1iNTdiLTgzOGVkNGFhMDE1OSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1kZW1vIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InJvbGVzIGdyYW50ZWRfYXV0aG9yaXRpZXMgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZ3JhbnRlZF9hdXRob3JpdGllcyI6WyJhZG1pbiJdLCJuYW1lIjoiYWRtaW4gWCIsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIiwiZ2l2ZW5fbmFtZSI6ImFkbWluIiwiZmFtaWx5X25hbWUiOiJYIiwiZW1haWwiOiJ0ZXN0QGFkbWluLmNvbSJ9.L07yxyF7F7VyEVkJhSv5_K-hGpeDn2xyhKnzpuqeb4TezQcDUGj2B5msggnaEE6JxT4-jkpfxLRBOPDzEJA6fwxEP4SGUNjpMiXOr6V53ZNAWvDLMu9ah46npBDlye7aNc5tfWS53XrNkzDWZrdcmRZndFvGfGYGmXlv_-fJW5R2hqKy5aa2IlU34N7wLN2c9b8LF3MDhPJIJILtkBL9D-lPEcCt7g-Ccics05Tjyro6v8u8tr-i2sK_horVdbuZQbyfndC5vI5WxWnc17skVF7o9XAc_vEJZMthqo-U772KhzSzLNJtLNA2OVaGPqkl5UXBjrgau99TiS7M69ktZg"

# Split the JWT into header, payload, and signature
header_b64, payload_b64, signature_b64 = jwt_token.split('.')

# Base64 URL decode (adding padding if necessary) and parse the JSON objects
header = json.loads(base64.urlsafe_b64decode(header_b64 + '==').decode('utf-8'))
payload = json.loads(base64.urlsafe_b64decode(payload_b64 + '==').decode('utf-8'))

header, payload


# In[ ]:




