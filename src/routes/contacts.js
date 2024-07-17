// import express from 'express';
// import { getAllContacts, getContactById } from '../services/contacts.js';

// const router = express.Router();

// router.get('/contacts', async (req, res) => {
//   try {
//     const contacts = await getAllContacts();
//     res.status(200).json({
//       status: 200,
//       message: 'Successfully found contacts!',
//       data: contacts,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error fetching contacts',
//       error: error.message,
//     });
//   }
// });

// router.get('/contacts/:contactId', async (req, res) => {
//   const { contactId } = req.params;

//   try {
//     const contact = await getContactById(contactId);
//     if (!contact) {
//       return res.status(404).json({
//         message: 'Contact not found',
//       });
//     }
//     res.status(200).json({
//       status: 200,
//       message: `Successfully found contact with id ${contactId}!`,
//       data: contact,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Error fetching contact',
//       error: error.message,
//     });
//   }
// });

// export default router;

import express from 'express';
import { getAllContacts, getContactById } from '../services/contacts.js';

const router = express.Router();

router.get('/contacts', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching contacts',
      error: error.message,
    });
  }
});

router.get('/contacts/:contactId', async (req, res) => {
  const { contactId } = req.params;

  try {
    const contact = await getContactById(contactId);
    if (!contact) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching contact',
      error: error.message,
    });
  }
});

export default router;